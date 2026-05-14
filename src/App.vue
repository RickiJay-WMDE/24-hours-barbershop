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
  padding: 7rem 0 6rem;
}
.center {
  text-align: center;
}
.wide {
  max-width: 100%;
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
  font-size: 1.05rem;
  line-height: 1.72;
}
.dim-text {
  color: #a0a0b4;
}
.blue-text {
  color: #0088ff;
}
.red-text {
  color: #ff2a1a;
}
.white-text {
  color: #fff;
}
.x-large-text {
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.05;
}
.large-text {
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.05;
}
</style>
