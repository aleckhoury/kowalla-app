<template lang="html">
  <div class="screen background-tint">

    <Header></Header>

    <div class="container is-fullhd">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div class="columns is-centered is-marginless main-margin">

        <!-- post feed -->
        <div class="column is-one-half is-paddingless test-outline">
          <div class="content is-marginless" v-html="post.content">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import Post from '~/components/PostCard/feedPost';

export default {
  name: 'About',
  components: { Header, Post },
  data() {
    return {
      post: {
        _id: "uxWP0nd_C",
        profileId: "z-T-0nlZH",
        communityId: "1234567890",
        content: `<div class="notion-page-content" style="flex-shrink: 0; flex-grow: 1; width: 900px; max-width: 100%; display: flex; align-items: center; flex-direction: column; font-size: 16px; color: rgb(55, 53, 47); padding-top: 0px; padding-left: calc( env(safe-area-inset-left) + 96px ); padding-right: calc( env(safe-area-inset-right) + 96px ); padding-bottom: 30vh;"><div data-block-id="6558155f-efec-40c1-9029-63847a10379c" class="notion-selectable" style="width: 100%; margin-top: 2px; margin-bottom: 1px;"><div style="color: rgb(55, 53, 47);"><div style="display: flex;"><div contenteditable="true" spellcheck="true" placeholder=" " data-root="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; -webkit-user-modify: read-write-plaintext-only;">In Notion, pages can contain sub pages. It's a great way to organize things without messy folders!</div></div></div></div><div data-block-id="4aed6b9f-aa45-4abb-8da2-accdd107e4ab" class="notion-selectable" style="width: 100%; margin-top: 1px; margin-bottom: 0px;"><div style="color: rgb(55, 53, 47);"><div style="display: flex;"><div contenteditable="true" spellcheck="true" placeholder=" " data-root="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; -webkit-user-modify: read-write-plaintext-only;">To go back, click the link at the top 👆</div></div></div></div></div>`
      }
      
    }
  },
  mounted() {
    console.log(this.post);
  }
};
</script>

<style lang="css">
.content {
  background-color: white;
  width: 600px;
}
</style>
