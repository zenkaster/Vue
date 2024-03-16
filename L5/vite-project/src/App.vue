<script>
import FirstChild from "./components/FirstChild.vue"
import SecondChild from "./components/SecondChild.vue"
export default {
  components: {
    FirstChild, SecondChild
  },
  data() {
    return {
      text: '',
      names: ["Иван", "Мария", "Петр", "Анастасия", "Сергей"]
    }
  },
  methods: {
    getInput(text) {
      this.text = text
      console.log(this.names);
    }
  }
}
</script>

<template>
  <div class="task1">
    <FirstChild @getInput="getInput"/>
    <div>{{ text }}</div>

    <br/><br/><br/>

  </div>

  <div class="task2">
    <SecondChild v-for="name in names" :name="name" />
  </div>
</template>

<style>

</style>