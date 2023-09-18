<script setup lang="ts">
const router = useRouter()
useHead({
  title: '404 - Page not found',
})
</script>

<template>
  <main px-4 py-10 text="center teal-700 dark:gray-200">
    <div text-4xl mb-2>
      <img src="/page_not_found.svg" h-300px m-auto>
    </div>
    <RouterView />
    <div>
      <button btn text-sm m-3 mt-8 @click="router.push('/')">
        首页
      </button>
      <button btn text-sm m-3 mt-8 @click="router.back()">
        返回
      </button>
    </div>
  </main>
</template>

