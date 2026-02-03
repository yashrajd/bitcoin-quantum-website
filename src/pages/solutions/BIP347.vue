<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'BIP-347 / OP_CAT - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'How OP_CAT enables quantum-resistant Lamport signatures.' }]
})


const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
  { label: 'BIP-347' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>BIP-347: OP_CAT for Lamport Signatures</h1>
    
    <p>BIP-347 proposes using OP_CAT (an opcode that concatenates stack elements) to enable the creation of Lamport signatures, which are quantum-resistant.</p>
    
    <h2>What is OP_CAT?</h2>
    <p>OP_CAT is an opcode that allows concatenation of stack elements in Bitcoin Script. This functionality enables more complex script constructions, including hash-based signatures.</p>
    
    <h2>Quantum Resistance</h2>
    <p>Lamport signatures provide one-time signatures that are inherently resistant to quantum attacks, as they rely solely on hash functions rather than elliptic curve mathematics.</p>
    
    <h2>Current Status</h2>
    <p>BIP-347 is currently in draft status and under discussion in the Bitcoin development community.</p>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p { color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4); }
</style>
