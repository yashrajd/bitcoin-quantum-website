/**
 * BitcoinProposals.vue - Bitcoin Improvement Proposals Overview
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Bitcoin Proposals - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Bitcoin Improvement Proposals addressing quantum resistance.'
  }]
})

const proposals = [
  {
    number: 'BIP-360',
    title: 'Pay to Quantum Resistant Hash',
    path: '/bip-360',
    status: 'Draft',
    featured: true,
    description: 'Introduces P2TSH (Pay-to-Tapscript-Hash) output type to mitigate quantum risks by removing key-path spends from Taproot addresses.'
  },
  {
    number: 'BIP-347',
    title: 'OP_CAT for Lamport Signatures',
    path: '/solutions/bitcoin-proposals/bip-347',
    status: 'Draft',
    description: 'Proposes enabling OP_CAT opcode to allow creation of Lamport signatures, providing a quantum-resistant signature option.'
  },
  {
    number: 'Other',
    title: 'Additional Proposals',
    path: '/solutions/bitcoin-proposals/other',
    status: 'Research',
    description: 'Taproot script-path spends, migration tools, and other emerging quantum resistance proposals.'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <span class="current">Bitcoin Proposals</span>
    </nav>
    
    <h1>Bitcoin Improvement Proposals</h1>
    <p class="lead">
      Bitcoin Improvement Proposals (BIPs) are the mechanism for introducing new features 
      and standards to Bitcoin. Several BIPs address quantum resistance directly.
    </p>
    
    <div class="proposals-list">
      <router-link
        v-for="prop in proposals"
        :key="prop.number"
        :to="prop.path"
        class="proposal-card"
        :class="{ featured: prop.featured }"
      >
        <div class="proposal-header">
          <span class="proposal-number">{{ prop.number }}</span>
          <span v-if="prop.featured" class="featured-badge">Featured</span>
          <span class="status-badge">{{ prop.status }}</span>
        </div>
        <h3>{{ prop.title }}</h3>
        <p>{{ prop.description }}</p>
      </router-link>
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

.proposals-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.proposal-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.proposal-card:hover {
  border-color: var(--accent-primary);
  transform: translateX(8px);
  text-decoration: none;
}

.proposal-card.featured {
  border-color: var(--accent-primary);
  background: linear-gradient(135deg, var(--bg-secondary), rgba(0, 255, 136, 0.05));
}

.proposal-header {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  margin-bottom: var(--space-3);
  flex-wrap: wrap;
}

.proposal-number {
  font-family: var(--font-family-mono);
  font-weight: 700;
  color: var(--accent-primary);
}

.featured-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
}

.status-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
}

.proposal-card h3 {
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.proposal-card p {
  color: var(--text-secondary);
  margin: 0;
}
</style>
