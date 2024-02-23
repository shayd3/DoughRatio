<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import Panel from 'primevue/panel';

import { ref, watch } from "vue";

const percentSuffix = " %";
const gramsSuffix = " g";

const flour = {
  name: "flour",
  weight: ref(1000)
}

const ingredients = ([
  { name: "water", weight: ref(750), percentage: ref(75), checked: ref(true)},
  { name: "salt", weight: ref(20), percentage: ref(2), checked: ref(true)},
  { name: "leaven", weight: ref(200), percentage: ref(20), checked: ref(true)},
  { name: "yeast", weight: ref(10), percentage: ref(1), checked: ref(true)},
  { name: "butter", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "starter", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "poolish", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "malt", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "sugar", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "milk", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "eggs", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "honey", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "vanilla", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "cinnamon", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "baking powder", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "baking soda", weight: ref(0), percentage: ref(0), checked: ref(false)},
  { name: "oil", weight: ref(0), percentage: ref(0), checked: ref(false)}
])

const percentWatchList = ingredients.map(ingredient => ingredient.percentage);
percentWatchList.push(flour.weight)
const weightWatchList = ingredients.map(ingredient => ingredient.weight)

watch(percentWatchList, () => {
  console.log("Percentage changed or flour weight changed")
  // Calculate the weight of the ingredient
  ingredients.forEach(ingredient => {
    ingredient.weight.value = calculateWeight(ingredient.percentage.value)
  })
})

watch(weightWatchList, () => {
  console.log("Weight changed")
  // Calculate the percentage of the ingredient
  ingredients.forEach(ingredient => {
    ingredient.percentage.value = calculatePercentage(ingredient.weight.value)
  })
})

const calculateWeight = (percentage: number) => {
  return (flour.weight.value * percentage) / 100;
}

const calculatePercentage = (weight: number) => {
  return (weight / flour.weight.value) * 100;
}

</script>

<template>
  <Panel>
  <div class="flex flex-column gap-3">
    <label for="flour" class="font-bold block"> Flour </label>
    <div id="flour">
        <InputNumber class="w-full" v-model="flour.weight.value" inputId="flourWeight" :suffix="gramsSuffix" showButtons buttonLayout="horizontal" :step="250"
          :use-grouping="false">
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
    </div>

    <template v-for="ingredient in ingredients" :key="ingredient.name">
      <template v-if="ingredient.checked.value">
        <label :for="ingredient.name" class="font-bold block"> {{ ingredient.name }} </label>
        <div :id="ingredient.name" class="flex flex-row gap-3">
          <div>
            <InputNumber v-model="ingredient.percentage.value" :suffix="percentSuffix" :min="0" :use-grouping="false"></InputNumber>
          </div>
          <div>
            <InputNumber v-model="ingredient.weight.value" :suffix="gramsSuffix" :min="0" :use-grouping="false"></InputNumber>
          </div>
        </div>
      </template>
    </template>

  </div>
  </Panel>
</template>

<style>
.p-panel {
  padding-top: 10px;
}
.p-panel .p-panel-header {
  display: none;
}
</style>
