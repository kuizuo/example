<script setup lang="ts">
import pages from '~pages'
const examples = pages.filter(page => page?.meta?.layout === 'demo')
</script>

<template>
  <div max-w-6xl min-h-full py-6 mx-auto>
    <h2 font-bold text-3xl>
      前端示例代码库
    </h2>
    <ul mt-8 grid="~ cols-2 md:cols-3 lg:cols-4" gap="x-4 y-4 sm:x-6 sm:y-6">
      <li v-for="(item, i) in examples" :key="i">
        <RouterLink :to="item.path" :data-example="item.name" class="gradient-border font-sans font-500 block sm:text-xl py-3 px-6 cursor-pointer">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}

.dark .gradient-border {
  background-color: rgba(0, 0, 0, 0.3);
}

.gradient-border:before {
  background: linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%);
}

.gradient-border:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  opacity: 0.5;
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.gradient-border:focus:before,
.gradient-border:hover:before {
  background-position: -50% 0;
  opacity: 1;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
