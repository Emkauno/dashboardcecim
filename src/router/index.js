import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import AnamnesisPaciente from "../views/anamnesisPaciente";
import ExamenesPaciente from "../views/examenesPaciente";
import MainContent from "../views/MainContent";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    redirect: "/dashboard",
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: "/dashboard", name: "home", component: MainContent },
      { path: "/anamnesis", name: "anamnesis", component: AnamnesisPaciente },
      { path: "/examenes", name: "examenes", component: ExamenesPaciente },
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
