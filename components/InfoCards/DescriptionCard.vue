<template>
  <CardContainer
    :header-string="headerString"
    :subheader-string="subheaderString"
    :subheader-url="subheaderUrl"
    :subheader-on="subheaderOn"
    :header-on="headerOn"
  >
    <div class="description-string">
      <slot />
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from "~/components/SidePaneCards/CardContainer";

export default {
  name: "DescriptionCard",
  components: {
    CardContainer,
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

  font-size: 0.75em;
  color: #999999;
  padding: 8px;
}
</style>
