<!-- <script>
import axios from 'axios';
export default {
  data() {
    return {
      resp: null,
      errored: false,
      loading: false,
      err:null
    }
  },
  mounted() {
    this.loading = true
    axios
      .get('https://jsonplaceholder.typicode.com/toos/1')
      .then(response => this.resp = response.data)
      .catch(err => {
        console.log(err)
        this.err = err.message
        this.errored = true
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

<template>
  <div>
    <span v-if="loading">Загрузка данных с сервера</span>
    <span v-else-if="errored">Ошибка на сервере. <br> {{ err }}</span>
    {{ errored && 'Ошибка на сервер' }}
    <div v-else>
      user:{{ resp?.userId }} <br>
      {{ resp?.title }}
    </div>


  </div>
</template> -->



<!-- <script>
import Child from './components/Child.vue';
export default {
  components: {
    Child
  },
  data() {
    return {
      property: 'Some property',
      counter: 0,
      bool: true
    }
  },
  methods: {
    destroy () {
      this.$destroy();
    }
  },
  beforeCreate() {
    // console.log(this.property);
    // console.log('Ничего не будет вызвано до меня');
    // console.log('------------------');
  },
  computed: {
    propertyComputed() {
      // console.log('I change when this.property changes');
      return this.property;
    },
  },
  created() {
    // console.log(this.property);
    this.property = 'Example property update'
    // console.log(this.property);
    // console.log('propertyComputed will update, as this.property is now reactive');
    setInterval(() => {
      this.counter++
    }, 1000)
    // console.log('------------------');
  },
  // beforeMount() {
  // },
  mounted() {

  },
  beforeUpdate() {
    // console.log(this.counter);
  },
  updated() {
    console.log('что то изменилось');
    // console.log(this.counter, '-----');
  },
  beforeDestroy() {
    console.log(this);
    // this.property = null
    // delete this.property
  },
  destroyed() {
    console.log(this);

  },


}
</script>

<template>
  <div>
    {{ counter }}
  </div>
  <button @click="bool = !bool">click</button>
  <button @click="destroy">click</button>
  <Child v-if="bool" />
</template> -->

<script>
import axios from 'axios'

export default {
  components: {
  },
  data() {
    return {
      property: 'Some property',
      counter: 0,
      bool: true,
      resp: null,
      myData: null,
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.resp = response.data)
  },
  mounted() {
    if (this.myData === null) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.myData = response.data;
        })
    }
  },
  updated() {
    if (this.myData === null) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.myData = response.data;
        })
    }
  },
} 
</script> 
 
<template>
  <div>
    <div v-if="myData && myData.length > 0">
      <ul>
        <li v-for="post in myData" :key="post.id">
          <p>{{ post.title }}</p>
          <h5>{{ post.body }}</h5>
        </li>
      </ul>
    </div>
    <button @click="getPosts">GetPosts</button>
  </div>
</template>