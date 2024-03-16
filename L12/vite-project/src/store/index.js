import { createStore } from 'vuex';
import students from './modules/students';
import counter from './modules/counter';

export default createStore({
    modules: {
        students,
        counter
    }
})



