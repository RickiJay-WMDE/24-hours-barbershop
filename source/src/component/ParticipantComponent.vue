<script setup lang="ts">
defineProps<{
  color: 'red' | 'blue'
  side: 'left' | 'right'
  spots: string
  title: string
  copy: string[]
}>()
</script>

<template>
  <v-container :class="`participant-container participant-${color} participant-${side} ma-0`">
    <v-container :class="`spots header-text ${color}-text ma-0 pa-0`">{{ spots }}</v-container>
    <v-container class="title header-text large-text ma-0 pa-0">{{ title }}</v-container>
    <v-container class="copy-container body-text dim-text ma-0 pa-0">
      <v-container v-for="(c, idx) in copy" :key="idx" class="copy ma-0 pa-0">{{ c }}</v-container>
    </v-container>
  </v-container>
</template>

<style lang="scss">
.participant-container {
  @media (min-width: 900px) {
    max-width: 50%;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }

  padding: 3.5rem 3rem;
  border-top: 4px solid rgba(255, 255, 255, 0.07);
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  .spots {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    margin-bottom: 0.6rem;
  }
  .title {
    margin-bottom: 1.5rem;
  }
  .copy {
    margin-bottom: 0.8rem;
  }
}
.participant-blue:hover {
  border-top-color: #0088ff;
}
.participant-red:hover {
  border-top-color: #ff2a1a;
}
.participant-left {
  @media (min-width: 900px) {
    border-right: 2px solid rgba(255, 255, 255, 0.07);
  }
}
.participant-right {
  @media (min-width: 900px) {
    border-left: 2px solid rgba(255, 255, 255, 0.07);
  }
}
</style>
