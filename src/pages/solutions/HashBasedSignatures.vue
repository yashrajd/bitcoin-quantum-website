<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Hash-Based Signatures - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Quantum-resistant signature schemes based on hash functions.' }]
})


const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Post-Quantum Cryptography', path: '/solutions/post-quantum-cryptography' },
  { label: 'Hash-Based Signatures' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Hash-Based Signatures</h1>
    
    <p>Hash-based signature schemes rely on the security of hash functions rather than mathematical problems vulnerable to Shor's Algorithm. Academic research confirms that hash-based signatures "offer a promising path for securing Bitcoin in a post-quantum world."</p>
    
    <h2>Examples</h2>
    <ul>
      <li><strong>SPHINCS+:</strong> A stateless hash-based signature scheme</li>
      <li><strong>Lamport Signatures:</strong> One-time signatures that provide strong security guarantees</li>
    </ul>
    
    <h2>Advantages</h2>
    <ul>
      <li>Well-understood security properties</li>
      <li>Relies only on hash function security</li>
      <li>Quantum-resistant</li>
    </ul>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
