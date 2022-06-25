import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "./components/Login.vue";
import Navigator from "./components/Navigator.vue";
import Registro from "./components/Registro.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: Login },
    { path: "/navigator", component: Navigator },
    { path: "/registro", component: Registro },
    { path: "/", redirect: "/navigator" },
  ],
});
