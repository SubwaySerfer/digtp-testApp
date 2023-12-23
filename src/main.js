import { createApp } from 'vue'
import router from './router';
import App from './App.vue'

import TheSidebar from './components/layout/TheSidebar.vue'

const app = createApp(App)

app.use(router);

app.component('the-sidebar', TheSidebar)


app.mount('#app')