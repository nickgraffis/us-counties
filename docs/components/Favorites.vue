<script setup lang="ts">
import { computed, ref } from 'vue';
import * as usc from '../../'
import { State } from '../../dist/src/types';
let state = ref('Alaska')
const countiesByState = new usc.USCounties<{ liked: boolean }>().groupBy('state')
const states = computed(() => {
  const states = new Map(usc.statesdata as any)

  return [...states.values()] as string[]
})

const counties = computed(() => {
  const counties = countiesByState.group(state.value as State)

  return counties.res()
});

const like = (county: string) => {
  const tempState = state.value
  state.value = 'CA'
  state.value = tempState
  const oldCounty = countiesByState.group(state.value).get(county)
  if (oldCounty?.liked) {
    countiesByState.group(state.value).set(county, {
      ...oldCounty,
      liked: false
    })
  } else {
    countiesByState.group(state.value).set(county, {
      ...oldCounty,
      liked: true
    })
  }
};
</script>

<template>
  <div style="display: flex; align-items: center;">
  <select v-model="state">
    <option v-for="state in states" :key="state">{{ state }}</option>
  </select>
  </div>
  <div style="display: grid; grid-template-columns: auto auto auto; padding-top: 12px; ">
    <div v-for="county in counties" :key="county[0]" style="display: flex; align-items: center;">
      <span class="heart" @click="like(county[0])">
        <svg style="min-width: 20px; min-height: 20px;" xmlns="http://www.w3.org/2000/svg" :fill="county[1]?.liked ? 'pink' : 'none'" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </span>
      <span style="padding-left: 6px;">{{  county[1]?.name }}</span>
    </div>
  </div>
</template>

<style scoped>
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

  .heart:hover {
    color: pink;
    cursor: pointer;
  }
</style>