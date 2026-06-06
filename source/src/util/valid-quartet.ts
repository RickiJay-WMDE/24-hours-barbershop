import type { Person, Quartet } from '@/store/cast-store'
import isValidPartialQuartet from '@/util/valid-partial-quartet'

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
              .map(
                (bsIdx): Quartet => ({
                  tenor: candidates[tIdx],
                  lead: candidates[lIdx],
                  bari: candidates[brIdx],
                  bass: candidates[bsIdx],
                }),
              ),
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
    if (isValidPartialQuartet(pQuartet.tenor, pQuartet.lead, pQuartet.bari, pQuartet.bass)) {
      return pQuartet
    }
  }

  return false
}

export default isValidQuartet
