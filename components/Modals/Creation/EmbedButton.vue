<template>
  <b-dropdown aria-role="menu">
    <BButton slot="trigger" class="streamButton">
      <svg
        class="streamIcon youtube"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 461.001 461.001"
        style="enable-background:new 0 0 461.001 461.001;"
        xml:space="preserve"
      >
        <path
          style="fill:#F61C0D;"
          d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
                  c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
                  C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
                  c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
        />
      </svg>
      <svg
        class="streamIcon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
      >
        <g>
          <path
            style="fill:#673AB7;"
            d="M48,0L16,96v352h128v64h64l64-64h96l128-136.32V0H48z M464,288l-89.6,96H260.928L192,434.144V384H80
                      V32h384V288z"
          />
          <rect x="240" y="128" style="fill:#673AB7;" width="32" height="128" />
          <rect x="336" y="128" style="fill:#673AB7;" width="32" height="128" />
        </g>
      </svg>
      Embed Stream
    </BButton>

    <b-dropdown-item aria-role="menu-item" custom class="videoLink">
      <h3>Paste your video link here:</h3>
      <b-field label="">
        <b-input v-model="videoLink"></b-input
        ><b-button @click="sendLink">
          Enter
        </b-button>
      </b-field>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'EmbedButton',
  props: {
    command: { type: Function, default: () => {} },
  },
  data() {
    return {
      videoLink: '',
    };
  },
  computed: {},
  methods: {
    sendLink() {
      let src = '';
      let id = '';
      if (this.videoLink.includes('youtube' || 'youtu.be')) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = this.videoLink.match(regExp);
        id = match && match[7].length == 11 ? match[7] : false;
        src = `https://www.youtube.com/embed/${id}`;
      } else if (this.videoLink.includes('twitch.tv/')) {
        const split = this.videoLink.split('h.tv/');
        id = split[1];
        src = `https://player.twitch.tv/?channel=${id}`;
      } else {
        return this.$buefy.toast.open({
          duration: 3000,
          message: 'Invalid Link',
          position: 'is-top',
          type: 'is-danger',
        });
      }
      const data = {
        command: this.command,
        data: {
          src,
        },
      };
      this.$emit('enterUrl', data);
    },
  },
};
</script>

<style scoped>
button.streamButton {
  margin-left: 10px;
}
.streamIcon {
  height: auto;
  width: 20px;
  vertical-align: bottom;
  margin-right: 3px;
}
.streamIcon.youtube {
  vertical-align: middle;
}
.videoLink {
  width: 20rem;
}
</style>
