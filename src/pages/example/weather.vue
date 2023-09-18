<template>
  <div class="p-4 flex flex-nowrap w-full gap-8">
    <div class="weather-container weather-sunny animate-duration-1800">
      <div class="animate__animated ">
        <div class="sun" />
        <div class="sunx" />
      </div>
    </div>
    <div class="weather-container weather-rainy animate-duration-1800">
      <div class="rainy animate__animated ">
        <ul><li /><li /><li /><li /><li /><li /><li /><li /></ul>
        <span class="rainy-cloud" />
      </div>
    </div>
    <div class="weather-container weather-snowy animate-duration-1800">
      <div class="snowy animate__animated ">
        <ul><li /><li /><li /><li /><li /><li /><li /><li /></ul>
        <span class="snowe" /><span class="snowex" /><span class="stick" /><span class="stick2" />
      </div>
    </div>
    <div class="weather-container weather-cloudy animate-duration-1800">
      <div class="animate__animated ">
        <div class="cloud" />
        <div class="cloudx" />
      </div>
    </div>
    <div class="weather-container weather-nighty animate-duration-1800">
      <div class="animate__animated ">
        <div class="night">
          <span class="moon" /><span class="spot1" /><span class="spot2" />
          <ul><li /><li /><li /><li /><li /><li /><li /><li /></ul>
        </div>
      </div>
    </div>
  </div>

  <div mt-8>
    <p py-1>
      来源: <a
        href="https://grinzero.github.io/magic-design-react/weather" target="_blank" text-cyan hover:underline
      >https://grinzero.github.io/magic-design-react/weather</a>
    </p>
  </div>
</template>

<style scoped>
.weather-container {
  position: relative;
  z-index: 1;
  min-width: 150px;
  width: 150px;
  height: 150px;
  border-radius: 40%;
  transition: background-color var(--animate-duration) ease, box-shadow var(--animate-duration) ease
}

.weather-sunny {
  background: linear-gradient(to top right, transparent, rgb(251 140 0));
  background-color: rgb(255 87 34);
  box-shadow: 1px 1px 30px #ff6e00
}

.weather-cloudy {
  background: linear-gradient(to top right, transparent, rgb(3 155 229) 40%);
  background-color: rgb(63 81 181);
  box-shadow: 1px 1px 30px #0277bd
}

.weather-rainy {
  background: #91cb56 linear-gradient(to top right, transparent, #43c1d4 50%);
  background-color: rgb(145 203 86);
  box-shadow: 1px 1px 30px #43c0d4
}

.weather-snowy {
  background: linear-gradient(to top right, transparent, rgb(33 33 33) 90%);
  background-color: rgb(117 117 117);
  box-shadow: 1px 1px 30px rgb(33 33 33)
}

.weather-nighty {
  background: linear-gradient(to bottom right, transparent, rgb(171 71 188) 70%);
  background-color: rgb(63 81 181);
  box-shadow: 1px 1px 30px rgb(81 45 168)
}

.sun {
  position: absolute;
  top: -10%;
  left: 65%;
  width: 50px;
  height: 50px;
  background: linear-gradient(to bottom left, rgb(255 235 59) 0, rgb(249 168 37) 90%);
  border-radius: 100%;
  box-shadow: 1px 1px 30pxrgb(255 160 0);
  animation: inex 3s linear infinite
}

@keyframes inex {
  50% {
    opacity: .4
  }

  60% {
    opacity: 1
  }
}

.sunx {
  position: absolute;
  top: 30%;
  left: 45%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 100%;
  opacity: .2
}

.night li {
  position: absolute;
  width: 3px;
  height: 3px;
  list-style: none;
  background-color: #fff;
  border-radius: 100%;
  transform: rotate(45deg)
}

.night li:first-child {
  top: 30%;
  left: 65%
}

.night li:nth-child(2) {
  top: 35%;
  left: 53%
}

.night li:nth-child(3) {
  top: 20%;
  left: 75%;
  width: 2px;
  height: 2px;
  opacity: 0;
  animation: meteor 1.5s linear infinite;
  animation-delay: .6s
}

.night li:nth-child(4) {
  top: 5%;
  left: 50%
}

.night li:nth-child(5) {
  top: 20%;
  left: 55%;
  width: 1px;
  height: 15px;
  opacity: 0;
  animation: meteor 1.5s linear infinite
}

@keyframes meteor {
  10% {
    opacity: 1
  }

  80% {
    top: 75%;
    left: 10%;
    opacity: 0
  }
}

