<template lang="html">
  <div class="nav-subheader-parent">
    <div class="nav-subheader-child">
      <SortingOptions/>
      <div
        v-if="$store.state.messages.messages.length > 0"
        class="message-container">
        <div
          v-for="item in $store.state.messages.messages"
          :key="item"
          class="message">
          <b>{{ item }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortingOptions from './SortingOptions';

export default {
  name: 'NavSubHeader',
  components: { SortingOptions, },
};
</script>

<style lang="css" scoped>
.nav-subheader-parent {
  border: 1px solid #E0DDDD;
  background-color: white;
  height: 35px;
  padding-right: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.nav-subheader-child {
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.message-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.message {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #39C9A0;
  padding-left: 12px;
}
</style>
