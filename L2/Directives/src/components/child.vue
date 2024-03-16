<script>
export default {
    props: [
        'str',
        'foo'
    ],
    data() {
        return {
            counter: 0,
            number: null,
        }
    },
    methods: {
        incriment() {
            this.counter++
        },
        dicriment() {
            this.counter--
        },
        incrimentByAmount(num) {
            this.counter += num
        }
    }
}
</script>

<template>
    <div>
        {{ str, foo() }}
        <!-- <span>{{ counter }}</span><br>
        <input type="text" v-model="number">
        <button @click="incrimentByAmount(Number(number))">Click</button> -->
    </div>
</template>

