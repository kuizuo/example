<template>
  <ul flex flex-wrap gap-8>
    <li class="card">
      <div class="rectangle" />
    </li>
    <li class="card">
      <div class="circle" />
    </li>
    <li class="card">
      <div class="triangle" />
    </li>
    <li class="card">
      <div class="trapezoid" />
    </li>
    <li class="card">
      <div class="sector" />
    </li>
    <li class="card">
      <div class="ellipse" />
    </li>
    <li class="card">
      <div class="pentaqon" />
    </li>
    <li class="card">
      <div class="hexagon" />
    </li>
    <li class="card">
      <div class="star" />
    </li>
  </ul>
  <div mt-4>
    相关网站 <a href="https://www.html.cn/tool/css-clip-path/" target="_blank" text-cyan>CSS clip-path 生成器</a>
  </div>
</template>

<style lang="css">
.rectangle {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  clip-path: inset();
}

.circle {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  clip-path: circle()
}

.triangle {
  width:100px;
  height: 86.6px;
  background:#ccc;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.trapezoid {
  width: 100px;
  height: 100px;
  background: #ccc;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.sector {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  clip-path: circle(100% at 0 0);
}

.ellipse {
  width: 100px;
  height: 50px;
  background: #ccc;
  clip-path: ellipse()
}

.pentaqon {
  width: 100px;
  height: 100px;
  background: #ccc;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.hexagon{
  width: 100px;
  height: 100px;
  background: #ccc;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.star {
  width: 100px;
  height: 100px;
  background: #ccc;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>
