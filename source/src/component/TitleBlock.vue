<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <v-container class="title-container">
    <h1 class="center header-text white-text">
      <span class="red-tint">{{ tm('title.title')[0] }}</span>
      <br />
      <span class="blue-tint">{{ tm('title.title')[1] }}</span>
    </h1>
    <v-container class="setting header-text dim-text mx-0 mb-4 pa-0">
      <div class="location ma-0 pa-0">{{ t('title.location') }}</div>
      <div class="ma-0 pa-0">&middot;</div>
      <div class="date shrink ma-0 pa-0">{{ t('title.date') }}</div>
    </v-container>
    <v-container class="tagline center body-text dim-text ma-0 pa-0">
      {{ t('title.tagline') }}
    </v-container>
  </v-container>
</template>

<style lang="scss">
.title-container {
  min-height: 100vh;
  h1 {
    font-size: clamp(4.5rem, 13vw, 10rem);
    line-height: 1.05;
    .blue-tint {
      text-shadow:
        0 0 4px #fff,
        0 0 10px #fff,
        0 0 22px #fff,
        0 0 50px rgba(255, 255, 255, 0.3),
        0 0 70px rgba(0, 136, 255, 0.5),
        0 0 120px rgba(0, 136, 255, 0.5),
        0 0 200px rgba(0, 136, 255, 0.5);
    }
    .red-tint {
      text-shadow:
        0 0 4px #fff,
        0 0 10px #fff,
        0 0 22px #fff,
        0 0 50px rgba(255, 255, 255, 0.3),
        0 0 70px #ff2a1a,
        0 0 120px #ff2a1a,
        0 0 200px rgba(255, 42, 26, 0.6);
    }
    animation: neon-flicker 12s ease-in-out infinite;
    margin-bottom: 24px;
  }
  .setting {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;
    font-weight: 400;
    font-size: clamp(0.85rem, 1.8vw, 1.1rem);
    letter-spacing: 0.22em;
    color: #a0a0b4;
    .location {
      text-align: right;
    }
    .setting {
      text-align: left;
    }
  }
}
</style>
