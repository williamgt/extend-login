<template>
  <h1>Hello {{ this.$store.state.user.name }}</h1>
  <p>You are registered and ready to go</p>
</template>

<script>
export default {
  name: "HomeScreen",
};
</script>

<style scoped></style>
