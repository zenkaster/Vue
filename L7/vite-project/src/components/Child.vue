<script>
export default {
    data() {
        return {
            str:'12312'
        }
    },
    methods: {
      
    },
    beforeDestroy() {
        console.log(this);
        // this.property = null
        // delete this.property
    },
    destroyed() {
        console.log(this);

    },
}
</script>

<template>
    <div>
        Child
        <button @click="destroy">destroy</button>
    </div>
</template>