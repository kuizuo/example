<script lang="ts" setup></script>

<template>
  <div flex box-border>
    <aside w-250px h-screen max-h-screen>
      <Sidebar />
    </aside>
    <main class="px-4 py-4 w-full flex-1 box-content text-center text-gray-700 dark:text-gray-200">
      <RouterView v-slot="{ Component, route }">
        <Showcase :demo="Component" :title="route.name" :source-path="route.path" />
      </RouterView>
      <Footer />
    </main>
  </div>
</template>

