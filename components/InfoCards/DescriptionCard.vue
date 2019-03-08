<template>

  <Card
    :headerString="headerString"
    :subheaderString="subheaderString"
    :subheaderURL="subheaderURL"
    :subheaderOn="subheaderOn"
    :headerOn="headerOn">

    <div class="description-string">
      <slot></slot>
    </div>

  </Card>

</template>

<script>
import Card from '~/components/Card';

export default {
  name: "Description-Card",
  components: {
    Card
  },
  props: {
    headerString: { type: String, default: "" },
    subheaderString: { type: String, default: "" },
    subheaderURL: { type: String, default: "" },
    headerOn: { type: Boolean, default: true },
    subheaderOn: { type: Boolean, default: true },
  }
}
</script>

<style lang="css" scoped>
.description-string {
  font-family: "Helvetica Neue";
  font-size: 0.75em;
  color: #999999;
  margin: 8px;
}
</style>
