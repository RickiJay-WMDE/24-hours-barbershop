<script setup lang="ts">
defineProps<{ color: 'red' | 'blue'; spots: string; title: string; copy: string[] }>()
</script>

<template>
  <v-container class="participant-container">
    <v-container class="spots">{{ spots }}</v-container>
    <v-container class="title">{{ title }}</v-container>
    <v-container class="copy-container">
      <v-container v-for="(c, idx) in copy" :key="idx">{{ c }}</v-container>
    </v-container>
  </v-container>
</template>

<style scoped></style>
