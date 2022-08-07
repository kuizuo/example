<template>
  <div class="background">
    <div class="box" />
  </div>
</template>

<style scoped>
.box {
  width: 400px;
  height: 300px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.background {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 260px);
  background: url('/background.png') no-repeat center;
  background-size:100% 100%;
}

html.dark .background {
  background: url('/background-dark.png') no-repeat center;
  background-size:100% 100%;
}
</style>
