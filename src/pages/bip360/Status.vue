<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'BIP-360 Implementation Status - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Current development status and roadmap for BIP-360.' }]
})


const breadcrumbs = [
  { label: 'BIP-360 Hub', path: '/bip-360' },
  { label: 'Implementation Status' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>BIP-360 Implementation Status</h1>
    
    <div class="status-banner">
      <span class="badge badge-warning">Draft Status</span>
      <p>BIP-360 is currently in draft form and under community review.</p>
    </div>
    
    <h2>Current Status</h2>
    <ul>
      <li>Proposal drafted and published</li>
      <li>Community discussion ongoing</li>
      <li>Technical specifications finalized</li>
      <li>Reference implementation in progress</li>
    </ul>
    
    <h2>Development Milestones</h2>
    <ul>
      <li>✓ Initial proposal published</li>
      <li>✓ Technical review by core developers</li>
      <li>◯ Reference implementation</li>
      <li>◯ Testnet deployment</li>
      <li>◯ Community consensus</li>
    </ul>
    
    <h2>How to Contribute</h2>
    <p>Developers can contribute to BIP-360 by reviewing the specification, testing implementations, and participating in technical discussions on the Bitcoin-Dev mailing list.</p>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.status-banner {
  background: linear-gradient(135deg, rgba(255, 183, 3, 0.1), rgba(255, 183, 3, 0.05));
  border: 1px solid var(--status-warning);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-8);
}
.status-banner .badge { margin-bottom: var(--space-3); display: inline-block; }
.status-banner p { color: var(--text-secondary); margin: 0; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
ul { color: var(--text-secondary); line-height: 1.8; padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
p { color: var(--text-secondary); line-height: 1.8; }
</style>
