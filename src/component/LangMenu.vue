<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t, availableLocales } = useI18n()

const languages = computed(() =>
  availableLocales.map((loc: string) => ({ title: t(`locale.lang_${loc}`), value: loc })),
)
</script>

<template>
  <div class="text-center lang-switcher">
    <v-select
      v-model="locale"
      :items="languages"
      density="compact"
      hide-details
      class="text-center lang-switcher header-text dim-text"
    />
  </div>
</template>
