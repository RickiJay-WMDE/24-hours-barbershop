<script setup lang="ts">
import useCastStore, { type Person } from '@/store/cast-store'
import isValidPartialQuartet from '@/util/valid-partial-quartet'

const { tenor, lead, bari, bass, resetUnassigned } = defineProps<{
  tenor: Person | undefined
  lead: Person | undefined
  bari: Person | undefined
  bass: Person | undefined
  resetUnassigned: () => void
}>()

const store = useCastStore()

const assignQuartet = () => {
  if (tenor && lead && bari && bass) {
    store.setQuartet({ tenor, lead, bari, bass })
    resetUnassigned()
  }
}
</script>

<template>
  <v-btn
    v-if="tenor || lead || bari || bass"
    :disabled="
      !(isValidPartialQuartet(tenor, lead, bari, bass) && tenor && lead && bari && bass && true)
    "
    @click="assignQuartet"
  >
    <template v-if="isValidPartialQuartet(tenor, lead, bari, bass)">
      <template v-if="tenor && lead && bari && bass"> Assign Quartet </template>
      <template v-else>Valid Partial Quartet!</template>
    </template>
    <template v-else-if="isValidPartialQuartet(undefined, lead, bari, bass)">
      Change Tenor
    </template>
    <template v-else-if="isValidPartialQuartet(tenor, undefined, bari, bass)">
      Change Lead
    </template>
    <template v-else-if="isValidPartialQuartet(tenor, lead, undefined, bass)">
      Change Bari
    </template>
    <template v-else-if="isValidPartialQuartet(tenor, lead, bari, undefined)">
      Change Bass
    </template>
    <template v-else-if="tenor || lead || bari || bass"> Invalid Combo </template>
  </v-btn>
</template>

<style lang="scss"></style>
