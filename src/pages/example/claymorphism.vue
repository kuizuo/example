<template>
  <div class="p-4 flex justify-center items-center gap-8 bg-[#7ca0e6]">
    <div class="box" />
    <div class="box" />
    <div class="box" />
  </div>
  <div mt-4>
    相关网站 <a href="https://codeadrian.github.io/clay.css/" target="_blank" text-cyan>clay.css</a>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  box-shadow: 12px 12px 18px rgba(155, 196, 255, 0.42),
    inset 10px 10px 11px rgba(250, 252, 255, 0.48),
    inset -10px -10px 15px rgba(46, 129, 255, 0.22);
}

.dark .box {

}
</style>

<route lang="yaml">
name: 泥陶态风格
meta:
  layout: demo
</route>
