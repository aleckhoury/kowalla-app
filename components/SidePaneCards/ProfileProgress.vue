<template>
  <CardContainer v-if="user.loggedIn" header-string="Profile Progress">
    <transition name="fade" mode="out-in">
      <div v-if="completionPercent !== 100">
        <svg :height="radius * 2" :width="radius * 2">
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="20%" stop-color="rgba(189,86,225,1)" />
              <stop offset="50%" stop-color="rgba(219,157,238,1)" />
              <stop offset="80%" stop-color="rgba(239,187,204,1)" />
            </linearGradient>
          </defs>
          <circle
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: 0 }"
            :stroke-width="stroke"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
            :transform="`rotate(-90 ${radius} ${radius})`"
            class="outline"
            fill="transparent"
          />
          <circle
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset }"
            :stroke-width="stroke"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
            :transform="`rotate(-90 ${radius} ${radius})`"
            stroke-linecap="round"
            class="progress"
            fill="transparent"
          />
          <text x="50%" y="50%" text-anchor="middle" dy=".3em">{{ count }}%</text>
        </svg>
        <div :class="{ isMobile: isMobile }" class="items">
          <ul class="fa-ul">
            <li v-for="item in profileProgress" :key="item.key">
              <span class="fa-li">
                <font-awesome-icon
                  :icon="item.step ? 'check' : 'times'"
                  :color="item.step ? '#23d160' : '#ff3860'"
                />
              </span>
              <strong>{{ item.content }}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <h2 :class="{ isMobile: isMobile }" class="congrats">Congrats! You're a Kowalla All-Star!</h2>
        <CompletedProfile class="completed bounce-7" />
        <p :class="{ isMobile: isMobile }" class="invite">Share your invite code to showcase your communities and projects to others!</p>
        <a class="button action" @click="openInviteModal">Get Code</a>
      </div>
    </transition>
  </CardContainer>
</template>

<script>
import CardContainer from "./CardContainer";
import CompletedProfile from "../../svg/CompletedProfile";
import InviteCode from "../Modals/Other/InviteCode";
export default {
  name: "Progress",
  components: { CompletedProfile, CardContainer },
  props: {
    isMobile: { type: Boolean, default: false }
  },
  data() {
    return {
      radius: 100,
      count: 0,
      stroke: 15,
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.count / 100) * this.circumference;
    },
    normalizedRadius() {
      return this.radius - this.stroke * 2;
    },
    circumference() {
      return this.normalizedRadius * 2 * Math.PI;
    },
    user() {
      return this.$store.state.user;
    },
    profileProgress() {
      if (Object.keys(this.user).length) {
        const progress = [
          {
            step: this.user.description.length > 3,
            key: "description",
            content: "Filled out a description",
          },
          {
            step: this.user.subscriptions.length > 2,
            key: "subscriptions",
            content: "Subscribe to your first space or project",
          },
          {
            step: Boolean(this.user.owned.length),
            key: "owned",
            content: "Create your first project",
          },
          {
            step: Boolean(this.user.postCount),
            key: "posts",
            content: "Write your first post",
          },
          {
            step: this.user.profilePicture.includes("kowalla-dev"),
            key: "profilePicture",
            content: "Upload your profile picture",
          },
          {
            step: Boolean(this.user.commentCount),
            key: "comments",
            content: "Write your first comment",
          },
        ];
        return progress.sort((a, b) => b.step - a.step);
      }
      return [];
    },
    completionPercent() {
      return Math.round(
        (this.profileProgress.filter(x => x.step === true).length /
          this.profileProgress.length) *
          100
      );
    },
  },
  watch: {
    completionPercent(newPercent, oldPercent) {
      if (newPercent > oldPercent) {
        this.log();
      }
    },
  },
  mounted() {
    const self = this;
    setTimeout(() => self.log(), 1000);
  },
  methods: {
    log() {
      const self = this;
      if (this.count < this.completionPercent) {
        setTimeout(function() {
          self.count++;
          self.log();
        }, 50);
      }
    },
    openInviteModal() {
      this.$modal.open({
        parent: this,
        component: InviteCode,
        hasModalCard: true,
        width: 400,
      });
    },
  },
};
</script>

<style scoped>
svg {
  display: block;
  height: auto;
  margin: 0 auto;
}
circle.progress {
  shape-rendering: crispEdges;
  stroke: url(#MyGradient);
}
circle.outline {
  shape-rendering: crispEdges;
  stroke: #E9EBEE;
}
text {
  font-size: 1.5em;
  font-weight: 700;
}
.svg-inline--fa {
  display: unset;
}
.items {
  padding: 0 1em 1em 1em;
}
.isMobile.items {
  padding: 0;
  font-size: 0.9em;
}
.completed {
  padding: 0 1em;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: 1;
  transform-origin: bottom;
}
.bounce-7 {
  animation-name: bounce-7;
  animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
}
@keyframes bounce-7 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, .9) translateY(0);
  }
  30% {
    transform: scale(.9, 1.1) translateY(-50px);
  }
  50% {
    transform: scale(1.05, .95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
.congrats {
  text-align: center;
  margin: 0 auto;
  font-size: 1.25em;
  font-weight: 700;
  padding: 1em;
  padding-bottom: 0;
  margin-bottom: -30px;
}
.isMobile.congrats {
  font-size: 1.1em;
  margin-bottom: -10px;
}
.invite {
  text-align: center;
  margin: 0 auto;
  font-size: 1.1em;
  font-weight: 700;
  padding: 1em;
  padding-top: 0;
}
.isMobile.invite {
  font-size: 1em;
}
.button.action {
  width: 70%;
  text-align: center;
  margin: 0 15% 1em 15%;
  color: #0a2049;
  border: 1px solid #0a2049;
  font-size: 1.1em;
  font-weight: 700;
}
.button.action:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}
@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
