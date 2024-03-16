<!-- <script>
import Admin from './components/Admin.vue';

export default {
  data() {
    return {
      items: [
        {
          name: 'iPhone 13',
          price: 100000,
          description: 'old iphone'
        },
        {
          name: 'iPhone 14',
          price: 200000,
          description: 'previous iphone'
        },
        {
          name: 'iPhone 15',
          price: 300000,
          description: 'actual iphone'
        },
      ],
      admin: false,
    };
  },
  methods: {
    addNewItem(item) {
      this.items.push(item);
      this.admin = !this.admin
    },
    showAdminMenu() {
      this.admin = !this.admin;
    }
  },
  components: { Admin }
}
</script>

<template>
  <div v-if="!admin">
    <ul>
      <li class="item" v-for="(item, i) in items" :key="i">
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
        <span>{{ item.description }}</span>
      </li>
    </ul>
    <button @click="admin = !admin">Show Admin Menu</button>
  </div>
  <Admin v-else @addNewItem="addNewItem" @showAdminMenu="showAdminMenu" :admin="admin" />
</template>

<style>
.item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
  border: 2px solid wheat;
  border-radius: 5px;
}
</style> -->

<script>
import Items from "./components/Items.vue";
import NewItem from "./components/NewItem.vue";
export default {
  components: {
    NewItem, Items,
  },
  data() {
    return {
      items: [
        {
          price: '123',
          title: 'Lorem',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.'
        },
        {
          price: '456',
          title: 'Lorem',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.'
        },
        {
          price: '789',
          title: 'Lorem',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.'
        },
      ],
      isAuthShow: false,
    }
  },
  methods: {
    authShow() {
      this.isAuthShow = true
    },
    authClose() {
      this.isAuthShow = false
    },
    addNewItem(newItem) {
      this.items.push({
        title: newItem.title,
        desc: newItem.desc,
        price: newItem.price,
      });
      newItem.title = ''
      newItem.desc = ''
      newItem.price = ''

      this.isAuthShow = false
    },
    deleteItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  },
}
</script>

<template>
  <div class="container" v-if="!isAuthShow">
    <div class="cards">
      <Items :items="items" @deleteItem="deleteItem"/>
    </div>
    <button @click="authShow">Add new item</button>
  </div>

  <NewItem @authClose="authClose" @addNewItem="addNewItem" :isAuthShow="isAuthShow" :newItem="newItem"/>
</template>

<style>
  .container > * {
    margin: 10px 0;
  }
  .cards {
    display: flex; 
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: black;
  }
</style>
<!-- <script>
import Child from './components/Child.vue';
import Child2 from './components/Child2.vue'
export default {
  components: {
    Child,
    Child2
  },
    data() {
        return {
          count: 0,
          items: [
            {
              title: 'IPhone',
              price: 1000,
              decription: 'The iPhone is a line of smartphones produced by Apple Inc.'
            },
            {
              title: 'Samsung',
              price: 900,
              decription: 'Samsung Group,[3] or simply Samsung (Korean: 삼성; RR: samseong [samsʌŋ]; stylized as SΛMSUNG),'
            },
            {
              title: 'Xiaomi',
              price: 700,
              decription: 'Xiaomi Corporation (/ˈʃaʊmi/;[2] Chinese: 小米), commonly known as Xiaomi and registered as Xiaomi Inc.,'
            },
          ]
        }
    },
    methods: {
        increment () {
          this.count++;
        },
        decrement () {
          this.count--;
        },
        incrementByAmount (num) {
          this.count+=num;
        },
        addItem(item) {
          this.items.push(item)
        },
        deleteItem(index) {
          this.items.splice(index, 1)
        }

    }
}
</script>

<template>
  <div>
    <Child2 v-for="(item, index) in items" :item="item" v-bind:key="index" @deleteItem="deleteItem"/>
    <Child @addItem="addItem" />
  </div>
</template>

<style>
.container {
 border: 1px solid black;
 margin: 10px;
}
</style> -->