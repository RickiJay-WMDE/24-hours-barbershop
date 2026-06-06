<script setup lang="ts">
import PersonChip from '@/component/PersonChip.vue'
import useCastStore from '@/store/cast-store'
import { computed, onMounted, ref, watch } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

const store = useCastStore()

const people = computed(() => store.people)
const unassignedList = ref<string[]>([])

const potentialTenor = ref<string[]>([])
watch(potentialTenor, () => {
  while (potentialTenor.value.length > 1) {
    const shifted = potentialTenor.value.shift()
    if (shifted) {
      unassignedList.value.push(shifted)
    }
  }
})

const potentialLead = ref<string[]>([])
watch(potentialLead, () => {
  while (potentialLead.value.length > 1) {
    const shifted = potentialLead.value.shift()
    if (shifted) {
      unassignedList.value.push(shifted)
    }
  }
})

const potentialBari = ref<string[]>([])
watch(potentialBari, () => {
  while (potentialBari.value.length > 1) {
    const shifted = potentialBari.value.shift()
    if (shifted) {
      unassignedList.value.push(shifted)
    }
  }
})

const potentialBass = ref<string[]>([])
watch(potentialBass, () => {
  while (potentialBass.value.length > 1) {
    const shifted = potentialBass.value.shift()
    if (shifted) {
      unassignedList.value.push(shifted)
    }
  }
})

onMounted(() => (unassignedList.value = store.unassigned.map((v) => v.code)))
</script>

<template>
  <div class="lists-container">
    <div class="list-column">
      <h3>Unassigned</h3>
      <draggable v-model="unassignedList" group="people" class="drag-area" :animation="150">
        <div v-for="x in unassignedList" :key="x">
          <person-chip v-if="people[x]" :person="people[x]" />
        </div>
      </draggable>
    </div>

    <div class="list-column">
      <h3>Potential Quartet</h3>
      <div class="voices">
        <div class="voice">
          <div class="label">Tenor</div>
          <div class="assign">
            <draggable v-model="potentialTenor" group="people" class="drag-area" :animation="150">
              <div v-for="x in potentialTenor" :key="x">
                <person-chip v-if="people[x]" :person="people[x]" />
              </div>
            </draggable>
          </div>
        </div>
        <div class="voice">
          <div class="label">Lead</div>
          <div class="assign">
            <draggable v-model="potentialLead" group="people" class="drag-area" :animation="150">
              <div v-for="x in potentialLead" :key="x">
                <person-chip v-if="people[x]" :person="people[x]" />
              </div>
            </draggable>
          </div>
        </div>
        <div class="voice">
          <div class="label">Bari</div>
          <div class="assign">
            <draggable v-model="potentialBari" group="people" class="drag-area" :animation="150">
              <div v-for="x in potentialBari" :key="x">
                <person-chip v-if="people[x]" :person="people[x]" />
              </div>
            </draggable>
          </div>
        </div>
        <div class="voice">
          <div class="label">Bass</div>
          <div class="assign">
            <draggable v-model="potentialBass" group="people" class="drag-area" :animation="150">
              <div v-for="x in potentialBass" :key="x">
                <person-chip v-if="people[x]" :person="people[x]" />
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.drag-area {
  min-height: 60px;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
}
</style>
