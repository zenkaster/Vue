<script>
export default {


  data() {
    return {
      str: 'Hello world!',
      num: 123,
      obj: {
        name: 'Temirlan',
        age: 1000,
      },
      arr: [
        { name: 123 },
        { name: 234 },
        { name: 345 },
      ],
      bool: true,
      className: 'red',
      users: ['', '', '',],
      inputContent: '',

    }
  },
  methods: {
    changeColor() {
      if (this.className == 'red') {
        this.className = 'blue';
      } else {
        this.className = 'red';
      }
    }
  }



}
</script>

<template>
  <div>

    <span v-if="count % 2 == 0">четное</span>
    <span v-else>нечетное</span>

    <div :class="className">
      {{ str }}
    </div>
    <button v-on:click.once="changeColor">click</button>
    <button @click.once="changeColor">Click</button>

  </div>

  <!-- 
  <div v-for="(obj, i) in arr">
    {{ i + 1 }} : {{ obj.name }}
  </div> -->

  <!-- <button v-on:click=""></button> -->


  <!-- <label>
    <h2></h2>
    <input type="text" v-model="inputContent" placeholder="Введите ваше имя">
  </label>

  <h1>Привет, {{ inputContent }}!</h1> -->
</template>

<style>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>