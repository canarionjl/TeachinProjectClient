import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createPinia } from 'pinia';
import { walletOptions } from '@/composables/useInitWallet';


import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;



const pinia = createPinia();


createApp(App)
    .use(pinia)
    .mount('#app');
