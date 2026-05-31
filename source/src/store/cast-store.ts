import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

type SubRange = { tenor: boolean; lead: boolean; bari: boolean; bass: boolean }
export type VoiceRange = { upper: SubRange; mixed: SubRange; lower: SubRange }

export type Person = {
  code: string
  name: string
  pronouns?: string
  rangeOptions: VoiceRange
}

const LOCAL_STORAGE_KEY = 'singers'

const getStoredPeople = (): Record<string, Person> | undefined => {
  const storedPeopleRaw = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (storedPeopleRaw) {
    return JSON.parse(storedPeopleRaw) as Record<string, Person>
  }
}

const useCastStore = defineStore('cast-store', () => {
  const people = ref<Record<string, Person>>(getStoredPeople() ?? {})
  watch(people, () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(people)))

  const setPerson = (person: Person) => (people.value[person.code] = person)

  return { people, setPerson }
})

export default useCastStore
