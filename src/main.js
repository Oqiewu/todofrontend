import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Vuex.Store({
   store
})

Vue.use(Vuex)
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
