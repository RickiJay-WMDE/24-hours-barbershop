<script setup lang="ts">
import DraggableCast from '@/component/DraggableCast.vue'
import PersonChip from '@/component/PersonChip.vue'
import QuartetCard from '@/component/QuartetCard.vue'
import useCastStore, { type Quartet } from '@/store/cast-store'
import { computed, ref } from 'vue'

const store = useCastStore()

const quartets = computed(() => store.quartets)
const unassigned = computed(() => store.unassigned)

const randomResults = ref<Quartet[]>([])
const randomize = () => (randomResults.value = store.randomizeQuartets())
</script>

<template>
  <v-container class="pa-0 cast-list">
    <v-container>Cast List</v-container>
    <v-container>
      <v-container>Quartets</v-container>
      <quartet-card v-for="(quartet, code) in quartets" :key="code" :quartet="quartet" />
    </v-container>
    <v-container>
      <v-container>Unassigned</v-container>
      <v-container class="unassigned-container">
        <person-chip v-for="(person, code) in unassigned" :key="code" :person="person" />
      </v-container>
    </v-container>
    <draggable-cast />
  </v-container>
  <v-container>
    <v-container>Random</v-container>
    <v-btn @click="randomize">Randomize</v-btn>
    <v-container>
      <quartet-card v-for="(quartet, idx) in randomResults" :key="idx" :quartet="quartet" />
    </v-container>
  </v-container>
</template>

<style lang="scss">
.unassigned-container {
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
}
</style>
