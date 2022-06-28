<template>
  <section>
    <NavBar />
    <div class="jumbotron container">
      <h2>Administrador de Propiedades</h2>
      <hr />
      <div class="divNav">
        <h5 class="alert alert-primary sinMargin">
          Se encontraron {{ this.$store.state.propiedades.length }} Propiedad.
        </h5>
        <button
          class="btn btn-danger sinMargin"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Agregar Propiedad
        </button>
      </div>
      <hr />
      <br />
      <div
        v-for="(propiedad, index) in this.$store.state.propiedades"
        :key="index"
      >
        <div class="accordion" id="accordionExample">
          <div class="card mt-2">
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
                    class="btn btn-success mr-4"
                    @click="editar(propiedad)"
                  >
                    Editar
                  </button>
                  <button
                    class="btn btn-danger"
                    @click="deletePropiedad(propiedad._id, propiedad.domicilio)"
                  >
                    Borrar
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Agregar Propiedad
            </h5>
          </div>
          <div class="modal-body">
            <vue-form :state="formState" @submit.prevent="">
              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="domicilio">Tipo de Propiedad</label>
                <input
                  type="text"
                  id="domicilio"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.tipo_de_propiedad"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>

              <!-- Campo nombre -->
              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="domicilio">Domicilio</label>
                <input
                  type="text"
                  id="domicilio"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.domicilio"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>

              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="barrio">Barrio</label>
                <input
                  type="text"
                  id="barrio"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.barrio"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>

              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="barrio">Tipo de Operacion</label>
                <input
                  type="text"
                  id="barrio"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.tipo"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>
              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="dormitorios">Dormitorios</label>
                <input
                  type="number"
                  id="dormitorios"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.dormitorios"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>

              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="antiguedad">Antiguedad</label>
                <input
                  type="number"
                  id="antiguedad"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.antiguedad"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>

              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="condición">Condición</label>
                <input
                  type="text"
                  id="condición"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.condición"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>
              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="precio">Precio</label>
                <input
                  type="text"
                  id="precio"
                  name="tipo"
                  class="form-control"
                  v-model.trim="formData.precio"
                  autocomplete="off"
                  no-espacios
                />

                <!-- Mensajes de validacion -->
                <field-messages name="nombre" show="$dirty"> </field-messages>
              </validate>

              <validate tag="div">
                <!-- elemento de entrada -->
                <label for="descripcion">Descripcion</label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  cols="30"
                  rows="2"
                  v-model.trim="formData.descripcion"
                  class="form-control"
                ></textarea>
              </validate>

              <br />
              <div class="modal-footer">
                <h6>{{ this.mensaje }}</h6>
                <button
                  type="submit"
                  class="btn btn-success my-4"
                  :disabled="formState.$invalid"
                  @click="agregarPropiedad()"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </vue-form>
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
    if (this.$store.state.usuario.rol == "administrador") {
      this.$store.dispatch("getPropiedades");
    } else {
      this.$router.push({
        path: "/navigator",
      });
    }
  },
  updated() {
    this.$store.dispatch("getPropiedades");
  },
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      mensaje: "",
    };
  },
  methods: {
    getInicialData() {
      return {
        tipo: "",
        tipo_de_propiedad: "",
        domicilio: "",
        barrio: "",
        dormitorios: "",
        antiguedad: "",
        condición: "",
        descripcion: "",
        moneda: "dolar",
        precio: "",
        esDestacada: "",
      };
    },
    async agregarPropiedad() {
      let headers = { authorization: this.$store.state.usuario.token };
      console.log({ headers: headers });
      try {
        await this.axios.post(this.$store.state.urlPropiedades, this.formData, {
          "content-type": "application/json",
          headers: headers,
        });
        console.log("se envio propiedad");
      } catch (error) {
        this.mensajeRegistro = error.response.data;
        console.error("Error Axios", error.response.data);
      }
      this.mensaje = "Casa Agregada exitosamente";
      this.formData = this.getInicialData(); //reset de los datos del vue-form
      this.formState._reset(); //reseet de los estados vue-form
    },
    deletePropiedad(id, nombre) {
      if (
        confirm("¿Esta seguro que desea borrar la propiedad " + nombre + " ?")
      )
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
.divNav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.sinMargin {
  margin: 0px;
}
h6 {
  color: green;
}
</style>
