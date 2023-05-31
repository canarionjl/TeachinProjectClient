import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createPinia } from 'pinia';
import { walletOptions } from '@/composables/useInitWallet';
import { initWorkspace } from './composables/useWallet';
import { initWallet } from "solana-wallets-vue";

const pinia = createPinia();
initWallet(walletOptions);

initWorkspace();

createApp(App)
    .use(pinia)
    .mount('#app');
