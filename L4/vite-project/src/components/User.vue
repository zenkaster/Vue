<script>
export default {
    props: {
        user: Object,
        message: String,
    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<template>
    <!-- <h1>{{ message }}</h1>
    <li>
        <h2>{{ user.name }}</h2>
        <h4>{{ user.pass }}</h4>
    </li> -->
</template>



<!-- <script>
export default {
    data() {
        return {
            // num: null,
        }
    },
    methods: {
        increment() {
            this.$emit('plussed')
        },
        // decrement() {
        //     this.$emit('decrement')
        // },
        // incrementByAmount() {
        //     this.$emit('incrementByAmount', this.num)
        // },
    }
}
</script>

<template>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <input type="number" v-model="num">
        <button @click="incrementByAmount">Increment by amount</button>
    </div>
</template> -->