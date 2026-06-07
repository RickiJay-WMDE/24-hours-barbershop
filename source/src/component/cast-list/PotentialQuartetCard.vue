<script setup lang="ts">
import PotentialQuartetVoice from '@/component/cast-list/PotentialQuartetVoice.vue'
import ValidPotentialButton from '@/component/cast-list/ValidPotentialButton.vue'
import type { Person } from '@/store/cast-store'
import { ref } from 'vue'

defineProps<{
  pushUnassigned: (v: string) => void
  resetUnassigned: () => void
}>()

const tenor = ref<Person | undefined>()
const setTenor = (v: Person | undefined) => (tenor.value = v)
const lead = ref<Person | undefined>()
const setLead = (v: Person | undefined) => (lead.value = v)
const bari = ref<Person | undefined>()
const setBari = (v: Person | undefined) => (bari.value = v)
const bass = ref<Person | undefined>()
const setBass = (v: Person | undefined) => (bass.value = v)
</script>

<template>
  <v-card class="potential-quartet">
    <v-card-text class="voices">
      <potential-quartet-voice
        label="Tenor"
        voice="tenor"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setTenor"
      />
      <potential-quartet-voice
        label="Lead"
        voice="lead"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setLead"
      />
      <potential-quartet-voice
        label="Bari"
        voice="bari"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setBari"
      />
      <potential-quartet-voice
        label="Bass"
        voice="bass"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setBass"
      />
    </v-card-text>
    <v-card-actions class="valid">
      <valid-potential-button
        :tenor="tenor"
        :lead="lead"
        :bari="bari"
        :bass="bass"
        :reset-unassigned="resetUnassigned"
      />
    </v-card-actions>
  </v-card>
</template>

<style lang="scss"></style>
