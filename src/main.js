import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import VueMask from 'vue-the-mask'

createApp(App).use(router).use(VueMask).mount('#app')

