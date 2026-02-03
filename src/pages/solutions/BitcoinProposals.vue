/**
 * BitcoinProposals.vue - Bitcoin Improvement Proposals Overview
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Bitcoin Proposals - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Bitcoin Improvement Proposals addressing quantum resistance.'
  }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals' }
]

const proposals = [
  {
    title: 'BIP-360: Pay to Quantum Resistant Hash',
    link: '/bip-360',
    badge: 'Draft',
    description: 'Introduces P2TSH (Pay-to-Tapscript-Hash) output type to mitigate quantum risks by removing key-path spends from Taproot addresses.',
    linkText: 'Learn more →'
  },
  {
    title: 'BIP-347: OP_CAT for Lamport Signatures',
    link: '/solutions/bitcoin-proposals/bip-347',
    badge: 'Draft',
    description: 'Proposes enabling OP_CAT opcode to allow creation of Lamport signatures, providing a quantum-resistant signature option.',
    linkText: 'Learn more →'
  },
  {
    title: 'Other: Additional Proposals',
    link: '/solutions/bitcoin-proposals/other',
    badge: 'Research',
    description: 'Taproot script-path spends, migration tools, and other emerging quantum resistance proposals.',
    linkText: 'Learn more →'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Bitcoin Improvement Proposals</h1>
    <p class="lead">
      Bitcoin Improvement Proposals (BIPs) are the mechanism for introducing new features 
      and standards to Bitcoin. Several BIPs address quantum resistance directly.
    </p>
    
    <div class="proposals-list">
      <NavigationCard
        v-for="prop in proposals"
        :key="prop.link"
        v-bind="prop"
        layout="list"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
}

.proposals-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
