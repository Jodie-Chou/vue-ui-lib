import Vue from 'vue'
import App from './App.vue'
import zwUI from '../packages'

Vue.config.productionTip = false
Vue.use(zwUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
