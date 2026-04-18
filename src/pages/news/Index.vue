<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import { getAllNews } from '../../content/news.js'

useHead({
  title: 'News & Updates - Bitcoin Quantum Hub',
  meta: [
    { name: 'description', content: 'Latest developments in quantum computing and Bitcoin security.' },
    { property: 'og:title', content: 'News & Updates - Bitcoin Quantum Hub' },
    { property: 'og:description', content: 'Latest developments in quantum computing and Bitcoin security.' },
    { property: 'og:type', content: 'website' }
  ]
})

const news = getAllNews()
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <span class="terminal-prompt section-prompt">/news</span>
      <h1>News & Updates</h1>
      <p class="lead">Latest developments in quantum computing and Bitcoin security.</p>
    </div>
    
    <div class="news-list">
      <article v-for="item in news" :key="item.title" class="news-item">
        <time :datetime="item.date">{{ item.displayDate }}</time>
        <h3>
          <router-link :to="item.link">{{ item.title }}</router-link>
        </h3>
        <p>{{ item.excerpt }}</p>
      </article>
    </div>
  </PageContainer>
</template>

<style scoped>
.page-header { margin-bottom: var(--space-10); }
.section-prompt { font-family: var(--font-family-mono); color: var(--accent-primary); font-size: var(--text-sm); margin-bottom: var(--space-2); display: block; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.news-list { display: flex; flex-direction: column; gap: var(--space-6); }
.news-item {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.news-item time {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
}
.news-item h3 { margin: var(--space-2) 0 var(--space-3); }
.news-item h3 a { color: var(--text-primary); text-decoration: none; }
.news-item h3 a:hover { color: var(--accent-primary); }
.news-item p { color: var(--text-secondary); margin: 0; }
</style>
