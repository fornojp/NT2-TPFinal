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
                <vue-form :state="formState" @submit.prevent="actualizarRol()">
                  <validate tag="div">
                    <select
                      class="form-control"
                      id="admUsuarios"
                      @change="cambiarRol($event, usuario)"
                    >
                      <option selected>{{ usuario.rol }}</option>
                      <option>
                        {{
                          usuario.rol == "usuario" ? "administrador" : "usuario"
                        }}
                      </option>
                    </select>
                  </validate>
                </vue-form>
              </div>
            </td>
            <td class="centrarBoton">
              <button
                class="btn btn-success mr-4"
                type="submit"
                :disabled="usuario.isDisabled"
                v-on:click="actualizarRol(usuario, nuevoRol)"
              >
                ACTUALIZAR
              </button>
              <button
                class="btn btn-danger"
                @click="deleteUsuario(usuario._id, usuario.nombre)"
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
        nuevoRol: "",
        isDisabled : true,
        formData: this.getInicialData(),
        formState: {},
      }
    },
    methods: {
      getInicialData() {
      return {
        nuevoRol: "",
      }
      },
      deleteUsuario(id, nombre) {
        if(confirm('¿Esta seguro que desea borrar al usuario ' + nombre + ' ?'))
        this.$store.dispatch("deleteUsuario", id);
      },
      actualizarRol(usuario, nuevoRol){
        let nuevoUsuario = {
             "_id" : usuario._id,
             "nombre" : usuario.nombre,
             "email" : usuario.email,
            "password" : usuario.password,
            "rol" : nuevoRol,
           }
        this.$store.dispatch("actualizarRol", nuevoUsuario)
        console.log("desde adm", nuevoRol)
      },
      cambiarRol(select, usuario) {
        usuario.isDisabled = false;
        this.$store.dispatch("enableActualizar", usuario)
        //usuario.isDisabled = nuevoRol2 == usuario.rol
        console.log(usuario.rol)
        this.nuevoRol = select.target.value
        // console.warn(select.target.value, this.nuevoRol)
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
