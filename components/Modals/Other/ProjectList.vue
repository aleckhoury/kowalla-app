<template>
  <div class="modal-content">
    <div class="box">
      <BMenu>
        <BMenuList label="Choose a project to work on">
          <div v-for="project in projects" :key="project._id" class="project">
            <a class="container" @click="$emit('select-project', project)">
              <img :src="project.pictureUrl" />
              <div class="project-link">
                <b class="name">@{{ project.name }}</b>
              </div>
            </a>
          </div>
        </BMenuList>
      </BMenu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  computed: {
    projects() {
      return this.$store.state.user.owned.filter(x => x.isProject);
    },
  },
  watch: {
    async $route(to, from) {
      await this.$parent.close();
    },
  },
};
</script>

<style scoped>
.project {
  width: 300px;
  display: flex;
  flex-direction: row;
}
img {
  height: 48px;
  width: 48px;
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
}
.project-link {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}
.name {
  font-size: 1.1em;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.container {
  display: grid;
  grid-template-columns: 55px auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: left;
  border-radius: 6px;
}
</style>
