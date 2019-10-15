<template>
  <div>
    <div class="card">
      <aside class="menu">
        <div class="message-header">
          Reactions
        </div>
        <ul v-for="(react, index) in reactionsFormatted" :key="index" class="menu-list">
          <li :class="{ 'user-reacted': react.userReacted }" class="is-size-4" @click="toggleReaction(react.emoji, index)">
            <a
              >{{ react.emoji }} <span>{{ react.count }}</span></a
            >
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReactionModal',
  props: {
    toggleReaction: {
      type: Function,
      default: () => {}
    },
    reactionsFormatted: { type: Array, default: () => [] }
  }
};
</script>

<style scoped>
.card {
  border-radius: 6px;
  min-width: 350px;
  max-height: 85vh;
  overflow-y: scroll;
}
.message-header {
  background: #39c9a0;
}
.user-reacted {
  background-color: rgba(57, 201, 160, 0.3);
}
.menu-list li a {
  display: flex;
  justify-content: space-between;
  color: #39c9a0;
}
</style>
