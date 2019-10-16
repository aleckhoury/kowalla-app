<template lang="html">
  <div class="size">
    <NavHeader />
    <NavSubHeader />
    <div v-if="this.$store.state.firstVisit.firstVisit" class="hero">
      <div class="bannerStripe"></div>
      <div class="hero-body">
        <h1 class="title is-4">
          Welcome!
          <div class="delete is-large is-pulled-right" @click="$store.commit('firstVisit/cancelFirstVisit')" />
        </h1>
        <h2 class="subtitle">
          Kowalla is the coworking space that goes where you go, so you're never more than a click away from the community and support you need to build your
          dreams. That means:
          <ul>
            <li>
              Reddit-like spaces
            </li>
            <li>
              Live Posts to easily cowork with others
            </li>
            <li>
              Integrations to showcase your work without you lifting a finger
            </li>
          </ul>
        </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="11.4rem" fill="#bd56e1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <rect width="100%" height="40px" />
          <circle id="one" cx="87%" cy="100" r="80" />
          <circle id="two" cx="95%" cy="100" r="30" />
          <circle id="three" cx="85%" cy="100" r="60" />
          <circle id="four" cx="75%" cy="100" r="50" />
          <circle id="five" cx="70%" cy="100" r="30" />
          <circle id="six" cx="64%" cy="100" r="90" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import NavHeader from '~/components/Header/NavHeader/NavHeader';
import NavSubHeader from '~/components/Header/NavSubHeader/NavSubHeader';
export default {
  name: 'Header',
  components: { NavHeader, NavSubHeader },
  props: {
    homeFeed: { type: Boolean, default: true },
  },
};
</script>

<style lang="css" scoped>
.size {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 90px;
  width: 100%;
  display: block;
}
.hero {
  overflow:scroll;
  height: 11.4rem;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  z-index: 2;
}
.delete {
  margin-top: -2px;
  margin-right: 12%;
}
.hero-body {
  position: relative;
  z-index: 3;
  padding: 0.4em 0 0 10%;
}
.bannerStripe {
  height: 40px;
  width: 100%;
  background-color: #bd56e1;
  z-index: 1;
  position: absolute;
}
.title {
  padding-bottom: 0.2em;
  color: white;
}
.subtitle {
  font-size: 1.2rem;
  line-height: 1.5;
  color: white;
  max-width: 60%;
}
ul {
  margin-left:20px;
  list-style: inside;
}
ul li {
  list-style-type: disc;
}
svg {
  position: fixed;
  z-index: -1;
  background-color: #cd7be8;
}
circle {
  animation-duration: 15s;
  animation-timing-function:ease-in-out;
  animation-iteration-count:infinite;
}
#one{animation-name: one;}
#two{animation-name: two;}
#three{animation-name: three;}
#four{animation-name: four;}
#five{animation-name: five;}
#six{animation-name: six;}
@keyframes one{
  0%{transform:translate(0,0)}
  50%{transform:translate(100px,100px)}
  0%{transform:translate(0,0)}
}
@keyframes two{
  0%{transform:translate(0,0)}
  50%{transform:translate(-150px,50px)}
  0%{transform:translate(0,0)}
}
@keyframes three{
  0%{transform:translate(0,0)}
  50%{transform:translate(17px,7px)}
  0%{transform:translate(0,0)}
}
@keyframes four{
  0%{transform:translate(0,0)}
  50%{transform:translate(500px,50px)}
  0%{transform:translate(0,0)}
}
@keyframes three{
  0%{transform:translate(0,0)}
  50%{transform:translate(17px,7px)}
  0%{transform:translate(0,0)}
}
@keyframes five{
  0%{transform:translate(0,0)}
  50%{transform:translate(-100px,5px)}
  0%{transform:translate(0,0)}
}
@keyframes six {
  0% {
    transform: translate(0, 0)
  }
  50% {
    transform: translate(200px, -5px)
  }
  0% {
    transform: translate(0, 0)
  }
}
[v-cloak] {
  display: none;
}
</style>
