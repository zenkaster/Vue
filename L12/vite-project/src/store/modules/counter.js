export default {
    state() {
        return {
            counter: 0,
        }
    },
    getters: {
        counter(state) {
            return state.counter
        },
    },
    mutations: {
        incriment(state) {
            state.counter++
        }
    },
    actions: {
        incriment({ commit }) {
            commit('incriment')
        }
    }
}