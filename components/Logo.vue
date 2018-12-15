<template>
  <div class="VueToNuxtLogo">
    <img src="https://i.imgur.com/FyvFYLW.png" />
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
