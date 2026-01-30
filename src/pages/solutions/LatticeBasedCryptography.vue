<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Lattice-Based Cryptography - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'NIST-standardized quantum-resistant cryptographic algorithms.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <router-link to="/solutions/post-quantum-cryptography">Post-Quantum Cryptography</router-link>
      <span>/</span>
      <span class="current">Lattice-Based</span>
    </nav>
    
    <h1>Lattice-Based Cryptography</h1>
    
    <p>Algorithms like CRYSTALS-Dilithium and CRYSTALS-Kyber, standardized by NIST, use the difficulty of solving certain lattice problems for security. These are among the most promising post-quantum alternatives for Bitcoin.</p>
    
    <h2>NIST Standards</h2>
    <ul>
      <li><strong>CRYSTALS-Dilithium:</strong> For digital signatures</li>
      <li><strong>CRYSTALS-Kyber:</strong> For key encapsulation/encryption</li>
    </ul>
    
    <h2>Applicability to Bitcoin</h2>
    <p>Lattice-based signatures could replace ECDSA in future Bitcoin protocol upgrades, providing quantum resistance while maintaining reasonable signature sizes.</p>
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
