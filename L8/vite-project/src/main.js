import './style.css'

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

const routes = [
    // { path: '/', component: App },
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/card', component: Card },
    // { path: '/card/:id', component: Card },
    // { path: '/about1', component: About },
    // { path: '/about2', component: About },
    // { path: '/about3', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


const va = createApp(App);
va.use(router)
va.mount('#app')
