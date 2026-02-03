<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Quantum Impact - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'How quantum algorithms like Shor\'s and Grover\'s threaten Bitcoin cryptography.' }]
})


const breadcrumbs = [
  { label: 'Learn', path: '/learn' },
  { label: 'The Threat to Bitcoin', path: '/learn/threat-to-bitcoin' },
  { label: 'What Quantum Changes' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>What Quantum Computers Change</h1>
    
    <h2>Shor's Algorithm</h2>
    <p>Shor's Algorithm can efficiently factor large numbers and solve discrete logarithm problems—the mathematical foundations of Bitcoin's elliptic curve cryptography. A sufficiently powerful quantum computer running Shor's Algorithm could derive Bitcoin private keys from public keys.</p>
    
    <h2>Grover's Algorithm</h2>
    <p>Grover's Algorithm provides quadratic speedup for searching unstructured databases. While less threatening to Bitcoin than Shor's Algorithm, it could theoretically weaken SHA-256 hashing by reducing its effective security level by half.</p>
    
    <h2>Practical Implications</h2>
    <ul>
      <li>ECDSA signatures could be forged</li>
      <li>Private keys could be derived from public keys</li>
      <li>Transaction security would be compromised</li>
      <li>Mining security might be affected</li>
    </ul>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p { color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4); }
ul { color: var(--text-secondary); padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
