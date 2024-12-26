<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const topics = ref([
  {
    id: 1,
    title: '前端技术',
    icon: '🌐',
    posts: [
      { id: 9, title: 'Vue 3 组合式 API 最佳实践', date: '2024-03-19' },
      { id: 10, title: 'TypeScript 高级特性详解', date: '2024-03-14' },
    ],
  },
  {
    id: 2,
    title: '后端开发',
    icon: '☕',
    posts: [
      { id: 1, title: 'Spring Boot 实战指南', date: '2024-03-20' },
      { id: 2, title: 'Spring Cloud 微服务架构', date: '2024-03-15' },
      { id: 3, title: 'Python 开发实践', date: '2024-03-10' },
    ],
  },
  {
    id: 3,
    title: '数据库与中间件',
    icon: '🗄️',
    posts: [
      { id: 4, title: 'MySQL 性能优化实践', date: '2024-03-18' },
      { id: 5, title: 'Redis 缓存设计方案', date: '2024-03-16' },
      { id: 6, title: 'Elasticsearch 搜索引擎应用', date: '2024-03-12' },
      { id: 7, title: 'RocketMQ 消息队列实践', date: '2024-03-08' },
      { id: 8, title: 'PostgreSQL 高级特性详解', date: '2024-03-05' },
    ],
  },
  {
    id: 4,
    title: 'DevOps',
    icon: '🛠️',
    posts: [
      { id: 11, title: 'Docker 容器化实践', date: '2024-03-17' },
      { id: 12, title: 'Linux 服务器运维指南', date: '2024-03-13' },
      { id: 13, title: 'Git 工作流最佳实践', date: '2024-03-09' },
    ],
  },
])
</script>

<template>
  <div class="topics">
    <h1>技术专题</h1>
    <div class="topics-grid">
      <div v-for="topic in topics" :key="topic.id" class="topic-card">
        <div class="topic-header">
          <span class="topic-icon">{{ topic.icon }}</span>
          <h2>{{ topic.title }}</h2>
        </div>
        <ul class="post-list">
          <li v-for="post in topic.posts" :key="post.id">
            <RouterLink :to="{ name: 'article', params: { id: post.id } }">
              {{ post.title }}
            </RouterLink>
            <time>{{ post.date }}</time>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topics {
  padding: 2rem 0;
}

.topics h1 {
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.topic-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.topic-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.topic-icon {
  font-size: 1.5rem;
}

.topic-card h2 {
  font-size: 1.25rem;
  color: var(--color-heading);
  margin: 0;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.post-list li:last-child {
  border-bottom: none;
}

.post-list a {
  color: var(--color-text);
  text-decoration: none;
}

.post-list time {
  font-size: 0.875rem;
  color: #666;
}

/* 平板设备 */
@media (max-width: 1024px) {
  .topics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* 手机设备 */
@media (max-width: 768px) {
  .topics-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .topic-card {
    padding: 1rem;
  }
}
</style>
