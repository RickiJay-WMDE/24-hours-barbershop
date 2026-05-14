<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Participant from './ParticipantComponent.vue'

const { t, tm } = useI18n()
</script>

<template>
  <v-container class="participants-container wide pa-0 ma-0">
    <participant
      side="left"
      color="blue"
      :spots="t('participants.arrangers.spots')"
      :title="t('participants.arrangers.title')"
      :copy="tm('participants.arrangers.copy')"
    />
    <participant
      side="right"
      color="red"
      :spots="t('participants.singers.spots')"
      :title="t('participants.singers.title')"
      :copy="tm('participants.singers.copy')"
    />
  </v-container>
</template>

<style lang="scss">
.participants-container {
  border-bottom: 4px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-flow: row wrap;
}
</style>
