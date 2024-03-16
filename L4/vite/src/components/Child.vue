<script>
export default {
    data() {
        return {
            num: null,
            title: '',
            price: null,
            description: ''
        }
    },
    methods: {
        addItem () {
            const item = {
                title: this.title,
                price: this.price,
                description: this.description
            }
            this.$emit('addItem', item)
        }
    }
}
</script>

<template>
    <div>

            Title: <input type="text" v-model="title" >
            Price: <input type="number" v-model="price">
            Description: <input type="text" v-model="description">
            <button @click="addItem">Add item</button>

    </div>
</template>