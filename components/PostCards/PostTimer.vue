<template>
    <div class="level">
        <div class="level-item">
            <span class="liveBox">{{ countdown }}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "PostTimer",
    props: {
      time: String,
    },
    data() {
      return {
        countdown: '',
      }
    },
    methods: {
      countdownTimer(expireTimeMS) {
        const self = this;
        let x = setInterval(function () {
          let now = new Date().getTime();

          let distance = expireTimeMS - now;

          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          hours = (hours < 10) ? '0' + hours : hours;
          minutes = (minutes < 10) ? '0' + minutes : minutes;
          seconds = (seconds < 10) ? '0' + seconds : seconds;

          self.countdown = `${hours}:${minutes}:${seconds}`;
          if (self.countdown  === '00:00:00') {
            clearInterval(x);
          }
        }, 1000)
      },
    },
    mounted() {
      this.countdownTimer(new Date(this.time).getTime());
    }
  };
</script>

<style scoped>
    .level {
    }
    .liveBox {
        border-radius: 6px;
        padding: 0.25em 0.5em;
        width: fit-content;
        background: red;
        color: white;
        font-size: 1.5em;
    }
</style>
