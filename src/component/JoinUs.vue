<script setup lang="ts">
import { confirmationDate, eventStartDate, registrationDeadline } from '@/dates'
import { mdiArrowRight } from '@mdi/js'
import { useI18n } from 'vue-i18n'
import RegistryCountdown from './RegistryCountdown.vue'

const { t, locale } = useI18n()
</script>

<template>
  <v-container class="register-container wide ma-0 pa-8">
    <v-container class="register-title-container wide ma-0 pa-0">
      <v-container class="header-text white-text x-large-text ma-0 pa-0">
        {{ t('register.title.pippin') }}
      </v-container>
      <v-container class="header-text red-text x-large-text ma-0 pa-0">
        {{ t('register.title.berlin') }}
      </v-container>
    </v-container>
    <v-container class="register-copy-container wide body-text dim-text ma-0 pa-0">
      <v-container class="copy wide ma-0 pa-0">{{ t('register.open') }}</v-container>
      <v-container class="copy wide ma-0 pa-0">
        {{ t('register.capacity.limit') }}
        <strong class="white-text">{{ t('register.capacity.arrangers') }}</strong>
        {{ t('register.capacity.and') }}
        <strong class="white-text">{{ t('register.capacity.singers') }}</strong>
        <span>.</span>
      </v-container>
      <v-container class="copy wide ma-0 pa-0">
        {{ t('register.capacity.confirmation') }}
        <strong class="white-text">
          {{
            confirmationDate.toLocaleDateString(locale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          }}
        </strong>
        <span>.</span>
      </v-container>
      <v-container class="copy ma-0 pa-0">
        {{ t('register.questions') }}
        <a class="text-blue" href="mailto:hello@24hrsbarbershop.xyz">hello@24hrsbarbershop.xyz</a>
      </v-container>
      <v-container class="fee ma-0 pa-0">
        {{ t('register.fee.fee') }}
        <strong>40 &euro;</strong>
        {{ t('register.fee.per') }}
      </v-container>
    </v-container>
    <v-btn
      class="register-now-button"
      :append-icon="mdiArrowRight"
      variant="tonal"
      href="https://pretix.eu/24hrsbarbershop/2026/"
      target="_blank"
    >
      {{ t('register.now') }}
    </v-btn>
    <registry-countdown />
    <table class="date-container">
      <tbody>
        <tr>
          <td class="label dim-text header-text">
            {{ t('register.dates.deadline') }}
          </td>
          <td class="value white-text body-text">
            {{
              registrationDeadline.toLocaleDateString(locale, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            }}
          </td>
        </tr>
        <tr>
          <td class="label dim-text header-text">
            {{ t('register.dates.confirm') }}
          </td>
          <td class="value white-text body-text">
            {{ t('register.dates.by') }}
            {{
              confirmationDate.toLocaleDateString(locale, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            }}
          </td>
        </tr>
        <tr>
          <td class="label dim-text header-text">
            {{ t('register.dates.event') }}
          </td>
          <td class="value white-text body-text">
            <span>
              {{
                eventStartDate.toLocaleDateString(locale, {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
              }}
            </span>
            <span>, Berlin</span>
          </td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>

<style lang="scss">
.register-container {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;

  .register-title-container {
    margin-bottom: 1.5rem;
  }
  .copy {
    margin-bottom: 1.1rem;
  }
  a.text-blue {
    text-decoration: none;
  }
  .fee {
    font-size: 0.85rem;
    margin-top: 1.2rem;
    margin-bottom: 2.9rem;
  }
  .register-now-button {
    background-color: #ff2a1a;
    color: #fff;
    border-radius: 9999px;
    margin-top: 2px;
    margin-bottom: 0px;
    padding: 24px;
  }
  .register-now-button:hover {
    background-color: #ff6a55;
    box-shadow: 0 8px 28px rgba(255, 42, 26, 0.4);
    margin-top: 0px;
    margin-bottom: 2px;
  }
  td.label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    padding-right: 0.8rem;
    margin-bottom: 0.6rem;
  }
}
</style>
