import { createStore } from "vuex"
import getters from "./getters.js"
import mutations from "./mutations.js"

export default createStore({
  state() {
    return {
      isUser: false,
      isAdmin: false,
    }
  },
  getters,
  mutations,
})
