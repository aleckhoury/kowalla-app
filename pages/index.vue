<template>
  <section class="container">
    <div>
      <div class="title">
        kowalla
      </div>
      <h2 class="subtitle">
        It's a startup hub, on the net!
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #39C9A0;
}

.title {
  font-family: 'Nunito-Black';
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-family: 'Nunito-Black';
  font-size: 42px;
  color: #2F8168;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
