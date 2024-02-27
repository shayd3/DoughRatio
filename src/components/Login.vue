<script setup lang="ts">
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: 'https://doughratio.com/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'https://doughratio.com/',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
        window.location.assign('https://doughratio.com/');
    }
};

const firebaseConfig = {
    // Your web app's Firebase configuration
};

// Initialize the FirebaseUI Widget using Firebase.
var app = firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(app.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
</script>

<template>
    <div>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
