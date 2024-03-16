<script>
export default {
    props: ['news'],
    data() {
        return {
            id: this.$route.params
        }
    },

}
</script>

<template>
    <div>
        {{ console.log(news) }}
        <h5>Home Component</h5>
        <p>Autem, fuga necessitatibus delectus odio eligendi dolore!</p>
    </div>
</template>