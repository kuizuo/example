<template>
  <div flex="~ col gap-2" font-comfortaa w-full items-center p6>
    <nav text-xl z-100>
      <RouterLink class="icon-btn mx-2" to="/" title="首页">
        <div i-ri:home-3-line />
      </RouterLink>

      <button class="icon-btn mx-2 !outline-none" @click="toggleDark">
        <div i-ri:sun-line dark:i-ri:moon-line />
      </button>

      <button class="icon-btn mx-2 !outline-none" title="切换显示" @click="toggleFullDisplay()">
        <div v-if="isFullDisplay" i-ri:airplay-line />
        <div v-if="!isFullDisplay" i-ri:window-2-line />
      </button>

      <RouterLink class="icon-btn mx-2" to="/about" title="关于">
        <div i-ri:book-read-line />
      </RouterLink>

      <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/kuizuo/example" target="_blank" title="GitHub">
        <div i-ri:github-line />
      </a>
    </nav>
  </div>
</template>
