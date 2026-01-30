<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Migration for Individuals - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Step-by-step guide for Bitcoin holders to prepare for quantum threats.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <router-link to="/solutions/migration">Migration Pathways</router-link>
      <span>/</span>
      <span class="current">For Individuals</span>
    </nav>
    
    <h1>Migration Guide for Individuals</h1>
    
    <h2>Step 1: Check Your Address Types</h2>
    <p>Identify if you hold funds in vulnerable address types (P2PK, reused addresses, Taproot).</p>
    
    <h2>Step 2: Practice Address Hygiene</h2>
    <ul>
      <li>Never reuse addresses</li>
      <li>Generate new addresses for each transaction</li>
      <li>Use wallets that support address rotation</li>
    </ul>
    
    <h2>Step 3: Stay Informed</h2>
    <p>Follow developments in quantum-resistant address formats like BIP-360 and be ready to migrate when wallet support becomes available.</p>
    
    <h2>Step 4: Plan for the Future</h2>
    <p>Consider the timing of migration and potential transaction costs. Early adopters will be better positioned regardless of when quantum computers emerge.</p>
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
