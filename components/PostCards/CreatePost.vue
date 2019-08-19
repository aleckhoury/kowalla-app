<template>
  <div>
    <div class="box level">
      <span class="level-left is-size-4"><b>Create a post...</b></span>
      <a class="button action" @click="cardModal()"><b>Create</b></a>
    </div>
  </div>
</template>

<script>
import CreatePost from "~/components/Modals/Creation/CreatePost";

export default {
  name: "CreatePost",
  data() {
    return {
      userDropdown: false,
      commDropdown: false,
      editor: null,
    };
  },
  computed: {
    postInList() {
      let list = [];
      this.$store.state.user.subscriptions.forEach(function(sub) {
        if (!sub.isProject) {
          list.push({ name: sub.name, id: sub.communityId });
        }
      });
      this.$store.state.user.owned.forEach(function(own) {
        if (!own.isProject) {
          list.push({ name: own.name, id: own.communityId });
        }
      });
      if (list.length) {
        return list;
      }
    },
  },
  methods: {
    cardModal() {
      if (!this.postInList || !this.postInList.length) {
        return this.$toast.open({
          duration: 4000,
          message: "You need to subscribe to a community to create a post in it!",
          position: "is-top",
          type: "is-danger",
        });
      }
      this.$modal.open({
        parent: this,
        component: CreatePost,
        events: {
          "post-created": postObj => {
            this.$emit("post-created", postObj);
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
  width: 12em;
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
