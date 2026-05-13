<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ScheduleItem from './ScheduleItem.vue'

const { t, tm } = useI18n()
</script>

<template>
  <v-container class="schedule-container">
    <v-container class="schedule-title">{{ t('schedule.title') }}</v-container>
    <table>
      <tbody>
        <schedule-item
          :time="new Date(2026, 8, 11, 19)"
          affects="everyone"
          :title="t('schedule.events.gathering.title')"
          :copy="t('schedule.events.gathering.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 11, 19, 30)"
          affects="everyone"
          :title="t('schedule.events.drawing.title')"
          :copy="tm('schedule.events.drawing.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 11, 20)"
          affects="arrangers"
          :title="t('schedule.events.begin.title')"
          :copy="tm('schedule.events.begin.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12)"
          affects="singers"
          :title="t('schedule.events.tag_stop.title')"
          :copy="t('schedule.events.tag_stop.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 1)"
          affects="arrangers"
          :title="t('schedule.events.pancake_break.title')"
          :copy="tm('schedule.events.pancake_break.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 8)"
          affects="everyone"
          :title="t('schedule.events.done.title')"
          :copy="tm('schedule.events.done.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 8)"
          affects="singers"
          :title="t('schedule.events.rehearsal_start.title')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 8)"
          affects="everyone"
          :title="t('schedule.events.prep.title')"
          :copy="t('schedule.events.prep.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 9)"
          affects="everyone"
          :title="t('schedule.events.sectionals.title')"
          :copy="t('schedule.events.sectionals.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 10, 30)"
          affects="singers"
          :title="t('schedule.events.break.title')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 11)"
          affects="singers"
          :title="t('schedule.events.ensemble.title')"
          :copy="t('schedule.events.ensemble.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 12, 30)"
          affects="singers"
          :title="t('schedule.events.record.title')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 13)"
          affects="singers"
          :title="t('schedule.events.lunch.title')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 13, 45)"
          affects="singers"
          :title="t('schedule.events.interpretation.title')"
          :copy="t('schedule.events.interpretation.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 15)"
          affects="everyone"
          :title="t('schedule.events.pippin.title')"
          :copy="t('schedule.events.pippin.copy')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 17, 30)"
          affects="everyone"
          :title="t('schedule.events.break.title')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 18)"
          affects="singers"
          :title="t('schedule.events.polish.title')"
        />
        <schedule-item
          :time="new Date(2026, 8, 12, 20)"
          affects="everyone"
          :title="t('schedule.events.concert.title')"
          :copy="t('schedule.events.concert.copy')"
        />
      </tbody>
    </table>
  </v-container>
</template>

<style scoped></style>
