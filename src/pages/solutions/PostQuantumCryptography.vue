/**
 * PostQuantumCryptography.vue - PQC Overview
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Post-Quantum Cryptography - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Cryptographic approaches that resist quantum computing attacks.'
  }]
})

const approaches = [
  {
    title: 'Hash-Based Signatures',
    link: '/solutions/post-quantum-cryptography/hash-based',
    description: 'Quantum-resistant signatures relying on hash function security rather than mathematical problems vulnerable to Shor\'s Algorithm. Examples: SPHINCS+, Lamport signatures.',
    badge: 'NIST standardized',
    linkText: 'Learn more →'
  },
  {
    title: 'Lattice-Based Cryptography',
    link: '/solutions/post-quantum-cryptography/lattice-based',
    description: 'Algorithms based on the difficulty of solving lattice problems, standardized by NIST for post-quantum security. Examples: CRYSTALS-Dilithium, CRYSTALS-Kyber.',
    badge: 'NIST standardized',
    linkText: 'Learn more →'
  },
  {
    title: 'Hybrid Models',
    link: '/solutions/post-quantum-cryptography/hybrid',
    description: 'Combining classical and post-quantum methods during transition periods for added security. Examples: Dual ECDSA + PQC signatures.',
    badge: 'NIST recommended',
    linkText: 'Learn more →'
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
      <NavigationCard
        v-for="approach in approaches"
        :key="approach.link"
        v-bind="approach"
        layout="list"
      />
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
</style>
