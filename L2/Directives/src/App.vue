<script >
import Child from './components/child.vue';
export default {
  components: { Child },
  data() {
    return {
      number: '123'
    }
  },
  methods: {
    testFoo() {
      console.log(123);
    }
  },
}
</script>

<template>
  <Child :str="number" :foo="testFoo" />
</template>

<style></style>