.moon {
  position: absolute;
  top: -10%;
  left: 65%;
  width: 70px;
  height: 70px;
  background: rgb(255 241 118);
  border-radius: 100%;
  box-shadow: 1px 1px 30px rgb(224 224 224)
}

.spot1 {
  position: absolute;
  top: 0;
  left: 85%;
  width: 10px;
  height: 10px;
  background-color: #777;
  border-radius: 100%
}

.spot2 {
  position: absolute;
  top: 30%;
  left: 75%;
  width: 5px;
  height: 5px;
  background-color: #777;
  border-radius: 100%
}

.rainy li {
  position: absolute;
  width: 2px;
  height: 7px;
  list-style: none;
  background-color: #eee;
  border-radius: 10%;
  opacity: 0;
  transform: rotate(25deg);
  animation: fall 3s linear infinite
}

.rainy li:first-child {
  top: 10%;
  left: 95%
}

.rainy li:nth-child(2) {
  top: 5%;
  left: 83%;
  animation-delay: .3s
}

.rainy li:nth-child(3) {
  top: 4%;
  left: 87%;
  animation-delay: .6s
}

.rainy li:nth-child(4) {
  top: 15%;
  left: 70%;
  animation-delay: 1s
}

.rainy li:nth-child(5) {
  top: 10%;
  left: 75%
}

.rainy-cloud {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 60px;
  height: 20px;
  background-color: #597180;
  border-radius: 10px;
  box-shadow: 1px 1px 30px #4d636f;
  animation: rainy-flash 1.5s linear infinite
}

@keyframes rainy-flash {
  48% {
    background-color: rgb(96 125 139)
  }

  50% {
    background-color: #fff
  }

  55% {
    background-color: rgb(96 125 139)
  }

  57% {
    background-color: #fff
  }
}

.snowy li {
  position: absolute;
  width: 5px;
  height: 5px;
  list-style: none;
  background-color: #777;
  border-radius: 100%;
  box-shadow: 1px 1px 30px #555;
  opacity: 0;
  animation: fall 3s linear infinite
}

@keyframes fall {
  10% {
    opacity: .8
  }

  50% {
    opacity: 1;
    transform: translate(-10px, 30px)
  }

  to {
    transform: translate(-25px, 70px)
  }
}

.snowy li:first-child {
  top: 0;
  left: 100%
}

.snowy li:nth-child(2) {
  top: 5%;
  left: 90%
}

.snowy li:nth-child(3) {
  top: -10%;
  left: 80%;
  animation-delay: 2s
}

.snowy li:nth-child(4) {
  top: 10%;
  left: 100%;
  animation-delay: 2s
}

.snowy li:nth-child(5) {
  top: 20%;
  left: 80%;
  animation-delay: .5s
}

.snowy li:nth-child(6) {
  top: 35%;
  left: 70%;
  background-color: #bbb;
  animation-delay: .5s
}

.snowy li:nth-child(7) {
  top: 23%;
  left: 60%;
  background-color: #bbb;
  animation-delay: .8s
}

.snowy li:nth-child(8) {
  top: 5%;
  left: 70%;
  background-color: #bbb;
  animation-delay: .8s
}

.snowe {
  position: absolute;
  top: 58%;
  left: 42%;
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 60px
}

.snowex {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  background-color: #bbb;
  border-radius: 15px
}

.stick {
  position: absolute;
  top: 60%;
  left: 40%;
  z-index: -1;
  width: 3px;
  height: 15px;
  background-color: #333;
  transform: rotate(-45deg)
}

.stick2 {
  position: absolute;
  top: 60%;
  left: 70%;
  z-index: -1;
  width: 3px;
  height: 15px;
  background-color: #333;
  transform: rotate(45deg)
}

.cloud {
    position: absolute;
    top: 5%;
    left: 70%;
    width: 60px;
    height: 20px;
    background-color: rgb(129 212 250);
    border-radius: 10px;
    box-shadow: 1px 1px 30px rgb(0 151 167);
    animation: move 3s linear infinite;
}

.cloudx {
    position: absolute;
    top: 23%;
    left: 55%;
    width: 60px;
    height: 20px;
    background-color: rgb(129 212 250);
    border-radius: 10px;
    animation: move 3s linear infinite
}

@keyframes move {
    50% {
        transform: translateX(-10px)
    }
}
</style>

<route lang="yaml">
name: 动态天气效果
meta:
  layout: demo
</route>
