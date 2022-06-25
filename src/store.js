import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlRegistro: "http://localhost:3000/usuarios/",
    urlLogin: "http://localhost:3000/usuarios/login",
    usuario: {
      nombre: "",
      token: "",
      email: "",
      rol: "",
    },
  },
  actions: {},
  mutations: {},
});
