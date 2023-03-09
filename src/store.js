import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state () {
      return {
        label_id: 1
      }
    },
    mutations: {
      increment (state) {
        state.label_id++
      }
    }
})