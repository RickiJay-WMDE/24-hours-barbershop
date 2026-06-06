import { qTypeList, type Person, type Quartet } from '@/store/cast-store'

const isValidPartialQuartet = (
  tenor: Person | undefined,
  lead: Person | undefined,
  bari: Person | undefined,
  bass: Person | undefined,
): undefined | false | Quartet => {
  if (!tenor && !lead && !bari && !bass) {
    return
  }

  for (const qType of qTypeList) {
    if (
      (!tenor || tenor.rangeOptions?.[qType].tenor) &&
      (!lead || lead.rangeOptions?.[qType].lead) &&
      (!bari || bari.rangeOptions?.[qType].bari) &&
      (!bass || bass.rangeOptions?.[qType].bass)
    ) {
      return { tenor, lead, bari, bass, range: qType }
    }
  }

  return false
}

export default isValidPartialQuartet
