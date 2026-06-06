<script setup lang="ts">
import PotentialQuartetVoice from '@/component/cast-list/PotentialQuartetVoice.vue'
import { type Person } from '@/store/cast-store'
import isValidPartialQuartet from '@/util/valid-partial-quartet'
import { ref } from 'vue'

const { pushUnassigned } = defineProps<{ pushUnassigned: (v: string) => void }>()

const potentialTenor = ref<Person | undefined>()
const setPotentialTenor = (v: Person | undefined) => (potentialTenor.value = v)
const potentialLead = ref<Person | undefined>()
const setPotentialLead = (v: Person | undefined) => (potentialLead.value = v)
const potentialBari = ref<Person | undefined>()
const setPotentialBari = (v: Person | undefined) => (potentialBari.value = v)
const potentialBass = ref<Person | undefined>()
const setPotentialBass = (v: Person | undefined) => (potentialBass.value = v)
</script>

<template>
  <div class="list-column">
    <h3>Potential Quartet</h3>
    <div class="voices">
      <potential-quartet-voice
        label="Tenor"
        voice="tenor"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setPotentialTenor"
      />
      <potential-quartet-voice
        label="Lead"
        voice="lead"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setPotentialLead"
      />
      <potential-quartet-voice
        label="Bari"
        voice="bari"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setPotentialBari"
      />
      <potential-quartet-voice
        label="Bass"
        voice="bass"
        :push-unassigned="pushUnassigned"
        :set-potential-voice="setPotentialBass"
      />
    </div>
    <div class="valid">
      <template
        v-if="isValidPartialQuartet(potentialTenor, potentialLead, potentialBari, potentialBass)"
      >
        Valid Quartet!
      </template>
      <template
        v-else-if="isValidPartialQuartet(undefined, potentialLead, potentialBari, potentialBass)"
      >
        Change Tenor
      </template>
      <template
        v-else-if="isValidPartialQuartet(potentialTenor, undefined, potentialBari, potentialBass)"
      >
        Change Lead
      </template>
      <template
        v-else-if="isValidPartialQuartet(potentialTenor, potentialLead, undefined, potentialBass)"
      >
        Change Bari
      </template>
      <template
        v-else-if="isValidPartialQuartet(potentialTenor, potentialLead, potentialBari, undefined)"
      >
        Change Bass
      </template>
      <template v-else-if="potentialTenor || potentialLead || potentialBari || potentialBass">
        Invalid Combo
      </template>
    </div>
  </div>
</template>

<style lang="scss"></style>
