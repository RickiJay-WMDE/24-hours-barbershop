<script setup lang="ts">
import DraggableCast from '@/component/cast-list/DraggableCast.vue'
import QuartetCard from '@/component/cast-list/QuartetCard.vue'
import useCastStore from '@/store/cast-store'
import { computed } from 'vue'

const store = useCastStore()

const quartets = computed(() => store.quartets)
</script>

<template>
  <v-container class="pa-0 cast-list">
    <h2>Cast List</h2>
    <div>
      <h3>Quartets</h3>
      <quartet-card v-for="(quartet, code) in quartets" :key="code" :quartet="quartet" />
    </div>
    <draggable-cast />
  </v-container>
</template>

<style lang="scss"></style>
