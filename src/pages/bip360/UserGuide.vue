<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'BIP-360 User Guide - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'What Bitcoin users need to know about BIP-360 migration.' }]
})


const breadcrumbs = [
  { label: 'BIP-360 Hub', path: '/bip-360' },
  { label: 'User Guide' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>BIP-360 User Guide</h1>
    
    <h2>What Users Need to Know</h2>
    <p>BIP-360 adoption will eventually require users to migrate funds from quantum-vulnerable addresses to BIP-360-compliant addresses to maintain long-term security.</p>
    
    <h2>Migration Requirements</h2>
    <ul>
      <li>Users will need to migrate from vulnerable addresses (Taproot, reused addresses, P2PK)</li>
      <li>Wallet updates will be required for BIP-360 address support</li>
      <li>Migration tools will be provided to simplify the process</li>
    </ul>
    
    <h2>Wallet Compatibility</h2>
    <p>Users will need wallets that support generating and managing BIP-360 addresses. This may require updating existing software or switching to new implementations.</p>
    
    <h2>Transaction Costs</h2>
    <p>Post-quantum signatures typically require more data storage, potentially affecting transaction fees. However, BIP-360 places this data in the discounted witness segment, helping mitigate cost increases.</p>
    
    <h2>Timing Considerations</h2>
    <p>While experts debate the exact timeline of quantum threats, early adopters of BIP-360 will be better positioned regardless of when quantum computers capable of breaking Bitcoin's cryptography emerge.</p>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
