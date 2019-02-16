<template>
    <div>
        <!--<b-modal :width="350" scroll="keep">-->
            <div class="card">
                <aside class="menu">
                    <div class="message-header">
                        Reactions
                    </div>
                    <ul class="menu-list" v-for="react in reactionsFormatted">
                        <li class="is-size-4"><a>{{react.emoji}} <span>{{react.count}}</span></a></li>
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
    .menu-list li a {
        display: flex;
        justify-content: space-between;
        color: #39C9A0;
    }
</style>