<template>
  <div>
    <div class="box rows">
      <div class="level is-paddingless">
        <span class="level-left is-size-4"><b>{{ name }}</b></span>
        <b-switch :value="isActive" class="level-right" size="is-medium" @input="toggleIntegration"></b-switch>
      </div>
      <div class="level is-paddingless">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import CreatePostModal from "~/components/Modals/Creation/CreatePostModal";

export default {
  name: "IntegrationCard",
  props: {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  data() {
    return {
      userDropdown: false,
      commDropdown: false,
      editor: null,
    };
  },
  computed: {
    isActive() {
      return this.$store.state.user.integrations.indexOf(this.name) !== -1;
    }
  },
  methods: {
    async toggleIntegration() {
      await this.$axios.put(
        `/api/v1/profile/${this.$store.state.user._id}/integrations`,
        { integration: this.name }
      );
      const index = this.$store.state.user.integrations.indexOf(this.name);

      this.$store.commit("user/toggleIntegration", { name: this.name, index });
    },
  },
};
</script>

<style scoped>
span {
  color: #39c9a0;
}
.level {
  padding: 1rem;
  margin-bottom: 1em;
}
.rows{
    display: flex;
    flex-direction: column;
}
</style>
