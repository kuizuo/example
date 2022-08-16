<template>
  <div>
    <div class="box gradient-border" />
  </div>
</template>

<style scoped>
.gradient-border {
  background: #eee;
  width: 200px;
  height: 200px;
  margin: 0 auto;

  border: solid 5px transparent;
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #81FFEF 10%, #F067B4 100%);
}

html.dark .gradient-border {
  background: #222;
  background-image: linear-gradient(black, black), linear-gradient(135deg, #81FFEF 10%, #F067B4 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>

<route lang="yaml">
name: 渐变边框
meta:
  layout: demo
</route>
