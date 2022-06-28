
<template>
  <section>
    <NavBar />
    <h1 class="text-center mt-4 mb-4">DETALLE DE LA PROPIEDAD</h1>
    <div class="card" style="max-width:1540px;">
     <div class="row no-gutters ">
      <div class="col-md-6">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" :src="this.$store.state.propiedad.img[0]" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" :src="this.$store.state.propiedad.img[1]" alt="Second slide">
    </div>..
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

      </div>
    <div class="col-md-2 ml-5 mt-5">
      <div>
         <p class="card-text mb-5">Tipo de propiedad : {{this.$store.state.propiedad.tipo_de_propiedad}}</p>
         <p class="card-text mb-5">Barrio: {{this.$store.state.propiedad.barrio}}</p>
         <p class="card-text mb-5">Dirección : {{this.$store.state.propiedad.domicilio}}</p>
          <p class="card-text mb-5">Moneda : {{this.$store.state.propiedad.moneda}}</p>
         
      </div>
    </div>
     <div class="col-md-2 ml-5 mt-5">
      <div>
         <p class="card-text mb-5">Tipo : {{this.$store.state.propiedad.tipo}}</p>
         <p class="card-text mb-5">Antiguedad: {{this.$store.state.propiedad.antiguedad}}</p>
         <p class="card-text mb-5">Condición : {{this.$store.state.propiedad.condición}}</p>
          <p class="card-text mb-5">Precio : {{this.$store.state.propiedad.precio}}</p>
       <router-link to="/navigator">
           <a href="" class="btn btn-danger mb-5">Volver</a>
            </router-link>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "src-components-card-propiedades",
  props: [],
  mounted() {
  this.$store.dispatch("getPropiedad");
  },
  data() {
    return {};
  },
  components: {
    NavBar,
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.card-body {
  /* border: solid 2px #7b8294; */
  border-radius: 0px 0px 20px 20px;
  background-color: rgb(241, 241, 241);
}
.card {
  border-radius: 20px 20px 20px 20px;
}
p{
font-size: 20px;
}
.volverA {
  color: red;
}
</style>
