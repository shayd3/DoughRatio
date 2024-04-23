<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Login from './Login.vue'
import { Icon } from '@iconify/vue';

import { ref } from "vue";

const items = ref([
    {
        label: 'Calculator',
       icon: 'mdi:calculator'
    }
]);

</script>

<template>
    <Menubar :model="items" class="border-noround border-50">
        <template #item="{ item, props }">
            <a class="flex align-items-center" v-bind="props.action">
                <Icon :icon="item.icon || ''" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
        <template #end>
            <Login />
        </template>
    </Menubar>
</template>
