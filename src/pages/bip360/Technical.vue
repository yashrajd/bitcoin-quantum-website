<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'BIP-360 Technical Deep Dive - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Technical details of P2TSH and quantum witness structures.' }]
})


const breadcrumbs = [
  { label: 'BIP-360 Hub', path: '/bip-360' },
  { label: 'Technical Deep Dive' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>BIP-360 Technical Deep Dive</h1>
    
    <h2>P2TSH Output Type</h2>
    <p>BIP-360 introduces Pay-to-Tapscript-Hash (P2TSH), a new output type that removes the key-path spend feature from Taproot addresses, preventing public key exposure on-chain.</p>
    
    <h2>Quantum Witness Structure</h2>
    <p>The proposal introduces a "quantum witness"—witness data for post-quantum public keys and signatures. This quantum witness is placed in the witness portion of the transaction, which is already discounted under SegWit rules.</p>
    
    <h2>Signature Scheme Options</h2>
    <p>BIP-360 outlines three quantum-resistant signature methods, enabling gradual transition as the technology matures. The proposal is signature scheme-agnostic, allowing adoption of the most suitable algorithms.</p>
    
    <h2>Implementation Requirements</h2>
    <ul>
      <li>Bitcoin Core modifications for P2TSH support</li>
      <li>Wallet updates for address generation</li>
      <li>Hardware wallet compatibility</li>
      <li>Exchange and explorer integration</li>
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
