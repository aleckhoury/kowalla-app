<template>
  <section class="container">
    <div>
      <el-col :span="24">
        <div class="title">
          kowalla
        </div>
      </el-col>

      <el-col :span="18" :offset="3">
        <div class="subtitle">
          It's a startup hub, on the net!
        </div>
      </el-col>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Index'
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
  font-size: 5em;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-family: 'Nunito-Black';
  font-size: 2em;
  color: #2F8168;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
