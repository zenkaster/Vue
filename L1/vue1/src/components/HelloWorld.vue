<script setup>

defineProps({
  test: Array,
})

</script>

<template>
  <ul>
    <li v-for="item in test">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped></style>
