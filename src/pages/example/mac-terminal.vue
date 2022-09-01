<script setup lang="ts">
const language = 'Bash'
const code = [
  'git clone https://github.com/kuizuo/example',
  'cd example',
  'pnpm i',
  'pnpm run dev']

const { copy, copied } = useClipboard()
</script>

<template>
  <div>
    <div class="group relative flex h-64 w-full cursor-pointer flex-col overflow-hidden rounded-lg bg-gray-900">
      <div class="relative flex h-12 w-full items-center border-b-2 border-gray-800">
        <div class="ml-4 flex">
          <div class="h-3 w-3 rounded-full bg-red-400" />
          <div class="ml-2 h-3 w-3 rounded-full bg-yellow-400" />
          <div class="ml-2 h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center font-semibold">
          {{ language }}
        </div>
      </div>
      <div class="flex flex-1 flex-col items-start p-4 font-mono" @click="copy(code.join('\n'))">
        <p v-for="(c, i) in code" :key="i">
          <span class="mr-2 inline-block select-none font-bold">$</span><span class="inline-block text-gray-200">
            {{ c }}
          </span>
          <br>
        </p>
      </div>
      <div class="py-2 text-center font-semibold opacity-0 transition-opacity group-hover:opacity-100">
        {{ copied ? 'Copied!' : 'Click to copy' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
name: 仿Mac终端
meta:
  layout: demo
</route>

