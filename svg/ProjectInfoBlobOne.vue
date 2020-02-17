<template>
  <div>
    <img id="projectPage" src="../static/project_page.png" />
    <img id="workingOn" src="../static/working_on.png" />
    <svg id="ProjectBlobOne" viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(300,300)">
        <path
          d="M109.6,-173.1C152.2,-143.2,203.9,-130,226.3,-98.3C248.6,-66.6,241.6,-16.4,224.9,25.5C208.3,67.5,182,101.2,151.5,125C121.1,148.8,86.5,162.7,47,186.1C7.6,209.5,-36.6,242.4,-82.7,245.4C-128.7,248.4,-176.6,221.5,-195.6,180.2C-214.6,139,-204.8,83.5,-205.8,33.6C-206.7,-16.3,-218.4,-60.7,-210.2,-103.1C-201.9,-145.5,-173.7,-185.9,-135.3,-217.7C-97,-249.5,-48.5,-272.8,-7.5,-261.1C33.5,-249.5,67,-203,109.6,-173.1Z"
          fill="#efbbcc"
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
#ProjectBlobOne {
  margin: 0 auto;
  display: block;
  height: 500px;
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
#projectPage {
  top: 25%;
}
#workingOn {
  right: 0;
  bottom: 20%;
}
</style>
