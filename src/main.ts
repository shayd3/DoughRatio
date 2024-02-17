import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'

import './style.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'


const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
