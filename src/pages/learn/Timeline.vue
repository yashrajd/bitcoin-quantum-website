<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Timeline & Estimates - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Expert predictions and government timelines for quantum threat preparation.'
  }]
})

const sections = [
  {
    title: 'Expert Perspectives',
    description: 'Balanced presentation of different viewpoints from academic and research estimates.',
    link: '/learn/timeline/expert-perspectives',
    linkText: 'Explore →'
  },
  {
    title: 'Government Deadlines',
    description: 'Official timelines from NIST, CISA, NSA, UK NCSC, and other agencies.',
    link: '/learn/timeline/government-deadlines',
    linkText: 'Explore →'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/learn">Learn</router-link>
      <span>/</span>
      <span class="current">Timeline & Estimates</span>
    </nav>
    
    <h1>Timeline & Estimates</h1>
    <p class="lead">
      Estimates vary widely on when quantum computers will be able to break Bitcoin's 
      cryptography. Explore expert perspectives and government deadlines.
    </p>
    
    <div class="timeline-nav">
      <NavigationCard
        v-for="section in sections"
        :key="section.link"
        v-bind="section"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.breadcrumbs a {
  color: var(--accent-primary);
  text-decoration: none;
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
}

.timeline-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .timeline-nav {
    grid-template-columns: 1fr;
  }
}
</style>
