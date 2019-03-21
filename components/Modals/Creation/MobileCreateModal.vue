<template>
  <div class="modal-content">
    <div class="box">
      <div class="level" @click="emitSelection('post')">
          <b-icon
            class="dark-basic-theme"
            icon="square-edit-outline"
            size="is-small"></b-icon>

          Create a new Post
      </div>

      <div class="level" @click="emitSelection('community')">
          <b-icon
            class="dark-basic-theme"
            icon="account-group"
            size="is-small"></b-icon>

          Create a new Community
      </div>

      <div class="level" @click="emitSelection('project')">
          <b-icon
            class="dark-basic-theme"
            icon="developer-board"
            size="is-small"></b-icon>

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
