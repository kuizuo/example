<script setup lang="ts">
import pages from '~pages'
const examples = pages.filter(page => page?.meta?.layout === 'demo')
</script>

<template>
  <div container min-h-full py-6 px-8 mx-auto>
    <h2 font-bold text-3xl>
      前端示例代码库
    </h2>
    <ul grid="~ cols-2 md:cols-3 lg:cols-4" gap="x-6 y-8" mt-8>
      <li
        v-for="(item, i) in examples" :key="i" class="bg-gradient-to-r from-blue-5/80 to-cyan-4/80" rounded-2
        transition shadow="md cyan-4/30" hover="text-cyan/80"
      >
        <RouterLink
          :to="item.path" :data-example="item.name" class="m-0.5" block px-2 py-3 rounded-2 text-lg text-center font-semibold truncate
          bg="gray-1 dark:gray-8" opacity-90
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
