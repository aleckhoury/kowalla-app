<template>
  <div>
    <img id="coworkingNow" src="../static/coworking_now.png" />
    <img id="liveHeader" src="../static/live_header.png" />
    <img id="focusPage" src="../static/focus_page.png" />
    <svg id="ProjectBlobTwo" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(300,300)">
        <path
          d="M136.1,-215.2C169.4,-190.3,184.8,-140.8,194.9,-95.7C205,-50.6,209.9,-9.9,200.9,26.4C191.8,62.7,168.8,94.6,144.5,128.6C120.2,162.6,94.6,198.8,63.2,201.9C31.8,205,-5.4,174.9,-48.2,162.9C-91.1,150.9,-139.6,157,-161.6,137C-183.5,117.1,-178.9,71.1,-192.1,23.5C-205.3,-24,-236.4,-73.1,-222.5,-100.8C-208.6,-128.5,-149.7,-134.9,-105.1,-154.7C-60.6,-174.6,-30.3,-207.8,10.5,-224.2C51.4,-240.6,102.7,-240.2,136.1,-215.2Z"
          fill="#39c9a0"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo',
};
</script>

<style scoped>
#ProjectBlobTwo {
  margin: 0 auto;
  display: block;
  height: 500px;
  background-color: white;
}
img {
  position: absolute;
  border-radius: 6px;
  border: 1px solid lightgrey;
  width: 60%;
  -webkit-box-shadow: 7px 10px 20px -15px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 7px 10px 20px -15px rgba(0, 0, 0, 0.8);
  box-shadow: 7px 10px 20px -15px rgba(0, 0, 0, 0.8);
}
#coworkingNow {
  width: 30%;
  top: 20%;
}
#liveHeader {
  right: 0;
  top: 30%;
}
#focusPage {
  bottom: 0;
}
</style>
