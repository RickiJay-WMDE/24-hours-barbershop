<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container class="title-container">
    <h1>{{ t('title.title') }}</h1>
    <v-container class="setting">
      <v-container class="location">{{ t('title.location') }}</v-container>
      <v-container class="date">{{ t('title.date') }}</v-container>
    </v-container>
    <v-container class="tagline">{{ t('title.tagline') }}</v-container>
  </v-container>
</template>

<style scoped></style>
