<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Reading List - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Academic papers, government publications, and technical documentation.' }]
})

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'Reading List' }
]

const categories = [
  {
    title: 'Academic Papers',
    description: 'Peer-reviewed research on quantum computing and blockchain security.',
    link: '/resources/reading-list/academic',
    linkText: 'Explore →'
  },
  {
    title: 'Government Publications',
    description: 'Official guidance from NIST, CISA, NSA, UK NCSC, and other agencies.',
    link: '/resources/reading-list/government',
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
