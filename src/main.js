import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './style.css';
import App from './App.vue';
import Router from './conf/routes';
import { createPinia } from 'pinia';

createApp(App)
    .use(Router)
    .use(PrimeVue)
    .use(createPinia())
    .mount('#app');
