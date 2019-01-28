<template>
  <div class="card-container">
    <div class="header">
      <div class="header-content">
        <b>{{headerString}}</b>
      </div>
    </div>

    <div v-if="$slots.default">
      <slot></slot>
    </div>

    <div class="subheader">
      <nuxt-link :to="subheaderURL" class="subheader-content">
        <b>{{subheaderString}}</b>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    headerString: String,
    subheaderString: String,
    subheaderURL: String,
  }
}
</script>

<style lang="css" scoped>
.card-container {
  width: 100%;
  background-color: white;
  border: 1px solid #E0DDDD;
  border-radius: 6px;
  margin-bottom: 10px;
}

.header {
  border-bottom: 1px solid #E0DDDD;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
}

.header-content {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: black;
}

.subheader {
  border-top: 1px solid #E0DDDD;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
}

.subheader-content {
  font-family: "Helvetica Neue";
  font-size: 0.75em;
  color: #39C9A0;
  text-decoration: none;

}

.subheader-content:hover {
  text-decoration: underline;
}
</style>
