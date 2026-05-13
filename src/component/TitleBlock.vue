<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container class="title-container">
    <h1>{{ t('title.title') }}</h1>
    <v-container class="setting mx-0 mb-4 pa-0">
      <div class="location ma-0 pa-0">{{ t('title.location') }}</div>
      <div class="ma-0 pa-0">&middot;</div>
      <div class="date shrink ma-0 pa-0">{{ t('title.date') }}</div>
    </v-container>
    <v-container class="tagline ma-0 pa-0">{{ t('title.tagline') }}</v-container>
  </v-container>
</template>

<style lang="scss">
.title-container {
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family:
      Tilt Neon,
      cursive;
    font-size: clamp(4.5rem, 13vw, 10rem);
    line-height: 1.05;
    color: #fff;
    text-shadow:
      0 0 4px #fff,
      0 0 10px #fff,
      0 0 22px #fff,
      0 0 50px rgba(255, 255, 255, 0.3),
      0 0 70px rgba(0, 136, 255, 0.5),
      0 0 120px rgba(0, 136, 255, 0.5),
      0 0 200px rgba(0, 136, 255, 0.5);
    animation: neon-flicker 12s ease-in-out infinite;
    margin-bottom: 24px;
  }
  .setting {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;
    font-family:
      Tilt Neon,
      cursive;
    font-weight: 400;
    font-size: clamp(0.85rem, 1.8vw, 1.1rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #a0a0b4;
    .location {
      text-align: right;
    }
    .setting {
      text-align: left;
    }
  }
  .tagline {
    font-family:
      Default Sans Mono,
      monospace;
    font-size: 1.05rem;
    color: #a0a0b4;
    text-align: center;
    font-weight: 400;
    line-height: 1.72;
    // letter-spacing: 0.12rem;
  }
}
</style>
