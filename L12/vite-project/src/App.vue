<script setup>
import Child from './components/Child.vue';
import Student from './components/Student.vue'
import {
  // useStore,
  useGetters,
  useActions
} from 'vuex-composition-helpers';


// const store = useStore();
const { students, showForm } = useGetters(['students', 'showForm'])
const { changeForm } = useActions(['changeForm']);


</script>

<template>
  <div class='container'>
    <div v-if="!showForm" class="students">
      <Student v-for="stud in students" :item="stud" />
    </div>
    <Child v-if="showForm" />

    <button class="btn" @click="changeForm">{{ !showForm ? 'New Stud' : 'Go back' }}</button>

  </div>
</template>

<style lang="scss">
.container{

  .students{
    color: red;
    &:hover{
      color:blue
    }
  }
}

.students {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  border: 2px solid wheat;
  border-radius: 5px;
  padding: 5px 10px;

}

.btn {
  margin-top: 20px;
}
</style>