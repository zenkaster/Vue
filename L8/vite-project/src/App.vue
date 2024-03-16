<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: 'New_1',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis nulla ad explicabo illo omnis.'
        },
        {
          id: 2,
          title: 'New_2',
          description: 'ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis nulla ad explicabo illo omnis.'
        },
        {
          id: 3,
          title: 'New_3',
          description: 'dolor sit amet consectetur adipisicing elit. Est blanditiis nulla ad explicabo illo omnis.'
        },
        {
          id: 4,
          title: 'New_4',
          description: 'sit amet consectetur adipisicing elit. Est blanditiis nulla ad explicabo illo omnis.'
        },
      ]
    }
  },
  methods: {
    deleteNews() {
      this.news = []
    }
  }
}
</script>

<template>
  <div>
    <h1>It's App Component</h1>


    <router-link to='/'>Go To Home</router-link><br>
    <router-link to='/about'>Go To About</router-link>

    <router-view :news="news" @deleteNews="deleteNews"></router-view>
  </div>
</template>