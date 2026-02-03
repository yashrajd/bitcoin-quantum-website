<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'BIP-360 Brief - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Summary of Bitcoin Improvement Proposal 360 for quantum resistance.' }]
})


const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
  { label: 'BIP-360' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>BIP-360 Overview</h1>
    
    <p class="lead">BIP-360 introduces a new output type called "Pay-to-Tapscript-Hash (P2TSH)" designed specifically to mitigate quantum risks.</p>
    
    <h2>Key Features</h2>
    <ul>
      <li>Removes key-path spend feature from Taproot</li>
      <li>Signature scheme agnostic</li>
      <li>Soft fork design for backward compatibility</li>
      <li>SegWit witness integration</li>
    </ul>
    
    <router-link to="/bip-360" class="btn btn-primary">Visit Full BIP-360 Hub</router-link>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-8); }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
ul { color: var(--text-secondary); padding-left: var(--space-5); line-height: 1.8; }
li { margin-bottom: var(--space-2); }
.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-6);
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  margin-top: var(--space-6);
}
.btn:hover { filter: brightness(1.1); text-decoration: none; }
</style>
