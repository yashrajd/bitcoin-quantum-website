<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Hash-Based Signatures - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Quantum-resistant signature schemes based on hash functions.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <router-link to="/solutions/post-quantum-cryptography">Post-Quantum Cryptography</router-link>
      <span>/</span>
      <span class="current">Hash-Based</span>
    </nav>
    
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
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
