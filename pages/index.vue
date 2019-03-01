<template>
  <div class="screen">

    <div class="container">

      <div class="columns is-centered is-marginless main-margin">

        <!-- post feed -->
        <div class="column is-narrow is-paddingless ">
          <div class="title">
            kowalla
          </div>

          <div class="subtitle">
            build together here
          </div>

          <nuxt-link to="/dev">link to dev</nuxt-link>
          <nuxt-link to="/login">Login</nuxt-link>
        </div>

      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  auth: false,
};
</script>

<style scoped>
.title {
  font-family: "Nunito";
  display: block;
  font-weight: 300;
  font-size: 5em;
  color: #000;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-family: "Nunito";
  font-size: 2em;
  color: #000;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
