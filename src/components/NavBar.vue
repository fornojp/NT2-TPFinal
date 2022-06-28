<template>
  <div class="divPrincipal">
    <nav class="navbar navbar-expand-lg navbar-light fondo">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mr-4">
            <button
              class="nav-link text-dark efectoHover"
              @click="irAlquiler()"
            >
              Nuestras Propiedades en Alquiler
            </button>
          </li>
          <li class="nav-item mr-4">
            <button class="nav-link text-dark efectoHover" @click="irVentas()">
              Nuestras Propiedades en Venta
            </button>
          </li>
          <li class="nav-item mr-4">
            <button class="nav-link text-dark efectoHover" href="#">
              Nosotros
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="divInicioyRegistro">
      <div class="divBtn" v-if="this.$store.state.usuario.nombre == ''">
        <div class="">
          <button class="botonIniciar">
            <router-link to="/login">
              <a class="inicio">Iniciar Sesión</a>
            </router-link>
          </button>
        </div>
        <div class="">
          <button class="botonRegistrar">
            <router-link to="/registro"
              ><a href="" class="volverA registro">Registrate </a>
            </router-link>
          </button>
        </div>
      </div>
      <div v-else class="mr-5">
        <div class="btn-group">
          <button class="btn botonIniciar" data-toggle="dropdown">
            ¡ Hola {{ this.$store.state.usuario.nombre }} !
          </button>
          <button
            type="button"
            class="btn botonIniciar dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu mr-5" aria-labelledby="dropdownMenuButton">
            <div v-if="this.$store.state.usuario.rol == 'administrador'">
              <router-link to="/admpropiedades">
                <a class="dropdown-item" href="#">Administrar Propiedades</a>
              </router-link>
              <router-link to="/admusuarios">
                <a class="dropdown-item" href="#">Administrar Usuarios</a>
              </router-link>
            </div>
            <a class="dropdown-item" @click="cerrarSesion()">Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    cerrarSesion() {
      this.$store.state.usuario.nombre = "";
      this.$store.state.usuario.token = "";
      this.$store.state.usuario.email = "";
      this.$store.state.usuario.rol = "";
    },
    irAlquiler() {
      this.$router.push({
        path: "/fltpropiedades/tipo",
        name: "fltpropiedadesalquiler",
        params: { tipo: "filtrar/tipo?tipo=alquiler", titulo: "Alquiler" },
      });
    },
    irVentas() {
      this.$router.push({
        path: "/fltpropiedades/tipo",
        name: "fltpropiedadesventa",
        params: { tipo: "filtrar/tipo?tipo=venta", titulo: "Venta" },
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.fondo {
  background-color: rgb(241, 241, 241);
  border-bottom: solid 4px black;
  width: 50vw;
}
.divInicioyRegistro {
  display: flex;
  align-items: center;
  background-color: rgb(241, 241, 241);
  border-bottom: solid 4px black;
  width: 50vw;
  justify-content: end;
}
a {
  text-decoration: none;
}
.efectoHover:hover {
  font-size: 18px;
}

.botonIniciar {
  padding: 0;
  background-color: #f90716;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 4px;
}

.botonRegistrar {
  padding: 0;
  background-color: #7b8294;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 4px;
  margin-left: 20px;
}
.inicio {
  padding: 6px;
  margin: 0px;
  text-decoration: none;
  color: white;
}
.registro {
  padding: 6px;
  text-decoration: none;
  color: white;
}
.divBtn {
  display: flex;
  margin-right: 40px;
}
.divPrincipal {
  display: flex;
  width: 100%;
}
.nav-link {
  border: none;
}
</style>
