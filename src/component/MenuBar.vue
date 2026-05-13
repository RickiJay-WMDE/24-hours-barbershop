<script setup lang="ts">
import logo from '@/media/24HRS_LOGO.svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-app-bar class="menu-container ma-0">
    <a href="#">
      <v-img :src="logo" height="2.8rem" :width="95" />
    </a>
    <v-container class="menu-right shrink pa-0 ma-0">
      <v-btn variant="plain" density="compact" class="menu-item pa-0 ma-0" href="#concept">
        {{ t('menu.about') }}
      </v-btn>
      <v-btn variant="plain" density="compact" class="menu-item pa-0 ma-0" href="#participants">
        {{ t('menu.participate') }}
      </v-btn>
      <v-btn variant="plain" density="compact" class="menu-item pa-0 ma-0" href="#schedule">
        {{ t('menu.schedule') }}
      </v-btn>
      <v-btn
        variant="outlined"
        density="compact"
        class="menu-item external-menu-item"
        href="https://pretix.eu/24hrsbarbershop/2026/"
        target="_blank"
      >
        {{ t('menu.register') }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss">
.menu-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  background-color: #080809;
  .menu-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: baseline;
    gap: 2rem;
    padding: 1rem;
    .menu-item {
      font-family:
        Tilt Neon,
        cursive;
      font-size: 0.7rem;
      font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .external-menu-item {
      color: #ff2a1a;
      border-radius: 9999px;
    }
  }
}
</style>
