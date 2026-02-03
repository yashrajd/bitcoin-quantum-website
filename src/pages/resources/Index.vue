<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Resources - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Curated resources for deeper learning about quantum threats to Bitcoin.' }]
})

const resources = [
  {
    icon: '❓',
    title: 'FAQ',
    description: 'Frequently asked questions about quantum computing and Bitcoin.',
    link: '/resources/faq'
  },
  {
    icon: '📚',
    title: 'Reading List',
    description: 'Academic papers, government publications, and technical documentation.',
    link: '/resources/reading-list'
  },
  {
    icon: '🔗',
    title: 'External Links',
    description: 'Community forums, news sources, and additional resources.',
    link: '/resources/external-links'
  }
]
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <span class="terminal-prompt section-prompt">/resources</span>
      <h1>Resources</h1>
      <p class="lead">Curated collection of additional materials for deeper learning.</p>
    </div>
    
    <div class="resources-grid">
      <NavigationCard
        v-for="resource in resources"
        :key="resource.link"
        v-bind="resource"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.page-header { margin-bottom: var(--space-10); }
.section-prompt { font-family: var(--font-family-mono); color: var(--accent-primary); font-size: var(--text-sm); margin-bottom: var(--space-2); display: block; }
.lead { font-size: var(--text-xl); color: var(--text-secondary); }
.resources-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
@media (max-width: 1024px) { .resources-grid { grid-template-columns: 1fr; } }
</style>
