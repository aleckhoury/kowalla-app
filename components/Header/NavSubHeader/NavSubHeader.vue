<template lang="html">
  <div class="nav-subheader-parent">
    <div class="container is-fullhd full-height">
      <div class="columns is-marginless full-height">
        <div class="column is-one-quarter is-paddingless">
          <!-- placeholder for right alignment -->
        </div>

        <div class="column is-one-quarter is-paddingless">
          <div class="level full-height">
            <div class="level-left">
              <div class="level-item">
                <SortingOptions />
              </div>
            </div>
          </div>
        </div>

        <div class="column is-paddingless">
          <div class="level full-height">
              <div class="level-left">
                <!-- placeholder for right alignment -->
              </div>

              <div
                v-if="$store.state.messages.messages.length > 0"
                class="level-right">

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

</style>
