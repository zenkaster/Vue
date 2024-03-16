import './style.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue';
import Main from './components/Main.vue';
import About from './components/About.vue';

const routes = [
    { path: '/third', component: Main },
    { path: '/home', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});



const va = createApp(App);
va.use(router);
va.mount('#app');