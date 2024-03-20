<script setup lang="ts">
import { GoogleAuthProvider, getAuth} from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

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
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
</script>

<template>
    <div>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
