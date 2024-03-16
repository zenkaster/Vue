<script>
export default {
    props: {
        news: {
            type: Array,
            default: [],
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteNews() {
            this.$emit('deleteNews')
        }
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="neww in news">
                <router-link to="/card/id">
                    {{ neww.title }}
                    {{ neww.description }}
                </router-link>
            </li>
        </ul>
        <button @click="deleteNews">Delete</button>
    </div>
</template>