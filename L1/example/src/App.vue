<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<script>
import Child from './Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
  data() {
    return {
      text: 'Hello world',
      counter: 0,
      flag: false,
      users: ["Michael", "Scottie", "Dennis", "Phil"],
      likes: 0
    }
  },
  mounted() {
    setInterval(() => this.counter++, 1000)
  },
  methods: {
    counterUp(){
      this.likes++
    }
  }      

}
</script>

<template>
  <h1>{{ text }}</h1>
  <span>Counter</span><strong>{{ counter }}</strong>
  <div :id="text1 ? '1' : '2'">

  <div v-if="flag">Пример</div>
  <div v-else>Пример с else</div>

  <!-- <button v-on:click="counterUp">{{likes}}</button> -->
  <button @click="counterUp">{{likes}}</button>

  <ul>
    <li v-for="(user, key) in users">
      {{user}}{{ key }}
    </li>
  </ul>
  
  <Child />
  <!-- <ul>
    <li v-for="user in users">
      {{user}}
    </li>
  </ul> -->


  </div>
</template>

<style scoped>

</style>
