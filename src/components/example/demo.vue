<script lang='ts' setup>
const count = ref(0)
</script>

<template>
  <div>
    Count: {{ count }}
    <button btn @click="count++">
      增加
    </button>
  </div>
</template>

<style lang="css">

</style>
