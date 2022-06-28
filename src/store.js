import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlRegistro: "http://localhost:3000/usuarios/",
    urlLogin: "http://localhost:3000/usuarios/login",
    urlPropiedades: "http://localhost:3000/propiedades/",

    usuarios: [],
    propiedades: [],
    propiedad: {},
    propiedadActualizar: "",
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
      let headers = { authorization: this.state.usuario.token };
      await axios
        .get(this.state.urlRegistro, { headers: headers })
        .then(({ data }) => {
          commit("getUsuariosM", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPropiedades({ commit }) {
      await axios
        .get(this.state.urlPropiedades)
        .then(({ data }) => {
          commit("getPropiedades", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPropiedad({ commit }, id) {
      await axios
        .get(this.state.urlPropiedades + id)
        .then(({ data }) => {
          commit("getPropiedad", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteUsuario({ commit }, id) {
      let headers = { authorization: this.state.usuario.token };
      await axios
        .delete(this.state.urlRegistro + id, { headers: headers })
        .then(() => {
          commit("deleteUsuarioM", id);
        })
        .catch((err) => {
          console.log("error delete", err);
        });
    },
    async actualizarRol({ commit }, nuevoUsuario) {
      console.log("desde store", nuevoUsuario, commit);
      let headers = { authorization: this.state.usuario.token };
      await axios
        .put(this.state.urlRegistro, nuevoUsuario, { headers: headers })
        .then(() => {
          commit("actualizarRolM", nuevoUsuario);
        })
        .catch((err) => {
          console.log("error actualizar", err);
        });
    },
    async enableActualizar({ commit }, usuario) {
      console.log("desde store", usuario, commit);
      commit("enableActualizarM", usuario);
    },
    async deletePropiedad({ commit }, id) {
      let headers = { authorization: this.state.usuario.token };
      await axios
        .delete(this.state.urlPropiedades + id, { headers: headers })
        .then(() => {
          commit("deletePropiedadM", id);
        })
        .catch((err) => {
          console.log("error delete", err);
        });
    },
    async actualizarPropiedad({ commit }, nuevaPropiedad) {
      let headers = { authorization: this.state.usuario.token };
      await axios
        .put(this.state.urlPropiedades, nuevaPropiedad, { headers: headers })
        .then(() => {
          commit("actualizarPropiedad");
        })
        .catch((err) => {
          console.log("error delete", err);
        });
    },
  },
  mutations: {
    //esto
    getUsuariosM(state, data) {
      let data2 = data.map((e) => ({ ...e, isDisabled: true }));
      state.usuarios = data2;
      console.warn(state.usuarios);
    },
    getPropiedades(state, data) {
      state.propiedades = data;
    },
    getPropiedad(state, data) {
      state.propiedad = data;
    },
    actualizarRolM(state, data) {
      let index = state.usuarios.findIndex(
        (usuario) => usuario._id == data._id
      );
      data.isDisabled = true;
      state.usuarios[index] = data;
      //console.warn(data)
      //console.warn(state.usuarios[index])
    },
    enableActualizarM(state, data) {
      let index = state.usuarios.findIndex(
        (usuario) => usuario._id == data._id
      );
      state.usuarios[index] = data;
      console.warn(state.usuarios[index].isDisabled);
      //console.warn(state.usuarios[index])
    },

    deleteUsuarioM(state, data) {
      let index = state.usuarios.findIndex((usuario) => usuario._id == data);

      if (index == -1) throw new Error("Usuario no encontrado");

      state.usuarios.splice(index, 1);
    },
    deletePropiedadM(state, data) {
      let index = state.propiedades.findIndex(
        (propiedad) => propiedad._id == data
      );

      if (index == -1) throw new Error("Propiedad no encontrado");

      state.propiedades.splice(index, 1);
    },
    actualizarPropiedad() {},
  },
});
