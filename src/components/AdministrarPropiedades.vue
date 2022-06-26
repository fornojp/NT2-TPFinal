<template>
  <div class="jumbotron">
    <h2>Componente ApiRestFul</h2>
    <hr />
    <br />
    <button class="btn btn-success mr-2 mb-3" @click="getUsuarios()">
      GET
    </button>
    <button class="btn btn-info ml-2 mb-3" @click="postUsuarios()">POST</button>
    <div
      class="media alert alert-info"
      v-for="(usuario, index) in usuarios"
      :key="index"
    >
      <div class="media-body ml-3">
        <h5 class="mt-0">
          <u>Usuario {{ index + 1 }} - ID: {{ usuario.id }}</u>
        </h5>
        <br />
        <p>Alumno: {{ usuario.nombre }}</p>
        <p>Email: {{ usuario.email }}</p>
        <p>
          Numero de Telefono: <i>{{ usuario.numeroTelefono }} </i>
        </p>
        <button
          class="btn btn-warning mr-2 mt-3"
          @click="putUsuarios(usuario.id)"
        >
          PUT
        </button>
        <button
          class="btn btn-danger ml-2 mt-3"
          @click="deleteUsuarios(usuario.id)"
        >
          DELET
        </button>
      </div>
    </div>
    <!-- <pre> {{ usuarios }}</pre> -->
  </div>
</template>

<script>
export default {
  name: "src-components-administrar-propiedades",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css"></style>
