<script setup lang="ts">
import PersonChip from '@/component/cast-list/PersonChip.vue'
import useCastStore, { type Person } from '@/store/cast-store'
import isValidPartialQuartet from '@/util/valid-partial-quartet'
import { mdiClose, mdiThumbUpOutline } from '@mdi/js'
import { computed, ref, watch } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

const { pushUnassigned } = defineProps<{ pushUnassigned: (v: string) => void }>()

const store = useCastStore()
const people = computed(() => store.people)

const potentialTenorList = ref<string[]>([])
watch(potentialTenorList, () => {
  while (potentialTenorList.value.length > 1) {
    const shifted = potentialTenorList.value.shift()
    if (shifted) {
      pushUnassigned(shifted)
    }
  }
})
const potentialTenor = computed((): Person | undefined =>
  potentialTenorList.value[0] ? people.value[potentialTenorList.value[0]] : undefined,
)

const potentialLeadList = ref<string[]>([])
watch(potentialLeadList, () => {
  while (potentialLeadList.value.length > 1) {
    const shifted = potentialLeadList.value.shift()
    if (shifted) {
      pushUnassigned(shifted)
    }
  }
})
const potentialLead = computed((): Person | undefined =>
  potentialLeadList.value[0] ? people.value[potentialLeadList.value[0]] : undefined,
)

const potentialBariList = ref<string[]>([])
watch(potentialBariList, () => {
  while (potentialBariList.value.length > 1) {
    const shifted = potentialBariList.value.shift()
    if (shifted) {
      pushUnassigned(shifted)
    }
  }
})
const potentialBari = computed((): Person | undefined =>
  potentialBariList.value[0] ? people.value[potentialBariList.value[0]] : undefined,
)

const potentialBassList = ref<string[]>([])
watch(potentialBassList, () => {
  while (potentialBassList.value.length > 1) {
    const shifted = potentialBassList.value.shift()
    if (shifted) {
      pushUnassigned(shifted)
    }
  }
})
const potentialBass = computed((): Person | undefined =>
  potentialBassList.value[0] ? people.value[potentialBassList.value[0]] : undefined,
)
</script>

<template>
  <div class="list-column">
    <h3>Potential Quartet</h3>
    <div class="voices">
      <div class="voice">
        <div class="label">Tenor</div>
        <div class="assign">
          <draggable v-model="potentialTenorList" group="people" class="drag-area" :animation="150">
            <div v-for="x in potentialTenorList" :key="x">
              <person-chip v-if="people[x]" :person="people[x]" />
            </div>
          </draggable>
        </div>
        <div class="valid">
          <v-icon
            v-if="potentialTenor"
            :icon="
              isValidPartialQuartet(potentialTenor, undefined, undefined, undefined)
                ? mdiThumbUpOutline
                : mdiClose
            "
          />
        </div>
      </div>
      <div class="voice">
        <div class="label">Lead</div>
        <div class="assign">
          <draggable v-model="potentialLeadList" group="people" class="drag-area" :animation="150">
            <div v-for="x in potentialLeadList" :key="x">
              <person-chip v-if="people[x]" :person="people[x]" />
            </div>
          </draggable>
        </div>
        <div class="valid">
          <v-icon
            v-if="potentialLead"
            :icon="
              isValidPartialQuartet(undefined, potentialLead, undefined, undefined)
                ? mdiThumbUpOutline
                : mdiClose
            "
          />
        </div>
      </div>
      <div class="voice">
        <div class="label">Bari</div>
        <div class="assign">
          <draggable v-model="potentialBariList" group="people" class="drag-area" :animation="150">
            <div v-for="x in potentialBariList" :key="x">
              <person-chip v-if="people[x]" :person="people[x]" />
            </div>
          </draggable>
        </div>
        <div class="valid">
          <v-icon
            v-if="potentialBari"
            :icon="
              isValidPartialQuartet(undefined, undefined, potentialBari, undefined)
                ? mdiThumbUpOutline
                : mdiClose
            "
          />
        </div>
      </div>
      <div class="voice">
        <div class="label">Bass</div>
        <div class="assign">
          <draggable v-model="potentialBassList" group="people" class="drag-area" :animation="150">
            <div v-for="x in potentialBassList" :key="x">
              <person-chip v-if="people[x]" :person="people[x]" />
            </div>
          </draggable>
        </div>
        <div class="valid">
          <v-icon
            v-if="potentialBass"
            :icon="
              isValidPartialQuartet(undefined, undefined, undefined, potentialBass)
                ? mdiThumbUpOutline
                : mdiClose
            "
          />
        </div>
      </div>
    </div>
    <div class="valid">
      {{ isValidPartialQuartet(potentialTenor, potentialLead, potentialBari, potentialBass) }}
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
