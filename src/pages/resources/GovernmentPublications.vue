<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Government Publications - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Official guidance from NIST, CISA, NSA, and other agencies.' }]
})

const publications = [
  {
    title: 'Guidance on Planning for Post-Quantum Cryptography',
    agency: 'CISA',
    description: 'U.S. government guidance for organizations on preparing for the transition to quantum-resistant cryptography.',
    link: 'https://www.cisa.gov'
  },
  {
    title: 'Announcing Plans to Transition to Quantum-Resistant Algorithms',
    agency: 'NSA',
    description: 'The U.S. National Security Agency\'s strategy for moving to quantum-resistant security solutions.',
    link: 'https://www.nsa.gov'
  },
  {
    title: 'Preparing for Quantum-Safe Cryptography',
    agency: 'UK NCSC',
    description: 'The UK National Cyber Security Centre\'s recommendations and timelines for quantum risk mitigation.',
    link: 'https://www.ncsc.gov.uk'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Government Publications</h1>
    
    <div class="publications-list">
      <article v-for="pub in publications" :key="pub.title" class="pub-card">
        <h3>{{ pub.title }}</h3>
        <span class="agency">{{ pub.agency }}</span>
        <p>{{ pub.description }}</p>
        <a :href="pub.link" target="_blank" rel="noopener noreferrer" class="pub-link">
          View Publication ↗
        </a>
      </article>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.publications-list { display: flex; flex-direction: column; gap: var(--space-4); }
.pub-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.pub-card h3 { margin-bottom: var(--space-2); }
.agency {
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
.pub-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.pub-link { color: var(--accent-primary); font-weight: 600; }
</style>
