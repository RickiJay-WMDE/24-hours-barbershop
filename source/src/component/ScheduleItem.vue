<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
defineProps<{
  time: Date
  includeDate?: boolean
  affects: 'everyone' | 'singers' | 'arrangers'
  title: string
  copy?: string[]
}>()
</script>

<template>
  <tr class="schedule-row">
    <td class="time header-text dim-text">
      <template v-if="includeDate">
        {{ time.toLocaleDateString(locale, { weekday: 'short', day: '2-digit', month: 'short' }) }}
      </template>
      {{ time.toLocaleTimeString(locale, { hour12: false, timeStyle: 'short' }) }}
    </td>
    <td>
      <v-container :class="`affects affects-${affects} header-text pa-0 ma-0`">
        {{ t(`schedule.${affects}`) }}
      </v-container>
      <v-container class="title header-text text-white ma-0 pa-0">{{ title }}</v-container>
      <v-container class="copy body-text dim-text ma-0 pa-0" v-if="copy">
        <v-container class="ma-0 pa-0" v-for="(c, idx) in copy" :key="idx">{{ c }}</v-container>
      </v-container>
    </td>
  </tr>
</template>

<style lang="scss">
.schedule-row {
  .time {
    text-align: right;
    padding-right: 1.5rem;
  }
  td {
    padding-bottom: 2.2rem;
  }
  .affects {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    margin-bottom: 0.2rem;
  }
  .affects-arrangers {
    color: #ff2a1a;
  }
  .affects-everyone {
    color: #a0a0b4;
  }
  .affects-singers {
    color: #0088ff;
  }
  .title {
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.04em;
    margin-bottom: 0.25rem;
  }
  .copy {
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.72;
  }
}
</style>
