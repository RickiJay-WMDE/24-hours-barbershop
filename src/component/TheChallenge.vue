<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container class="challenge-container" name="concept">
    <v-container class="challenge-title center header-text red-text">
      {{ t('challenge.title') }}
    </v-container>
    <v-container class="subtitle center header-text x-large-text white-text">
      {{ t('challenge.subtitle.one') }}
      <br />
      {{ t('challenge.subtitle.two') }}
    </v-container>
    <v-container class="challenge-copy center body-text dim-text">
      {{ t('challenge.copy') }}
    </v-container>
  </v-container>
</template>

<style lang="scss">
.challenge-container {
  .challenge-title {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.25em;
  }
}
</style>
