<template>
  <div>
    <div class="box">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  overflow: auto;
}

/* 滚动条整体 */
.box::-webkit-scrollbar {
  width: 8px;
  background: #ddd;
}

/* 滚动条手柄 */
.box::-webkit-scrollbar-thumb {
  background: #12affa;
}

.box::-webkit-scrollbar-thumb,
.box::-webkit-scrollbar-track {
  border-radius: 5px;
}

/* 滚动角落 */
.box::-webkit-scrollbar-corner,
/* 滚动条轨道 */
.box::-webkit-scrollbar-track {
  background-color: rgba(180, 160, 120, 0.1);
}
</style>
