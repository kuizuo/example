<script setup lang="ts">
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/" title="首页">
      <div i-ri-home-3-line />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
      <div i="ri-sun-line dark:ri-moon-line" />
    </button>

    <button class="icon-btn mx-2 !outline-none" @click="toggleFullDisplay()">
      <div v-if="isFullDisplay" i-ri-airplay-line />
      <div v-if="!isFullDisplay" i-ri-window-2-line />
    </button>

    <RouterLink class="icon-btn mx-2" to="/about" title="关于">
      <div i-ri-book-read-line />
    </RouterLink>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/kuizuo/example" target="_blank" title="GitHub">
      <div i-ri-github-line />
    </a>
  </nav>
</template>
