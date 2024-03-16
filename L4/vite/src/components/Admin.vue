<script>
export default {
  props: {
    admin: Boolean,
  },

  data() {
    return {

    }
  },
  methods: {
    addNewItem() {
      const item = {
        name: this.name,
        price: this.price,
        description: this.description,
      }
      this.$emit('addNewItem', item)
    },
    showAdminMenu() {
      this.$emit('showAdminMenu')
    }
  }
}
</script>

<template>
  <form @submit.prevent="addNewItem" class="form">
    <input v-model="name" required type="text" placeholder="name">
    <input v-model="price" required type="number" placeholder="price">
    <input v-model="description" required type="text" placeholder="description">
    <button type="submit">Add</button>
  </form>
  <button @click="showAdminMenu">Back</button>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>