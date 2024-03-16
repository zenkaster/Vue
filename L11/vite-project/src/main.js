import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            mainStr: 'Это сообщение из нашего Vuex',
            counter: 0
        }
    },
    getters: {
        counter(state) {
            return state.counter
        },
        mainStr(state) {
            return state.mainStr
        }
    },
    mutations: {
        incriment(state) {
            state.counter++
        },
        decriment(state) {
            state.counter--
        },
        changeStr(state, payload) {
            state.mainStr = payload
        }
    },
    actions: {
        callIncriment({ commit }) {
            commit('incriment');
        },
        callDecriment({ commit }) {
            commit('decriment');
        },
        changeStr({ commit }, payload) {
            commit('changeStr', payload)
        }
    }

})




createApp(App).use(store).mount('#app')
