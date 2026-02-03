<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Technical Documentation - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'BIPs, Bitcoin Wiki articles, and developer resources.' }]
})

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'Reading List', path: '/resources/reading-list' },
  { label: 'Technical Documentation' }
]

const docs = [
  {
    title: 'BIP-360: Pay to Quantum Resistant Hash',
    type: 'BIP',
    description: 'The official proposal detailing quantum-resistant address formats for Bitcoin.',
    link: 'https://bip360.org'
  },
  {
    title: 'Bitcoin Wiki: Quantum Computing',
    type: 'Wiki',
    description: 'Community-maintained resource discussing the quantum threat and potential solutions.',
    link: 'https://en.bitcoin.it/wiki/Quantum_computing'
  },
  {
    title: 'BIPs GitHub Repository',
    type: 'Repository',
    description: 'The official repository for all Bitcoin Improvement Proposals.',
    link: 'https://github.com/bitcoin/bips'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Technical Documentation</h1>
    
    <div class="docs-list">
      <article v-for="doc in docs" :key="doc.title" class="doc-card">
        <h3>{{ doc.title }}</h3>
        <span class="type">{{ doc.type }}</span>
        <p>{{ doc.description }}</p>
        <a :href="doc.link" target="_blank" rel="noopener noreferrer" class="doc-link">
          View Documentation ↗
        </a>
      </article>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.docs-list { display: flex; flex-direction: column; gap: var(--space-4); }
.doc-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.doc-card h3 { margin-bottom: var(--space-2); }
.type {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  margin-bottom: var(--space-3);
}
.doc-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.doc-link { color: var(--accent-primary); font-weight: 600; }
</style>
