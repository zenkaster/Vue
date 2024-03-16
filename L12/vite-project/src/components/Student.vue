<script setup>
import { ref } from 'vue';
import { useActions } from 'vuex-composition-helpers';

const { item } = defineProps({
    item: Object
})

const change = ref(false);
const newName = ref(item.name);


const { editStud } = useActions(['editStud'])

const saveChanges = () => {
    if (!change) return change.value = !change.value;

    editStud({
        id: item.id,
        name: newName
    })
    change.value = !change.value
}
</script>

<template>
    <div class="student">
        <span v-if="!change" @click="change = !change">{{ item.name }}</span>
        <input v-else type="text" v-model="newName">
        <button @click="saveChanges">{{ change ? 'Save Changes' : 'Edit' }}</button>
        -
        {{ item.gender }}
    </div>
</template>