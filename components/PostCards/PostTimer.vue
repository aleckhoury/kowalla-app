<template>
  <div class="level">
    <div class="level-item">
      <span v-if="duration" class="time duration">{{ readableDuration }}</span>
      <span v-else class="time live">{{ countUp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostTimer',
  props: {
    startTime: { type: String, default: '' },
    duration: { type: String, default: '' },
  },
  data() {
    return {
      countUp: '',
    };
  },
  computed: {
    readableDuration() {
      let seconds = this.duration / 1000;
      // 2- Extract hours:
      let hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
      seconds = seconds % 3600; // seconds remaining after extracting hours
      // 3- Extract minutes:
      let minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
      // 4- Keep only seconds not extracted to minutes:
      seconds = Math.floor(seconds % 60);

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      return `${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    if (!this.duration) {
      this.countUpTimer();
    }
  },
  methods: {
    countUpTimer() {
      const start = new Date(this.startTime).getTime();
      const self = this;
      let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = now - start;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        self.countUp = `${hours}:${minutes}:${seconds}`;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.level {
}
.time {
  border-radius: 6px;
  padding: 0.25em 0.5em;
  width: fit-content;
  color: white;
  font-size: 1.3em;
}
.live {
  background: #db9dee;
}
.duration {
  background: #bfbfbf;
}
</style>
