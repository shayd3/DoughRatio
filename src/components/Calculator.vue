<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';

import { ref, watch } from "vue";

const percentSuffix = " %";
const gramsSuffix = " g";

const flour = {
  name: "flour",
  weight: ref(1000)
}
const ingredients = ([
  { name: "water", weight: ref(750), percentage: ref(75) },
  { name: "salt", weight: ref(20), percentage: ref(2) },
  { name: "leaven", weight: ref(200), percentage: ref(20)}
])

// TODO: May need to `watch` when new ingredients are added to recalculate the watch lists
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
  <div class="flex flex-column gap-3">
    <label for="flour" class="font-bold block"> Flour </label>
    <div id="flour">
        <InputNumber v-model="flour.weight.value" inputId="flourWeight" :suffix="gramsSuffix" showButtons buttonLayout="horizontal" :step="250"
          :use-grouping="false">
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
    </div>

    <!-- Dyanmically generate based on ingredients list -->
    <template v-for="ingredient in ingredients" :key="ingredient.name">
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

  </div>
</template>

<style scoped>
</style>
