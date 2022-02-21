import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "",
      address: "",
      username: "",
      password: "",
      email: "",
      phone: "",
    },
    users: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
