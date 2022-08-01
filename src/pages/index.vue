<script setup lang="ts">
interface Page {
  title: string
  path: string
  preview?: string
}

const pages: Page[] = [
  {
    title: 'demo1',
    path: 'demo/1',
  }, {
    title: 'demo2',
    path: 'demo/2',
  }, {
    title: 'demo3',
    path: 'demo/3',
  }, {
    title: 'demo4',
    path: 'demo/4',
  }, {
    title: 'demo5',
    path: 'demo/5',
  },
]
</script>

<template>
  <div container min-h-full py-6 px-8 mx-auto>
    <h2 font-bold text-3xl>
      前端示例代码库
    </h2>
    <ul grid="~ cols-2 md:cols-3 lg:cols-4" gap="x-6 y-8" mt-8>
      <li
        v-for="(item, i) in pages" :key="i"
        class="bg-gradient-to-r from-blue-5/80 to-cyan-4/80"
        rounded-2
        transition
        shadow="md cyan-4/30"
        hover="text-cyan/80"
      >
        <RouterLink
          :to="item.path"
          class="m-0.5"
          block
          px-2 py-3
          rounded-2
          text-lg text-center font-semibold
          truncate
          bg="gray-1 dark:gray-8" opacity-90
        >
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
</style>

<route lang="yaml">
meta:
  layout: home
</route>
