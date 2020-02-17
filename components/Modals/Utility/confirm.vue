<template>
  <div class="modal-content">
    <div class="box">
      <p class="modal-card-title">
        Select
      </p>
      <InviteCodeSvg class="inviteSvg" />
      <b-field message="Invite code copied to clipboard!" type="is-success">
        <b-input id="inviteCode" :value="code" @focus="copyToClipboard" />
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
};
</script>

<style scoped></style>
