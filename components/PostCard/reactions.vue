<template>
    <div>
            <a class="button is-outlined"><b>😂26</b></a>
            <a class="button is-outlined"><b>🤠13</b></a>
            <a class="button is-outlined"><b>··· 1.2K</b></a>
            <BDropdown>
                <a class="button is-outlined" slot="trigger">
                    <b-icon icon="plus"></b-icon>
                </a>
                <BDropdownItem custom>
                        <Picker :native="true" :showSkinTones="false" :showPreview="false" />
                </BDropdownItem>
            </BDropdown>
            <font-awesome-icon icon="comments" /> Comments
    </div>
</template>

<script>
  import { Picker } from 'emoji-mart-vue';

  export default {
    name: "reactions",
    components: { Picker },
    props: {
      post: Object,
    },
    data() {
      return {
        reactionList: [],
      }
    },
    async created() {
      try {
        console.log(this.post);
        this.reactionList = await this.$axios.$get(`/api/v1/reactions/${this.post._id}`);
      } catch {
        console.log('some kind of error idk');
      }
      console.log(this.reactionList);
    },
  };
</script>

<style scoped>
    p {
        padding-left: 1em;
    }
    .button {
        color: #39C9A0;
        border-color: #39C9A0;
        border-width: medium;
    }
    .button:hover {
        background-color: rgba(57,201,160,0.3);
        color: #39C9A0;
        border-color: #39C9A0;
    }
</style>