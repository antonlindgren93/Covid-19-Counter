import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    someValue: 0
  },
  mutations: {
    someValue(state) {
      state.someValue += 1
    }
  },
  actions: {},
  modules: {}
})