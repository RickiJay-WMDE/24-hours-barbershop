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
  <table class="wide countdown-container">
    <tbody>
      <tr>
        <td>
          <v-container class="countdown-box">
            <v-container class="number large-text red-text ma-0 pa-0">
              {{ daysUntil }}
            </v-container>
            <v-container class="label dim-text ma-0 pa-0">
              {{ t('register.countdown.days') }}
            </v-container>
          </v-container>
        </td>
        <td>
          <v-container class="countdown-box">
            <v-container class="number large-text red-text ma-0 pa-0">
              {{ hoursUntil }}
            </v-container>
            <v-container class="label dim-text ma-0 pa-0">
              {{ t('register.countdown.hours') }}
            </v-container>
          </v-container>
        </td>
        <td>
          <v-container class="countdown-box">
            <v-container class="number large-text red-text ma-0 pa-0">
              {{ minutesUntil }}
            </v-container>
            <v-container class="label dim-text ma-0 pa-0">
              {{ t('register.countdown.mins') }}
            </v-container></v-container
          >
        </td>
        <td>
          <v-container class="countdown-box">
            <v-container class="number large-text red-text ma-0 pa-0">
              {{ secondsUntil }}
            </v-container>
            <v-container class="label dim-text ma-0 pa-0">
              {{ t('register.countdown.secs') }}
            </v-container>
          </v-container>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.countdown-container {
  margin-top: 3rem;
  width: 100%;
  border-collapse: collapse;
  td {
    background-color: #111014;
    border: 1px solid rgba(255, 255, 255, 0.07);
  }
  .countdown-box {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: auto;
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
