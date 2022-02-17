<template>
  <div>
    <h1>Register yourself</h1>
    <form>
      <fieldset>
        <InputReusable
          label-name="full-name"
          v-model="fullName"
        ></InputReusable>
      </fieldset>

      <fieldset>
        <InputReusable
            label-name="address"
            v-model="address"
        ></InputReusable>
      </fieldset>

      <fieldset>
        <InputReusable
            label-name="username"
            v-model="username"
        ></InputReusable>
      </fieldset>

      <fieldset>
        <InputReusable
            label-name="password"
            v-model="password"
        ></InputReusable>
      </fieldset>

      <fieldset>
        <InputReusable
            label-name="email"
            v-model="email"
        ></InputReusable>
      </fieldset>

      <fieldset>
        <InputReusable
            label-name="phone"
            v-model="phone"
        ></InputReusable>
      </fieldset>
    </form>
  </div>
</template>

<script>
import InputReusable from "../reusables/InputReusable";
export default {
  name: "Register",
  components: { InputReusable },
  data() {
    return {
      fullName: "",
      address: "",
      username: "",
      password: "",
      email: "",
      phone: "",
    };
  },
};
</script>

<style scoped></style>
