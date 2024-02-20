<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';

import { ref } from "vue";

const percentSuffix = " %";
const gramsSuffix = " g";

const flourWeight = ref(1000)
const waterWeight = ref(750)
const saltWeight = ref(20)
const leavenWeight = ref(200)

const waterPercentage = ref(75)
const saltPercentage = ref(2)
const leavenPercentage = ref(20)
</script>

<template>
  <h1>Bakers Calculator</h1>
  <div class="flex flex-column gap-3">
    <label for="flour" class="font-bold block"> Flour </label>
    <div id="flour">
        <InputNumber v-model="flourWeight" inputId="flourWeight" :suffix="gramsSuffix" showButtons buttonLayout="horizontal" :step="250"
          :use-grouping="false">
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
    </div>

    <label for="water" class="font-bold block"> Water </label>
    <div id="water" class="flex flex-row gap-3">
      <div>
        <InputNumber v-model="waterPercentage" inputId="waterPercentage" :suffix="percentSuffix" :min="0" :use-grouping="false">
        </InputNumber>
      </div>
      <div>
        <InputNumber v-model="waterWeight" inputId="waterWeight" :suffix="gramsSuffix" :min="0" :use-grouping="false"></InputNumber>
      </div>
    </div>

    <label for="salt" class="font-bold block mb-2"> Salt </label>
    <div id="salt" class="flex flex-row gap-3">
      <div>
        <InputNumber v-model="saltPercentage" inputId="saltPercentage" :suffix="percentSuffix" :min="0" :use-grouping="false"></InputNumber>
      </div>
      <div>
        <InputNumber v-model="saltWeight" inputId="saltWeight" :suffix="gramsSuffix" :min="0" :use-grouping="false"></InputNumber>
      </div>
    </div>

    <label for="leaven" class="font-bold block mb-2"> Leaven </label>
    <div id="leaven" class="flex flex-row gap-3">
      <div>
        <InputNumber v-model="leavenPercentage" inputId="leavenPercentage" :suffix="percentSuffix" :min="0" :use-grouping="false"></InputNumber>
      </div>
      <div>
        <InputNumber v-model="leavenWeight" inputId="leavenWeight" :suffix="gramsSuffix" :min="0" :use-grouping="false"></InputNumber>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
