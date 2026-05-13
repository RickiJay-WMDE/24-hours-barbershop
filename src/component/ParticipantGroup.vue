<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Participant from './ParticipantComponent.vue'

const { t, tm } = useI18n()
</script>

<template>
  <v-container class="participants-container">
    <participant
      color="red"
      :spots="t('participants.arrangers.spots')"
      :title="t('participants.arrangers.title')"
      :copy="tm('participants.arrangers.copy')"
    />
    <participant
      color="blue"
      :spots="t('participants.singers.spots')"
      :title="t('participants.singers.title')"
      :copy="tm('participants.singers.copy')"
    />
  </v-container>
</template>

<style scoped></style>
