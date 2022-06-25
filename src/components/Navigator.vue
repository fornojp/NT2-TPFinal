<template>
  <section>
    <NavBar />
    <div class="navigator">
      <div class="container-fluid">
        <div class="row">
          <div class="divTamaño">
            <div
              id="carouselExampleControls"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/images/img1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/img2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/img3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="prev"
              ></button>
              <button
                class="carousel-control-next"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="next"
              ></button>
            </div>
          </div>
          <div class="info">
            <div>
              <p>
                Con 30 años en el mercado, FOUR GROUP se caracteriza por ser una
                empresa joven, emprendedora y dinámica. Como Inmobiliaria
                Constructora alcanzó el liderazgo indiscutido en la Zona Norte
                del Gran Buenos Aires, impulsado por un enfoque diferente a la
                hora de administrar propiedades, con características poco
                frecuentes en estos tiempos: bases éticas, fuerte presencia
                publicitaria y constante renovación. La nuestra, es una
                Organización Empresaria desarrollada profesionalmente para
                brindar solución integral a las necesidades inmobiliarias de
                personas y familias.
              </p>
              <button type="button" class="btn btn-light btnConoce">
                Conoce Mas De Nosotros
              </button>
            </div>
          </div>
        </div>
        <div class="container mt-5 mb-5 text-center divPD">
          <h2>Propiedades Destacadas</h2>
          <hr />
          <div class="row text-left">
            <!-- <div class="col-4 mt-5" v-for="(card, index) in cards" :key="index">
            <Card :card="card" />
          </div> -->

            <div class="col-4 mt-5">
              <Card />
            </div>
            <div class="col-4 mt-5">
              <Card />
            </div>
            <div class="col-4 mt-5">
              <Card />
            </div>
            <div class="col-4 mt-5">
              <Card />
            </div>
            <div class="col-4 mt-5">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Tasaciones />
    </div>
  </section>
</template>

<script>
import Card from "./CardPropiedades.vue";
import Tasaciones from "./Tasaciones.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "src-components-navigator",
  components: {
    Card,
    Tasaciones,
    NavBar,
  },
  props: [],
  mounted() {},
  data() {
    return {
      cards: [],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.navigator {
  display: flex;
  flex-wrap: wrap;
}
.divTamaño {
  width: 50%;
  display: flex;
}
.info {
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: red;
  color: white;
}
.info div {
  margin: 20px;
}
.btnConoce {
  color: #7b8294;
}
.btnConoce:hover {
  color: white;
  background: #7b8294;
  font-size: 20px;
  border: none;
}

hr {
  background-color: black;
}
</style>
