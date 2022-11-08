<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

let loopNum = $ref(0)
let isDeleting = $ref(false)

let text = $ref('')
let delta = $ref(300 - Math.random() * 100)
let index = $ref(1)

const toRotate = locale.value === 'en'
  ? ['Code Enthusiasm', 'Web Developer', 'Code farmer']
  : ['编程爱好者', 'Web 开发者', '码农']

const period = 2000

const tick = () => {
  const i = loopNum % toRotate.length
  const fullText = toRotate[i]
  const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

  text = updatedText

  if (isDeleting)
    delta = delta / 2

  if (!isDeleting && updatedText === fullText) {
    isDeleting = true
    index = index - 1
    delta = period
  }
  else if (isDeleting && updatedText === '') {
    isDeleting = false
    loopNum = loopNum + 1
    index = 1
    delta = 500
  }
  else {
    index = index + 1
  }
}

tick()

const ticker = setInterval(() => {
  tick()
}, delta)

onUnmounted(() => {
  clearInterval(ticker)
})
</script>

<template>
  <div>
    <div class="animate-fade-in">
      <h1 class="text-4xl font-bold">
        👋{{ t('profile.hi') }}{{ t('profile.kuizuo') }}，
        <span class="txt-rotate">
          <span class="wrap">{{ text }}</span>
        </span>
      </h1>
      <a
        href="https://kuizuo.cn" target="_blank"
        m-4 inline-flex items-center
        text-lg font-bold
        gap-2 class="group"
        hover="cursor-pointer"
      >
        Let’s Look It <i i-carbon-arrow-right class="transition group-hover:translate-x-2" />
      </a>
    </div>
  </div>
</template>

<route lang="yaml">
name: 个人主页简介
meta:
  layout: demo
</route>
