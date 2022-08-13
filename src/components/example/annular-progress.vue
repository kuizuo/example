<script lang="ts" setup>
const customProgressColor = (percentage: number) => {
  if (percentage < 30)
    return '#f53f3f'

  else if (percentage < 70)
    return '#e6a23c'

  else
    return '#5cb87a'
}

const progress = [
  10,
  20,
  40,
  50,
  60,
  80,
  100,
]
</script>

<template>
  <div class="flex">
    <div
      v-for="(item, i) in progress" :key="i" class="meter" :style="
        {
          '--value': item,
          '--max-value': 100,
          '--circle-color': customProgressColor(item),
        }
      "
    />
  </div>
</template>

<style scoped>
.meter {
  --bg: #fff;
}

html.dark .meter {
  --bg: #222;
}

.meter {
  width: 6.25rem;
  height: 6.25rem;
  margin-right: 1rem;
  position: relative;
  --percentage: calc(var(--value) / var(--max-value) * 100%);
  --circle-color-lighter: #eee;
  border-radius: 50%;
  background: conic-gradient(var(--circle-color) var(--percentage), var(--circle-color-lighter) 0);
  counter-reset: value var(--value);
}

.meter::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  content: counter(value);
  background: var(--bg);
  border-radius: inherit;
}
</style>
