<script setup>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

showConfetti()
</script>

<template>
  <div cursor-pointer @click="showConfetti">
    🎉 Congratulations!
  </div>
  <div mt-4>
    source: <a href="https://github.com/loonywizard/js-confetti" target="_blank" text-cyan>js-confetti</a>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>

<route lang="yaml">
name: 五彩纸屑
meta:
  layout: demo
</route>

