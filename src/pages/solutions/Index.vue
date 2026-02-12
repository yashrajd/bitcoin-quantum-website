/**
 * solutions/Index.vue - Solutions Section Landing
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Solutions - Bitcoin Quantum Hub',
  meta: [
    {
      name: 'description',
      content: 'Post-quantum cryptographic solutions for securing Bitcoin against quantum threats.'
    },
    {
      property: 'og:title',
      content: 'Solutions - Bitcoin Quantum Hub'
    },
    {
      property: 'og:description',
      content: 'Post-quantum cryptographic solutions for securing Bitcoin against quantum threats.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
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
      <router-link
        v-for="solution in solutions"
        :key="solution.link"
        :to="solution.link"
        class="solution-card"
      >
        <span class="solution-icon">{{ solution.icon }}</span>
        <h3>{{ solution.title }}</h3>
        <p>{{ solution.description }}</p>
        <ul class="solution-items">
          <li v-for="item in solution.items" :key="item">{{ item }}</li>
        </ul>
        <span class="solution-link">
          Explore {{ solution.title }}
          <span class="link-arrow" aria-hidden="true">→</span>
        </span>
      </router-link>
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
  max-width: 800px;
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
  text-decoration: none;
  color: inherit;
}

.solution-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  text-decoration: none;
}

.solution-card:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.solution-card:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
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

.solution-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.solution-link:hover {
  text-decoration: underline;
  gap: var(--space-3);
}

.link-arrow {
  transition: transform var(--transition-fast);
}

.solution-link:hover .link-arrow {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
