<script lang="ts" setup>
const { x, y } = useWindowScroll()

let shown = $ref(false)
watch(y, () => {
  shown = y.value > 10
})

async function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <p v-for="i in 50" :key="i">
      1
    </p>

    <div class="footer-tools">
      <Transition name="page-fade">
        <div v-show="shown">
          <button class="box icon-btn mx-2" @click="backToTop()">
            <div i="ri-arrow-up-line" />
          </button>
        </div>
      </Transition>
      <div class="box icon-btn mx-2 dropdown dropdown--hoverable">
        <div i="ri-wechat-line" />
        <img src="/img/wx.png" alt="" class="dropdown__menu">
      </div>
      <a
        class="box icon-btn mx-2" rel="noreferrer"
        href="https://wpa.qq.com/wpa_jump_page?v=3&amp;uin=911993023&amp;site=qq" target="_blank" title="QQ"
      >
        <div i="ri-qq-line" />
      </a>
      <button class="box icon-btn mx-2 !outline-none" @click="toggleDark()">
        <div i="ri-sun-line dark:ri-moon-line" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.footer-tools {
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 5;
}

.box {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dark .box {
  background-color: #333;
}

.dropdown {
  position: relative;
}

.dropdown__menu {
  position: absolute;
  left: calc(-0.5rem - 100px);
  top: 50%;
  transform: translate(0, -50%);
}

.dropdown img {
  min-width: 100px;
  height: 100px;
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.dropdown--hoverable:hover .dropdown__menu,
.dropdown--show .dropdown__menu {
  opacity: 1;
  pointer-events: all;
  visibility: visible;
}
</style>

<route lang="yaml">
name: 底部导航条
meta:
  layout: demo
</route>
