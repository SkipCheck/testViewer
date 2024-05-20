import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//конвертируем дату рождения
Vue.filter('formatDate', function(value) {
  const date = new Date(value * 1000)
  return date.toLocaleDateString('ru-RU')
})

//функция определения пола
Vue.filter('formatSex', function(value) {
  return value ? 'женский' : 'мужской'
})

new Vue({
  render: h => h(App),
}).$mount('#app')