<template>
  <div class="tamaño">
    <div class="card">
      <div class="divImg">
        <img
          :src="propiedadCard.img[0]"
          class="card-img-top img-fluid"
          alt="..."
        />
      </div>
      <div class="card-body divCar">
        <h5 class="card-title">
          {{ propiedadCard.domicilio }} - {{ propiedadCard.barrio }}
        </h5>
        <p class="card-text">{{ propiedadCard.descripcion }}</p>
        <div class="divBoton">
          <button
            href=""
            class="btn btn-danger"
            @click="irDetalle(propiedadCard._id)"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-card-propiedades",
  props: ["propiedadCard"],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    irDetalle(id) {
      this.$router.push({
        path: "/detallepropiedad",
        name: "detallepropiedad",
        params: { id: id },
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.card-body {
  /* border: solid 2px #7b8294; */
  border-radius: 0px 0px 20px 20px;
  background-color: rgb(241, 241, 241);
}
.card {
  border-radius: 20px 20px 20px 20px;
}
img {
  border-radius: 20px 20px 0px 0px;
  max-height: 100%;
  object-fit: cover;
}
.divImg {
  height: 214px;
}
.divCar {
  height: 260px;
  display: flex;
  flex-direction: column;
}
.divBoton {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
}
</style>
