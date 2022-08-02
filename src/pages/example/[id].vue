<script lang="ts" setup>
const route = useRoute()
const id = route.params.id
const title = route.query.title

const example = computed(() => defineAsyncComponent(() => import(`../../components/example/${id}.vue`)))

function goEditPage() {
  window.open(`https://github.com/kuizuo/example/blob/main/src/components/example/${id}.vue`)
}
</script>

<template>
  <div class="example border border-gray-3 rounded">
    <div v-if="title" class="examle-title">
      <h2 class="text-base p-2">
        {{ title }}
      </h2>
      <div class="border-b border-gray-3" />
    </div>
    <div class="example-showcase p-6">
      <component :is="example" />
    </div>
    <div class="border-b border-gray-3" />
    <div class="example-option h-8 p-4 flex justify-end items-center gap-4">
      <!-- <i i-carbon-chemistry icon-btn /> -->
      <i i-ri-github-line icon-btn @click="goEditPage()" />
      <!-- <i i-carbon-code icon-btn /> -->
    </div>
  </div>
</template>

