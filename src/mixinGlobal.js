import Vue from "vue";

const miMixinGlobal = {
  methods: {
    saludar() {
      return `¡ Hola ${this.$store.state.usuario.nombre}  !`;
    },
  },
};

Vue.mixin(miMixinGlobal);
