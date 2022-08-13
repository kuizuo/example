<script lang="ts" setup>
onMounted(() => {
  const loading = document.querySelector('.loading')
  const letters = loading.textContent.split('')
  loading.textContent = ''
  letters.forEach((letter, i) => {
    const span = document.createElement('span')
    span.textContent = letter
    span.style.animationDelay = `${i / 10}s`
    loading.append(span)
  })
})
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="loading">
      Loadding
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");

.loading {
  display: flex;
  font-size: 5em;
  font-family: "Baloo Bhaijaan", cursive;
  text-transform: uppercase;
}

.loading > span {
  text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px transparent, 0 7px transparent, 0 8px transparent, 0 9px transparent, 0 10px 10px rgb(0 0 0 / 40%);
  transform: translateY(20px);
  animation: bounce .3s ease infinite alternate;
}

@keyframes bounce {
  100% {
    text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb, 0 50px 25px rgb(0 0 0 / 20%);
    transform: translateY(-20px);
  }
}
</style>
