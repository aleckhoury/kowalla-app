<template>
  <h1>Test!</h1>
</template>

<script>
  import Cookies from "js-cookie";

  export default {
  name: "SignIn",
  async mounted() {
    if (this.$route.query.code) {
      const { isNew, token, user } = await this.$axios.$post('api/v1/github/signin', {
        code: this.$route.query.code,
      });
      await Cookies.set("token", token);
      await Object.assign(user, {
        loggedIn: Boolean(Object.keys(user).length),
      });

      await this.$store.commit("user/setUser", user);
      await this.$router.push({
        path: `/dev/user/${user.username}`
      });
    }
  },
};
</script>

<style scoped></style>
