<template>
  <section class="">
    <nav class="navbar navbar-expand-lg navbar-light fondo">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link text-dark mr-4" href="#"
              >Tasación <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item mr-4">
            <a class="nav-link text-dark" href="#">Alquiler</a>
          </li>
          <li class="nav-item mr-4">
            <a class="nav-link text-dark" href="#">Venta</a>
          </li>
          <li class="nav-item mr-4">
            <a class="nav-link text-dark" href="#">Nosotros</a>
          </li>
        </ul>
      </div>
      <div class="divBtn">
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
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.fondo {
  background-color: rgb(241, 241, 241);
  border-bottom: solid 4px black;
}
a {
  text-decoration: none;
}
a:hover {
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
</style>
