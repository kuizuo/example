<script lang="ts" setup>
const bars = [
  {
    title: '文件',
    icon: 'i-mdi-file-outline',
  },
  {
    title: '相册',
    icon: 'i-carbon-drop-photo',
  },
  {
    title: '收藏夹',
    icon: 'i-mdi-star-outline',
  },
  {
    title: '订阅',
    icon: 'i-carbon-bookmark',
  },
  {
    title: '回收站',
    icon: 'i-mdi-delete-empty-outline',
  },

]
const navIndex = $ref(0)
const isClose = $ref(false)

const closeBtn = ref<HTMLElement>()
</script>

<template>
  <div class="demo">
    <div class="siderbar" :style="{ width: !isClose ? '250px' : 0 }">
      <div class="siderbar-top">
        <div class="siderbar-title">
          侧边栏导航
        </div>
        <ul class="nav-menu">
          <li
            v-for="(item, i) in bars" :key="i" class="nav-menu-item" :class="{ active: navIndex === i }"
            @click="navIndex = i"
          >
            <i class="nav-menu-item-icon" :class="item.icon" />
            <div class="nav-menu-item-name">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
      <div class="siderbar-bottom">
        <hr>
        <div class="user-info">
          <img src="/logo.png" alt="logo">
          <span>愧怍</span>
          <i i-ri-more-line />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="top" />
      <div class="content-body">
        test
      </div>

      <div ref="closeBtn" class="handler" :class="{ close: isClose }" @click="isClose = !isClose" />
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  height: calc(100vh - 300px);
}

.siderbar {
  background-color: #f5f5f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  text-align: left;
  width: 250px;
  height: 100%;
  overflow: hidden;
  transition: width .66s cubic-bezier(0.66, 0, 0.01, 1);
}

html.dark .siderbar {
  background-color: #333;
}

.siderbar-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0 1rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.nav-menu-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 0.75rem 0.75rem;
  width: 90%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.nav-menu-item:hover {
  background-color: #ececee;
}

html.dark .nav-menu-item:hover {
  background-color: #141411;
}

.nav-menu-item.active {
  background-color: #e3e3e5;
}

html.dark .nav-menu-item.active {
  background-color: #1d1d1b;
}

.nav-menu-item-icon {
  margin-right: 1rem;
}

.siderbar-bottom hr {
  border: none;
  border-top: 2px solid #ececee;
  width: 100%;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  cursor: pointer;
}

.user-info>img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 1rem;
}

.user-info>span {
  flex: 1;
}

/* 右侧区域 */
.content {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 展开收起开关 */
.content .handler {
  width: 10px;
  height: 50px;
  /* 绝对定位 垂直居中 */
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  /* 光标变小手 */
  cursor: pointer;
  /* 默认不透明度为0 */
  opacity: 0;
  /* 过渡 */
  transition: opacity 0.3s;
}

.content .handler::before,
.content .handler::after {
  content: "";
  background-color: #ebebed;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;
  /* 过渡 */
  transition: 0.2s;
}

.content .handler::after {
  bottom: 0;
  border-radius: 0 0 10px 10px;
}

.content:hover .handler {
  opacity: 1;
}

.content .handler:hover::before {
  transform: skewX(-15deg);
}

.content .handler:hover::after {
  transform: skewX(15deg);
}

.content .handler.close:hover::before {
  transform: skewX(15deg);
}

.content .handler.close:hover::after {
  transform: skewX(-15deg);
}
</style>
