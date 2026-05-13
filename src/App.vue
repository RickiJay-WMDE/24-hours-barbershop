<script setup lang="ts">
import MenuBar from '@/component/MenuBar.vue'
import ParticipantGroup from '@/component/ParticipantGroup.vue'
import TheChallenge from '@/component/TheChallenge.vue'
import TheSchedule from '@/component/TheSchedule.vue'
import TitleBlock from '@/component/TitleBlock.vue'
import JoinUs from './component/JoinUs.vue'
</script>

<template>
  <v-app class="application">
    <menu-bar />
    <title-block />
    <the-challenge />
    <participant-group />
    <the-schedule />
    <join-us />
  </v-app>
</template>

<style lang="scss">
.application {
  background-color: #080809;
}
</style>
