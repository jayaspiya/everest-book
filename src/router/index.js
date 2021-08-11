import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Discover from "../views/Discover.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
