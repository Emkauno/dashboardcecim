import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import anamnesisPaciente from "../views/anamnesisPaciente";
import examenesPaciente from "../views/examenesPaciente";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: "/anamnesis", name: "anamnesis", component: anamnesisPaciente },
      { path: "/examenes", name: "examenes", component: examenesPaciente },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.getItem("userlogged")) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
