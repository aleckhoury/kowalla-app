<template>
  <div class="modal-content">
    <div class="box">
      <BMenu>
        <BMenuList label="Actions">
          <BMenuItem icon="pencil-ruler" color="blue" label="Create a New Post" @click="emitSelection('post')"></BMenuItem>
          <BMenuItem icon="user-friends" label="Create a New Space" @click="emitSelection('space')"></BMenuItem>
          <BMenuItem icon="project-diagram" label="Create a New Project" @click="emitSelection('project')"></BMenuItem>
        </BMenuList>
      </BMenu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileCreateModal',
  methods: {
    emitSelection(selection) {
      this.$emit(selection);
      this.$parent.close();
    },
  },
};
</script>
<style lang="css" scoped>
.menu-list a.icon {
  color: #39C9A0 !important;
}
.modal-content {
    align-self: center;
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}
</style>
