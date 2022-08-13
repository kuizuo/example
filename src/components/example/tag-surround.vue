<script lang='ts' setup>
function randomNum(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(2)
}

function randomColor() {
  return `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`
}

const tags = [
  'JavaScript',
  'TypeScript',
  'Vue',
  'React',
  'Node',
  'NestJs',
  'Nuxt',
  'Vite',
  'MySQL',
  'MongoDB',
  'Redis',
  'Git',
  'GitHub',
]
</script>

<template>
  <div class="demo">
    <div
      v-for="(item, i) in tags" :key="i" class="box" :style="`
      --margin-top: ${randomNum(-40, 40)}vh;
      --margin-left: ${randomNum(5, 30)}vw;
      --animation-duration: ${randomNum(6, 30)}s;
      --animation-delay: ${randomNum(-20, 0)}s;
    `"
    >
      <div class="tag" :style="{ color: randomColor() }">
        {{ item }}
      </div>
    </div>
  </div>
  <div mt-4>
    相关网站 <a href="https://github.com/cong-min/TagCloud" target="_blank" text-cyan>TagCloud</a>
  </div>
</template>

<style lang="css" scoped>
.demo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 260px);
  /* 视野距离 体现近大远小效果 */
  perspective: 1000px;
}

.box,
.tag {
  position: absolute;
  font-size: 1.5rem;
  transform-style: preserve-3d;
  animation: rotY 0s linear infinite;
  animation-duration: var(--animation-duration);
  animation-delay: var(--animation-delay);
}

.box,
.tag {
  transform-style: preserve-3d;

  /* 文字竖行显示 */
  /* writing-mode: vertical-lr; */
}

.box {
  margin-top: var(--margin-top);
}

.tag {
  margin-left: var(--margin-left);
  /* 反向动画 */
  animation-direction: reverse;
}

@keyframes rotY {
  to {
    transform: rotateY(1turn);
  }
}
</style>
