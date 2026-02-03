<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Other Proposals - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Additional proposals for Bitcoin quantum resistance.' }]
})


const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
  { label: 'Other Proposals' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Other Quantum-Resistant Proposals</h1>
    
    <h2>Taproot Script-Path Spends</h2>
    <p>Some cryptographers argue that Taproot, when restricted to script-path spends, is already post-quantum secure, as it avoids exposing the public key directly.</p>
    
    <h2>Migration Tools</h2>
    <p>Various proposals for helping users transition from quantum-vulnerable to quantum-resistant addresses without losing access to their funds are being discussed.</p>
    
    <h2>Research-Stage Ideas</h2>
    <p>Several academic papers propose novel approaches to quantum-resistant blockchain signatures, though these remain in early research phases.</p>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p { color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4); }
</style>
