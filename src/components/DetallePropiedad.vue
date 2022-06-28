<template>
  <section>
    <NavBar />
    <div class="jumbotron container mt-4">
      <div>
        <h2 class="text-center">DETALLE DE LA PROPIEDAD</h2>
        <hr />
      </div>
      <div class="divContenedor">
        <div class="divCarrusel">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="this.$store.state.propiedad.img[0]"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="this.$store.state.propiedad.img[1]"
                  alt="Second slide"
                />
              </div>
              ..
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="divInfoContainer">
          <div class="divInfo">
            <p class="">
              <b>Tipo de propiedad :</b>
              {{ this.$store.state.propiedad.tipo_de_propiedad }}
            </p>
            <p class="">
              <b>Dirección:</b> {{ this.$store.state.propiedad.domicilio }}
            </p>
            <p class="">
              <b>Barrio:</b> {{ this.$store.state.propiedad.barrio }}
            </p>
            <p class=""><b>Tipo:</b> {{ this.$store.state.propiedad.tipo }}</p>
            <p class="">
              <b>Antiguedad:</b> {{ this.$store.state.propiedad.antiguedad }}
            </p>
            <p class="">
              <b>Condición:</b> {{ this.$store.state.propiedad.condición }}
            </p>
            <p class="">
              <b>Descripcion:</b>
              <br />
              {{ this.$store.state.propiedad.descripcion }}
            </p>
            <h4 class="precio">
              {{ this.$store.state.propiedad.precio }}
            </h4>
          </div>
        </div>
      </div>
      <hr />
      <div class="divBotton">
        <router-link to="/navigator">
          <button href="" class="btn btn-danger">Volver</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "src-components-card-propiedades",
  props: ["id"],
  mounted() {
    this.$store.dispatch("getPropiedad", this.id);
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
.divContenedor {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}
.divCarrusel {
  width: 50%;
  height: 50%;
}
.divInfoContainer {
  display: flex;
  width: 50%;
  height: 50%;
  flex-direction: column;
  align-items: center;
}
.divBotton {
  display: flex;
  flex-direction: column;

  height: 20%;
  align-items: flex-end;
}
.divInfo {
  width: 80%;
}
.volverA {
  color: red;
}
hr {
  background: black;
  height: 1px;
}
</style>
