<template>
  <div class="card">
    <!-- Begin Mailchimp Signup Form -->
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
          <label for="mce-EMAIL">Join Waitlist</label>
          <div class="mc-field-group">
            <input id="mce-EMAIL" v-model="email" type="email" value="" name="EMAIL" class="required email" placeholder="Enter your email address" />
          </div>
          <div id="mce-responses">
            <div v-for="x in errors" id="mce-error-response" :key="x" class="response">
              {{ x }}
            </div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_a4e8b2e8f9ca5fe2990a4e718_85e4dc69a9" tabindex="-1" value="" />
          </div>
          <div class="clear">
            <input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" class="button" @click="checkForm" />
          </div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {
  name: 'MailChimpEmailSignup',
  data() {
    return {
      email: '',
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if (this.email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.email).toLowerCase())) {
          e.preventDefault();
          this.errors.push('Your email is invalid');
        } else {
          this.$parent.close();
          return true;
        }
      } else {
        e.preventDefault();
        this.errors.push("You can't sign up without an email");
      }
    },
  },
};
</script>
<style type="css" scoped>
.card {
  border-radius: 6px;
  padding: 1em 2em 1em 1em;
  width: 30em;
}
div.clear {
  padding-top: 1em;
}
#mc_embed_signup_scroll label {
  font-size: 2em;
  color: #39c9a0;
  font-weight: 600;
}
#mce-EMAIL {
  border: none;
  border-bottom: 2px solid lightgrey;
  transition: border 0.5s;
  width: 100%;
  font-size: 1.5em;
  padding-top: 1em;
}
#mce-EMAIL:focus {
  border: none;
  border-bottom: 2px solid #39c9a0;
}
#mc-embedded-subscribe {
  font-weight: bold;
  width: 12em;
  color: #0a2049;
  background-color: white;
  border: 1px solid #0a2049;
  margin: 0 auto;
  font-size: 1.3em;
}
#mc-embedded-subscribe:hover {
  color: white;
  background-color: #0a2049;
}
.response {
  color: red;
}
</style>
