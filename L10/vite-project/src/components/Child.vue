<!-- <script>
export default {
  props: {
    arr: {
      type: Array,
      default: [],
    },
  },
  setup({ arr }, { emit }) {
    const filtedArr = arr.filter(item => item.id > 1)

    const incriment = (index) => {
      emit('incriment', index)
    }
    return {
      filtedArr,
      incriment
    }
  }
}
</script> -->
<script setup>

const { arr } = defineProps({
  arr: {
    type: Array,
    default: [],
  },
})
const emit = defineEmits(['incriment'])

const filtedArr = arr.filter(item => item.id > 1)
const incriment = (index) => {
  emit('incriment', index)
}


</script>

<template>
  <div v-for="(item, index) in arr">
    <span @click="incriment(index)">{{ item.id }}</span>
    {{ item.str }} <br>
  </div>
</template>