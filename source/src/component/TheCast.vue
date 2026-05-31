<script setup lang="ts">
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
      <v-container v-for="(quartet, code) in quartets" :key="code">
        {{ quartet }}
      </v-container>
    </v-container>
    <v-container>
      <v-container>Unassigned</v-container>
      <v-container v-for="(person, code) in unassigned" :key="code">
        {{ person }}
      </v-container>
    </v-container>
  </v-container>
  <v-container>
    <v-container>Random</v-container>
    <v-btn @click="randomize">Randomize</v-btn>
    <v-container>
      {{ randomResults }}
    </v-container>
  </v-container>
</template>

<style lang="scss"></style>
