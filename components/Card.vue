<template>
  <div class="card-container">
    <div v-if="headerOn" class="header">
      <div class="header-content">
        <b>{{ headerString }}</b>
      </div>
    </div>

    <div v-if="$slots.default">
      <slot />
    </div>

    <!-- TODO add v-if and update -->
    <div v-if="subheaderOn" class="subheader">
      <nuxt-link
        v-if="!subheaderIsButton"
        :to="subheaderUrl"
        class="subheader-content"
      >
        <b>{{ subheaderString }}</b>
      </nuxt-link>

      <span
        v-if="subheaderIsButton"
        class="subheader-content"
        @click="$emit('subheader-clicked')"
      >
        <b>{{ subheaderString }}</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    headerString: { type: String, default: "" },
    subheaderString: { type: String, default: "" },
    subheaderUrl: { type: String, default: "" },
    headerOn: { type: Boolean, default: true },
    subheaderOn: { type: Boolean, default: true },
    subheaderIsButton: { type: Boolean, default: false },
  },
};
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
}

.subheader-content:hover {
  text-decoration: underline;
}
</style>
