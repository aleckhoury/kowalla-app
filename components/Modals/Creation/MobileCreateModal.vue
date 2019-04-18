<template>
  <div class="modal-content">
    <div class="box">
      <div class="level" @click="emitSelection('post')">
          <fa
            class="dark-basic-theme icon"
            icon="pencil-ruler"
            style="font-size: 16px"
          />

          Create a new Post
      </div>

      <div class="level" @click="emitSelection('community')">
          <fa
            class="dark-basic-theme icon"
            icon="user-friends"
            style="font-size: 16px"
          />

          Create a new Community
      </div>

      <div class="level" @click="emitSelection('project')">
          <fa
            class="dark-basic-theme icon"
            icon="project-diagram"
            style="font-size: 16px"
          />
          Create a new Project
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "MobileCreateModal",
  methods: {
    emitSelection(selection) {
      this.$emit(selection);
      this.$parent.close();
    }
  },
}
</script>
<style lang="css" scoped>
.box {
    margin: 25px;
    max-width: 100%;
}
.icon {
  width: 20px;
  margin-right: 4px;
}
.modal-content {
    align-self: center;
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}

.dark-basic-theme {
  color: #39C9A0;
}

</style>
