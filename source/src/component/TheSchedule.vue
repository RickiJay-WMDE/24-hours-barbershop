<script setup lang="ts">
import ScheduleItem from '@/component/ScheduleItem.vue'
import { eventStartDate } from '@/dates.ts'
import { addHours, addMinutes } from 'date-fns'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <a name="schedule"></a>
  <v-container class="schedule-container wide ma-0 px-8">
    <v-container class="schedule-title ma-0 pa-0 header-text x-large-text">
      {{ t('schedule.title') }}
    </v-container>
    <table class="schedule-table">
      <tbody>
        <schedule-item
          include-date
          :time="eventStartDate"
          affects="everyone"
          :title="t('schedule.events.gathering.title')"
          :copy="tm('schedule.events.gathering.copy')"
        />
        <schedule-item
          :time="addMinutes(eventStartDate, 30)"
          affects="everyone"
          :title="t('schedule.events.drawing.title')"
          :copy="tm('schedule.events.drawing.copy')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 1)"
          affects="arrangers"
          :title="t('schedule.events.begin.title')"
          :copy="tm('schedule.events.begin.copy')"
        />
        <schedule-item
          include-date
          :time="addHours(eventStartDate, 5)"
          affects="singers"
          :title="t('schedule.events.tag_stop.title')"
          :copy="tm('schedule.events.tag_stop.copy')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 6)"
          affects="arrangers"
          :title="t('schedule.events.pancake_break.title')"
          :copy="tm('schedule.events.pancake_break.copy')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 13)"
          affects="everyone"
          :title="t('schedule.events.done.title')"
          :copy="tm('schedule.events.done.copy')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 13)"
          affects="singers"
          :title="t('schedule.events.rehearsal_start.title')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 13)"
          affects="everyone"
          :title="t('schedule.events.prep.title')"
          :copy="tm('schedule.events.prep.copy')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 14)"
          affects="everyone"
          :title="t('schedule.events.sectionals.title')"
          :copy="tm('schedule.events.sectionals.copy')"
        />
        <schedule-item
          :time="addMinutes(addHours(eventStartDate, 15), 30)"
          affects="singers"
          :title="t('schedule.events.break.title')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 16)"
          affects="singers"
          :title="t('schedule.events.ensemble.title')"
          :copy="tm('schedule.events.ensemble.copy')"
        />
        <schedule-item
          :time="addMinutes(addHours(eventStartDate, 17), 30)"
          affects="singers"
          :title="t('schedule.events.record.title')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 18)"
          affects="singers"
          :title="t('schedule.events.lunch.title')"
        />
        <schedule-item
          :time="addMinutes(addHours(eventStartDate, 18), 45)"
          affects="singers"
          :title="t('schedule.events.interpretation.title')"
          :copy="tm('schedule.events.interpretation.copy')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 20)"
          affects="everyone"
          :title="t('schedule.events.pippin.title')"
          :copy="tm('schedule.events.pippin.copy')"
        />
        <schedule-item
          :time="addMinutes(addHours(eventStartDate, 22), 30)"
          affects="everyone"
          :title="t('schedule.events.break.title')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 23)"
          affects="singers"
          :title="t('schedule.events.polish.title')"
        />
        <schedule-item
          :time="addHours(eventStartDate, 25)"
          affects="everyone"
          :title="t('schedule.events.concert.title')"
          :copy="tm('schedule.events.concert.copy')"
        />
      </tbody>
    </table>
  </v-container>
</template>

<style lang="scss">
.schedule-container {
  background-color: #111014;
  padding-top: 7rem;
  padding-bottom: 7rem;
  .schedule-title {
    margin-bottom: 3.5rem;
  }
  table {
    width: 100%;
  }
}
</style>
