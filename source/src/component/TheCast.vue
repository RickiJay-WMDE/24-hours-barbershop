<script setup lang="ts">
import useCastStore from '@/store/cast-store'
import { computed } from 'vue'

const store = useCastStore()

const people = computed(() => store.people)
</script>

<template>
  <v-container class="pa-0 cast-list">
    <v-container>Cast List</v-container>
    <v-container>
      <v-container v-for="(person, code) in people" :key="code">
        {{ person }}
      </v-container>
    </v-container>
  </v-container>
</template>

<style lang="scss"></style>
