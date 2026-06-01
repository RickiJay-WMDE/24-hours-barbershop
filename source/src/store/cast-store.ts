import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export type RangeType = 'tenor' | 'lead' | 'bari' | 'bass'
export const vTypeList: RangeType[] = ['tenor', 'lead', 'bari', 'bass']
type SubRange = { tenor: boolean; lead: boolean; bari: boolean; bass: boolean }
export type QuartetType = 'upper' | 'mixed' | 'lower'
export const qTypeList: QuartetType[] = ['lower', 'mixed', 'upper']
export type VoiceRange = { upper: SubRange; mixed: SubRange; lower: SubRange }

export type Person = {
  code: string
  name: string
  pronouns?: string
  rangeOptions: VoiceRange
}

export type Quartet = {
  tenor: Person | undefined
  lead: Person | undefined
  bari: Person | undefined
  bass: Person | undefined
}

const SINGERS_LOCAL_STORAGE_KEY = 'singers'

const getStoredPeople = (): Record<string, Person> | undefined => {
  const storedPeopleRaw = localStorage.getItem(SINGERS_LOCAL_STORAGE_KEY)
  if (storedPeopleRaw) {
    return JSON.parse(storedPeopleRaw) as Record<string, Person>
  }
}

const QUARTETS_LOCAL_STORAGE_KEY = 'quartets'

const getStoredQuartets = (): Record<string, Quartet> | undefined => {
  const storedQuartetsRaw = localStorage.getItem(QUARTETS_LOCAL_STORAGE_KEY)
  if (storedQuartetsRaw) {
    return JSON.parse(storedQuartetsRaw) as Record<string, Quartet>
  }
}

const allCombinations = (candidates: Person[]): Quartet[] => {
  const indices = [...candidates.keys()]

  return indices.flatMap((tIdx) =>
    indices
      .filter((i) => i != tIdx)
      .flatMap((lIdx) =>
        indices
          .filter((i) => i != tIdx && i != lIdx)
          .flatMap((brIdx) =>
            indices
              .filter((i) => i != tIdx && i != lIdx && i != brIdx)
              .map((bsIdx) => ({
                tenor: candidates[tIdx],
                lead: candidates[lIdx],
                bari: candidates[brIdx],
                bass: candidates[bsIdx],
              })),
          ),
      ),
  )
}

const isValidQuartet = (candidates: Person[]): false | Quartet => {
  if (candidates.length != 4) {
    console.error('Wrong Number', candidates)
    return false
  }

  for (const pQuartet of allCombinations(candidates)) {
    for (const qType of qTypeList) {
      if (
        pQuartet.tenor?.rangeOptions?.[qType].tenor &&
        pQuartet.lead?.rangeOptions?.[qType].lead &&
        pQuartet.bari?.rangeOptions?.[qType].bari &&
        pQuartet.bass?.rangeOptions?.[qType].bass
      ) {
        return pQuartet
      }
    }
  }

  return false
}

const useCastStore = defineStore('cast-store', () => {
  const people = ref<Record<string, Person>>(getStoredPeople() ?? {})
  watch(people, () => {
    localStorage.setItem(SINGERS_LOCAL_STORAGE_KEY, JSON.stringify(people.value))
  })

  const setPerson = (person: Person) => {
    people.value = { ...people.value, [person.code]: person }
  }

  const quartets = ref<Record<string, Quartet>>(getStoredQuartets() ?? {})
  watch(quartets, () =>
    localStorage.setItem(QUARTETS_LOCAL_STORAGE_KEY, JSON.stringify(quartets.value)),
  )

  const unassigned = computed(() => {
    console.log('Computing Unassigned')
    const available: Person[] = []

    for (const singer_code in people.value) {
      let found = false
      for (const quartet_code in quartets.value) {
        const q = quartets.value[quartet_code]
        found = found || q?.tenor?.code == singer_code
        found = found || q?.lead?.code == singer_code
        found = found || q?.bari?.code == singer_code
        found = found || q?.bass?.code == singer_code
      }
      if (!found && people.value[singer_code]) {
        available.push(people.value[singer_code])
      }
    }
    return available
  })

  const randomizeQuartets = () => {
    let available = unassigned.value
    const idxs = available
      .map((_, idx) => idx)
      .filter((idx) => idx % 4 == 0 && idx < available.length - 4)

    let potentialQuartets: Quartet[] = []

    let attempt = 0

    let allWorks = available.length < 4
    while (attempt < 100 && !allWorks) {
      available = available
        .map((v) => ({ sort: Math.random(), value: v }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

      allWorks = true

      idxs.forEach((idx) => {
        const potential = isValidQuartet(available.slice(idx, idx + 4))

        if (potential) {
          potentialQuartets.push(potential)
        } else {
          allWorks = false
        }
      })

      if (!allWorks) {
        potentialQuartets = []
      }

      attempt += 1
    }
    return potentialQuartets
  }

  return { people, setPerson, quartets, unassigned, randomizeQuartets }
})

export default useCastStore
