<script lang="ts" setup>
const tabs = [
  {
    title: 'First',
    content: 'First content',
  },
  {
    title: 'Second',
    content: 'Second content',
  },
  {
    title: 'Third',
    content: 'Third content',
  },
]

let active = $ref(0)
let underlineWidth = $ref(0)
let underlineOffsetLeft = $ref(0)

function setActive(i, ev: Event) {
  active = i
  underlineWidth = (ev.target as HTMLElement).clientWidth
  underlineOffsetLeft = (ev.target as HTMLElement).offsetLeft
}
</script>

<template>
  <div>
    <ul class="tabs">
      <div
        class="tabs-items__underline" :style="`
      width: ${underlineWidth}px;
      transform: translateX(${underlineOffsetLeft}px);`"
      />
      <li v-for="(item, i) in tabs" :key="i" class="tabs-item" @click="setActive(i, $event)">
        {{ item.title }}
      </li>
    </ul>
    <div class="panel">
      <section v-for="(item, i) in tabs" :key="i" class="tabs-content" :class="{ active: active === i }">
        {{ item.content }}
      </section>
    </div>
  </div>
</template>

<style scpoed>
.tabs {
  position: relative;
  display: flex;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eaeaea;
}

.tabs-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  background-color: transparent;
  transition: background .12s ease-out;
}

.tabs-items__underline {
  contain: '';
  background: #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  height: 2px;
  transition: all .3s ease;
}

.tabs-item:hover {
  background-color: #eaeaea;
}

html.dark .tabs-item:hover {
  background-color: #333;
}

.panel {
  padding: 1rem 0.5rem;
}

.tabs-content {
  display: none;
  text-align: left;
}

.tabs-content.active {
  display: block;
  opacity: 1;
}
</style>
