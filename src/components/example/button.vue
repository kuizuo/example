<template>
  <div flex gap-6>
    <button class="btn1 shine">
      闪光
    </button>
    <button class="btn1 fill">
      填充
    </button>
    <button class="btn1 ripple">
      涟漪
    </button>
    <button class="btn1 drop">
      点滴
    </button>
    <button class="btn1 border">
      边框
    </button>
    <button class="flowage">
      <svg width="100" height="50">
        <rect class="shape" width="100" height="50" />
        <div class="flowage-text">
          流边
        </div>
      </svg>
    </button>
    <button class="btn1 flow">
      流光按钮
    </button>
  </div>
</template>

<style scoped>
.btn1 {
  --second-background: #549ede;

  position: relative;
  padding: 0.5rem 1.5rem;
  background: #262626;
  color: white;
  overflow: hidden;
  z-index: 1;
  transition: all .5s ease-in-out 0.2s;
}

html.dark .btn1 {
  background: #fafafa;
  color: #262626;
}

.shine::before {
  content: "";
  z-index: -1;
  position: absolute;
  background: #595959;
  top: -50%;
  left: 0%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-200%, 0, 0) rotate(35deg);
}

.shine:hover::before {
  transition: transform .5s ease-in-out;
  transform: translate3d(500%, 0, 0) rotate(35deg);
}

.fill::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  z-index: -1;
  background-color: var(--second-background);
  transition: ease-in-out .5s;
}

.fill:hover::before {
  width: 100%;
}

.ripple::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  background-color: var(--second-background);
  border-radius: 50%;
  z-index: -1;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale(0, 0);
  transition: transform .5s ease-in-out;
}

.ripple:hover::before {
  transform: translate3d(-50%, -50%, 0) scale(10, 10);
}

.drop {
  overflow: inherit;
}

.drop::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 2px none var(--second-background);
  transform-origin: center;
}

.drop:hover::before {
  transition: all 1s ease-out;
  border: 2px solid var(--second-background);
  transform: scale(1.25);
  opacity: 0;
}

.border {
  color: #262626;
  background: #fff;
  border: 0;
  overflow: inherit;
}

html.dark .border {
  color: #fff;
  background: #262626;
}

.border::before,
.border::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0;
  bottom: 0;
  border: 2px solid var(--second-background);
  transition: all .5s;
}

.border::before {
  top: 0;
  left: 0;
  border-right: 0;
  border-bottom: 0;
}

.border::after {
  bottom: 0;
  right: 0;
  border-left: 0;
  border-top: 0;
}

.border:hover::before,
.border:hover::after {
  width: calc(100%);
  height: calc(100%);
}

.border:hover {
  background: var(--second-background);
  color: #fff;
  box-shadow: 0 0 40px var(--second-background);
  /* 倒影效果 */
  /* -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.3)); */
}

.flowage {
  position: relative;
  color: #262626;
  background-color: #fff;
}

html.dark .flowage {
  color: #fff;
  background-color: #262626;
}

.shape {
  /* 取消填充 */
  fill:none;
  /* 定义一条线 */
  stroke: #009ffd;

  stroke-width: 6;
  /* 设置虚线：虚线长度 间距 */
  stroke-dasharray: 40 400;
  /* 虚线偏移量 */
  stroke-dashoffset: 260;
  transition: 1s ease;
}

.flowage-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 2px;
}

.flowage:hover .shape {
  stroke: #06e6a0;
  stroke-width: 3;
  stroke-dasharray: 50 0;
  stroke-dashoffset: 0;
}

.flow {
  overflow: inherit;
  background: linear-gradient(to right, #59ffff, #f441a5, #ffeb3b, #60cdff);
  background-size: 400%;
  z-index: 1;
}

html.dark .flow {
  color: #fff;
  background: linear-gradient(to right, #59ffff, #f441a5, #ffeb3b, #60cdff);
  background-size: 400%;
}

.flow::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  bottom: -2px;
  right: -2px;
  background: linear-gradient(to right, #59ffff, #f441a5, #ffeb3b, #60cdff);
  background-size: 400%;
  z-index: -1;
  filter: blur(20px);
}

.flow:hover,
.flow:hover::before {
  animation: flow 10s infinite;
}

@keyframes flow {
  100% {
    background-position: -400% 0;
  }
}
</style>
