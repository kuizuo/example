<script setup lang="ts">
const data = [
  {
    bgColor: 'lightcoral',
  },
  {
    bgColor: 'lightseagreen',
  },
  {
    bgColor: 'lightsalmon',
  },
  {
    bgColor: 'lightskyblue',
  },
]

const width = $ref(800)
const widthStr = $computed(() => `${width}px`)
const totalWidth = $computed(() => `${width * data.length}px`)
const index = $ref(0)
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="swipe">
      <div class="switch">
        <div v-for="(item, i) in data" :key="i" flex @click="index = i">
          <input type="radio" :name="`indicator${i}`" hidden :checked="index === i">
          <label :for="`indicator${i}`" :style="{ 'background-color': index === i ? '#fff' : '' }" />
        </div>
      </div>
      <ul :style="{ 'margin-left': `${-1 * width * index}px` }">
        <li v-for="(item, i) in data" :key="i" :style="{ backgroundColor: item.bgColor }">
          {{ i + 1 }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.swipe {
  position: relative;
  width: v-bind(widthStr);
  height: 500px;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

.swipe ul {
  width: v-bind(totalWidth);
  transition: 0.5s;
  display: flex;
}

.swipe li {
  width: v-bind(widthStr);
  height: 500px;
  list-style: none;
  line-height: 500px;
  font-size: 50px;
}

.switch {
  display: flex;
  gap: 1rem;
}

.swipe .switch {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
}

.switch label[for^="indicator"] {
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;
}
</style>

<route lang="yaml">
name: 轮播图
meta:
  layout: demo
</route>
