<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';

import { ref, watch } from "vue";

const percentSuffix = " %";
const gramsSuffix = " g";

const ingredientDialogVisible = ref(false);

const flour = {
  name: "flour",
  weight: ref(1000)
}

const ingredients = [
  { name: "Water", weight: ref(750), percentage: ref(75), checked: ref(true) },
  { name: "Salt", weight: ref(20), percentage: ref(2), checked: ref(true) },
  { name: "Leaven", weight: ref(200), percentage: ref(20), checked: ref(true) },
  { name: "Yeast", weight: ref(10), percentage: ref(1), checked: ref(true) },
  { name: "Butter", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Starter", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Poolish", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Malt", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Sugar", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Milk", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Eggs", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Honey", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Vanilla", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Cinnamon", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Baking Powder", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Baking Soda", weight: ref(0), percentage: ref(0), checked: ref(false) },
  { name: "Oil", weight: ref(0), percentage: ref(0), checked: ref(false) }
].sort((a, b) => a.name.localeCompare(b.name))

const percentWatchList = ingredients.map(ingredient => ingredient.percentage);
percentWatchList.push(flour.weight)
const weightWatchList = ingredients.map(ingredient => ingredient.weight)

watch(percentWatchList, () => {
  ingredients.forEach(ingredient => {
    ingredient.weight.value = calculateWeight(ingredient.percentage.value)
  })
})

watch(weightWatchList, () => {
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
  <Card>
    <template #content>
      <div class="flex flex-auto flex-column gap-3">
        <label for="flour" class="font-bold block"> Flour </label>
        <div id="flour">
          <InputNumber class="w-full" v-model="flour.weight.value" inputId="flourWeight" :suffix="gramsSuffix" showButtons
            buttonLayout="horizontal" :step="250" :use-grouping="false">
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
            <div :id="ingredient.name" class="flex flex-row flex-wrap gap-3">
              <div class="flex-auto w-auto">
                <InputNumber class="w-full" v-model="ingredient.percentage.value" :suffix="percentSuffix" :min="0" :use-grouping="false">
                </InputNumber>
              </div>
              <div class="flex-auto w-auto">
                <InputNumber class="w-full" v-model="ingredient.weight.value" :suffix="gramsSuffix" :min="0" :use-grouping="false">
                </InputNumber>
              </div>
            </div>
          </template>
        </template>


        <Button @click="ingredientDialogVisible = true" label="Add/Remove Ingredients" />
        <Dialog v-model:visible="ingredientDialogVisible" modal header="Add/Remove Ingredients" :style="{ width: '25rem' }">
          <div class="flex flex-column gap-3">
            <template v-for="ingredient in ingredients" :key="ingredient.name">
              <div class="flex flex-row gap-2">
                <Checkbox v-model="ingredient.checked.value" :inputId="ingredient.name" :binary="true"
                  :label="ingredient.name" />
                <label :for="ingredient.name"> {{ ingredient.name }} </label>
              </div>
            </template>
          </div>
          <div class="flex justify-content-end gap-2">
            <Button type="button" label="Save" @click="ingredientDialogVisible = false"></Button>
          </div>
        </Dialog>

      </div>
    </template>
  </Card>
</template>
