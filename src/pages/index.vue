<script setup lang="ts">
import pages from '~pages'
const examples = pages.filter(page => page?.meta?.layout === 'demo')
</script>

<template>
  <div max-w-6xl min-h-full py-6 mx-auto>
    <h2 font-bold text-3xl>
      前端示例代码库
    </h2>
    <ul mt-8 grid="~ cols-2 md:cols-3 lg:cols-4" gap="x-6 y-8">
      <li v-for="(item, i) in examples" :key="i">
        <RouterLink :to="item.path" :data-example="item.name" class="exampleBtn">
          <span>
            {{ item.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.exampleBtn {
  margin: 0 auto;
  width: calc(100% - 2.75rem);
  text-align: center;
  position: relative;
  border-radius: 6px;
  display: block;
  overflow: hidden;
  padding: 3px;
}

.exampleBtn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
  background-size: 50% 100%;
}

.exampleBtn span {
  position: relative;
  display: block;
  border-radius: 3px;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  padding: 0.75rem;
  --at-apply: 'truncate text-lg font-semibold bg-white dark:bg-gray-900';
}

.exampleBtn:focus:before,
.exampleBtn:hover:before {
  animation: rainbowSlide 1s linear infinite;
}

@keyframes rainbowSlide {
  to {
    transform: translateX(-50%)
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
