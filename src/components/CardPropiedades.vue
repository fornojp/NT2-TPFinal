<template>
  <div class="tamaño">
    <div class="card">
      <img src="../assets/images/img1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
          <router-link to="/DetallePropiedad">
          <a href="" class="btn btn-danger">Ver más</a>
            </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-card-propiedades",
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
}
</style>
