<script setup lang="ts">
import type { Person, RangeType } from '@/store/cast-store'

defineProps<{ person: Person; range?: RangeType }>()
</script>

<template>
  <v-chip :class="`person-chip ${range ?? 'unassigned'}-chip`">
    <span>
      {{ person.name }}
    </span>
    <template v-if="person.pronouns">
      <span>
        <span>(</span>
        <span>{{ person.pronouns }}</span>
        <span>)</span>
      </span>
    </template>
  </v-chip>
</template>

<style lang="scss">
.person-chip {
  .v-chip__content {
    display: flex-inline;
    flex-flow: row nowrap;
    gap: 6px;
  }
}
.unassigned-chip {
  background-color: gray;
}
.tenor-chip {
  background-color: green;
}
.lead-chip {
  background-color: red;
}
.bari-chip {
  background-color: goldenrod;
}
.bass-chip {
  background-color: navy;
}
</style>
