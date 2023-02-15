# 👩‍🍳 Cookbook 
Some examples of how to use `us-counties` in the wild.
## Autocomplete 
A simple example of an autocomplete component in Vue to search for a county. Using the `contains` method, and the `res` method.

<Autocomplete />

:::details Example Code
```vue
<script setup lang="ts">
import {computed, ref} from 'vue'
import Counties from '../../index'
let searchTerm = ref('')
const searchCounties = computed(() => {
  const counties = new Counties({})
  if (searchTerm.value === '') {
    return []
  }

  let matches = 0
  counties.contains(searchTerm.value)
  matches = counties.length > 10 ? 10 : counties.length

  return counties.all(matches)
});
</script>

<template>
<p style="position: relative">
  <input type="text" id="search" placeholder="Search counties..." v-model="searchTerm">
  <ul v-if="searchCounties.length">
    <li
      v-for="county in searchCounties"
      :key="county[1].name"
    >
      {{ county[1].name }}
    </li>
  </ul>
</p>
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
}

input:focus {
  outline: none;
  box-shadow: inset 0 0 0 calc(2px) var(--vp-c-green);
}

ul {
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
```
:::

## Autocomplete By State
A simple example of an autocomplete component in Vue to search for a county that is in a specific state. Using the `contains` method, and the `res` method, as-well-as the `in` method to filter by state.

<AutocompleteByState />

:::details Example Code
```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import * as usc from '../../'
import { State } from '../../dist/src/types';
let searchTerm = ref('')
let state = ref('Alabama')
let open = ref(false)
const states = computed(() => {
  const states = new Map(usc.statesdata as any)

  return [...states.values()] as string[]
})
const searchCounties = computed(() => {
  console.log(state.value)
  const counties = new usc.USCounties().in(state.value as State)

  return counties.contains(searchTerm.value).res()
});
</script>

<template>
<div style="display: flex; align-items: center;">
  <select v-model="state">
    <option v-for="state in states" :key="state">{{ state }}</option>
  </select>
  <p style="position: relative">
    <input @blur="(open = !open)" @click="(open = !open)" type="text" id="search" placeholder="Search counties..." v-model="searchTerm">
    <ul v-if="searchCounties.length && open">
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
```
:::

## Is County In State

A simple example of a component in Vue to check if a county is in a specific state. Using the `has` method, and the `in` method to filter by state.

<IsItInState />

:::details Example Code
```vue
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
``` 
:::

## Favorite County

A simple example of a component in Vue to favorite a county. Using the `set` method, and the `get` method to get the county. This also uses the `groupBy` method to group the counties by state.

<Favorites />

:::details Example Code
```vue
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
```