<script setup lang="ts">
import { ref } from 'vue'

const notes = ref([
  {
    id: 1,
    title: '每日学习笔记 - Vue 3 源码解析',
    date: '2024-03-20',
    tags: ['Vue', '源码分析'],
    summary: '今天学习了 Vue 3 的响应式系统实现原理...',
  },
  {
    id: 2,
    title: 'Java 多线程编程笔记',
    date: '2024-03-19',
    tags: ['Java', '多线程'],
    summary: '总结了 Java 并发编程中的常见问题和解决方案...',
  },
])
</script>

<template>
  <div class="notes">
    <h1>学习笔记</h1>
    <div class="notes-list">
      <article v-for="note in notes" :key="note.id" class="note-card">
        <h2>{{ note.title }}</h2>
        <div class="note-meta">
          <time>{{ note.date }}</time>
          <div class="tags">
            <span v-for="tag in note.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
        <p class="summary">{{ note.summary }}</p>
        <a href="#" class="read-more">阅读全文</a>
      </article>
    </div>
  </div>
</template>

<style scoped>
.notes {
  padding: 2rem 0;
}

.notes h1 {
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.note-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.note-card h2 {
  margin: 0 0 1rem;
  color: var(--color-heading);
  font-size: 1.5rem;
}

.note-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.note-meta time {
  color: #666;
  font-size: 0.875rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  color: #666;
}

.summary {
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  color: #3eaf7c;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
