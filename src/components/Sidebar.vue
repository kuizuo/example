<script lang="ts" setup>
import pages from '~pages'
const examples = pages.filter(page => page?.meta?.layout === 'demo')

// useResizeObserver(document.body, (entries) => {
//   const entry = entries[0]
//   const { width } = entry.contentRect

//   if (width < 768)
//     isHiddenSidebar.value = true

//   else
//     isHiddenSidebar.value = false
// })
</script>

<template>
  <aside w-250px max-h-screen flex-shrink-0 :style="{ width: !isHiddenSidebar ? '250px' : '0' }">
    <ul flex="~ col" h-screen overflow-y-scroll :class="{ '!overflow-hidden': isHiddenSidebar }">
      <li v-for="(item, i) in examples" :key="i">
        <RouterLink
          :to="{ path: item.path }" class="m-0.5" block px-2 py-2 rounded-2 text-center font-semibold truncate
          bg="gray-1 dark:gray-8" opacity-90 style="transition: all 0.2s ease-in-out"
          :style="{ ...({ color: $route.path === item.path ? '#48b0f1' : null }) }"
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  transition: width .66s cubic-bezier(0.66, 0, 0.01, 1);
}
</style>
