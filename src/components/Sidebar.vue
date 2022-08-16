<script lang="ts" setup>
import pages from '~pages'
const examples = pages.filter(page => page?.meta?.layout === 'demo')
</script>

<template>
  <ul px-1 py-2 h-screen overflow-y-scroll flex="~ col">
    <li v-for="(item, i) in examples" :key="i">
      <RouterLink
        :to="{ path: item.path }" class="m-0.5" block px-2 py-3 rounded-2 text-lg text-center font-semibold
        truncate bg="gray-1 dark:gray-8" opacity-90 style="transition: all 0.2s ease-in-out"
        :style="{ ...({ color: $route.path === item.path ? '#48b0f1' : null }) }"
      >
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
</template>

