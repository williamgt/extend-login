<template>
  <div id="loginContainer">
    <div id="loginTitle">
      <label>Please login!</label>
    </div>

    <div id="username">
      <label id="usernameLabel">Username:</label>
      <textarea
          data-testid="username-input"
          v-model="username"
      ></textarea>
    </div>

    <div id="password">
      <label id="passwordLabel">Password: </label>
      <textarea
          data-testid="password-input"
          v-model="password"
      ></textarea>
      <button
          v-on:click="handleClickSignin_2"
          data-testid="submit-button"
      >Sign in</button>
      <label
          id="loginstatusLabel"
          data-testid="login-status-label"
      >{{ loginStatus }}</label>
    </div>
    <p v-if="notYetRegistered">You are not registered yet. Register <router-link :to="{ name: 'Register' }">here</router-link>.</p>
  </div>

</template>

<script>
//import { doLogin } from "@/utils/apiutil.js"; //TODO do something about this
import { doLogin } from "../utils/api";

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
      loginStatus: "",
      notYetRegistered: false,
    };
  },
  methods: {
    async handleClickSignin() {
      //alert("You entered, username: " + this.username);
      const loginRequest = { username: this.username, password: this.password };
      console.log(loginRequest);
      /*const loginResponse = await doLogin( //TODO do something about this
        "http://localhost:8085/demo/login",
        loginRequest
      );
      console.log(loginResponse);
      alert("Login: " + loginResponse.data.loginStatus);*/
    },
    async handleClickSignin_2() {
      const loginRequest = { username: this.username, password: this.password };
      console.log(loginRequest);
      let login = await doLogin(loginRequest);
      if (login) {
        this.loginStatus = "Logged in";
        console.log("success!");
        this.notYetRegistered = false;
        this.$router.push("/home"); //TODO fix related to test
      } else {
        this.loginStatus = "Something went wrong";
        console.log("fail!");
        this.notYetRegistered = true;
      }
    },
  },
};
</script>

<style scoped>
#loginContainer {
  display: grid;
  justify-content: center;
  margin: 40px;
}

#loginTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#username,
#password {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#usernameLabel,
#passwordLabel {
  width: 100px;
}
</style>
