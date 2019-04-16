<template>
    <div>
        <div class="box level">
            <span class="level-left is-size-4"><b>Create a post...</b></span>
            <a class="button action" @click="cardModal()"><b>Create</b></a>
        </div>
    </div>
</template>

<script>
import CreatePostModal from './Modals/Creation/CreatePostModal.vue'

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
      cardModal() {
        this.$modal.open({
            parent: this,
            component: CreatePostModal,
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
