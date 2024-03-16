<script>
import { ref } from 'vue';
import Child from './components/Child.vue';

export default {
  setup() {

    const counter = ref(0);
    const incriment = () => {
      counter.value++;
    };
    const decriment = () => {
      counter.value--;
    };


    return {
      counter,
      incriment,
      decriment,
    };
  },
  components: { Child }
}
</script>


<template>
  <div>
    <button @click="incriment">+</button>
    <button @click="decriment">-</button>
    <Child :counter="counter" />
  </div>
</template>