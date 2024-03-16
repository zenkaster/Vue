<script>
export default {
    data() {
        return {
            msg: "It's A About Component",
            id:null
        }
    },
    methods: {
        changeStr() {
            const obj = {
                id: Math.random(0, 5) * 10,
                newStr: 'Всем пока'
            };
            this.$emit('changeStr', obj)
        },
        changeComments() {
            const obj = {
                id: 2,
                comment: 'комментарий'
            };
            this.$emit('changeComments', obj)
        }
    }
}
</script>

<template >
    <div>
        {{ msg }}
        <button @click="changeStr">Change</button>

        <button @click="changeComments">Comment</button>

    </div>
</template>

<style></style>