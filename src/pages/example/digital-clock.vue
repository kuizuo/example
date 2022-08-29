<script setup lang="ts">
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div class="time">
    {{ formatted }}
  </div>
</template>

<style scoped>
@font-face {
  font-family: timeFont;
  src: url("~/assets/font/DS-DIGIT.TTF");
}

.time {
  font-family: timeFont;
  font-size: 4rem;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #14ffe9;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
}
</style>

<route lang="yaml">
name: 数码时钟
meta:
  layout: demo
</route>
