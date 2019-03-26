<template>
    <div>
        <div class="box level">
            <span class="level-left is-size-4"><b>Create a post...</b></span>
            <a class="button action" @click="cardModal()"><b>Create</b></a>
        </div>
    </div>
</template>

<script>
import CreatePostModal from './Modals/Creation/createPost/CreatePostModal.vue'

  export default {
    name: "createPost",
    data() {
      return {
        userDropdown: false,
        commDropdown: false,
        editor: null
      };
    },
    methods: {
      async createPost() {
        const community = await this.$axios.get(`/api/v1/communities/5c3292a2f03d751a7ffb80ab`);
        await this.$axios.post(`/api/v1/communities/1234567890/posts`, {
          profileId: this.$store.state.user._id,
          communityId: community._id,
          content: this.html,
        });
      },
      cardModal() {
        this.$modal.open({
            parent: this,
            component: CreatePostModal,
            props: {
              reactionsFormatted: this.reactionsFormatted,
            },
            hasModalCard: true,
          },
        )
      },
    },
  };
</script>

<style scoped>
.section {
    padding-bottom: 0;
}
span {
    color: #39C9A0;
}
.level {
    padding: 1rem;
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
    width: 12em;
    color: white;
    background-color: #39C9A0;
    border-color: #39C9A0;
}

.post {
    margin-right: 0.75em;
}
.is-white:hover {
    background-color: #E9EBEE;
}
.dropdown-content {
    overflow: visible;
}
</style>
