import App from "@/App.vue";
import { createApp } from 'vue'
import router from '@/router/index.js';
// import api from '@/helpers/api.js';
import pinia from '@/stores/index.js';
import vuetify from "./plugins/vuetify.js";

const app = createApp(App)
    .use(pinia)
    .use(router)
    // .use(api)
    .use(vuetify)
    .mount('#app');
