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
        <template #item="{ item, props, hasSubmenu, root }">
            <a class="flex align-items-center" v-bind="props.action">
                <Icon :icon="item.icon || ''" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
        <template #end>
            <a class="flex align-items-center p-menuitem p-menuitem-content p-menuitem-link">
                <!-- <Icon icon="material-symbols:login"/>
                <span class="ml-2">Login</span> -->
                <Login />
            </a>
        </template>

    </Menubar>
</template>
