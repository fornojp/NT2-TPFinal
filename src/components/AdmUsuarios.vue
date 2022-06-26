<template>
  <section class="src-components-adm-usuarios">
    <NavBar />
    <div class="container mt-4 jumbotron">
      <h1>Administrar Usuarios</h1>
      <br />
      <div v-if="this.$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
          <tr
            v-for="(usuario, index) in this.$store.state.usuarios"
            :key="index"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>
              <div class="form-group">
                <select class="form-control" id="admUsuarios">
                  <option selected>{{ usuario.rol }}</option>
                  <option>
                    {{ usuario.rol == "usuario" ? "administrador" : "usuario" }}
                  </option>
                </select>
              </div>
            </td>
            <td class="centrarBoton">
              <button
                class="btn btn-success mr-4"
                @click="actualizarUsuario(usuario._id)"
              >
                ACTUALIZAR
              </button>

              <button
                class="btn btn-danger"
                @click="deleteUsuario(usuario._id)"
              >
                BORRAR
              </button>
            </td>
          </tr>
        </table>
        <h5 class="alert alert-primary">
          Se encontraron {{ this.$store.state.usuarios.length }} usuarios.
        </h5>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import NavBar from "./NavBar.vue";
  export default  {
    name: 'src-components-adm-usuarios',
    props: [],
    mounted () {
      if(this.$store.state.usuario.rol == "administrador") {
        this.$store.dispatch("getUsuarios");
      } else {
        this.$router.push({
        path: "/navigator",
      })
      }
    },
    components: {
      NavBar,
    },
    data () {
      return {

      }
    },
    methods: {
      deleteUsuario(id) {
        this.$store.dispatch("deleteUsuario", id);
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.centrarBoton {
  display: flex;
  justify-content: center;
}
.jumbotron {
  text-align: center;
  background-color: #e2e2e2;
  border-radius: 10px;
}
</style>
