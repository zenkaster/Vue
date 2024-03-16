<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            msg: "It's A Main Component",
        }
    },
}
</script>

<template >
    <div>
        id:{{ id }} <span v-if="id == 0">(если id не передан, то будет 0)</span> <br>
        {{ msg }}
        <Fourth  />
    </div>
</template>

<style></style>