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
  mounted() {
    console.log(this.tipo);
    console.log(this.$store.dispatch("getFltPropiedades", this.tipo));
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css"></style>
