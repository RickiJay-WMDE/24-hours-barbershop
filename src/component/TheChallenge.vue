<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container class="challenge-container">
    <v-container class="challenge-title">{{ t('challenge.title') }}</v-container>
    <v-container class="subtitle">
      {{ t('challenge.subtitle.one') }}
      <br />
      {{ t('challenge.subtitle.two') }}
    </v-container>
  </v-container>
</template>

<style scoped></style>
