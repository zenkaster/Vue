<script>
import User from './components/User.vue';
export default {
  components: {
    User,
  },
  data() {
    return {
      users: [
        {
          name: 'Alex',
          pass: '1234',
        },
        {
          name: 'John',
          pass: '2222',
        },
        {
          name: 'Tom',
          pass: '5123',
        },
        {
          name: 'Mia',
          pass: '0000',
        },
      ]
    }
  },
  methods: {
  },

}
</script>

<template>
  <div>
    <ul>
      
    </ul>
  </div>
</template>



<!-- <script>
import Child from './components/Child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementByAmount(num) {
      this.count += num;
    },
  }
}
</script>

<template>
  <div>
    {{ count }}
    <Child @plussed="increment" />
  </div>
</template>
  @decrement="decrement" @incrementByAmount="incrementByAmount"  -->