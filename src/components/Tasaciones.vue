<template>
  <div class="fondo">
    <div class="container w-75">
      <div class="row">
        <div class="col-6 divIcono">
          <img
            src="https://static.tokkobroker.com/tfw/img/supcub2.svg?20220601214434"
            alt=""
          />
          <h2>TASACIONES</h2>
        </div>

        <div class="col-4">
          <vue-form :state="formState" @submit.prevent="enviar()">
            <!-- Campo nombre -->
            <validate tag="div">
              <!-- elemento de entrada -->

              <input
                type="text"
                id="nombre"
                name="nombre"
                class="form-control"
                v-model.trim="formData.nombre"
                autocomplete="off"
                required
                :minlength="nombreMinLength"
                :maxlength="nombreMaxLength"
                no-espacios
                placeholder="Nombre"
              />

              <!-- Mensajes de validacion -->
              <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
                <div slot="minlength" class="alert alert-danger mt-1">
                  Este campo requiere entre {{ nombreMinLength }} y
                  {{ nombreMaxLength }} caracteres
                </div>
                <div slot="no-espacios" class="alert alert-danger mt-1">
                  No se permite espacios intermedios en este campo
                </div>
              </field-messages>
            </validate>

            <!-- Campo edad -->
            <validate tag="div" class="my-4">
              <!-- elemento de entrada -->

              <input
                type="text"
                id="Telefono"
                name="Telefono"
                class="form-control"
                v-model.trim="formData.telefono"
                autocomplete="off"
                required
                :minlength="Min"
                :maxlength="Max"
                placeholder="Telefono"
              />

              <!-- Mensajes de validacion -->
              <field-messages name="Telefono" show="$dirty">
                <div slot="required" class="alert alert-danger mt-2">
                  Campo requerido
                </div>
                <div slot="minlength" class="alert alert-danger mt-2">
                  los caracteres minimos son {{ Min }}
                </div>
                <div slot="maxlength" class="alert alert-danger mt-2">
                  los caracteres maximos son{{ Max }}
                </div>
              </field-messages>
            </validate>

            <!-- Campo email -->
            <validate tag="div">
              <!-- elemento de entrada -->

              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                v-model.trim="formData.email"
                autocomplete="off"
                required
                placeholder="Email"
              />

              <!-- Mensajes de validacion -->
              <field-messages name="email" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
                <div slot="email" class="alert alert-danger mt-1">
                  Email no valido
                </div>
              </field-messages>
            </validate>

            <!-- Campo descripcion -->
            <!-- elemento de entrada -->
            <br />
            <textarea
              name="descripcion"
              id="descripcion"
              cols="30"
              rows="2"
              v-model.trim="formData.descripcion"
              class="form-control"
              placeholder="Coloque la Descripcion de su casa"
            ></textarea>

            <button
              type="submit"
              class="btn btn-success my-4"
              :disabled="formState.$invalid"
            >
              Enviar
            </button>
          </vue-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-tasaciones",
  props: [],
  mounted() {},
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreMinLength: 5,
      nombreMaxLength: 15,
      Min: 1,
      Max: 10,
      dataTabla: [],
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },
    enviar() {
      this.dataTabla.push(this.formData);
      this.formData = this.getInicialData(); //reset de los datos del vue-form
      this.formState._reset(); //reseet de los estados vue-form
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.fondo {
  background-color: rgb(241, 241, 241);
  width: 98.9vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  height: 240px;
  margin-bottom: 10px;
  opacity: 0.7;
}

.divIcono {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
h2 {
  color: #3c3c3c;
  font-size: 40px;
}
</style>
