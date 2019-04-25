<template>
  <div class="banner-container">
    <img :src="bannerUrl" class="image" >

    <div class="banner-subscription-button-container">
      <SubscriptionButton
        v-if="!isOwner"
        :is-subscribed="isSubscribed"
        :is-project="bannerTitlePrefix === '@'"
        :id="id"
        @subscription-button-clicked="handleClick"
      />
    </div>

    <div
      :class="{
        'banner-font-desktop': !isMobile,
        'banner-font-mobile': isMobile,
      }"
      class="banner-title"
    >
      <b>{{ bannerTitlePrefix }}{{ bannerTitle }}</b>
    </div>
  </div>
</template>
<script>
import SubscriptionButton from "~/components/CommunitiesAndProjectsShared/SubscriptionButton";

export default {
  name: "Banner",
  components: { SubscriptionButton },
  props: {
    id: { type: String, default: "" },
    bannerUrl: { type: String, default: "" },
    bannerTitle: { type: String, default: "" },
    bannerTitlePrefix: { type: String, default: "" },
    isSubscribed: { type: Boolean, default: false },
    isOwner: { type: Boolean, default: false },
    isMobile: { type: Boolean, default: false },
  },
  methods: {
    handleClick(subBool) {
      this.$emit("subscription-button-clicked", subBool);
    },
  },
};
</script>
<style lang="css" scoped>
.banner-container {
  position: relative;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.image {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.banner-title {
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin-right: 60px;
  padding-left: 15px;
  width: 100%;
  height: 75px;
  background-color: rgb(0,0,0,0.5);
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.banner-font-desktop {
  font-size: 3.75em;
}

.banner-font-mobile {
  font-size: 2em;
}

.banner-subscription-button-container {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
