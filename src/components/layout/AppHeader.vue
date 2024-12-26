<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuItems = [
  { name: '首页', path: '/' },
  { name: '技术专题', path: '/topics' },
  { name: '学习笔记', path: '/notes' },
  { name: '关于我', path: '/about' },
]

const activeIndex = ref(route.path)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 点击导航项时关闭菜单
const handleNavClick = (path: string) => {
  activeIndex.value = path
  isMenuOpen.value = false
}

// 点击外部时关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (isMenuOpen.value && !target.closest('.nav-menu') && !target.closest('.menu-toggle')) {
    isMenuOpen.value = false
  }
}

// 监听点击事件
window.addEventListener('click', handleClickOutside)
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <h1>Study Blog</h1>
    </div>

    <button
      class="menu-toggle"
      @click.stop="toggleMenu"
      aria-label="导���菜单"
      :aria-expanded="isMenuOpen"
    >
      <span class="menu-icon" aria-hidden="true"></span>
      <span class="sr-only">切换导航菜单</span>
    </button>

    <nav class="nav-menu" :class="{ 'is-open': isMenuOpen }">
      <RouterLink
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        :class="{ active: activeIndex === item.path }"
        @click="handleNavClick(item.path)"
      >
        {{ item.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* 为了防止内容被固定头部遮挡，给 body 添加 padding */
:global(body) {
  padding-top: 64px;
}

.logo h1 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin: 0;
}

/* 桌面端导航样式 */
.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-menu a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: #3eaf7c;
  background: rgba(62, 175, 124, 0.1);
}

.menu-toggle {
  display: none;
}

/* 平板设备 */
@media (max-width: 1024px) {
  .app-header {
    padding: 1rem;
  }

  .nav-menu {
    gap: 1rem;
  }
}

/* 手机设备 */
@media (max-width: 768px) {
  .app-header {
    padding: 0.75rem 1rem;
  }

  :global(body) {
    padding-top: 56px;
  }

  .menu-toggle {
    display: block;
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    z-index: 102;
  }

  .menu-icon,
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-text);
    position: absolute;
    transition: all 0.3s ease;
  }

  .menu-icon::before {
    top: -8px;
  }

  .menu-icon::after {
    bottom: -8px;
  }

  /* 修改移动端导航样式 */
  .nav-menu {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0;
    z-index: 101;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  .nav-menu.is-open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-menu a {
    padding: 0.75rem 1rem;
    width: 100%;
    text-align: center;
    border-radius: 4px;
  }

  .nav-menu a:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }

  .nav-menu a:hover,
  .nav-menu a.active {
    background: rgba(62, 175, 124, 0.1);
  }

  /* 添加菜单按钮动画 */
  .menu-toggle[aria-expanded='true'] .menu-icon {
    background: transparent;
  }

  .menu-toggle[aria-expanded='true'] .menu-icon::before {
    transform: rotate(45deg);
    top: 0;
  }

  .menu-toggle[aria-expanded='true'] .menu-icon::after {
    transform: rotate(-45deg);
    bottom: 0;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* 当滚动到顶部时，移除阴影效果 */
.app-header:not([style*='opacity: 1']) {
  box-shadow: none;
}
</style>
