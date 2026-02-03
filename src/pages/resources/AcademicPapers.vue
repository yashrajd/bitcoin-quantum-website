<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Academic Papers - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Peer-reviewed research on quantum computing and blockchain security.' }]
})

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
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Academic Papers</h1>
    
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
  background-color: var(--bg-tertiary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-bottom: var(--space-3);
}
.paper-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.paper-link { color: var(--accent-primary); font-weight: 600; }
</style>
