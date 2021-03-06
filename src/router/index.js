import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Discover from "../views/Discover.vue"
import AboutUs from "../views/AboutUs.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import NoPage from "../views/NoPage.vue"
import AdminLogin from "../views/AdminLogin.vue"
import Cart from "../views/Cart.vue"
import Order from "../views/Order.vue"
import Book from "../views/Book.vue"
import Profile from "../views/Profile.vue"
import EditProfile from "../views/EditProfile.vue"
import Admin from "../views/Admin.vue"
import New from "../views/admin/New.vue"
import EditBook from "../views/admin/EditBook.vue"
import Dashboard from "../views/admin/Dashboard.vue"
import MissingCovers from "../views/admin/MissingCovers.vue"
import UploadCover from "../views/admin/UploadCover.vue"
import RegisterAdmin from "../views/admin/RegisterAdmin.vue"

// Admin Guard
function adminGuard(to, from, next) {
  let isAuthenticated = false
  const token = localStorage.getItem("token")
  const isUser = localStorage.getItem("userType") === "ADMIN"
  if (token && isUser) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  if (isAuthenticated) {
    next()
  } else {
    next("/")
  }
}
// User Navigation Guard
function userGuard(to, from, next) {
  let isAuthenticated = false
  const token = localStorage.getItem("token")
  const isUser = localStorage.getItem("userType") === "USER"
  if (token && isUser) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  if (isAuthenticated) {
    next()
  } else {
    next("/")
  }
}
// Login Navigation Guard
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
    next("/")
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
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: userGuard,
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile,
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
    path: "/order",
    name: "Order",
    component: Order,
    beforeEnter: userGuard,
  },
  {
    path: "/view/:id",
    name: "Book",
    component: Book,
  },
  {
    // Admin Route
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: adminGuard,
    children: [
      {
        path: "new",
        name: "New",
        component: New,
      },
      {
        path: "register-admin",
        name: "RegisterAdmin",
        component: RegisterAdmin,
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
      },
      {
        path: "edit/:id",
        name: "EditBook",
        component: EditBook,
        props: true,
      },
    ],
  },
  {
    path: "/:id",
    name: "NoPage",
    component: NoPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
