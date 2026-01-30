<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Hybrid Models - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Combining classical and post-quantum cryptography for transition periods.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <router-link to="/solutions/post-quantum-cryptography">Post-Quantum Cryptography</router-link>
      <span>/</span>
      <span class="current">Hybrid Models</span>
    </nav>
    
    <h1>Hybrid Cryptographic Models</h1>
    
    <p>Hybrid approaches combine classical and post-quantum cryptographic methods during the transition period. A hybrid transaction might require valid signatures from both an ECDSA key and a post-quantum key, ensuring security even if one algorithm is compromised.</p>
    
    <h2>Why Hybrids?</h2>
    <p>This approach is recommended by standards bodies like NIST to manage transition risk. It provides:</p>
    <ul>
      <li>Backward compatibility during transition</li>
      <li>Defense in depth with multiple algorithms</li>
      <li>Risk mitigation for unproven PQC algorithms</li>
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
