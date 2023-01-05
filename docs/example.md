# 👩‍🍳 Cookbook 
Some examples of how to use `us-counties` in the wild.
## Autocomplete 
A simple example of an autocomplete component in Vue to search for a county.

<Autocomplete />

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

## Autocomplete By State

<AutocompleteByState />

## Autocomplete with SVG

<AutocompleteSvg />

## Filtering Counties By Population

## 