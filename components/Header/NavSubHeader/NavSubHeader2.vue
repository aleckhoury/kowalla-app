<template lang="html">
  <div class="nav-subheader-parent">
    <div class="container is-fullhd full-height">
      <nav class="level is-marginless full-height">
        <div class="level-left">
          <div class="level-item">
            <SortingOptions />
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <div
              v-if="$store.state.messages.messages.length > 0"
              class="level">
              <div
                v-for="item in $store.state.messages.messages"
                :key="item"
                class="level-item">
                <div class="message">
                  <b>{{ item }}</b>
                </div>

              </div>
            </div>
          </div>
        </div>

      </nav>
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
  height: 40px;
}

.message {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #39C9A0;
  background-color: white;
  padding-left: 12px;
}

.full-height {
  height: 100%;

}
.test-outline {
  border: 1px solid black;
}
</style>
