<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'BIP-360 Brief - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Summary of Bitcoin Improvement Proposal 360 for quantum resistance.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <router-link to="/solutions/bitcoin-proposals">Bitcoin Proposals</router-link>
      <span>/</span>
      <span class="current">BIP-360</span>
    </nav>
    
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
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
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
