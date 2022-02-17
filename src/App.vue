<template>
  <LoginComponent></LoginComponent>
  <Register></Register>
</template>

<script>
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";

export default {
  name: "App",
  components: {
    Register,
    LoginComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
