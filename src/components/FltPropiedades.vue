<template>
  <section>
    <NavBar />
    <div class="jumbotron container mt-5 mb-5 text-center divPD">
      <h2>Propiedades en {{ this.titulo }}</h2>
      <hr />
      <div class="row text-left">
        <div
          class="col-4 mt-5"
          v-for="(propiedad, index) in this.$store.state.propiedadesFiltradas"
          :key="index"
        >
          <Card :propiedadCard="propiedad" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";
import Card from "./CardPropiedades.vue";
export default {
  name: "src-components-flt-propiedades",
  props: ["tipo", "titulo"],
  components: {
    Card,
    NavBar,
  },
  created() {
    this.get(this.tipo);
  },
  beforeUpdate() {
    if (this.tituloViejo != this.titulo) {
      this.get(this.tipo);
      this.tituloViejo = this.titulo;
    }
  },
  data() {
    return {
      tituloViejo: this.titulo,
    };
  },
  methods: {
    get(tipo) {
      this.$store.dispatch("getFltPropiedades", tipo);
    },
  },
  computed: {},
};
</script>

<style scoped lang="css"></style>
