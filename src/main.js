import { createApp } from 'vue'
import router from './router';
import store from './store/index'
import App from './App.vue'

import TheSidebar from './components/layout/TheSidebar.vue'
import BaseDotsButton from './components/ui/BaseDotsButton.vue'

const app = createApp(App)

app.use(router);
app.use(store);

app.component('the-sidebar', TheSidebar)
app.component('base-dots-button', BaseDotsButton)


app.mount('#app')