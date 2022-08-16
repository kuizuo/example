<script lang="ts" setup></script>

<template>
  <div flex box-border>
    <Sidebar />
    <main class="flex-1 basis-auto overflow-hidden relative text-center text-gray-700 dark:text-gray-200">
      <RouterView v-slot="{ Component, route }">
        <Showcase :demo="Component" :title="route.name" :source-path="route.path" />
      </RouterView>
      <Footer />
    </main>
  </div>
</template>

