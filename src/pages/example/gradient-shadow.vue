<template>
  <div>
    <div class="gradient-shadow" />
  </div>
</template>

<style>
.gradient-shadow {
  position: relative;
  background: #eee;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 0 auto;
}

html.dark .gradient-shadow {
  background: #222;
}

.gradient-shadow::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient( 45deg, hsl(300deg, 100%, 50%), hsl(200deg, 100%, 50%), hsl(100deg, 100%, 50%) );
  filter: blur(10px);
  z-index: -1;
}
</style>

<route lang="yaml">
name: 渐变阴影
meta:
  layout: demo
</route>
