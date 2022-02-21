import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "../components/LoginComponent";
import Register from "../components/Register";
import HomeScreen from "../components/HomeScreen";

const routes = [
  {
    path: "/",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "HomeScreen",
    component: HomeScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
