<template>
  <div class="close-handler" :class="{ close: isHiddenSidebar }" @click="toggleHiddenSidebar()" />
</template>

<style>
.close-handler {
  width: 8px;
  height: 50px;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}

.close-handler::before,
.close-handler::after {
  content: "";
  background-color: #ebebed;
  position: absolute;
  left: 5px;
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0 0;
  transition: 0.2s;
}

.dark .close-handler::before,
.dark .close-handler::after {
  background-color: rgba(50, 50, 50, 1);
}

.close-handler::after {
  bottom: 0;
  border-radius: 0 0 8px 8px;
}

main:hover .close-handler {
  opacity: 1;
}

.close-handler:hover::before {
  transform: skewX(-15deg);
}

.close-handler:hover::after {
  transform: skewX(15deg);
}

.close-handler.close:hover::before {
  transform: skewX(15deg);
}

.close-handler.close:hover::after {
  transform: skewX(-15deg);
}
</style>
