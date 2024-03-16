<script>
export default {
    props: {
        // 'counter',
        // 'text'
        users: Array,

    },
    date() {
        return {
            findByName: '',
            tempArr: [],
        }
    },
    methods: {
        showResult(users) {
            users.filter(item => item.name == this.findByName)
        },
    }
}
</script>

<template>
    <div class="child">
        <h1>А это уже дочерний</h1>
        <!-- <span>Это то что мы получили от родителя: {{ text }}</span> -->
        <input type="text" placeholder="Поиск по имени" v-model="findByName" @input="showResult(users)"
            @focusout="console.log(findByName)">
        <!-- <button @click="showResult">Click</button> -->
        <ul class="userList">
            <li class="user" v-for="(user, i) in users">
                <h3>{{ i + 1 }} {{ user.name }}</h3>
                <h4>{{ user.gender }}</h4>

            </li>
        </ul>
    </div>
</template>


<style>
.child {
    border: 2px solid white;
    padding: 10px;
}

.userList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
}

.user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid purple;
    border-radius: 20px;
}
</style>