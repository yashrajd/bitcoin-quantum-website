<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Reading List - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Academic papers, expert opinion, and technical documentation.' }]
})

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'Reading List' }
]

const categories = [
  {
    title: 'Academic and Government Publications',
    description: 'Peer-reviewed research and official government guidance on quantum computing and blockchain security.',
    link: '/resources/reading-list/academic-and-government-publications',
    linkText: 'Explore →'
  },
  {
    title: 'Expert Opinion',
    description: 'Blog posts and analysis from leading researchers and practitioners.',
    link: '/resources/reading-list/expert-opinion',
    linkText: 'Explore →'
  },
  {
    title: 'Technical Documentation',
    description: 'BIPs, Bitcoin Wiki articles, and developer resources.',
    link: '/resources/reading-list/technical',
    linkText: 'Explore →'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Reading List</h1>
    <p class="lead">Curated resources organized by category for deeper learning.</p>
    
    <div class="reading-nav">
      <NavigationCard
        v-for="category in categories"
        :key="category.link"
        v-bind="category"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.reading-nav { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
@media (max-width: 1024px) { .reading-nav { grid-template-columns: 1fr; } }
</style>
