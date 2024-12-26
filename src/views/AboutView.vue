<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  name: 'Loafer',
  title: 'Java 开发工程师',
  description: '热爱技术，喜欢学习和分享。专注于 Java 后端开发，同时对前端技术充满热情。',
  skills: [
    {
      category: '后端技术',
      items: ['Java', 'Spring Boot', 'Spring Cloud', 'Python'],
    },
    {
      category: '中间件',
      items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch', 'RocketMQ'],
    },
    {
      category: '前端技术',
      items: ['Vue.js', 'TypeScript', 'HTML/CSS', 'JavaScript'],
    },
    {
      category: '开发工具',
      items: ['Git', 'Docker', 'Linux', 'Maven'],
    },
  ],
  contacts: [
    { type: 'GitHub', link: 'https://github.com/yourusername' },
    { type: 'Email', link: 'mailto:your.email@example.com' },
  ],
})
</script>

<template>
  <div class="about">
    <section class="profile">
      <h1>关于我</h1>
      <div class="profile-content">
        <h2>{{ profile.name }}</h2>
        <h3>{{ profile.title }}</h3>
        <p class="description">{{ profile.description }}</p>
      </div>
    </section>

    <section class="skills">
      <h2>技能专长</h2>
      <div class="skills-grid">
        <div v-for="(skill, index) in profile.skills" :key="index" class="skill-category">
          <h3>{{ skill.category }}</h3>
          <ul>
            <li v-for="item in skill.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="contact">
      <h2>联系方式</h2>
      <div class="contact-links">
        <a
          v-for="contact in profile.contacts"
          :key="contact.type"
          :href="contact.link"
          target="_blank"
          rel="noopener"
        >
          {{ contact.type }}
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem 0;
}

.profile,
.skills,
.contact {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.profile h1 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
}

.profile-content {
  text-align: center;
}

.profile-content h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.profile-content h3 {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.description {
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.skills h2,
.contact h2 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 0.5rem 1rem;
  background: var(--color-background-soft);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.contact-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.contact-links a {
  padding: 0.5rem 1.5rem;
  background: var(--color-background-soft);
  border-radius: 4px;
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-links a:hover {
  background: #3eaf7c;
  color: white;
}

/* 平板设备 */
@media (max-width: 1024px) {
  .profile,
  .skills,
  .contact {
    padding: 1.5rem;
  }

  .profile h1 {
    font-size: 1.75rem;
  }

  .profile-content h2 {
    font-size: 1.5rem;
  }
}

/* 手机设备 */
@media (max-width: 768px) {
  .about {
    padding: 1rem 0;
  }

  .profile,
  .skills,
  .contact {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .profile h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .profile-content h2 {
    font-size: 1.3rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .contact-links {
    flex-direction: column;
  }

  .contact-links a {
    text-align: center;
  }
}
</style>
