import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import BaseCard from "./components/UI/BaseCard.vue"
import BaseSpinner from "./components/UI/BaseSpinner.vue"
import HamburgerMenu from "./components/UI/HamburgerMenu.vue"

import VueSweetalert2 from "vue-sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"

const app = createApp(App)
// Router & Vuex
app.use(router)
app.use(store)

import VueAgile from "vue-agile"
// Alert Dialogs
app.use(VueAgile)
app.use(VueSweetalert2)

// Main Component
app.component("base-card", BaseCard)
app.component("base-spinner", BaseSpinner)
app.component("hamburger-menu", HamburgerMenu)

app.mount("#app")
