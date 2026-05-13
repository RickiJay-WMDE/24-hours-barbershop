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
  padding: 7rem 2rem 6rem;
}
.center {
  text-align: center;
}
.header-text {
  text-transform: uppercase;
  font-family:
    Tilt Neon,
    cursive;
}
.body-text {
  font-family:
    Default Sans Mono,
    monospace;
  font-weight: 400;
}
.dim-text {
  color: #a0a0b4;
}
.red-text {
  color: #ff2a1a;
}
.white-text {
  color: #fff;
}
.large-text {
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.05;
}
</style>
