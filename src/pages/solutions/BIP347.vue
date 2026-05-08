<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'BIP-347 / OP_CAT - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'How OP_CAT enables quantum-resistant Lamport signatures.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
  { label: 'BIP-347' }
]

const relatedResources = [
  {
    title: 'Hash-Based Signatures: SHRINCS and SHRIMPS',
    link: '/solutions/post-quantum-cryptography/hash-based',
    description: 'Blockstream Research hash-based signature schemes optimized for Bitcoin.',
    linkText: 'Learn more →',
    layout: 'list'
  },
  {
    title: 'Other Proposals: The Full Proposal Landscape',
    link: '/solutions/bitcoin-proposals/other',
    description: 'Additional research-stage proposals for Bitcoin quantum resistance.',
    linkText: 'Learn more →',
    layout: 'list'
  }
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
    <p>Lamport signatures are one of several hash-based approaches being researched for Bitcoin. Blockstream Research has developed more compact alternatives — SHRINCS (324-byte signatures) and SHRIMPS (~2.5 KB multi-device signatures) — that may complement or supersede Lamport in production deployments. See the <a href="/solutions/post-quantum-cryptography/hash-based">Hash-Based Signatures page</a> for details.</p>

    <h2>Current Status</h2>
    <p>BIP-347 is currently in draft status and under discussion in the Bitcoin development community.</p>
    <p>BIP-347 is one of at least fourteen post-quantum proposals surveyed for Bitcoin as of April 2026. It occupies a specific niche: enabling hash-based signatures via script, without requiring a new address format or signature verification opcode. For a complete map of the proposal landscape, see NVK's survey.</p>
    <p><a href="https://bitcoinquantum.space/part3/" target="_blank" rel="noopener noreferrer">NVK: I Read Every Bitcoin Quantum Proposal</a></p>

    <h2>Related Resources</h2>
    <div class="related-resources">
      <NavigationCard
        v-for="resource in relatedResources"
        :key="resource.link"
        v-bind="resource"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p { color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4); }
a { color: var(--accent-primary); font-weight: 600; }
.related-resources {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
