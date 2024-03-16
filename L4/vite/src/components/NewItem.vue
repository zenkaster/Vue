<script>
export default {
  props: {
    isAuthShow: Boolean,
  },
  data() {
    return {
      newItem: {
        price: '',
        title: '',
        desc: ''
      }
    }
  },
  methods: {
    addNewItem() {
      this.$emit("addNewItem", this.newItem)
    },
    authClose() {
      this.$emit("authClose")
    }
  },
}
</script>

<template>
    <div class="auth__container" v-if="isAuthShow">
      <form @submit.prevent="addItem">
        <div>
          <label>Title: </label>
          <input type="text" v-model="newItem.title">
        </div>
        <div>
          <label>Description: </label>
          <input type="text" v-model="newItem.desc">
        </div>
        <div>
          <label>Price: </label>
          <input type="number" v-model="newItem.price">
        </div>

        <button type="submit" @click="addNewItem">Add</button>
      </form>
      <button @click="authClose">Close</button>
    </div>
</template>

<style>
    .auth__container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px solid white;
      border-radius: 10px;
      background-color: black;
      padding: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
</style>