<!-- <script>
import axios from 'axios'
export default {
  data() {
    return {

      resp: null,
      ttt: 0,
    }
  },
  methods: {
    foo() {
      console.log('foo method');
      this.ttt += 1000
      console.log(this.ttt);
    }
  },
  beforeCreate() {
    // setTimeout(() => {
    //   console.log(this.ttt, ' секунд прошло');
    //   this.ttt += 1
    // }, 1000)
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.resp = response.data)

  },
  beforeUpdate() {
    console.log('beforeUpdate');

  },
  updated() {
    console.log('updated');

  },
  beforeDestroy() {
    console.log('beforeDestroy');

  },
  destroyed() {
    console.log('destroyed');

  }
}
</script>

<template>
  <div>
    <h1>Привет мир</h1>
    <button @click="foo">Click</button>
    {{ resp }}
  </div>
</template> -->
<script>
export default {
  data() {
    return {
      resp: null,
      posts: {
        userId: null,
        id: null,
        title: '',
        body: '',
      }
    }
  },
  methods: {

    getPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.resp = response.data);
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="id">
        <span>{{ post.userId }}</span>
        <span>{{ post.id }}</span>
        <span>{{ post.title }}</span>
        <span>{{ post.body }}</span>
      </li>
    </ul>
  </div>
</template>

<style ></style>









<!-- 
  Необходимо аналог твитера
  На главной странице выводятся все посты
  Должна быть возможность заходить в пост, 
  лайкать, изменять и удалять пост, комментировать*(доп задание)
  Также возможность создавать новый пост
 -->






















