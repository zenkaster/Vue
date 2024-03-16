<script>
import { ref } from 'vue';

export default {
    props: {
        counter: Number,
    },
    setup({ counter }) {
        const todos = ref([
            {
                id: 0,
                text: '123123',
            },
            {
                id: 1,
            },
            {
                id: 2,
            },
        ])
        const editTodo = ({ id, newStr }) => {
            const todo = todos.value.find(todo => todo.id == id)
            todo.text = newStr;
        }
    }
}
</script>

<template>
    <div>
        <span v-if="true">{{ counter }}</span>
        <div v-else>
            <input type="text" v-model="newValue">
            <button @click="editTodo({ id, newStr: newValue })">Edit</button>
        </div>
    </div>
</template>