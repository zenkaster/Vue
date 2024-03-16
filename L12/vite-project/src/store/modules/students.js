export default {
    state() {
        return {
            students: [
                {
                    id: 0,
                    name: 'Alex',
                    gender: 'male',
                },
                {
                    id: 1,
                    name: 'Tom',
                    gender: 'male',

                },
                {
                    id: 2,
                    name: 'Mia',
                    gender: 'female',
                }
            ],
            showForm: false
        }
    },
    getters: {
        students(state) {
            return state.students.sort((a, b) => a.name - b.name)
        },
        maleStudents(state) {
            return state.students.filter(stud => stud.gender == 'male')
        },
        showForm(state) {
            return state.showForm
        }
    },
    mutations: {
        addStud(state, payload) {
            state.students.push(payload)
        },
        changeForm(state) {
            state.showForm = !state.showForm
        },
        editStud(state, payload) {
            console.log(123123);
            const stud = state.students.find(stud => stud.id == payload.id)
            stud.name = payload.name
        }
    },
    actions: {
        callAddStud({ commit }, payload) {
            commit('addStud', payload)
            commit('changeForm')
        },
        changeForm({ commit }) {
            commit('changeForm')
        },
        editStud({ commit }, payload) {
            commit('editStud', payload)
        }
    }
}