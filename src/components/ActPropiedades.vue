<template>
  <div class="jumbotron container">
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
        <label for="precio">Es Destacada</label>
        <!-- elemento de entrada -->
        <select
          class="form-control"
          id="admUsuarios"
          @change="cambiarDestacada($event)"
        >
          <option selected>
            {{ this.esDestacada == true ? "Si" : "No" }}
          </option>
          <option>
            {{ this.esDestacada != true ? "Si" : "No" }}
          </option>
        </select>
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
      <h6>{{ this.mensaje }}</h6>
      <div class="modal-footer">
        <button
          type="submit"
          class="btn btn-success my-4"
          :disabled="formState.$invalid"
          @click="enviarActualizacion()"
        >
          Enviar
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="cerrar()"
        >
          Cerrar
        </button>
      </div>
    </vue-form>
  </div>
</template>

<script lang="">
export default {
  name: "src-components-act-propiedades",
  props: [],
  mounted() {
    this.esDestacada = this.formData.esDestacada;
  },
  data() {
    return {
      formData: this.$store.state.propiedadActualizar,
      formState: {},
      mensaje: "",
      esDestacada: "",
    };
  },
  methods: {
    enviarActualizacion() {
      this.$store.dispatch("actualizarPropiedad", this.formData);
      this.mensaje = "Cambios Realizados con Exito";
      setTimeout(() => {
        this.$router.push({
          path: "/admpropiedades",
        });
      }, 2000);
    },
    cerrar() {
      this.$router.push({
        path: "/admpropiedades",
      });
    },
    cambiarDestacada(select) {
      if (select.target.value == "Si") {
        this.formData.esDestacada = true;
      } else {
        this.formData.esDestacada = false;
      }
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
h6 {
  color: green;
}
</style>
