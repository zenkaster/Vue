<script>
export default {
    props: {
        str: {
            type: String,
            default: 'Ничего не было передано'
        }
    },
    data() {
        return {
            msg: "It's A Home Component",
            isShow: true,
        }
    },
    methods: {
        sendForm(e) {
            e.preventDefault();
            // setTimeout(() => {
            console.log('Форма была успешно отправлена на сервер');
            // }, 1500);
        },
        handleAlert(str) {
            alert(str)
            if (str == 'Главный див') {
                this.isShow = false
            }
        },
        foo() {
            this.isShow = !this.isShow
        }

    }
}
</script>

<template >
    <form @submit.prevent="sendForm" @contextmenu.prevent="foo">
        <input type="text" placeholder="Имя">
        <input type="number" placeholder="Возраст">
        <input type="text" placeholder="Email">
        <button type="submit">Send</button>
    </form>

    <div @click="handleAlert('Вы кликнули на 1 див')">
        <div @click="handleAlert('Вы кликнули на 2 див')">
            <span @click.stop="handleAlert('Вы кликнули на спан')">Click</span>
        </div>
    </div>


    <div v-if="isShow" class="mainDiv" @click.self="handleAlert('Главный див')">
        <div class="miniDiv" @click.once="handleAlert('Первый див')">Первый див</div>
        <div class="miniDiv" @click="handleAlert('Второй див')">Второй див</div>
        <!-- <div class="miniDiv" @click.stop.once="handleAlert('Первый див')">Первый див</div>
        <div class="miniDiv" @click.stop="handleAlert('Второй див')">Второй див</div> -->
    </div>

    <!-- <div>
        {{ msg + ' ' + str }}
    </div> -->
</template>

<style scoped>
.mainDiv {
    border: 2px solid white;
    padding: 10px 20px;
}

.miniDiv {
    border: 2px solid red;
}
</style>