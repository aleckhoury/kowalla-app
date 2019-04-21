<template lang="html">
  <div class="screen background-tint">
    <Header />

    <div class="container is-fullhd">
      <iframe
        src="https://trello.com/b/yZ126H0F.html"
        frameBorder="0"
        width="100%"
        height="800"
      />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import NavPane from "~/components/NavCards/NavPane";

export default {
  name: "Trello",
  components: { Header, NavPane },
};
</script>
<style lang="css" scoped></style>
