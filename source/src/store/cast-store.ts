import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

type SubRange = { tenor: boolean; lead: boolean; bari: boolean; bass: boolean }
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

const isValidQuartet = (candidates: Person[]): false | Quartet => {
  if (candidates.length != 4) {
    console.error('Wrong Number', candidates)
    return false
  }

  const indices = [...candidates.keys()]

  for (const tenor_idx of indices) {
    for (const lead_idx of indices.filter((idx) => idx != tenor_idx)) {
      for (const bari_idx of indices.filter((idx) => idx != tenor_idx && idx != lead_idx)) {
        for (const bass_idx of indices.filter(
          (idx) => idx != tenor_idx && idx != lead_idx && idx != bari_idx,
        )) {
          if (
            candidates[tenor_idx] &&
            candidates[lead_idx] &&
            candidates[bari_idx] &&
            candidates[bass_idx]
          ) {
            if (
              (candidates[tenor_idx].rangeOptions.lower.tenor &&
                candidates[lead_idx].rangeOptions.lower.lead &&
                candidates[bari_idx].rangeOptions.lower.bari &&
                candidates[bass_idx].rangeOptions.lower.bass) ||
              (candidates[tenor_idx].rangeOptions.mixed.tenor &&
                candidates[lead_idx].rangeOptions.mixed.lead &&
                candidates[bari_idx].rangeOptions.mixed.bari &&
                candidates[bass_idx].rangeOptions.mixed.bass) ||
              (candidates[tenor_idx].rangeOptions.upper.tenor &&
                candidates[lead_idx].rangeOptions.upper.lead &&
                candidates[bari_idx].rangeOptions.upper.bari &&
                candidates[bass_idx].rangeOptions.upper.bass)
            ) {
              return {
                tenor: candidates[tenor_idx],
                lead: candidates[lead_idx],
                bari: candidates[bari_idx],
                bass: candidates[bass_idx],
              }
            }
          }
        }
      }
    }
  }

  return false
}

const useCastStore = defineStore('cast-store', () => {
  const people = ref<Record<string, Person>>(getStoredPeople() ?? {})
  watch(people, () => {
    console.log('Storing')
    localStorage.setItem(SINGERS_LOCAL_STORAGE_KEY, JSON.stringify(people.value))
    console.log('Stored', people.value)
  })

  const setPerson = (person: Person) => {
    console.log('Setting', person)
    people.value = { ...people.value, [person.code]: person }
    console.log('People', people.value)
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
    const idxs = available.map((_, idx) => idx).filter((idx) => idx % 4 == 0)

    let potentialQuartets: Quartet[] = []

    let attempt = 0

    let allWorks = available.length < 4
    while (attempt < 100 && !allWorks) {
      console.log('Attempt', attempt)
      available = available
        .map((v) => ({ sort: Math.random(), value: v }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
      console.log(
        'Order',
        available.map((p) => p.code),
      )

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
