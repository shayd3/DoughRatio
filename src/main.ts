import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// import './style.css'
// import 'primevue/resources/themes/aura-dark-cyan/theme.css'
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'


import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

initializeApp(firebaseConfig)

const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      // change color to cyan and layout to dark
      layoutMode: 'dark',
      primary: '#42A5F5',
      secondary: '#424242',
    }
  }
});
app.use(ToastService);
app.use(createPinia())

app.mount('#app')
