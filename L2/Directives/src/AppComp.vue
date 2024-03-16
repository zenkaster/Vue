<script>
import ChildComp from './components/childComp.vue';
export default {
  components: { ChildComp },
  data() {
    return {
      // counter: 123123,
      // str: '',
      users: [
        {
          name: 'John',
          age: 42,
          gender: 'male'
        },
        {
          name: 'Mia',
          age: 20,
          gender: 'female'
        },
        {
          name: 'Rick',
          age: 55,
          gender: 'male'
        },
        {
          name: 'Jane',
          age: 15,
          gender: 'female'
        },
        {
          name: 'Louis',
          age: 10,
          gender: 'female'
        },
        {
          name: 'Mich',
          age: 5,
          gender: 'male'
        },
        {
          name: 'Bob',
          age: 101,
          gender: 'male'
        },
        {
          name: 'Tim',
          age: 30,
          gender: 'female'
        },
        {
          name: 'Tom',
          age: 29,
          gender: 'male'
        },
        {
          name: 'Alex',
          age: 18,
          gender: 'male'
        },
      ],
    }
  }
}
</script>

<template>
  <div class="parent">
    <h1>Это родитель</h1>
    <!-- <input type="text" v-model="str"> -->
    <!-- <ChildComp :counter="counter" :text="str" /> -->
    <ChildComp :users="users"/>
  </div>
</template>

<style>
.parent {
  border: 2px solid red;
  margin-bottom: 2px;
  padding: 10px;
}
</style>