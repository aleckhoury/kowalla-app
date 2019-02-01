<template lang="html">
  <div class="screen background-tint">

    <Header></Header>

    <div class="columns is-marginless main-margin">
      <div class="column is-one-quarter is-paddingless test-outline side-pane">
        <NavPane></NavPane>
      </div>


      <div class="column is-one-half is-paddingless no-margin test-outline">
        post feed
      </div>

      <div class="column is-one-quarter is-paddingless test-outline side-pane">
        info
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import PlaceholderText from '~/components/PlaceholderText';
import NavPane from '~/components/NavCards/NavPane';
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: "test",
  components: { Header, PlaceholderText, NavPane }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}

.no-margin {
  margin: 0px;
}

.main-margin {
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.background-tint {
  background-color: #E9EBEE;
}

.side-pane {
  display: flex;
  justify-content: center;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
