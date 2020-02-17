<template>
  <div>
    <div class="box level">
      <a class="button action" @click="startCoworking()"><b>Start Coworking</b></a>
    </div>
  </div>
</template>

<script>
import CreatePost from '~/components/Modals/Creation/CreatePost';
import ProjectList from '../Modals/Other/ProjectList';

export default {
  name: 'CreatePost',
  data() {
    return {
      userDropdown: false,
      commDropdown: false,
      editor: null,
      selectedProject: {},
    };
  },
  computed: {
    postInList() {
      let list = [];
      this.$store.state.user.subscriptions.forEach(function(sub) {
        if (!sub.isProject) {
          list.push({ name: sub.name, id: sub.spaceId });
        }
      });
      this.$store.state.user.owned.forEach(function(own) {
        if (!own.isProject) {
          list.push({ name: own.name, id: own.spaceId });
        }
      });
      if (list.length) {
        return list;
      }
      return [];
    },
    projects() {
      return this.$store.state.user.owned.filter(x => x.isProject);
    },
  },
  methods: {
    startCoworking() {
      if (this.projects.length) {
        if (this.projects.length === 1) {
          //  Has one project, start post
          this.selectedProject = this.projects[0];
          this.createPost();
        } else if (this.projects.length > 1) {
          this.$buefy.modal.open({
            parent: this,
            component: ProjectList,
            hasModalCard: true,
            events: {
              'select-project': project => {
                this.selectedProject = project;
                this.createPost();
              },
            },
          });
        }
      } else {
        // Has no projects, create project dialog and then start post
      }
    },
    async createPost() {
      await this.$axios.$post('/api/v1/posts', {
        profileId: this.$store.state.user._id,
        projectId: this.selectedProject.projectId,
        content: `<h3>I'm working on @${this.selectedProject.name}!</h3><p>Today my goals are:</p>`,
        duration: null,
        start: new Date(),
        end: null,
        isActive: true,
        username: this.$store.state.user.username,
      });
      this.$store.commit('user/incrementPostCount');
      this.$socket.client.emit('join', {
        username: this.$store.state.user.username,
        profilePicture: this.$store.state.user.profilePicture,
      });
      this.$router.push({ path: `/live/${this.$store.state.user.username}` });
    },
    cardModal() {
      if (!this.postInList || !this.postInList.length) {
        return this.$buefy.toast.open({
          duration: 4000,
          message: 'You need to subscribe to a space to create a post in it!',
          position: 'is-top',
          type: 'is-danger',
        });
      }
      this.$buefy.modal.open({
        parent: this,
        component: CreatePost,
        events: {
          'post-created': postObj => {
            this.$emit('post-created', postObj);
          },
        },
        hasModalCard: true,
      });
    },
  },
};
</script>

<style scoped>
.section {
  padding-bottom: 0;
}
span {
  color: #39c9a0;
}
.level {
  padding: 1rem;
  margin-bottom: 1em;
}
.modal-card-body {
  overflow: visible;
}
.field {
  margin: 1em 0;
}
div .modal-content {
  width: 55%;
  border-radius: 6px;
  overflow: visible;
}
.modal-content.box {
  min-height: 80%;
}
.button.action {
  width: 100%;
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}

.post {
  margin-right: 0.75em;
}
.is-white:hover {
  background-color: #e9ebee;
}
.dropdown-content {
  overflow: visible;
}
</style>
