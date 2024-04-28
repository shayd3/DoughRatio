<script setup lang="ts">
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { ref, nextTick } from 'vue';

import { useAuthStore } from '@/stores/auth';


import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { useToast } from 'primevue/usetoast';


const authStore = useAuthStore();
const toast = useToast();

const visible = ref(false);

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: '/',
    callbacks: {
        signInSuccessWithAuthResult: function(authResult: any) {
            console.log(authResult)
            let firstName = authResult.user.displayName.split(' ')[0];
            toast.add({severity:'success', summary: 'Success', detail: `Sign in successful! Hello, ${firstName}`, life: 3000});
            visible.value = false;
            return false;
        },
        signInFailure: function(error: any) {
            toast.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
            return false;
        }
    },
    signInFlow: 'popup',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID
    ],
    tosUrl: 'https://doughratio.com/',
    privacyPolicyUrl: function () {
        window.location.assign('https://doughratio.com/');
    }
};

const ui = new firebaseui.auth.AuthUI(getAuth());

const openDialog = () => {
    visible.value = true;
    nextTick(() => {
        ui.start('#firebaseui-auth-container', uiConfig);
    })
}

const logout = () => {
    authStore.logout().then(() => {
        toast.add({severity:'success', summary: 'Success', detail: 'You have successfully signed out!', life: 3000});
    }).catch((error) => {
        toast.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
    });
}

</script>

<template>
    <!-- check if user is logged in -->
    <div v-if="!authStore.getUser()">
        <Button icon="pi pi-user" label="Login" @click="openDialog" />
    </div>
    <div v-else>
        <Button icon="pi pi-user" label="Logout" @click="logout()" />
    </div>

    <Dialog
            v-model:visible="visible"
            modal
            :pt="{
                root: 'border-none',
                mask: {
                    style: 'backdrop-filter: blur(2px)'
                }
            }"
        >
            <template #container="{ closeCallback }">
                <div class="flex flex-column px-5 py-5 gap-4" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--primary-400), var(--primary-700))">
                    <div class="inline-flex flex-column gap-2">
                        <div id="firebaseui-auth-container"></div>
                    </div>
                    <div class="flex align-items-center gap-3">
                        <Button label="Cancel" @click="closeCallback" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            </template>
        </Dialog>
</template>
