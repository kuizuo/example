<script lang="ts" setup>
import pages from '~pages'

const examples = pages.filter(page => page?.meta?.layout === 'demo')

useResizeObserver(document.body, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  const isMobile = width < 768
  isHiddenSidebar.value = isMobile
})
</script>

<template>
  <aside w-200px max-h-screen flex-shrink-0 transition-width duration-660 :class="{ '!w-0': isHiddenSidebar } ">
    <ul
      flex="~ col" py-1 h-screen overflow-y-scroll
      :class="{ '!overflow-hidden': isHiddenSidebar, 'opacity': isHiddenSidebar }"
    >
      <li v-for="(item, i) in examples" :key="i" ml-1>
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
