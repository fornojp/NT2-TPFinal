import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "./components/Login.vue";
import Navigator from "./components/Navigator.vue";
import Registro from "./components/Registro.vue";
import AdmUsuarios from "./components/AdmUsuarios";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: Login },
    { path: "/navigator", component: Navigator },
    { path: "/registro", component: Registro },
    { path: "/admusuarios", component: AdmUsuarios },
    { path: "/", redirect: "/navigator" },
  ],
});
