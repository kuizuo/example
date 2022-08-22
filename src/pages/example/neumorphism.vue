<template>
  <div class="p-4 flex justify-center items-center gap-8 bg-[#ececec]">
    <div class="input-box">
      <input class="input-check" type="checkbox">
      <i class="icon i-carbon-power" />
    </div>
    <div class="logo-box">
      <i class="icon i-carbon-carbon" />
    </div>
  </div>
</template>

<style scoped>
.input-box {
  position: relative;
  width: 100px;
  height: 100px;
}

.input-check {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  border: 8px solid #ececec;
  appearance: none;
  cursor: pointer;
  z-index: 1;
}

.input-check:checked {
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(70, 70, 70, 0.12);
}

.input-box .icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(55, 65, 81);
}

.input-check:checked+.input-icon {
  color: #15e38a;
}

.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: #ececec;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  padding: 2rem;
  cursor: pointer;
  transform: box-shadow .2s ease-out;
}

.logo-box:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 15px rgba(70, 70, 70, 0.12),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  transition: box-shadow .2s ease-out;
}

.logo-box .icon {
  width: 30px;
  height: 30px;
  color: rgba(55, 65, 81);
}
</style>

<route lang="yaml">
name: 新拟态风格
meta:
  layout: demo
</route>
