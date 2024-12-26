<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  background: #f5f7fa;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 2rem;
}

/* 平板设备 */
@media (max-width: 1024px) {
  .main-content {
    max-width: 100%;
    margin: 1rem auto;
  }
}

/* 手机设备 */
@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
    margin: 0.5rem auto;
  }
}
</style>
