/**
 * solutions/Index.vue - Solutions Section Landing
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Solutions - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Post-quantum cryptographic solutions for securing Bitcoin against quantum threats.'
  }]
})

const solutions = [
  {
    title: 'Post-Quantum Cryptography',
    icon: '🔐',
    description: 'Explore cryptographic approaches that resist quantum computing attacks.',
    link: '/solutions/post-quantum-cryptography',
    items: ['Hash-Based Signatures', 'Lattice-Based Cryptography', 'Hybrid Models']
  },
  {
    title: 'Bitcoin Proposals',
    icon: '📋',
    description: 'Bitcoin Improvement Proposals addressing quantum resistance.',
    link: '/solutions/bitcoin-proposals',
    items: ['BIP-360 (Featured)', 'BIP-347 / OP_CAT', 'Other Proposals']
  },
  {
    title: 'Migration Pathways',
    icon: '🚀',
    description: 'Practical guidance for transitioning to quantum-resistant solutions.',
    link: '/solutions/migration',
    items: ['For Individuals', 'For Institutions']
  }
]
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <span class="terminal-prompt section-prompt">/solutions</span>
      <h1>Quantum-Resistant Solutions</h1>
      <p class="lead">
        The Bitcoin community is actively developing solutions to protect against quantum threats. 
        Explore the cryptographic approaches, proposals, and migration strategies being developed.
      </p>
    </div>
    
    <div class="solutions-grid">
      <div
        v-for="solution in solutions"
        :key="solution.link"
        class="solution-card"
      >
        <span class="solution-icon">{{ solution.icon }}</span>
        <h3>{{ solution.title }}</h3>
        <p>{{ solution.description }}</p>
        <ul class="solution-items">
          <li v-for="item in solution.items" :key="item">{{ item }}</li>
        </ul>
        <router-link :to="solution.link" class="btn btn-primary">
          Explore {{ solution.title }}
        </router-link>
      </div>
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

.lead {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  max-width: 768px;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.solution-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
}

.solution-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
}

.solution-icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

.solution-card h3 {
  margin-bottom: var(--space-3);
}

.solution-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
  flex: 1;
}

.solution-items {
  list-style: none;
  margin-bottom: var(--space-6);
}

.solution-items li {
  padding: var(--space-2) 0;
  color: var(--text-muted);
  font-size: var(--text-sm);
  border-bottom: 1px solid var(--border-primary);
}

.solution-items li:before {
  content: '› ';
  color: var(--accent-primary);
}

@media (max-width: 1024px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
