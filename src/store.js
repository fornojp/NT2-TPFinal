import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlRegistro: "http://localhost:3000/usuarios/",
    urlLogin: "http://localhost:3000/usuarios/login",
    //
    usuarios: [],

    usuario: {
      nombre: "",
      token: "",
      email: "",
      rol: "",
    },
  },
  actions: {
    //esto
    async getUsuarios({ commit }) {
      await axios
        .get(this.state.urlRegistro)
        .then(({ data }) => {
          commit("getUsuariosM", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteUsuario({ commit }, id) {
      await axios
        .delete(this.state.urlRegistro + id)
        .then(({ data }) => {
          commit("deleteUsuarioM", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    //esto
    getUsuariosM(state, data) {
      state.usuarios = data;
      //console.warn(usuarios)
    },
    deleteUsuarioM(state, data) {
      let index = state.usuarios.findIndex((usuario) => usuario.id == data.id);
      if (index == -1) throw new Error("Usuario no encontrado");
      state.usuarios.splice(index, 1);
    },
  },
});
