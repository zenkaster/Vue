<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
      userName: null,
      arr: ['a', 'as', 'asd', 'asd'],
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
      obj: {
        temp: false,
      },
      seen: false,
      a: 2,
      b: 3,
    }
  },
  methods: {
    increment() {
      this.count++
      // if (this.count % 2 == 0) {
      //   this.seen = true
      // } else {
      //   this.seen = false
      // }
      this.seen = !this.seen
    },
    decrement() {
      this.count--
      // if () {
      //   this.seen = true
      // } else {
      //   this.seen = false
      // }
    },
  }
}
</script>

<template>
  <div class="box">
    <h1>Привет, мир</h1>
    <span :class="count % 2 == 0 ? 'text' : ''">{{ count }}</span>
    <span v-if="count % 2 == 0">Четное</span>
    <span v-else>Нечетное</span>
    <!-- <button :disabled="seen">disabled</button> -->
    <!-- <span>{{ userName }}</span>
    <span>{{ arr }}</span>
    <span>{{ obj }}</span> -->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <!-- <HelloWorld :test="arr" /> 
      
    <span> {{ a }} + {{ b }} = </span>
    <input type="text" v-model="userName">
    <span v-if="+userName === a + b">Верно</span>
    <span v-else>Не верно</span>
    <span>
      inp {{ typeof (userName) }} <br>
      a+b {{ typeof (a + b) }}
    </span>-->

  </div>
</template>

<style>
.box {
  width: 300px;
  height: 300px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text {
  color: blue;
}
</style>