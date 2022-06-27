<template>
  <section>
    <NavBar />
    <div class="jumbotron container">
      <h2>Administrador de Propiedades</h2>
      <hr />
      <br />
      <div
        v-for="(propiedad, index) in this.$store.state.propiedades"
        :key="index"
      >
        <div class="accordion" id="accordionExample">
          <div class="card mt-4">
            <div class="card-header drop" id="headingOne">
              <div class="divAcordeon">
                <button
                  class="btn text-left btnColapse"
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#n' + index"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <svg
                    width="24"
                    height="24"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H12M18 12H12M12 12V6M12 12V18"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {{ propiedad.domicilio }} -
                  {{ propiedad.barrio }}
                </button>
                <div>
                  <button
                    class="btn btn-danger mr-4"
                    @click="deletePropiedad(propiedad._id)"
                  >
                    Borrar
                  </button>
                  <button class="btn btn-secondary" @click="editar(propiedad)">
                    Actualizar
                  </button>
                </div>
              </div>
            </div>

            <div
              :id="'n' + index"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p>Tipo de Operacion {{ propiedad.tipo }}</p>
                <p>Cant. Dormitorios: {{ propiedad.dormitorios }}</p>
                <p>Antiguedad: {{ propiedad.antiguedad }}</p>
                <p>Condición: {{ propiedad.condición }}</p>
                <p>Descripcion: {{ propiedad.descripcion }}</p>
                <p>Precio: {{ propiedad.precio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "src-components-administrar-propiedades",
  props: [],
  components: {
    NavBar,
  },
  mounted() {
    // console.log(this.$store.state.propiedades);
    if (this.$store.state.usuario.rol == "administrador") {
      this.$store.dispatch("getPropiedades");
    } else {
      this.$router.push({
        path: "/navigator",
      });
    }
  },
  data() {
    return {};
  },
  methods: {
    deletePropiedad(id) {
      this.$store.dispatch("deletePropiedad", id);
    },
    editar(propiedad) {
      // console.log(propiedad);
      this.$store.state.propiedadActualizar = propiedad;
      console.log(this.$store.state.propiedadActualizar);
      this.$router.push({
        path: "/actpropiedades",
      });
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: #e2e2e2;
  border-radius: 10px;
  margin-top: 40px;
}
.card {
  background-color: black;
}
.btn {
  color: white;
}
.card-body {
  background-color: #e2e2e2;
}
.divAcordeon {
  display: flex;
  justify-content: space-between;
}
</style>
