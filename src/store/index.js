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
      id: "",
    },
    users: [],
  },
  mutations: {
    SET_NAME(state, name) {
      state.user.name = name;
    },
    SET_ADDRESS(state, address) {
      state.user.address = address;
    },
    SET_USERNAME(state, username) {
      state.user.address = username;
    },
    SET_PASSWORD(state, password) {
      state.user.address = password;
    },
    SET_EMAIL(state, email) {
      state.user.address = email;
    },
    SET_PHONE(state, phone) {
      state.user.address = phone;
    },
    SET_ID(state, id) {
      state.user.id = id;
    },
    SET_USER(state, user){
      state.user = user;
    },
  },
  actions: {
    registerUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
  modules: {},
});
