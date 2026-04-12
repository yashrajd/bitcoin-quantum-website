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
    title: 'SHRIMPS: 2.5 KB post-quantum signatures across multiple stateful devices',
    source: 'Blockstream Research',
    description: 'Extends SHRINCS to support multiple stateful signing devices with the same seed backup, achieving ~2.5 KB signatures on the compact path—about three times smaller than SLH-DSA.',
    link: 'https://blog.blockstream.com/shrimps-2-5-kb-post-quantum-signatures-across-multiple-stateful-devices/'
  },
  {
    title: 'SHRINCS: 324-byte stateful post-quantum signatures with static backups',
    source: 'Blockstream Research',
    description: 'Introduces a hybrid hash-based signature scheme combining stateful and stateless approaches to achieve 324-byte post-quantum signatures with a static seed backup fallback for robustness.',
    link: 'https://blog.blockstream.com/shrincs-324-byte-stateful-post-quantum-signatures-with-static-backups/'
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
