<script setup lang="ts">
import { GoogleAuthProvider, getAuth} from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { ref, nextTick } from 'vue';

import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const visible = ref(false);

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: '/',
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

</script>

<template>
    <Button icon="pi pi-user" label="Login" @click="openDialog" />

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
