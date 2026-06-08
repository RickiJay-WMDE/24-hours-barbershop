<script setup lang="ts">
import PersonChip from '@/component/cast-list/PersonChip.vue'
import PotentialQuartetCard from '@/component/cast-list/PotentialQuartetCard.vue'
import useCastStore, { type Quartet } from '@/store/cast-store'
import { computed, onMounted, ref, watch } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

const store = useCastStore()

const people = computed(() => store.people)
const unassignedList = ref<string[]>([])
const randomResults = ref<Quartet[]>([])
watch(randomResults, () =>
  randomResults.value.forEach(
    (q) =>
      (unassignedList.value = unassignedList.value.filter(
        (v) => q.tenor.code != v && q.lead.code != v && q.bari.code != v && q.bass.code != v,
      )),
  ),
)

const pushUnassigned = (v: string) => unassignedList.value.push(v)
const randomize = () => (randomResults.value = store.randomizeQuartets())
const resetUnassigned = () => (unassignedList.value = store.unassigned.map((v) => v.code))

onMounted(resetUnassigned)
</script>

<template>
  <div>
    <div>
      <h3>Unassigned</h3>
      <draggable
        v-model="unassignedList"
        group="people"
        class="drag-area unassigned-container"
        :animation="150"
      >
        <div v-for="x in unassignedList" :key="x">
          <person-chip v-if="people[x]" :person="people[x]" />
        </div>
      </draggable>
    </div>
    <v-expansion-panels>
      <v-expansion-panel title="Potential Quartet">
        <v-expansion-panel-text>
          <potential-quartet-card
            :push-unassigned="pushUnassigned"
            :reset-unassigned="resetUnassigned"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Randomize">
        <v-expansion-panel-text>
          <v-btn @click="randomize">Randomize</v-btn>
          <div>
            <potential-quartet-card
              v-for="(quartet, idx) in randomResults"
              :key="idx"
              :push-unassigned="pushUnassigned"
              :reset-unassigned="resetUnassigned"
              :starting-quartet="quartet"
            />
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
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
