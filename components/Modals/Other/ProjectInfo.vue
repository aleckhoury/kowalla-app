<template>
  <div class="modal-content">
    <div class="box">
      <p class="title">
        Kowalla is about coworking. Here's how it works:
      </p>
      <BTabs id="columnTabs" v-model="activeTab">
        <BTabItem>
          <div class="subtitle">
            A project can be a business, side hustle, or even just a hobby. Creating a project gives you a project page and shows others what you're working on.
          </div>
          <div>
            <ProjectInfoBlobOne />
          </div>
        </BTabItem>
        <BTabItem>
          <div class="subtitle">
            Coworking on Kowalla show's others you're working on your project in real time, and gives you a focus page to stay in the zone while sharing your
            progress and building solidarity.
          </div>
          <div>
            <ProjectInfoBlobTwo />
          </div>
        </BTabItem>
      </BTabs>
      <div class="steps">
        <div class="circle" :class="{ selected: activeTab === 0 }" @click="activeTab = 0">1</div>
        <div class="circle" :class="{ selected: activeTab === 1 }" @click="activeTab = 1">2</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import ProjectInfoBlobOne from '~/svg/ProjectInfoBlobOne';
import ProjectInfoBlobTwo from '~/svg/ProjectInfoBlobTwo';
export default {
  name: 'ProjectInfo',
  components: { ProjectInfoBlobOne, ProjectInfoBlobTwo },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 750px;
  max-width: 100%;
}
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
}
.circle {
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50px;
  border: 1px solid lightgrey;
  font-size: 20px;
  color: #39c9a0;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  line-height: 35px;
  -webkit-box-shadow: 7px 10px 20px -15px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 7px 10px 20px -15px rgba(0, 0, 0, 0.8);
  box-shadow: 7px 10px 20px -15px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  margin: 0 10px;

  &.selected {
    color: white;
    background-color: #39c9a0;
  }
}
.subtitle {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 15px;
}
.steps {
  text-align: center;
}
@media only screen and (max-width: 600px) {
  img {
    width: 80% !important;
  }
}
</style>
