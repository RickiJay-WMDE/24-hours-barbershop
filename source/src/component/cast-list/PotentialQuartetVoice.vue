<script setup lang="ts">
import PersonChip from '@/component/cast-list/PersonChip.vue'
import useCastStore, { type Person, type RangeType } from '@/store/cast-store'
import isValidPartialQuartet from '@/util/valid-partial-quartet'
import { mdiClose, mdiThumbUpOutline } from '@mdi/js'
import { computed, inject, ref, watch, type Ref } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

const { pushUnassigned, setPotentialVoice, startingVoice, voice } = defineProps<{
  label: string
  pushUnassigned: (v: string) => void
  setPotentialVoice: (v: Person | undefined) => void
  startingVoice?: string
  voice: RangeType
}>()

const resetBoolean: Ref<boolean, boolean> = inject('reset-boolean', ref(false))

const store = useCastStore()
const people = computed(() => store.people)
const unassignedCodes = computed(() => store.unassigned.map((v) => v.code))

const potentialVoiceList = ref<string[]>(startingVoice ? [startingVoice] : [])
watch(potentialVoiceList, () => {
  while (potentialVoiceList.value.length > 1) {
    const shifted = potentialVoiceList.value.shift()
    if (shifted) {
      pushUnassigned(shifted)
    }
  }
})
watch(
  unassignedCodes,
  () =>
    (potentialVoiceList.value = potentialVoiceList.value.filter((code: string) =>
      unassignedCodes.value.includes(code),
    )),
)
watch(resetBoolean, () => (potentialVoiceList.value = []))

const potentialVoice = computed((): Person | undefined =>
  potentialVoiceList.value[0] ? people.value[potentialVoiceList.value[0]] : undefined,
)
watch(potentialVoice, () => setPotentialVoice(potentialVoice.value))

const valid = computed(() => {
  switch (voice) {
    case 'tenor':
      return isValidPartialQuartet(potentialVoice.value, undefined, undefined, undefined)
    case 'lead':
      return isValidPartialQuartet(undefined, potentialVoice.value, undefined, undefined)
    case 'bari':
      return isValidPartialQuartet(undefined, undefined, potentialVoice.value, undefined)
    case 'bass':
      return isValidPartialQuartet(undefined, undefined, undefined, potentialVoice.value)
    default:
      return false
  }
})
</script>

<template>
  <div class="voice">
    <div class="label">{{ label }}</div>
    <div class="assign">
      <draggable v-model="potentialVoiceList" group="people" class="drag-area" :animation="150">
        <div v-for="x in potentialVoiceList" :key="x">
          <person-chip v-if="people[x]" :person="people[x]" :range="voice" />
        </div>
      </draggable>
    </div>
    <div class="valid">
      <v-icon v-if="potentialVoice" :icon="valid ? mdiThumbUpOutline : mdiClose" />
    </div>
  </div>
</template>

<style lang="scss">
.voice {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 6px;
  margin: 6px 0;
  .assign {
    flex-grow: 1;
    .drag-area {
      min-height: 32px;
    }
  }
}
</style>
