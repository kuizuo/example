<script setup>
const items = [
  {
    url: 'https://picsum.photos/id/10/800/400',
  },
  {
    url: 'https://picsum.photos/id/11/800/400',
  },
  {
    url: 'https://picsum.photos/id/12/800/400',
  },
  {
    url: 'https://picsum.photos/id/13/800/400',
  },
  {
    url: 'https://picsum.photos/id/14/800/400',
  },
]

let isActive = $ref(0)
function setActive(index) {
  isActive = index
}
</script>

<template>
  <ul flex>
    <li
      v-for="(item, i) in items" :key="i" class="accordion-item" :class="{ active: isActive === i }"
      :style="`background-image: url(${item.url});`" @click="setActive(i)"
    />
  </ul>
</template>

<style scoped>
.accordion-item {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 400px;
  width: 200px;
  transition: width 0.5s;
  cursor: pointer;
}

.accordion-item:not(.active) {
  width: 20%;
}

.active {
  width: 1000px;
}
</style>
