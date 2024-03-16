<script>
export default {
  data() {
    return {
      inputValue: '',
      tasks: ['Alex', 'Max', 'Ron']
    }
  },
  methods: {
    changeInput(e) {
      this.inputValue = e.target.value
    },
    addTask() {
      this.tasks.push(this.inputValue)
    },
    deleteTask(id) {
      this.tasks.splice(id, 1);
    },
    doubleCount() {
      console.log('Double Count');
      return this.tasks.length * 2;
    }

  },
  computed: {
    doubleCount() {
      console.log('Double Count');
      return this.tasks.length * 2;
    }
  }
}
</script>

<template>
  <div>
    <input type="text" :value="inputValue" @input="changeInput">
    <button @click="addTask">Добавить</button>
    <hr>
    <h1>Список дел</h1>
    <ul v-if="tasks.length > 0">
      <li v-for="value, key in tasks">
        <div class="task">
          <div>{{ key }} {{ value }}</div>
          <button @click="deleteTask(key)">Удалить</button>
        </div>
      </li>
    </ul>
    <hr>
    <h2>Всего дел: {{ tasks.length }}. Удвоенное количество: {{ doubleCount }}</h2>
  </div>
</template>

<style>
.task {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
}
</style>





























<!-- <script>
export default {
  data() {
    return {
      name: '',
      age: 25,
      mail: '',
      pass: '',
      repPass: '',
      gender: '',
      showForm: true,
    }
  },
  methods: {
    showRes() {
      if (this.pass == this.repPass) {
        this.showForm = false
      }
      else {
        alert('Пароли не совпадают')
      }
    },
    back() {
      // this.name = ''
      // this.age = 25
      // this.mail = ''
      // this.pass = ''
      // this.repPass = ''
      // this.gender = ''
      this.showForm = true
    }
  },
}
</script>

<template>
  <form v-if="showForm" class="form" @submit.prevent="showRes">
    <label>
      <span>Имя пользователя</span>
      <input type="text" v-model="name" required>
    </label>
    <label>
      <span>Возраст {{ age }}</span>
      <input type="range" min="0" max="100" step="1" value="25" v-model="age">
    </label>
    <label>
      <span>Электронная почта</span>
      <input type="email" v-model="mail">
    </label>
    <label>
      <span>Пароль</span>
      <input type="password" v-model="pass" required>
    </label>
    <label>
      <span>Подтверждение пароля</span>
      <input type="password" v-model="repPass" required>
    </label>
    <div class="gen-block">
      <span>Пол:</span>
      <div class="under-block">
        <label>
          <span>Мужской</span>
          <input type="radio" name="gender" value="Мужской" v-model="gender">
        </label>
        <label>
          <span>Женский</span>
          <input type="radio" name="gender" value="Женский" v-model="gender">
        </label>
      </div>
    </div>
    <button type="submit">Отправить</button>
  </form>
  <div class="result" v-else>
    <span v-if="name">Имя: {{ name }}</span>
    <span v-if="age">Возраст: {{ age }}</span>
    <span v-if="mail">Почта: {{ mail }}</span>
    <span v-if="pass">Пароль: {{ pass }}</span>
    <span v-if="gender">Пол: {{ gender }}</span>
    <button @click="back">Назад</button>
  </div>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.gen-block {
  display: flex;
  flex-direction: column;
}

.under-block {
  display: flex;
  justify-content: space-between;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>




 -->






























































<!-- <script>
export default {
  data() {
    return {
      test: '',
      colorClass: '',
    }
  },
  methods: {
    changeColor() {
      switch (this.test.toLowerCase()) {
        case 'classwork':
          this.colorClass = "blue"
          break;
        case 'homework':
          this.colorClass = "red"
          break;
        case 'nothing':
          this.colorClass = "green"
          break;

        default:
          this.colorClass = ""
          break;
      }
    }
  },
}
</script>

<template>
  <div>
    <div :class="`box ${colorClass}`"></div>
    <input type="text" v-model.trim="test" @input="changeColor">
  </div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
  border: 2px solid white
}

.blue {
  background-color: blue;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style> -->