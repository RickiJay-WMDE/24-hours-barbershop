<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const registrationClose = new Date(2026, 4, 24)
const MILLISECONDS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24
const daysUntil = computed(() =>
  Math.floor(
    (registrationClose.getTime() - Date.now()) /
      (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY),
  ),
)
const hoursUntil = computed(
  () =>
    Math.floor(
      (registrationClose.getTime() - Date.now()) /
        (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR),
    ) % HOURS_PER_DAY,
)
const minutesUntil = computed(
  () =>
    Math.floor(
      (registrationClose.getTime() - Date.now()) / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE),
    ) % MINUTES_PER_HOUR,
)
const secondsUntil = computed(
  () =>
    Math.floor((registrationClose.getTime() - Date.now()) / MILLISECONDS_PER_SECOND) %
    SECONDS_PER_MINUTE,
)
</script>

<template>
  <v-container class="countdown-container">
    <v-container class="countdown-box">
      <v-container class="number">
        {{ daysUntil }}
      </v-container>
      <v-contaienr class="label">{{ t('register.countdown.days') }}</v-contaienr>
    </v-container>
    <v-container class="countdown-box">
      <v-container class="number">
        {{ hoursUntil }}
      </v-container>
      <v-contaienr class="label">{{ t('register.countdown.hours') }}</v-contaienr>
    </v-container>
    <v-container class="countdown-box">
      <v-container class="number">
        {{ minutesUntil }}
      </v-container>
      <v-contaienr class="label">{{ t('register.countdown.mins') }}</v-contaienr>
    </v-container>
    <v-container class="countdown-box">
      <v-container class="number">
        {{ secondsUntil }}
      </v-container>
      <v-contaienr class="label">{{ t('register.countdown.secs') }}</v-contaienr>
    </v-container>
  </v-container>
</template>

<style scoped></style>
