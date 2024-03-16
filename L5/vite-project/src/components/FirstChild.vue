<script>
export default {
    props: {
        
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        getInput() {
            this.$emit('getInput', this.text)
        }
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="text" @input="getInput">
    </div>
</template>

<style>

</style>