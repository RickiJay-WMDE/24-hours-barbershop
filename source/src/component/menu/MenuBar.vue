<script setup lang="ts">
import LangMenu from '@/component/menu/LangMenu.vue'
import logo from '@/media/24HRS_LOGO.svg'
import { mdiMenu } from '@mdi/js'
import { useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { width } = useWindowSize()
</script>

<template>
  <template v-if="width >= 750">
    <v-app-bar class="menu-container ma-0">
      <a href="#">
        <v-img :src="logo" height="2.8rem" :width="95" />
      </a>
      <v-container class="menu-right shrink pa-0 ma-0">
        <v-btn
          variant="plain"
          density="compact"
          class="menu-item header-text pa-0 ma-0"
          href="#concept"
        >
          {{ t('menu.about') }}
        </v-btn>
        <v-btn
          variant="plain"
          density="compact"
          class="menu-item header-text pa-0 ma-0"
          href="#participants"
        >
          {{ t('menu.participate') }}
        </v-btn>
        <v-btn
          variant="plain"
          density="compact"
          class="menu-item header-text pa-0 ma-0"
          href="#schedule"
        >
          {{ t('menu.schedule') }}
        </v-btn>
        <lang-menu />
        <v-btn
          disabled
          variant="outlined"
          density="compact"
          class="menu-item rounded header-text red-text"
          href="https://pretix.eu/24hrsbarbershop/2026/"
          target="_blank"
        >
          {{ t('menu.register') }}
        </v-btn>
      </v-container>
    </v-app-bar>
  </template>
  <template v-else>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-btn variant="plain" class="dim-text hamburger-menu" v-bind="props" :icon="mdiMenu" />
      </template>
      <v-list class="menu-list">
        <v-list-item href="#">
          <v-img :src="logo" height="2.8rem" :width="95" />
        </v-list-item>
        <v-list-item :title="t('menu.about')" href="#concept" class="header-text menu-item" />
        <v-list-item
          :title="t('menu.participate')"
          href="#participants"
          class="header-text menu-item"
        />
        <v-list-item :title="t('menu.schedule')" href="#schedule" class="header-text menu-item" />
        <v-list-item><lang-menu /></v-list-item>
        <v-list-item v-if="false" href="https://pretix.eu/24hrsbarbershop/2026/" target="_blank">
          <v-btn
            variant="outlined"
            density="compact"
            class="menu-item rounded header-text red-text"
          >
            {{ t('menu.register') }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
</template>

<style lang="scss">
.hamburger-menu {
  position: fixed;
  top: 0;
  left: 0;
}
.menu-list {
  background: #111014;
}
.menu-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  background-color: rgba(8, 8, 9, 0.93);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  .menu-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: baseline;
    gap: 2rem;
    padding: 1rem;
    .menu-item {
      font-size: 0.7rem;
      font-weight: 400;
      letter-spacing: 0.12em;
    }
  }
}
</style>
