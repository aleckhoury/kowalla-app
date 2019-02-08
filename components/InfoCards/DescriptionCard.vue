<template>

  <Card
    headerString="Description"
    :subheaderString="subheaderString"
    :subheaderURL="subheaderURL"
    subheaderOn
    headerOn>

    <div class="description-string">
      <slot></slot>
    </div>

  </Card>

</template>

<script>
import Card from '~/components/Card';

export default {
  name: "Description Card",
  components: {
    Card
  },
  props: {
    descriptionString: String,
    headerString: String,
    subheaderString: String,
    subheaderURL: String,
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
