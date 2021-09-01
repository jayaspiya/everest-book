import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Discover from "../views/Discover.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import AdminLogin from "../views/AdminLogin.vue"
import Cart from "../views/Cart.vue"
import Book from "../views/Book.vue"
import Profile from "../views/Profile.vue"
import Admin from "../views/Admin.vue"
import New from "../views/admin/New.vue"
import Dashboard from "../views/admin/Dashboard.vue"
import MissingCovers from "../views/admin/MissingCovers.vue"
import UploadCover from "../views/admin/UploadCover.vue"

function userGuard(to, from, next) {
  let isAuthenticated = false
  if (localStorage.getItem("token")) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  if (isAuthenticated) {
    next()
  } else {
    next("/login")
  }
}
function userGuard2(to, from, next) {
  let isAuthenticated = true
  if (localStorage.getItem("token")) {
    isAuthenticated = false
  } else {
    isAuthenticated = true
  }
  if (isAuthenticated) {
    next()
  } else {
    next("/profile")
  }
}
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
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: userGuard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: userGuard2,
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLogin,
    beforeEnter: userGuard2,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: userGuard2,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    beforeEnter: userGuard,
  },
  {
    path: "/view/:id",
    name: "Book",
    component: Book,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: userGuard,
    children: [
      {
        path: "new",
        name: "New",
        component: New,
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "missing-covers",
        name: "MissingCovers",
        component: MissingCovers,
      },
      {
        path: "upload-cover/:id",
        name: "UploadCover",
        component: UploadCover,
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
