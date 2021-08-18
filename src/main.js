import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import BaseCard from "./components/UI/BaseCard.vue"
import BaseSpinner from "./components/UI/BaseSpinner.vue"

const app = createApp(App)
app.use(router)

app.component("base-card", BaseCard)
app.component("base-spinner", BaseSpinner)

app.mount("#app")
