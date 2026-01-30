<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'BIP-360 Developer Resources - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Technical resources for developers implementing BIP-360.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/bip-360">BIP-360 Hub</router-link>
      <span>/</span>
      <span class="current">Developers</span>
    </nav>
    
    <h1>BIP-360 Developer Resources</h1>
    
    <h2>Official Resources</h2>
    <ul>
      <li><a href="https://bip360.org" target="_blank" rel="noopener noreferrer">Official BIP-360 Website</a></li>
      <li><a href="https://github.com/bitcoin/bips" target="_blank" rel="noopener noreferrer">BIPs Repository</a></li>
    </ul>
    
    <h2>Technical Specifications</h2>
    <p>The complete technical specification details the P2TSH output format, quantum witness structure, and validation rules required for implementation.</p>
    
    <h2>Testing Resources</h2>
    <p>Test vectors and reference implementations are being developed to help wallet developers and node operators test BIP-360 compatibility.</p>
    
    <h2>How to Contribute</h2>
    <ul>
      <li>Review the BIP specification</li>
      <li>Join discussions on the Bitcoin-Dev mailing list</li>
      <li>Test reference implementations</li>
      <li>Submit improvements or bug reports</li>
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
a { color: var(--accent-primary); }
a:hover { text-decoration: underline; }
</style>
