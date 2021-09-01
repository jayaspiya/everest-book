import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import BaseCard from "./components/UI/BaseCard.vue"
import BaseSpinner from "./components/UI/BaseSpinner.vue"
import HamburgerMenu from "./components/UI/HamburgerMenu.vue"

const app = createApp(App)
app.use(router)
app.use(store)
// Unicon
// https://antonreshetov.github.io/vue-unicons/
// Import Icon and Add to Array
import Unicon from "vue-unicons"
import { uniTimesCircle } from "vue-unicons/dist/icons"
Unicon.add([uniTimesCircle])

app.use(Unicon)

app.component("base-card", BaseCard)
app.component("base-spinner", BaseSpinner)
app.component("hamburger-menu", HamburgerMenu)

app.mount("#app")
