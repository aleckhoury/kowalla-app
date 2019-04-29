<template>
  <Card
    :header-string="headerString"
    :subheader-string="subheaderString"
    :subheader-url="subheaderUrl"
    :subheader-on="subheaderOn"
    :header-on="headerOn"
  >
    <div class="description-string">
      <slot />
    </div>
  </Card>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "DescriptionCard",
  components: {
    Card,
  },
  props: {
    headerString: { type: String, default: "" },
    subheaderString: { type: String, default: "" },
    subheaderUrl: { type: String, default: "" },
    headerOn: { type: Boolean, default: true },
    subheaderOn: { type: Boolean, default: true },
  },
};
</script>

<style lang="css" scoped>
.description-string {
  font-family: "Helvetica Neue";
  font-size: 0.75em;
  color: #999999;
  margin: 8px;
}
</style>
