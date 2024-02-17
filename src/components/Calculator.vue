<script setup lang="ts">
import InputGroup from 'primevue/inputgroup';
import InputNumber  from 'primevue/inputnumber';
import FloatLabel  from 'primevue/floatlabel';

</script>

<template>
  <h1>Bakers Calculator</h1>
    <div class="flex flex-column gap-5">
        <InputGroup >
          <FloatLabel>
            <!--
              import { ref } from 'vue';

              const value = ref(null);
              v-model="value"
            -->
            <InputNumber id="Flour" />
            <label for="Flour">Flour</label>
          </FloatLabel>
        </InputGroup>

        <InputGroup >
          <FloatLabel>
            <InputNumber id="Water" />
            <label for="Water">Water</label>
          </FloatLabel>
        </InputGroup>

        <InputGroup >
          <FloatLabel>
            <InputNumber id="Salt" />
            <label for="Salt">Salt</label>
          </FloatLabel>
        </InputGroup>

        <InputGroup >
          <FloatLabel>
            <InputNumber id="Leaven" />
            <label for="Leaven">Leaven</label>
          </FloatLabel>
        </InputGroup>

    </div>
</template>

<style scoped>

</style>
