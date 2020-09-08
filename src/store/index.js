import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    failedlogin: null,
  },
  mutations: {
    failed(state, n) {
      state.failedlogin = n;
    },
  },
  actions: {},
  modules: {},
});
