import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'


import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'


import App from './App.vue'

const app = createApp(App);
app.use(createPinia())
app.use(PrimeVue);

app.mount('#app')
