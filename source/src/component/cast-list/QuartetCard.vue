<script setup lang="ts">
import PersonChip from '@/component/cast-list/PersonChip.vue'
import type { Quartet } from '@/store/cast-store'

defineProps<{ quartet: Quartet }>()
</script>

<template>
  <v-card class="quartet">
    <v-container class="mx-0 pa-0">
      Tenor:
      <person-chip :person="quartet.tenor" range="tenor" />
    </v-container>
    <v-container class="mx-0 pa-0">
      Lead:
      <person-chip :person="quartet.lead" range="lead" />
    </v-container>
    <v-container class="mx-0 pa-0">
      Bari:
      <person-chip :person="quartet.bari" range="bari" />
    </v-container>
    <v-container class="mx-0 pa-0">
      Bass: <person-chip :person="quartet.bass" range="bass" />
    </v-container>
  </v-card>
</template>

<style lang="scss">
.quartet {
  padding: 8px;
  border-radius: 16px;
  display: inline-flex;
  flex-flow: column nowrap;
  gap: 4px;
  background-color: grey;
}
</style>
