<template>
  <div class="modal-content">
    <div class="box">
      <p class="modal-card-title">Invite Code</p>
      <InviteCodeSvg class="inviteSvg" />
      <b-field message="Invite code copied to clipboard!" type="is-success">
        <b-input id="inviteCode" :value="code" @focus="copyToClipboard" />
      </b-field>
    </div>
  </div>
</template>

<script>
import InviteCodeSvg from "../../../svg/InviteCode";
export default {
  name: "InviteCode",
  components: {
    InviteCodeSvg
  },
  computed: {
    code() {
      return `https://kowalla.co/?invite=${this.$store.state.user.username}`;
    }
  },
  mounted() {
    let code = document.getElementById('inviteCode');
    code.focus();
    code.select();
  },
  methods: {
    copyToClipboard() {
      let code = document.getElementById('inviteCode');
      code.select();
      document.execCommand("copy");
    },
  }
};
</script>

<style scoped>
    .modal-card-title {
        font-family: 'Helvetica Neue';
        padding-bottom: 1em;
        color: #39c9a0;
        font-weight: 700;
        text-align: center;
    }
    .inviteSvg {
        width: 95%;
        height: auto;
        margin: 0 auto;
        display: block;
        padding: 1em 0;
    }
</style>
