<template>
  <section class="src-components-header">
    <div class="divHeader">
      <div class="divImagen">
        <img
          src="../assets/logoinmobiliariaTp2.svg"
          alt=""
          @click="redirigir()"
          class="redirigir"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-header",
  components: {},
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    redirigir() {
      this.$router.push({
        path: "/navigator",
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.divHeader {
  display: flex;
  background-color: #f90716;
  height: 180px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: solid 4px black;
}
.divImagen {
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  height: 140px;
  width: 280px;
  padding: 10px;
  align-content: center;
}
.redirigir {
  cursor: pointer;
}
</style>
