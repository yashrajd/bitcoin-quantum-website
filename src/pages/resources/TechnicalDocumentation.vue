<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import { formatDate } from '../../utils/date.js'

useHead({
  title: 'Technical Documentation - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'BIPs and developer resources for Bitcoin quantum resistance.' }]
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
    date: '2025-12-01',
    description: 'The official proposal detailing quantum-resistant address formats for Bitcoin.',
    link: 'https://bip360.org'
  },
  {
    title: 'BIP-361: Post Quantum Migration and Legacy Signature Sunset',
    type: 'BIP',
    date: '2026-02-11',
    description: 'Proposes a three-phase migration: disallowing sends to vulnerable addresses, sunsetting ECDSA/Schnorr signatures via flag day, and enabling quantum-safe recovery of legacy UTXOs via zero-knowledge proofs.',
    link: 'https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki'
  },
  {
    title: 'Quantum Safe Bitcoin (QSB)',
    type: 'Repository',
    date: '2026-04-01',
    description: 'Working implementation of quantum-safe Bitcoin transactions using only existing consensus rules—no soft fork required. Security rests on hash pre-image resistance rather than elliptic curve assumptions.',
    link: 'https://github.com/avihu28/Quantum-Safe-Bitcoin-Transactions/'
  }
]

const sortedDocs = computed(() =>
  [...docs].sort((a, b) => new Date(b.date) - new Date(a.date))
)
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Technical Documentation</h1>
    
    <div class="docs-list">
      <article v-for="doc in sortedDocs" :key="doc.title" class="doc-card">
        <h3>{{ doc.title }}</h3>
        <div class="card-meta">
          <span class="type">{{ doc.type }}</span>
          <time class="card-date" :datetime="doc.date">{{ formatDate(doc.date) }}</time>
        </div>
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
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}
.type {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
}
.card-date {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}
.doc-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.doc-link { color: var(--accent-primary); font-weight: 600; }

</style>
