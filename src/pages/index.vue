<script setup lang="ts">
interface Page {
  id: string
  title: string
  preview?: string
}

const pages: Page[] = [
  { id: 'shape', title: 'clip-path 裁剪图形' },
  { id: 'gradient-background', title: '渐变背景过渡动画' },
  { id: 'gradient-shadow', title: '渐变阴影' },
  { id: 'gradient-border', title: '渐变边框' },
  { id: 'text', title: '文字特效' },
  { id: 'text-overflow', title: '文本截断' },
  { id: 'button', title: '按钮特效' },
  { id: 'click', title: '鼠标点击特效' },
  { id: 'srcoll', title: '滚动条' },
  { id: 'glassmorphism', title: '毛玻璃' },
  { id: 'typewriter', title: '打字机' },
  { id: 'accordion', title: '手风琴' },
  { id: 'aircraft', title: '指向鼠标的小飞机' },
  { id: 'tag-surround', title: '标签3D环绕' },
  { id: 'tabs', title: 'tabs栏' },
  { id: 'annular-progress', title: '环形进度栏' },
  { id: 'loading-bounce', title: '文字跳动加载页' },
]
</script>

<template>
  <div container min-h-full py-6 px-8 mx-auto>
    <h2 font-bold text-3xl>
      前端示例代码库
    </h2>
    <ul grid="~ cols-2 md:cols-3 lg:cols-4" gap="x-6 y-8" mt-8>
      <li v-for="(item, i) in pages" :key="i" class="bg-gradient-to-r from-blue-5/80 to-cyan-4/80" rounded-2 transition
        shadow="md cyan-4/30" hover="text-cyan/80">
        <RouterLink :to="{ path: `/example/${item.id}`, query: { title: item.title } }" class="m-0.5" block px-2 py-3
          rounded-2 text-lg text-center font-semibold truncate bg="gray-1 dark:gray-8" opacity-90>
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
