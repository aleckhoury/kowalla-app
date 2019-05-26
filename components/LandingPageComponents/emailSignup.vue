<template lang="html">
  <div>
    <!-- Begin Mailchimp Signup Form -->
    <link
      href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
      rel="stylesheet"
      type="text/css"
    >
    <style type="text/css">
      #mc_embed_signup {
      background: #fff;
      clear: left;
      font: 14px Helvetica, Arial, sans-serif;
      }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
      We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
      <form
        id="mc-embedded-subscribe-form"
        action="https://kowalla.us19.list-manage.com/subscribe/post?u=a4e8b2e8f9ca5fe2990a4e718&amp;id=85e4dc69a9"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL"
            >Email Address <span class="asterisk">*</span>
            </label>
            <input
              id="mce-EMAIL"
              type="email"
              value=""
              name="EMAIL"
              class="required email"
            >
          </div>
          <div id="mce-responses" class="clear">
            <div
              id="mce-error-response"
              class="response"
              style="display:none"
            />
            <div
              id="mce-success-response"
              class="response"
              style="display:none"
            />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_a4e8b2e8f9ca5fe2990a4e718_85e4dc69a9"
              tabindex="-1"
              value=""
            >
          </div>
          <div class="clear">
            <input
              id="mc-embedded-subscribe"
              type="submit"
              value="Subscribe"
              name="subscribe"
              class="button"
            >
          </div>
        </div>
      </form>
    </div>
    <script
      type="text/javascript"
      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    /><script type="text/javascript">
      (function($) {
      window.fnames = new Array();
      window.ftypes = new Array();
      fnames[0] = "EMAIL";
      ftypes[0] = "email";
      })(jQuery);
      var $mcj = jQuery.noConflict(true);
    </script>
    <!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {
  name: "EmailSignup",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    checkForm(e) {
      if (this.email) {
        this.email = "";
        return true;
      }
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required.");
        e.preventDefault();
      }
    },
  },
};
</script>

<style scoped lang="css"></style>
