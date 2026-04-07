<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Academic and Government Publications - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Peer-reviewed research and official government guidance on quantum computing and blockchain security.' }]
})

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'Reading List', path: '/resources/reading-list' },
  { label: 'Academic and Government Publications' }
]

const papers = [
  {
    title: 'Navigating the quantum computing threat landscape for blockchains: A comprehensive survey',
    source: 'ScienceDirect',
    description: 'Academic survey of quantum threats to blockchain systems, including Bitcoin and Ethereum.',
    link: 'https://www.sciencedirect.com'
  },
  {
    title: 'Post-Quantum Cryptography Standardization',
    source: 'NIST',
    description: 'Official standards and documentation for quantum-resistant cryptographic algorithms.',
    link: 'https://www.nist.gov'
  },
  {
    title: 'Guidance on Planning for Post-Quantum Cryptography',
    source: 'CISA',
    description: 'U.S. government guidance for organizations on preparing for the transition to quantum-resistant cryptography.',
    link: 'https://www.cisa.gov'
  },
  {
    title: 'Announcing Plans to Transition to Quantum-Resistant Algorithms',
    source: 'NSA',
    description: 'The U.S. National Security Agency\'s strategy for moving to quantum-resistant security solutions.',
    link: 'https://www.nsa.gov'
  },
  {
    title: 'Preparing for Quantum-Safe Cryptography',
    source: 'UK NCSC',
    description: 'The UK National Cyber Security Centre\'s recommendations and timelines for quantum risk mitigation.',
    link: 'https://www.ncsc.gov.uk'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Academic and Government Publications</h1>
    
    <div class="papers-list">
      <article v-for="paper in papers" :key="paper.title" class="paper-card">
        <h3>{{ paper.title }}</h3>
        <span class="source">{{ paper.source }}</span>
        <p>{{ paper.description }}</p>
        <a :href="paper.link" target="_blank" rel="noopener noreferrer" class="paper-link">
          View Paper ↗
        </a>
      </article>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.papers-list { display: flex; flex-direction: column; gap: var(--space-4); }
.paper-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.paper-card h3 { margin-bottom: var(--space-2); }
.source {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  background-color: rgba(0, 229, 255, 0.1);
  color: var(--accent-info);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  margin-bottom: var(--space-3);
}
.paper-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.paper-link { color: var(--accent-primary); font-weight: 600; }
</style>
