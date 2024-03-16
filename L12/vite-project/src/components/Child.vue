<script setup>
import { ref } from 'vue';
import { useActions } from 'vuex-composition-helpers';

const name = ref('');
const gender = ref('');

const { callAddStud } = useActions(['callAddStud'])

const addStud = () => {
  const obj = { name: name.value, gender: gender.value, }
  callAddStud(obj)
}


</script>

<template>
  <form @submit.prevent="addStud" class="form">
    <input type="text" v-model="name" placeholder="Student name" required>
    <label>
      <span>Male</span>
      <input type="radio" name="gender" v-model="gender" value="male" required>
    </label>
    <label>
      <span>Female</span>
      <input type="radio" name="gender" v-model="gender" value="female" required>
    </label>
    <button type="submit">Add</button>
  </form>
</template>

<style>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}
</style>