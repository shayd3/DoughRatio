<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';

import { ref } from "vue";

const flourWeight = ref(1000)
const waterPercentage = ref(75)
const saltPercentage = ref(2)
const leavenPercentage = ref(20)
</script>

<template>
  <h1>Bakers Calculator</h1>
  <div class="flex flex-column gap-5">
    <div>
      <label for="horizontal-buttons" class="font-bold block mb-2"> Flour </label>
      <InputNumber v-model="flourWeight" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="250"
        :use-grouping="false">
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <div>
      <label for="horizontal-buttons" class="font-bold block mb-2"> Water </label>
      <InputNumber v-model="waterPercentage" inputId="waterPercentage" suffix="%" :min="0" :use-grouping="false">
      </InputNumber>
    </div>
    <div>
      <label for="horizontal-buttons" class="font-bold block mb-2"> Salt </label>
      <InputNumber v-model="saltPercentage" inputId="saltPercentage" suffix="%" :min="0" :use-grouping="false">
      </InputNumber>
    </div>
    <div>
      <label for="horizontal-buttons" class="font-bold block mb-2"> Leaven </label>
      <InputNumber v-model="leavenPercentage" inputId="leavenPercentage" suffix="%" :min="0" :use-grouping="false">
      </InputNumber>
    </div>
  </div>
</template>

<style scoped>
</style>
