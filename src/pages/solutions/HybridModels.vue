<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Callout from '../../components/Callout.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Hybrid Models - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Combining classical and post-quantum cryptography for transition periods.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Post-Quantum Cryptography', path: '/solutions/post-quantum-cryptography' },
  { label: 'Hybrid Models' }
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
    title: 'BIP-361: Legacy Signature Sunset',
    link: '/solutions/bitcoin-proposals/bip-361',
    description: 'Three-phase migration to quantum resistance with legacy coin recovery.',
    linkText: 'Learn more →',
    layout: 'list'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />

    <h1>Hybrid Cryptographic Models</h1>

    <p>Hybrid approaches combine classical and post-quantum cryptographic methods during the transition period. A hybrid transaction might require valid signatures from both an ECDSA key and a post-quantum key, ensuring security even if one algorithm is compromised.</p>

    <Callout variant="info" title="Complementary Approach">
      Hybrid models are not a single proposal but a design philosophy. The examples below illustrate how hybrid thinking appears in both signature schemes and protocol-level transitions. None of these are finalized standards.
    </Callout>

    <h2>Why Hybrids?</h2>
    <p>This approach is recommended by standards bodies like NIST to manage transition risk. It provides:</p>
    <ul>
      <li>Backward compatibility during transition</li>
      <li>Defense in depth with multiple algorithms</li>
      <li>Risk mitigation for unproven PQC algorithms</li>
    </ul>

    <h2>Concrete Hybrid Example: SHRINCS</h2>
    <p>SHRINCS itself is a hybrid scheme, combining stateful signing (compact signatures, fast verification) with stateless fallback (robust recovery via static seed backup). This hybrid architecture provides defense in depth: if state management fails, the stateless fallback remains secure.</p>
    <p><a href="https://blog.blockstream.com/shrincs-324-byte-stateful-post-quantum-signatures-with-static-backups/" target="_blank" rel="noopener noreferrer">Blockstream Research: SHRINCS</a></p>

    <h2>Protocol-Level Hybrid Transitions</h2>
    <p>BIP-361 proposes a three-phase hybrid transition at the protocol level: first disallowing sends to vulnerable addresses, then sunsetting legacy signatures via flag day, and finally enabling quantum-safe recovery. This staged approach provides backward compatibility during the transition while progressively reducing quantum exposure.</p>
    <p><a href="https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" target="_blank" rel="noopener noreferrer">BIP-361: Post Quantum Migration</a></p>

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
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
a { color: var(--accent-primary); font-weight: 600; }
.related-resources {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
