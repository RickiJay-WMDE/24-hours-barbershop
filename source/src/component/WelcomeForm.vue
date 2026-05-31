<script setup lang="ts">
import useCastStore from '@/store/cast-store'
import { ref } from 'vue'

const store = useCastStore()

const valid = ref(true)

const code = ref<string>()
const name = ref<string>()
const pronouns = ref<string>()

const u_t = ref(false)
const m_t = ref(false)
const l_t = ref(false)
const u_l = ref(false)
const m_l = ref(false)
const l_l = ref(false)
const u_br = ref(false)
const m_br = ref(false)
const l_br = ref(false)
const u_bs = ref(false)
const m_bs = ref(false)
const l_bs = ref(false)

const submit = () =>
  code.value &&
  name.value &&
  store.setPerson({
    code: code.value,
    name: name.value,
    pronouns: pronouns.value,
    rangeOptions: {
      upper: { tenor: u_t.value, lead: u_l.value, bari: u_br.value, bass: u_bs.value },
      mixed: { tenor: m_t.value, lead: m_l.value, bari: m_br.value, bass: m_bs.value },
      lower: { tenor: l_t.value, lead: l_l.value, bari: l_br.value, bass: l_bs.value },
    },
  })
</script>

<template>
  <v-container class="my-0 pa-0 welcome-form">
    <v-form v-model="valid">
      <v-text-field
        v-model="code"
        required
        label="Order Number"
        :rules="[
          (v: string) => (v && v.length >= 5) || 'Enter Full Code',
          (v: string) => (v && v.length <= 5) || 'Code Too Long',
        ]"
      />
      <v-text-field v-model="name" required label="Name" />
      <v-text-field v-model="pronouns" label="Pronouns" />
      <v-table>
        <tbody>
          <tr>
            <td></td>
            <td class="voice-label header-text">Upper Voices</td>
            <td class="voice-label header-text">Mixed Voices</td>
            <td class="voice-label header-text">Lower Voices</td>
          </tr>
          <tr>
            <td class="voice-label header-text">Tenor</td>
            <td><v-checkbox v-model="u_t" /></td>
            <td><v-checkbox v-model="m_t" /></td>
            <td><v-checkbox v-model="l_t" /></td>
          </tr>
          <tr>
            <td class="voice-label header-text">Lead</td>
            <td><v-checkbox v-model="u_l" /></td>
            <td><v-checkbox v-model="m_l" /></td>
            <td><v-checkbox v-model="l_l" /></td>
          </tr>
          <tr>
            <td class="voice-label header-text">Bari</td>
            <td><v-checkbox v-model="u_br" /></td>
            <td><v-checkbox v-model="m_br" /></td>
            <td><v-checkbox v-model="l_br" /></td>
          </tr>
          <tr>
            <td class="voice-label header-text">Bass</td>
            <td><v-checkbox v-model="u_bs" /></td>
            <td><v-checkbox v-model="m_bs" /></td>
            <td><v-checkbox v-model="l_bs" /></td>
          </tr>
        </tbody>
      </v-table>
      <v-btn @click="submit" class="header-text">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<style lang="scss"></style>
