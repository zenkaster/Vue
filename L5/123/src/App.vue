<script>
export default {
  data() {
    return {
      str: 'Привет',
      num: 123,
      a: 15,
      b: 15,
      arr: [
        1, 2, 3, 4, 5, 6
      ],
      bool: false
    }
  },
  methods: {
    // reversedStr () {
    //   return this.str.split('').reverse().join('')
    // }
  },
  computed: {
    reversedStr: function () {
      return this.str.split('').reverse().join('')
    }
  }
}
</script>

<template>
  <!-- <div v-for="num in arr">
    {{ reversedStr }}
    {{ reversedStr }}
    {{ reversedStr }}
    <input type="text" v-model="str">
  </div> -->

  a=5
  b=10
  <div v-if="a == b">a==b</div>
  <div v-else-if="a > b">a>b</div>
  <div v-else> a {{ `<` }} b </div>


      <div @click="bool = !bool" v-if="bool">Верно</div>
      <div @click="bool = !bool" v-else>Не верно</div>
</template>

<style></style>