<script setup lang="ts">
import {
  qTypeList,
  vTypeList,
  type Person,
  type RangeType,
  type VoiceRange,
} from '@/store/cast-store'

defineProps<{ person: Person; range?: RangeType }>()

const rangeString = (rangeOptions: VoiceRange): string =>
  qTypeList
    .flatMap((qType) =>
      vTypeList.flatMap((vType) =>
        rangeOptions?.[qType]?.[vType] ? `${qType} ${vType}` : undefined,
      ),
    )
    .filter((s) => s)
    .join(', ')
</script>

<template>
  <v-tooltip :disabled="range != undefined" :text="rangeString(person.rangeOptions)">
    <template v-slot:activator="{ props }">
      <v-chip :class="`person-chip ${range ?? 'unassigned'}-chip`" v-bind="props">
        <span>{{ person.name }}</span>
        <span v-if="person.pronouns">({{ person.pronouns }})</span>
      </v-chip>
    </template>
  </v-tooltip>
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
