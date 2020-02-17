<template>
  <div>
    <img id="coworkingNow" src="https://kowalla-dev.s3.us-east-2.amazonaws.com/internal/coworking_now.png" />
    <img id="liveHeader" src="https://kowalla-dev.s3.us-east-2.amazonaws.com/internal/live_header.png" />
    <img id="focusPage" src="https://kowalla-dev.s3.us-east-2.amazonaws.com/internal/focus_page.png" />
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
  max-width: 100%;
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
  width: 37%;
  top: 20%;
}
#liveHeader {
  right: 0;
  top: 30%;
}
#focusPage {
  bottom: 0;
}
@media only screen and (max-width: 600px) {
  img {
    width: 90%;
  }
  #coworkingNow {
    width: 50%;
    top: 25%;
  }
  #liveHeader {
    right: 0;
    top: 43%;
  }
  #ProjectBlobTwo {
    height: auto;
  }
}
</style>
