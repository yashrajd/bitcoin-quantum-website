<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Callout from '../../components/Callout.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Hash-Based Signatures - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Quantum-resistant signature schemes based on hash functions.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Post-Quantum Cryptography', path: '/solutions/post-quantum-cryptography' },
  { label: 'Hash-Based Signatures' }
]

const relatedResources = [
  {
    title: 'BIP-347: OP_CAT for Lamport Signatures',
    link: '/solutions/bitcoin-proposals/bip-347',
    description: 'How OP_CAT enables quantum-resistant Lamport signatures in Bitcoin Script.',
    linkText: 'Learn more →',
    layout: 'list'
  },
  {
    title: 'Other Proposals: QSB, PQC Precommitment, and more',
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

    <h1>Hash-Based Signatures</h1>

    <p>Hash-based signature schemes rely on the security of hash functions rather than mathematical problems vulnerable to Shor's Algorithm. Academic research confirms that hash-based signatures "offer a promising path for securing Bitcoin in a post-quantum world."</p>

    <Callout variant="info" title="Research in Progress">
      The Bitcoin-specific schemes below (SHRINCS, SHRIMPS) are active research from Blockstream, not NIST-standardized protocols. They are not yet ready for mainnet deployment but represent the most mature Bitcoin-optimized post-quantum signatures in development.
    </Callout>

    <h2>Examples</h2>
    <ul>
      <li><strong>SPHINCS+:</strong> NIST-standardized (FIPS 205 / SLH-DSA). Bitcoin-specific research shows significant size improvements are possible through parameter optimization.</li>
      <li><strong>Lamport Signatures:</strong> One-time signatures enabled by BIP-347 / OP_CAT. See the <a href="/solutions/bitcoin-proposals/bip-347">BIP-347 page</a> for details.</li>
    </ul>

    <h2>Bitcoin-Specific Research</h2>
    <p>Blockstream Research has published a comprehensive investigation into hash-based signatures tailored specifically to Bitcoin's requirements. By reconfiguring SPHINCS+ parameters for Bitcoin's usage patterns and reducing allowed signatures per public key, they achieve significant size improvements over the NIST-standardized baseline.</p>
    <p><a href="https://eprint.iacr.org/2025/2203" target="_blank" rel="noopener noreferrer">Hash-based Signature Schemes for Bitcoin</a></p>

    <h2>SHRINCS: Compact Stateful Signatures</h2>
    <p>SHRINCS is a hybrid hash-based scheme combining stateful and stateless approaches to achieve 324-byte post-quantum signatures — roughly 5× larger than current Schnorr signatures, but orders of magnitude smaller than standardized SLH-DSA. It includes a static seed backup fallback for robustness. Real transactions have been demonstrated on Blockstream's Liquid sidechain.</p>
    <p><a href="https://blog.blockstream.com/shrincs-324-byte-stateful-post-quantum-signatures-with-static-backups/" target="_blank" rel="noopener noreferrer">SHRINCS: 324-byte stateful post-quantum signatures</a></p>

    <h2>SHRIMPS: Multi-Device Stateful Signatures</h2>
    <p>SHRIMPS extends SHRINCS to support multiple stateful signing devices with the same seed backup, achieving ~2.5 KB signatures on the compact path — about three times smaller than SLH-DSA. This enables a combined deployment: primary wallet uses SHRINCS (324 bytes), backup devices use SHRIMPS (~2.5 KB), emergency restore uses SPHINCS+ fallback.</p>
    <p><a href="https://blog.blockstream.com/shrimps-2-5-kb-post-quantum-signatures-across-multiple-stateful-devices/" target="_blank" rel="noopener noreferrer">SHRIMPS: 2.5 KB post-quantum signatures</a></p>

    <h2>Advantages</h2>
    <ul>
      <li>Well-understood security properties</li>
      <li>Relies only on hash function security</li>
      <li>Quantum-resistant</li>
    </ul>

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
