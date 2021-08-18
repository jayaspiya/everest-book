import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Discover from "../views/Discover.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import New from "../views/New.vue"
import Admin from "../views/Admin.vue"
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
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "new",
        name: "New",
        component: New,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
