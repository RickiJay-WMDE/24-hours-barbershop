<script setup lang="ts">
import { registrationDeadline } from '@/dates'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const now = ref(Date.now())
setInterval(() => (now.value = Date.now()), 1000)

const MILLISECONDS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24
const daysUntil = computed(() =>
  Math.floor(
    (registrationDeadline.getTime() - now.value) /
      (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY),
  ),
)
const hoursUntil = computed(
  () =>
    Math.floor(
      (registrationDeadline.getTime() - now.value) /
        (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR),
    ) % HOURS_PER_DAY,
)
const minutesUntil = computed(
  () =>
    Math.floor(
      (registrationDeadline.getTime() - now.value) / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE),
    ) % MINUTES_PER_HOUR,
)
const secondsUntil = computed(
  () =>
    Math.floor((registrationDeadline.getTime() - now.value) / MILLISECONDS_PER_SECOND) %
    SECONDS_PER_MINUTE,
)
</script>

<template>
  <v-container class="countdown-container wide header-text ma-0 pa-0">
    <v-container class="countdown-box">
      <v-container class="number large-text red-text ma-0 pa-0">
        {{ daysUntil }}
      </v-container>
      <v-contaienr class="label dim-text ma-0 pa-0">{{ t('register.countdown.days') }}</v-contaienr>
    </v-container>
    <v-container class="countdown-box">
      <v-container class="number large-text red-text ma-0 pa-0">
        {{ hoursUntil }}
      </v-container>
      <v-contaienr class="label dim-text ma-0 pa-0">
        {{ t('register.countdown.hours') }}</v-contaienr
      >
    </v-container>
    <v-container class="countdown-box">
      <v-container class="number large-text red-text ma-0 pa-0">
        {{ minutesUntil }}
      </v-container>
      <v-contaienr class="label dim-text ma-0 pa-0">{{ t('register.countdown.mins') }}</v-contaienr>
    </v-container>
    <v-container class="countdown-box">
      <v-container class="number large-text red-text ma-0 pa-0">
        {{ secondsUntil }}
      </v-container>
      <v-contaienr class="label dim-text ma-0 pa-0">{{ t('register.countdown.secs') }}</v-contaienr>
    </v-container>
  </v-container>
</template>

<style lang="scss">
.countdown-container {
  margin-top: 3rem;
  display: flex;
  flex-flow: row wrap;
  .countdown-box {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: auto;
    background-color: #111014;
    border: 1px solid rgba(255, 255, 255, 0.07);
    .number,
    .label {
      width: auto;
    }
  }
  .label {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    margin-top: 0.3rem;
  }
}
</style>
