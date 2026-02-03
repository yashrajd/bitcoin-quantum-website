<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Migration Pathways - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Practical guidance for transitioning to quantum-resistant Bitcoin addresses.' }]
})

const sections = [
  {
    title: 'For Individuals',
    description: 'Step-by-step preparation guide for Bitcoin holders including address hygiene best practices.',
    link: '/solutions/migration/individuals'
  },
  {
    title: 'For Institutions',
    description: 'Risk assessment frameworks, custody provider considerations, and strategic planning.',
    link: '/solutions/migration/institutions'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <span class="current">Migration Pathways</span>
    </nav>
    
    <h1>Migration Pathways</h1>
    <p class="lead">Practical guidance for transitioning to quantum-resistant solutions for both individuals and institutions.</p>
    
    <div class="migration-grid">
      <NavigationCard
        v-for="section in sections"
        :key="section.link"
        v-bind="section"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.migration-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
@media (max-width: 768px) { .migration-grid { grid-template-columns: 1fr; } }
</style>
