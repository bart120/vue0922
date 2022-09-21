import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './style.css';
import App from './App.vue';
import Router from './conf/routes';


createApp(App)
    .use(Router)
    .use(PrimeVue)
    .mount('#app');
