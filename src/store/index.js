import Vue from "vue";
import Vuex from "vuex";
import Todo from './todo' //Import the todo module
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Todo //Reference the Todo module
  },
  plugins: [createPersistedState()]
});
