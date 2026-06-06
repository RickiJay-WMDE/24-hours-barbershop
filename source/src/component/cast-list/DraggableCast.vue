<script setup lang="ts">
import PersonChip from '@/component/cast-list/PersonChip.vue'
import PotentialQuartet from '@/component/cast-list/PotentialQuartet.vue'
import useCastStore from '@/store/cast-store'
import { computed, onMounted, ref } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

const store = useCastStore()

const people = computed(() => store.people)
const unassignedList = ref<string[]>([])

const pushUnassigned = (v: string) => unassignedList.value.push(v)

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

    <potential-quartet :push-unassigned="pushUnassigned" />
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
