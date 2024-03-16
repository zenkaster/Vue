<script setup>
import { ref, computed } from 'vue';
import Child from './components/Child.vue';
import { useStore, useActions } from 'vuex-composition-helpers';
import { mapGetters } from 'vuex'

const msg = ref('Всем привет, это сообщение от App.vue')

const newStr = (str) => {
  msg.value = str;
}


const store = useStore();
let counter = store.getters.counter
counter = 40;
// const counter = computed(() => {
//   return store.getters.counter
// })

const { callIncriment, callDecriment } = useActions(['callIncriment', 'callDecriment'])


</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="callIncriment">+</button>
    <button @click="callDecriment">-</button>

    <br>
    <Child :msg="msg" @newStr="newStr" />

  </div>
</template>