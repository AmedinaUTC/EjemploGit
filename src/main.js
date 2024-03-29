import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(BootstrapVue,VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
