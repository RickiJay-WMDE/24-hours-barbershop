<script setup lang="ts">
import { confirmationDate, eventStartDate, registrationDeadline } from '@/dates'
import { useI18n } from 'vue-i18n'
import RegistryCountdown from './RegistryCountdown.vue'

const { t, locale } = useI18n()
</script>

<template>
  <v-container class="register-container">
    <v-container class="register-title-container">
      <v-container class="title-one">{{ t('register.title.pippin') }}</v-container>
      <v-container class="title-one">{{ t('register.title.berlin') }}</v-container>
    </v-container>
    <v-container class="register-copy-container">
      <v-container class="copy">{{ t('register.open') }}</v-container>
      <v-container class="copy">
        {{ t('register.capacity.limit') }}
        <strong>{{ t('register.capacity.arrangers') }}</strong>
        {{ t('register.capacity.and') }}
        <strong>{{ t('register.capacity.singers') }}</strong>
        <span>.</span>
      </v-container>
      <v-container class="copy">
        {{ t('register.capacity.confirmation') }}
      </v-container>
      <v-container class="copy">
        {{ t('register.questions') }}
        <a href="mailto:hello@24hrsbarbershop.xyz">hello@24hrsbarbershop.xyz</a>
      </v-container>
      <v-container class="fee">
        {{ t('register.fee.fee') }}
        <strong>40 &euro;</strong>
        {{ t('register.fee.per') }}
      </v-container>
    </v-container>
    <v-btn href="https://pretix.eu/24hrsbarbershop/2026/" target="_blank">
      {{ t('register.now') }}
    </v-btn>
    <registry-countdown />
    <v-container class="date-container">
      <v-container class="date">
        <v-container class="label">{{ t('register.dates.deadline') }}</v-container>
        <v-container class="value">
          {{ registrationDeadline.toLocaleDateString(locale) }}
        </v-container>
      </v-container>
      <v-container class="date">
        <v-container class="label">{{ t('register.dates.confirm') }}</v-container>
        <v-container class="value">
          {{ t('register.dates.by') }}
          {{ confirmationDate.toLocaleDateString(locale) }}
        </v-container>
      </v-container>
      <v-container class="date">
        <v-container class="label">{{ t('register.dates.event') }}</v-container>
        <v-container class="value">
          {{ eventStartDate.toLocaleDateString(locale) }}
        </v-container>
      </v-container>
    </v-container>
  </v-container>
</template>

<style scoped></style>
