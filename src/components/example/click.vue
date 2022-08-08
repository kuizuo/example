<script lang="ts" setup>
import cursorSpecialEffects from '~/assets/js/firework.js'
import { words } from '~/assets/js/cet4.js'
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
      cursorSpecialEffects.createFirework(e)
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
