import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginForm from "../views/LoginForm.vue";
import RegisterForm from "../views/RegisterForm.vue";
import NotFound from "../views/NotFound.vue";
import CarDetails from "../views/CarDetails.vue";
import { useUserStore } from "../stores/userStore";
import UserList from "../views/UserList.vue";

const routes = [
  {
    path: "/",
    component: Home,
    alias: "/home",
    name: "Home",
    meta: { private: true },
  },

  { path: "/register", component: RegisterForm, name: "Register" },
  { path: "/login", component: LoginForm, name: "Login" },
  { path: "/:pathMatch(.*)*", name: "carDetails", component: NotFound },

  {
    path: "/details/:id",
    meta: { private: true },
    name: "details",
    component: CarDetails,
  },

  {
    path: "/user-list",
    meta: { private: true, userAdmin: true },
    name: "UserList",
    component: UserList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.private && !useUserStore().userValid) {
    next("/login");
  } else if (
    to.meta.userAdmin &&
    useUserStore().userValid &&
    useUserStore().userData.role !== "admin"
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
