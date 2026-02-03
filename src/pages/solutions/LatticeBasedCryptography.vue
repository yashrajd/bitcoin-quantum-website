<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Lattice-Based Cryptography - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'NIST-standardized quantum-resistant cryptographic algorithms.' }]
})


const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Post-Quantum Cryptography', path: '/solutions/post-quantum-cryptography' },
  { label: 'Lattice-Based Cryptography' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
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
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
