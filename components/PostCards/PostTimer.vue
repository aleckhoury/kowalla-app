<template>
  <div class="level">
    <div class="level-item">
      <span class="liveBox">{{ countUp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostTimer",
  props: {
    startTime: { type: String, default: "" },
  },
  data() {
    return {
      countUp: "",
    };
  },
  mounted() {
    this.countUpTimer();
  },
  methods: {
    countUpTimer() {
      const start = new Date(this.startTime).getTime();
      const self = this;
      let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = now - start;

        let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        self.countUp = `${hours}:${minutes}:${seconds}`;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.level {
}
.liveBox {
  border-radius: 6px;
  padding: 0.25em 0.5em;
  width: fit-content;
  background: #db9dee;
  color: white;
  font-size: 1.5em;
}
</style>
