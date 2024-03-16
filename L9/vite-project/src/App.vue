<script>
export default {
  components: {
  },
  data() {
    return {
      id: undefined,
      str: 'Всем привет',
      posts: [
        {
          id: 0,
          title: '123123213',
          description: 'asdsasdsad',
          liked: false,
          comments: [],
        },
        {
          id: 0,
          title: '123123213',
          description: 'asdsasdsad',
          liked: false,
          comments: [],
        },
        {
          id: 2,
          title: '123123213',
          description: 'asdsasdsad',
          liked: false,
        }
      ]
    }
  },
  methods: {
    changeStr(obj) {
      console.log(obj);
      this.id = obj.id
      this.str = obj.newStr
    },
    changeComments({ id, comment }) {
      const post = this.posts.find(post => post.id == id)
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push(comment)
      post.newUser = '123123'
      console.log(this.posts);
    }
  }
}
</script>

<template>
  <div>
    <!-- {{ id }} <br> -->
    <router-link to="/">Main</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view :id="id" :str="str" @changeStr="changeStr" @changeComments="changeComments"></router-view>
  </div>
</template>

<style scoped>
.router-link-active {
  color: gray;
}

.router-link-active:hover {
  cursor: default;
}
</style>