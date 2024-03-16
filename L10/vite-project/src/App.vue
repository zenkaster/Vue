<!-- <script>
import { ref } from 'vue';
import Child from './components/Child.vue';
export default {
  components: {
    Child,
  },
  setup() {
    const arr = ref([
      {
        id: 0,
        str: 'str 0',
      },
      {
        id: 1,
        str: 'str 1',
      },
      {
        id: 2,
        str: 'str 2',
      },
    ])

    return {
      arr,
    }
  },
}
</script> -->
<script setup>
import { ref } from 'vue';
import Child from './components/Child.vue';

const arr = ref([
  {
    id: 0,
    str: 'str 0',
  },
  {
    id: 1,
    str: 'str 1',
  },
  {
    id: 2,
    str: 'str 2',
  },
])

const incriment = (index) => {
  const item = arr.value[index];
  item.id++
}

</script>

<template>
  <div>
    <Child :arr="arr" @incriment="incriment" />
  </div>
</template>