<template>
  <div class="card is-paddingless">
    <div class="box columns is-multiline">
      <div class="title">
        Subscribe to Spaces and Projects
      </div>
      <div v-for="(item, index) in projectSpaceList" :key="index" class="column is-full">
        <div class="box is-paddingless">
          <div class="media">
            <img :src="item.profilePicture" class="image is-48x48 media-left" />
            <div class="media-content">
              <strong>{{ item.isProject ? '@' : '#' }}{{ item.isProject ? item.projectName : item.name }}</strong>
              <p>{{ item.description }}</p>
              <button :class="item.isSubscribed ? 'subbed' : ''" class="button sub" @click="toggleSubscribe(index)">
                {{ item.isSubscribed ? 'Subscribed' : 'Subscribe' }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <a class="button action" @click.once="$emit('complete-signup')">
        Submit
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpaceProjectList',
  data() {
    return {
      projectSpaceList: [],
    };
  },
  async mounted() {
    this.projectSpaceList = await this.$axios.$get(`/api/v1/users/onboarding`);
    for (let i = 0; i < this.projectSpaceList.length; i++) {
      if (this.projectSpaceList[i]._id === 'fugmXEmwr' || this.projectSpaceList[i]._id === 'nLw0dX1O5') {
        this.projectSpaceList[i].isSubscribed = true;
      } else {
        this.projectSpaceList[i].isSubscribed = false;
      }
    }
  },
  methods: {
    toggleSubscribe(index) {
      if (this.projectSpaceList[index].isSubscribed) {
        const type = this.projectSpaceList[index].isProject ? 'projects' : 'spaces';
        this.$axios.$delete(`/api/v1/profiles/${this.$store.state.user._id}/subs/${type}/${this.projectSpaceList[index]._id}`);
      } else {
        this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/subs`, {
          projectId: this.projectSpaceList[index].isProject ? this.projectSpaceList[index].id : undefined,
          spaceId: this.projectSpaceList[index].isProject ? undefined : this.projectSpaceList[index].id,
        });
      }
      this.projectSpaceList[index].isSubscribed = !this.projectSpaceList[index].isSubscribed;
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.card {
  width: 800px;
  max-width: 100%;
  max-height: 90vh;
  overflow: scroll;
}
.button.action {
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
  margin: 1.75em 0;
}
.button.sub {
  border-radius: 6px;
  border: 2px solid #39c9a0;
  color: #39c9a0;
  width: 150px;
}
.button.sub.subbed {
  background-color: #39c9a0;
  color: white;
}
.media {
  padding: 10px;
}
.image {
  border-radius: 6px;
}
.columns {
  margin: 0;
}
.column {
  padding: 0.25em 0;
}
</style>
