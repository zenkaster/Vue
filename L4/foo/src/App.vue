<script>
import CustomButton from './components/CustomButton.vue';
export default {
  data() {
    return {
      items:[
        {
          name:'',
          price:123123,
          description:'123123'
        },
      ]
    };
  },
  components: { CustomButton }
}
</script>

<template>
  <div>

    <CustomButton innerText="Кликни на меня" :bgColor="color" textColor="white" />
  </div>
</template>