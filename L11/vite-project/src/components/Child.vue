<script setup>
import { ref, computed } from 'vue';
import { useStore, useActions } from 'vuex-composition-helpers';


const { msg } = defineProps({
  msg: {
    type: String,
    default: 'Сообщение не было получено'
  }
})
const emit = defineEmits(['newStr'])
// const str = ref(props.msg)

// const newStr = () => {
//   console.log(str.value);
//   emit('newStr', str.value)
// }


const store = useStore();
const mainStr = computed(() => {
  return store.getters.mainStr
})
const str = '';
const { changeStr } = useActions(['changeStr']);

const counter = computed(() => {
  return store.getters.counter
})


</script>

<template>
  <div>
    {{ mainStr }}
    <input type="text" v-model="str" @input="changeStr(str)">
    {{ counter }}
    <!-- <br>
    <br>
    {{ msg.toUpperCase() }}
    <input type="text" v-model="str" @input="newStr"> -->
  </div>
</template>