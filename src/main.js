import Vue from "vue";
import App from "./App.vue";
// Realizo la importacion de bootstrap con sus jquery y popper.js
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap";
// Realizo la importacion de la instancia de VueForm
import "./form";
// Realizo la importacion de router
import { router } from "./router";
import "./axios";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
