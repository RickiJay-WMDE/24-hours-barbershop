<script setup lang="ts">
import PotentialQuartetVoice from '@/component/cast-list/PotentialQuartetVoice.vue'
import ValidPotentialButton from '@/component/cast-list/ValidPotentialButton.vue'
import type { Person, Quartet } from '@/store/cast-store'
import { provide, ref } from 'vue'

const { pushUnassigned, startingQuartet } = defineProps<{
  pushUnassigned: (v: string) => void
  resetUnassigned: () => void
  startingQuartet?: Quartet
}>()

const tenor = ref<Person | undefined>(startingQuartet?.tenor)
const setTenor = (v: Person | undefined) => (tenor.value = v)
const lead = ref<Person | undefined>(startingQuartet?.lead)
const setLead = (v: Person | undefined) => (lead.value = v)
const bari = ref<Person | undefined>(startingQuartet?.bari)
const setBari = (v: Person | undefined) => (bari.value = v)
const bass = ref<Person | undefined>(startingQuartet?.bari)
const setBass = (v: Person | undefined) => (bass.value = v)

const resetBoolean = ref(false)
provide('reset-boolean', resetBoolean)

const clear = () => {
  if (tenor.value) {
    pushUnassigned(tenor.value.code)
    setTenor(undefined)
  }
  if (lead.value) {
    pushUnassigned(lead.value.code)
    setLead(undefined)
  }
  if (bari.value) {
    pushUnassigned(bari.value.code)
    setBari(undefined)
  }
  if (bass.value) {
    pushUnassigned(bass.value.code)
    setBass(undefined)
  }
  resetBoolean.value = !resetBoolean.value
}
</script>

<template>
  <v-card class="potential-quartet">
    <v-card-text class="voices">
      <potential-quartet-voice
        label="Tenor"
        voice="tenor"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setTenor"
        :starting-voice="startingQuartet?.tenor.code"
      />
      <potential-quartet-voice
        label="Lead"
        voice="lead"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setLead"
        :starting-voice="startingQuartet?.lead.code"
      />
      <potential-quartet-voice
        label="Bari"
        voice="bari"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setBari"
        :starting-voice="startingQuartet?.bari.code"
      />
      <potential-quartet-voice
        label="Bass"
        voice="bass"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setBass"
        :starting-voice="startingQuartet?.bass.code"
      />
    </v-card-text>
    <v-card-actions class="valid">
      <v-btn v-if="tenor || lead || bari || bass" @click="clear">Clear</v-btn>
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
