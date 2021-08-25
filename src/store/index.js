import { createStore } from "vuex"
import getters from "./getters.js"
import mutations from "./mutations.js"

export default createStore({
  state() {
    return {
      token: null,
      count: 4,
    }
  },
  getters,
  mutations,
})
