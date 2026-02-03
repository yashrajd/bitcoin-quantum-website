/**
 * Learn/Index.vue - Learn Section Landing Page
 * 
 * Educational hub with navigation to quantum computing and Bitcoin security topics.
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import ContentCard from '../../components/ContentCard.vue'

useHead({
  title: 'Learn - Bitcoin Quantum Hub',
  meta: [
    {
      name: 'description',
      content: 'Educational resources about quantum computing and its impact on Bitcoin security.'
    },
    {
      property: 'og:title',
      content: 'Learn - Bitcoin Quantum Hub'
    },
    {
      property: 'og:description',
      content: 'Educational resources about quantum computing and its impact on Bitcoin security.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

const sections = [
  {
    title: 'Quantum Computing 101',
    description: 'Fundamentals of quantum computing including history, key concepts, and recent developments.',
    icon: '🔬',
    link: '/learn/quantum-computing-101',
    topics: ['History & Origins', 'Glossary of Terms', 'Recent Developments']
  },
  {
    title: 'The Threat to Bitcoin',
    description: 'Understanding how quantum computing threatens Bitcoin\'s cryptographic security.',
    icon: '⚠️',
    link: '/learn/threat-to-bitcoin',
    topics: ['How Cryptography Works', 'What Quantum Changes', 'Vulnerable Addresses']
  },
  {
    title: 'Timeline & Estimates',
    description: 'Expert perspectives and government deadlines for quantum threat preparation.',
    icon: '📅',
    link: '/learn/timeline',
    topics: ['Expert Predictions', 'Government Deadlines']
  }
]
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <span class="terminal-prompt section-prompt">/learn</span>
      <h1>Learn About the Quantum Threat</h1>
      <p class="lead">
        Understand the fundamentals of quantum computing, why it poses a risk to Bitcoin, 
        and what experts are saying about timelines.
      </p>
    </div>
    
    <div class="sections-grid">
      <ContentCard
        v-for="section in sections"
        :key="section.link"
        v-bind="section"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.page-header {
  margin-bottom: var(--space-12);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--border-primary);
}

.section-prompt {
  font-family: var(--font-family-mono);
  color: var(--accent-primary);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
  display: block;
}

.page-header h1 {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-4);
}

.lead {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  max-width: 768px;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .sections-grid {
    grid-template-columns: 1fr;
  }
}
</style>
