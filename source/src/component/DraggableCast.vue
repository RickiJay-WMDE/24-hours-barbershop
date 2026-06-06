<script setup lang="ts">
import useCastStore from '@/store/cast-store'
import { computed, onMounted, ref } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'
import PersonChip from './PersonChip.vue'

const store = useCastStore()

const people = computed(() => store.people)
const unassignedList = ref<string[]>([])
const assignList = ref<string[]>([])

onMounted(() => (unassignedList.value = store.unassigned.map((v) => v.code)))

const onListChange = (event: unknown) => {
  console.log('List changed:', event)
}
</script>

<template>
  <div class="lists-container">
    <div class="list-column">
      <h3>Unassigned</h3>
      <draggable
        v-model="unassignedList"
        group="people"
        class="drag-area"
        :animation="150"
        @change="onListChange"
      >
        <div v-for="x in unassignedList" :key="x">
          <person-chip v-if="people[x]" :person="people[x]" />
        </div>
      </draggable>
    </div>

    <div class="list-column">
      <h3>Potential Quartet</h3>
      <draggable
        v-model="assignList"
        group="people"
        class="drag-area"
        :animation="150"
        @change="onListChange"
      >
        <div v-for="x in assignList" :key="x">
          <person-chip v-if="people[x]" :person="people[x]" />
        </div>
      </draggable>
    </div>
  </div>
</template>

<style lang="scss">
.drag-area {
  min-height: 60px;
}
</style>
