<template>
  <div
    class="banner-container"
  >
    <img class="image" :src="bannerURL" />


    <div class="banner-subscription-button-container">
      <SubscriptionButton
        v-if="!isOwner"
        :isSubscribed="isSubscribed"
        @subscription-button-clicked="handleClick"
      />
    </div>

    <div class="banner-title">
      <b>{{bannerTitlePrefix}}{{bannerTitle}}</b>
    </div>


  </div>
</template>
<script>
import SubscriptionButton from "./SubscriptionButton";
//:style="{ backgroundImage: 'url(' + bannerURL + ')' }">
export default {
  name: "Banner",
  components: { SubscriptionButton },
  props: {
    bannerURL: String,
    bannerTitle: String,
    bannerTitlePrefix: String,
    isSubscribed: Boolean,
    isOwner: Boolean,
  },
  methods: {
    handleClick(subBool) {
      //const subObj = { subBool };

      this.$emit('subscription-button-clicked', subBool);
    }
  }
}
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
  font-size: 3.75em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.banner-subscription-button-container {
  position: absolute;
  top: 15px;
  right: 15px;
}

</style>
