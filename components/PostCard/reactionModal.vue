<template>
    <div>
        <!--<b-modal :width="350" scroll="keep">-->
            <div class="card">
                <aside class="menu">
                    <div class="message-header">
                        Reactions
                    </div>
                    <ul class="menu-list" v-for="(react, index) in reactionsFormatted">
                        <li class="is-size-4" :class="{ 'user-reacted': react.userReacted }" @click="toggleReaction(react.emoji, index)"><a>{{react.emoji}} <span>{{react.count}}</span></a></li>
                    </ul>

                </aside>
            </div>
        <!--</b-modal>-->
    </div>
</template>

<script>
  export default {
    name: "reactionModal",
    props: {
      toggleReaction: Function,
      reactionsFormatted: Array,
    },
  };
</script>

<style scoped>
    .card {
        border-radius: 6px;
        min-width: 350px;
    }
    .message-header {
        background: #39C9A0;
    }
    .user-reacted {
        background-color: rgba(57,201,160,0.3);
    }
    .menu-list li a {
        display: flex;
        justify-content: space-between;
        color: #39C9A0;
    }
</style>