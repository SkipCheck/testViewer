<template>
  <div id="app">
    <table class="table-app">
        <thead>
            <tr>
              <th scope="col">ФИО</th>
              <th scope="col">Дата рождения</th>
              <th scope="col">Пол</th>
              <th scope="col">Организация</th>
              <th scope="col">Должность</th>
            </tr>
        </thead>
        <tbody>
            <Row v-for="employee in employees" class="row" 
            :key = "employee.name"
            :people="employee"/>
        </tbody>
    </table>
  </div>
</template>

<script>

import Row from './components/Row.vue'
import {employees} from './data/employees.js'

export default {
  name: 'App',
  components: {
    Row
  },
  data(){
    return{
      employees : employees
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
