<script lang="ts" setup>
import { words } from '~/assets/js/cet4.js'

const createFirework = (function () {
  class Circle {
    constructor({ origin, speed, color, angle, context }) {
      this.origin = origin
      this.position = { ...this.origin }
      this.color = color
      this.speed = speed
      this.angle = angle
      this.context = context
      this.renderCount = 0
    }

    draw() {
      this.context.fillStyle = this.color
      this.context.beginPath()
      this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)
      this.context.fill()
    }

    move() {
      this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x
      this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)
      this.renderCount++
    }
  }

  class Boom {
    constructor({ origin, context, circleCount = 10, area }) {
      this.origin = origin
      this.context = context
      this.circleCount = circleCount
      this.area = area
      this.stop = false
      this.circles = []
    }

    randomArray(range) {
      const length = range.length
      const randomIndex = Math.floor(length * Math.random())
      return range[randomIndex]
    }

    randomColor() {
      const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
      return `#${this.randomArray(range)}${this.randomArray(range)}${this.randomArray(range)}${this.randomArray(range)}${this.randomArray(range)}${this.randomArray(range)}`
    }

    randomRange(start, end) {
      return (end - start) * Math.random() + start
    }

    init() {
      for (let i = 0; i < this.circleCount; i++) {
        const circle = new Circle({
          context: this.context,
          origin: this.origin,
          color: this.randomColor(),
          angle: this.randomRange(Math.PI - 1, Math.PI + 1),
          speed: this.randomRange(1, 6),
        })
        this.circles.push(circle)
      }
    }

    move() {
      this.circles.forEach((circle, index) => {
        if (circle.position.x > this.area.width || circle.position.y > this.area.height)
          return this.circles.splice(index, 1)

        circle.move()
      })
      if (this.circles.length === 0)
        this.stop = true
    }

    draw() {
      this.circles.forEach(circle => circle.draw())
    }
  }

  class Firework {
    constructor() {
      this.computerCanvas = document.createElement('canvas')
      this.renderCanvas = document.createElement('canvas')

      this.computerContext = this.computerCanvas.getContext('2d')
      this.renderContext = this.renderCanvas.getContext('2d')

      this.globalWidth = window.innerWidth
      this.globalHeight = window.innerHeight

      this.booms = []
      this.running = false
    }

    createFirework(e) {
      const boom = new Boom({
        origin: { x: e.clientX, y: e.clientY },
        context: this.computerContext,
        area: {
          width: this.globalWidth,
          height: this.globalHeight,
        },
      })
      boom.init()
      this.booms.push(boom)
      this.running || this.run()
    }

    init() {
      const style = this.renderCanvas.style
      style.position = 'fixed'
      style.top = style.left = 0
      style.zIndex = '9999'
      style.pointerEvents = 'none'

      style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth
      style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight

      document.body.append(this.renderCanvas)
    }

    run() {
      this.running = true
      if (this.booms.length === 0)
        return this.running = false

      requestAnimationFrame(this.run.bind(this))

      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)

      this.booms.forEach((boom, index) => {
        if (boom.stop)
          return this.booms.splice(index, 1)

        boom.move()
        boom.draw()
      })
      this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)
    }
  }

  const firework = new Firework()
  firework.init()

  return function (e) {
    return firework.createFirework(e)
  }
})()

const type = $ref('love')

onMounted(() => {
  window.onclick = (e) => {
    if (type === 'love')
      createLove(e)
    else if (type === 'word')
      createWord(e)
    else if (type === 'social')
      createSocial(e)
    else if (type === 'firework')
      createFirework(e)
  }
})

onBeforeUnmount(() => {
  window.onclick = null
})

function randomColor() {
  return `rgb(${~~(255 * Math.random())},${~~(255 * Math.random())},${~~(255 * Math
    .random())})`
}

function createTag(event: MouseEvent, innerHtml = '') {
  const tag = document.createElement('b')
  tag.innerHTML = innerHtml
  const f = 24 // 字体大小
  const x = event.clientX - f / 2 // 横坐标
  let y = event.clientY - f // 纵坐标
  const c = randomColor() // 随机颜色
  let a = 1 // 透明度

  tag.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    font-family: Arial;
    font-size: ${f}px;
    color: ${c};
    user-select: none;
    z-index: 9999999;
    font-weight: bold;
  `
  document.body.appendChild(tag)

  const timer = setInterval(() => {
    if (a <= 0) {
      document.body.removeChild(tag)
      clearInterval(timer)
    }

    tag.style.top = `${y}px`
    tag.style.opacity = `${a}`

    y--
    a -= 0.02
  }, 15)
}

function createLove(event: MouseEvent) {
  createTag(event, '❤')
}

function createSocial(event: MouseEvent) {
  const texts = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
  createTag(event, texts[Math.floor(Math.random() * (texts.length + 1))])
}

function createWord(event: MouseEvent) {
  createTag(event, words[Math.floor(Math.random() * (words.length + 1))])
}
</script>

<template>
  <div select-none>
    当前鼠标效果: {{ type }}

    <div mt-2 flex gap-4 justify-center items-center>
      <div flex gap-2 scale-120>
        <input id="love" v-model="type" name="type" type="radio" value="love">
        <label for="love">❤</label>
      </div>

      <div flex gap-2 scale-120>
        <input id="word" v-model="type" name="type" type="radio" value="word">
        <label for="word">📖</label>
      </div>

      <div flex gap-2 scale-120>
        <input id="social" v-model="type" name="type" type="radio" value="social">
        <label for="social">🇨🇳</label>
      </div>

      <div flex gap-2 scale-120>
        <input id="firework" v-model="type" name="type" type="radio" value="firework">
        <label for="firework">🎉</label>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: 鼠标点击特效
meta:
  layout: demo
</route>
