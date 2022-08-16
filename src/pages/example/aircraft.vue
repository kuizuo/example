<script lang='ts' setup>
const plane = $ref<HTMLElement>(null)
let timer: any = 0

onMounted(() => {
  let deg = 0; let ex = 0; let ey = 0; let vx = 0; let vy = 0; let count = 0

  function setPlanePosition(e: { x: number; y: number }) {
    ex = e.x - plane.offsetLeft - plane.clientWidth / 2
    ey = e.y - plane.offsetTop - plane.clientHeight / 2
    deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 90
    if (ex < 0)
      deg += 180

    count = 0
  }
  window.onmousemove = setPlanePosition

  function draw() {
    plane.style.transform = `rotate(${deg}deg)`
    if (count < 100) {
      vx += ex / 100
      vy += ey / 100
    }
    plane.style.left = `${vx}px`
    plane.style.top = `${vy}px`
    count++
  }
  timer = setInterval(draw, 1)
})

onBeforeUnmount(() => {
  window.onmousemove = null
  clearInterval(timer)
})
</script>

<template>
  <div id="plane" ref="plane" i-carbon-plane />
  <div>
    随便移动一下鼠标，看看效果
  </div>
</template>

<style scoped>
#plane {
  position: fixed;
  color: #12affa;
  font-size: 24px;
}
</style>

<route lang="yaml">
name: 指向鼠标的小飞机
meta:
  layout: demo
</route>
