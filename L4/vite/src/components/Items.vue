<script>
export default {
    props: {
        items: Object
    },
    data() {
        return {
        
        }
    },
    methods: {
        deleteItem(item) {
            this.$emit("deleteItem", item)
        }
    }
}
</script>

<template>
    <div class="card" v-for="item in items">
        <h1>{{ item.title }}</h1>
        <span>{{ item.desc }}</span>
        <span>{{ item.price }}</span>
        <button @click="deleteItem(item)">Delete</button>
    </div>
</template>

<style>
</style>