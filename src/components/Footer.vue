<template>
  <section class="src-components-footer">
    <div class="divFooter">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="nav justify-content-around">
              <li className="nav-item">
                <img class="logoFooter" src="../assets/twitter.svg" />
              </li>
              <li className="nav-item">
                <img class="logoFooter" src="../assets/insta.svg" alt="" />
              </li>
              <li className="nav-item">
                <img class="logoFooter" src="../assets/facebook.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-footer",
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
.divFooter {
  display: flex;
  background-color: #f90716;
  height: 120px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: solid 4px black;
}

.logoFooter {
  width: 40px;
  height: 40px;
}
</style>
