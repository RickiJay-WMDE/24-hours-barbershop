<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
defineProps<{
  time: Date
  includeDate?: boolean
  affects: 'everyone' | 'singers' | 'arrangers'
  title: string
  copy?: string | string[]
}>()
</script>

<template>
  <tr class="schedule-row">
    <td>
      {{ time }}
    </td>
    <td>
      <v-container :class="`affects affects-${affects}`">
        {{ t(`schedule.${affects}`) }}
      </v-container>
      <v-container class="title">{{ title }}</v-container>
      <v-container class="copy" v-if="copy">
        {{ copy }}
      </v-container>
    </td>
  </tr>
</template>

<style scoped></style>
