/**
 * PostQuantumCryptography.vue - PQC Overview
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Post-Quantum Cryptography - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Cryptographic approaches that resist quantum computing attacks.'
  }]
})

const approaches = [
  {
    name: 'Hash-Based Signatures',
    path: '/solutions/post-quantum-cryptography/hash-based',
    description: 'Quantum-resistant signatures relying on hash function security rather than mathematical problems vulnerable to Shor\'s Algorithm.',
    status: 'Well-understood, NIST standardized',
    examples: 'SPHINCS+, Lamport signatures'
  },
  {
    name: 'Lattice-Based Cryptography',
    path: '/solutions/post-quantum-cryptography/lattice-based',
    description: 'Algorithms based on the difficulty of solving lattice problems, standardized by NIST for post-quantum security.',
    status: 'NIST standardized',
    examples: 'CRYSTALS-Dilithium, CRYSTALS-Kyber'
  },
  {
    name: 'Hybrid Models',
    path: '/solutions/post-quantum-cryptography/hybrid',
    description: 'Combining classical and post-quantum methods during transition periods for added security.',
    status: 'Recommended by NIST',
    examples: 'Dual ECDSA + PQC signatures'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <span class="current">Post-Quantum Cryptography</span>
    </nav>
    
    <h1>Post-Quantum Cryptography</h1>
    <p class="lead">
      Post-quantum cryptography (PQC) refers to cryptographic algorithms that are designed to 
      be secure against attacks from both classical and quantum computers.
    </p>
    
    <div class="approaches-list">
      <router-link
        v-for="approach in approaches"
        :key="approach.path"
        :to="approach.path"
        class="approach-card"
      >
        <div class="approach-header">
          <h3>{{ approach.name }}</h3>
          <span class="status-badge">{{ approach.status }}</span>
        </div>
        <p class="approach-description">{{ approach.description }}</p>
        <div class="approach-examples">
          <strong>Examples:</strong> {{ approach.examples }}
        </div>
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

.approaches-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.approach-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.approach-card:hover {
  border-color: var(--accent-primary);
  transform: translateX(8px);
  text-decoration: none;
}

.approach-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
  gap: var(--space-2);
}

.approach-header h3 {
  margin: 0;
  color: var(--text-primary);
}

.status-badge {
  padding: var(--space-1) var(--space-3);
  background-color: rgba(0, 255, 136, 0.1);
  color: var(--status-success);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
}

.approach-description {
  color: var(--text-secondary);
  margin-bottom: var(--space-3);
}

.approach-examples {
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.approach-examples strong {
  color: var(--text-secondary);
}
</style>
