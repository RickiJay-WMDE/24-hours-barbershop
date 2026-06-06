import { qTypeList, type Person, type Quartet } from '@/store/cast-store'

const isValidPartialQuartet = (
  tenor: Person | undefined,
  lead: Person | undefined,
  bari: Person | undefined,
  bass: Person | undefined,
): false | Quartet => {
  for (const qType of qTypeList) {
    if (
      (!tenor || tenor.rangeOptions?.[qType].tenor) &&
      (!lead || lead.rangeOptions?.[qType].lead) &&
      (!bari || bari.rangeOptions?.[qType].bari) &&
      (!bass || bass.rangeOptions?.[qType].bass)
    ) {
      return { tenor, lead, bari, bass }
    }
  }

  return false
}

export default isValidPartialQuartet
