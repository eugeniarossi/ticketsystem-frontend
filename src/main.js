import { createApp } from 'vue'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import router
import { router } from './router';

import './assets/main.scss'
import App from './App.vue'

// utilizzo router
createApp(App).use(router).mount('#app')