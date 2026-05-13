<script setup lang="ts">
import logo from '@/media/24HRS_LOGO.svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container class="menu-container">
    <v-container class="logo">
      <v-img :src="logo" />
    </v-container>
    <v-container class="menu-right">
      <v-btn class="internal-menu-item" href="#concept">{{ t('menu.about') }}</v-btn>
      <v-btn class="internal-menu-item" href="#participants">{{ t('menu.participate') }}</v-btn>
      <v-btn class="internal-menu-item" href="#schedule">{{ t('menu.schedule') }}</v-btn>
      <v-btn
        class="external-menu-item"
        href="https://pretix.eu/24hrsbarbershop/2026/"
        target="_blank"
      >
        {{ t('menu.register') }}
      </v-btn>
    </v-container>
  </v-container>
</template>

<style scoped></style>
