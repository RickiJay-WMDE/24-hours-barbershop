<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

const setLocale = (l: string) => (locale.value = l)
</script>

<template>
  <div class="text-center lang-switcher header-text dim-text">
    <template v-for="(l, idx) in availableLocales" :key="idx">
      <template v-if="idx > 0">&vert;</template>
      <v-btn density="compact" class="ma-0 pa-0 shrink" :onclick="() => setLocale(l)">
        {{ l }}
      </v-btn>
    </template>
  </div>
</template>

<style lang="scss">
.lang-switcher {
  display: flex;
  flex-flow: row nowrap;
  gap: 0;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  padding: 0;
  .v-btn {
    padding: 0;
    width: 14px;
  }
}
</style>
