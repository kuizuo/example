<script lang="ts" setup>
import WaterMark from '~/assets/js/waterMark'

const waterMark = new WaterMark({ watermark_txt: 'kuizuo' })
onMounted(() => {
  waterMark.init()
})

onBeforeUnmount(() => {
  waterMark.destory()
})
</script>

<template>
  <div />
</template>

<style scoped>
</style>

<route lang="yaml">
name: 水印
meta:
  layout: demo
</route>
