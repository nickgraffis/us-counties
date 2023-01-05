<script setup lang="ts">
import { computed, ref } from 'vue'
import * as usc from '../../'
let searchTerm = ref('')
let state = ref('AL')
let open = ref(false)
let countiesRef = ref<any>([])
const states = computed(() => {
  const states = new Map(usc.statesdata as any)

  return [...states.keys()] as string[]
})
const searchCounties = computed(() => {
  console.log(state)
  const counties = new usc.USCounties()
  counties.find(state.value, 'state')
  let matches = 0
  counties.contains(searchTerm.value)
  matches = counties.length > 10 ? 10 : counties.length
  console.log(counties.res(matches))
  countiesRef.value = counties.res(matches)
  return counties.res(matches)
});
</script>

<template>
<div style="display: flex; align-items: center;">
  <select v-model="state">
    <option v-for="state in states" :key="state">{{ state }}</option>
  </select>
  <p style="position: relative">
    <input @click="(open = !open)" type="text" id="search" placeholder="Search counties..." v-model="searchTerm">
    <ul v-if="(searchCounties.length && open)">
      <li
        v-for="county in searchCounties"
        :key="county[1].name"
      >
        {{ county[1].name }}
      </li>
    </ul>
  </p>
</div>
</template>

<style scoped>
input {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 5px;
  background-color: var(--vp-c-gray-dark-3);
  width: 250px;
  font-size: 12px;
}

select {
  cursor: pointer;
  margin-right: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  background-color: var(--vp-c-gray-dark-3);
  font-size: 12px;
}

input:focus {
  outline: none;
  box-shadow: inset 0 0 0 calc(2px) var(--vp-c-green);
}

ul {
  z-index: 150;
  position: absolute;
  top: 30px;
  max-height: 150px;
  overflow: scroll;
  list-style: none;
  padding: 0;
  background-color: var(--vp-c-gray-dark-3);
  border-radius: 5px;
  width: 250px;
}

li {
  padding: 5px;
  cursor: pointer;
}

li:hover {
  background-color: var(--vp-c-gray-dark-2);
}
</style>