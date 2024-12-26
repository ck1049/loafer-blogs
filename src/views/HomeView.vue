<script setup lang="ts">
import { ref } from 'vue'

const recentPosts = ref([
  {
    id: 1,
    title: 'Vue 3 组合式 API 最佳实践',
    category: '前端',
    date: '2024-03-20',
    summary: '探索 Vue 3 组合式 API 的使用技巧和最佳实践...',
  },
  {
    id: 2,
    title: 'Spring Boot 实战指南',
    category: '后端',
    date: '2024-03-18',
    summary: 'Spring Boot 项目开发中的经验总结...',
  },
])
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>分享技术，记录成长</h1>
      <p>一个 Java 程序员的技术博客，记录学习历程与心得体会</p>
    </section>

    <section class="recent-posts">
      <h2>最新文章</h2>
      <div class="post-grid">
        <article v-for="post in recentPosts" :key="post.id" class="post-card">
          <div class="post-category">{{ post.category }}</div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.summary }}</p>
          <div class="post-meta">
            <time>{{ post.date }}</time>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
}

.recent-posts {
  padding: 1rem 0;
}

.recent-posts h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.post-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.post-card h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: var(--color-heading);
}

.post-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #3eaf7c;
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.post-meta {
  margin-top: 1rem;
  color: #666;
  font-size: 0.875rem;
}

/* 平板设备 */
@media (max-width: 1024px) {
  .post-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .hero {
    padding: 2rem 1.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }
}

/* 手机设备 */
@media (max-width: 768px) {
  .post-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .hero {
    padding: 1.5rem 1rem;
    margin-bottom: 1rem;
  }

  .hero h1 {
    font-size: 1.75rem;
  }

  .post-card {
    padding: 1rem;
  }
}
</style>
