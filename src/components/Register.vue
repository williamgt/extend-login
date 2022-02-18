<template>
  <div>
    <h1>Register yourself</h1>
    <form @submit.prevent="sendForm">
      <InputReusable
        label-name="Full name"
        v-model="user.fullName"
      ></InputReusable>

      <InputReusable
          label-name="Address"
          v-model="user.address"
      ></InputReusable>

      <InputReusable
          label-name="Username"
          v-model="user.username"
      ></InputReusable>

      <InputReusable
          label-name="Password"
          v-model="user.password"
      ></InputReusable>

      <InputReusable
          label-name="Email"
          v-model="user.email"
      ></InputReusable>

      <InputReusable
          label-name="Phone"
          v-model="user.phone"
      ></InputReusable>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import InputReusable from "../reusables/InputReusable";
import { sendForm2 } from "../utils/api";

export default {
  name: "Register",
  components: { InputReusable },
  data() {
    return {
      user: {
        fullName: "",
        address: "",
        username: "",
        password: "",
        email: "",
        phone: "",
        id: "",
      },
    };
  },
  methods: {
    sendForm() {
      this.user.id = 1;
      sendForm2(this.user);
    },
  },
};
</script>

<style scoped></style>
