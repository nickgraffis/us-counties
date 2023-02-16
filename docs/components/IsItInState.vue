<script setup lang="ts">
import { computed, ref } from 'vue'
import * as usc from '../../'
import { State } from '../../dist/src/types';
let state = ref('Alabama')
let county = ref('06037')
let indicatorLight = ref('var(--vp-c-red)')
const states = computed(() => {
  const states = new Map(usc.statesdata as any)

  return [...states.values()] as string[]
})
const allCounties = computed(() => {
  const counties = new usc.USCounties()

  return counties.res()
});

const isInState = () => {
  const counties = new usc.USCounties().in(state.value as State)
  const isIn = counties.has(county.value)
  console.log(isIn, county.value)
  indicatorLight.value = isIn ? 'var(--vp-c-green)' : 'var(--vp-c-red)'
  return isIn
};
</script>

<template>
<div style="display: flex; align-items: center;">
  <select v-model="state" @change="isInState">
    <option v-for="state in states" :key="state">{{ state }}</option>
  </select>
  <select v-model="county" @change="isInState">
    <option v-for="county in allCounties" :key="county[0]" :value="county[0]">{{ county[1]?.name }}</option>
  </select>
  <div class="indicator"></div>
</div>
</template>

<style scoped>
.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: v-bind('indicatorLight');
  margin-left: 10px;
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