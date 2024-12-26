<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }
    return ''
  },
})

const route = useRoute()
const article = ref<{
  title: string
  date: string
  content: string
  tags: string[] // 指定 tags 为 string 数组
}>({
  title: '',
  date: '',
  content: '',
  tags: [],
})

// 模拟获取文章数据
onMounted(async () => {
  // 实际项目中这里会从后端 API 获取数据
  article.value = {
    title: 'Spring Boot 实战指南',
    date: '2024-03-20',
    tags: ['Java', 'Spring Boot', '后端开发'],
    content: `
# Spring Boot 实战指南

## 1. 项目初始化

使用 Spring Initializer 创建项目：

\`\`\`java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
\`\`\`

## 2. 配置数据库

在 application.yml 中配置：

\`\`\`yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/demo
    username: root
    password: root
\`\`\`

## 3. 创建 REST API

\`\`\`java
@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }
}
\`\`\`
    `,
  }
})
</script>

<template>
  <div class="article">
    <article class="article-content">
      <header class="article-header">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <time>{{ article.date }}</time>
          <div class="tags">
            <span v-for="tag in article.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </header>
      <div class="markdown-body" v-html="md.render(article.content)" />
    </article>
  </div>
</template>

<style>
.article {
  padding: 2rem 0;
}

.article-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.article-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.article-header h1 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #666;
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
}

/* Markdown 样式 */
.markdown-body {
  line-height: 1.6;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  margin: 1.5em 0 1em;
  color: var(--color-heading);
}

.markdown-body p {
  margin: 1em 0;
}

.markdown-body code {
  background: #f6f8fa;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.markdown-body pre {
  background: #282c34;
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
}

.markdown-body pre code {
  background: none;
  padding: 0;
  color: #abb2bf;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-content {
    padding: 1rem;
  }

  .article-header h1 {
    font-size: 1.5rem;
  }

  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
