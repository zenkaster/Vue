<script>
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            num: null,
            title: '',
            price: null,
            description: ''
        }
    },
    methods: {
        increment() {
            this.$emit('increment');
        },
        decrement() {
            this.$emit('dicrement');
        },
        incrementByAmount () {
            this.$emit('incrementByAmount', this.num);
        },
        addItem () {
            const item = {
                title: this.title,
                price: this.price,
                description: this.description
            }
            this.$emit('addItem', item)
        },
        deleteItem (index) {
            this.$emit('deleteItem', index)
        }
    }
}
</script>

<template>
    <div>
    <h2>{{ item.title }}</h2>
    <h3>{{ item.price }}</h3>
    <h3>{{ item.decription }}</h3>
    <button @click="deleteItem(index)" style="background-color: brown;">Del</button>
    </div>
</template>