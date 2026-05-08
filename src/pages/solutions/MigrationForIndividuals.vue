<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Callout from '../../components/Callout.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Migration for Individuals - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Step-by-step guide for Bitcoin holders to prepare for quantum threats.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Migration Pathways', path: '/solutions/migration' },
  { label: 'For Individuals' }
]

const relatedResources = [
  {
    title: 'Migration Guide for Institutions',
    link: '/solutions/migration/institutions',
    description: 'Strategic planning for institutional Bitcoin custody and quantum resistance.',
    linkText: 'Learn more →',
    layout: 'list'
  },
  {
    title: 'BIP-361: Migration and Legacy Sunset',
    link: '/solutions/bitcoin-proposals/bip-361',
    description: 'Three-phase migration path and legacy-coin policy to reach quantum resistance.',
    linkText: 'Learn more →',
    layout: 'list'
  },
  {
    title: 'Other Proposals: Recovery and Mitigation Tools',
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

    <h1>Migration Guide for Individuals</h1>

    <Callout variant="info" title="Prepare, Don't Panic">
      Independent analysis confirms that migration capacity is unlikely to be a bottleneck. If ~25% of block space were dedicated to migration, ~90% of Bitcoin's value could move in roughly 4 days. The more likely constraint is behavioral — wallet upgrades tend to be slow unless there is a clear forcing function. Early preparation is the best defense.
    </Callout>

    <h2>Step 1: Check Your Address Types</h2>
    <p>Identify if you hold funds in vulnerable address types (P2PK, reused addresses, Taproot).</p>
    <p>Understanding the scale of risk helps prioritize action. Analysis suggests roughly 6.26 million BTC — about one-third of the total supply — have exposed public keys and would be immediately vulnerable if a CRQC existed today. Much of this exposure comes from address reuse, a practice that can be eliminated without any protocol change.</p>
    <p><a href="https://bitcoinquantum.space/part1/" target="_blank" rel="noopener noreferrer">NVK Part 1</a></p>

    <h2>Step 2: Practice Address Hygiene</h2>
    <ul>
      <li>Never reuse addresses</li>
      <li>Generate new addresses for each transaction</li>
      <li>Use wallets that support address rotation</li>
    </ul>

    <h2>Step 3: Stay Informed</h2>
    <p>Follow developments in quantum-resistant address formats like BIP-360 and be ready to migrate when wallet support becomes available.</p>

    <h2>Concrete Recovery Tools</h2>
    <p><strong>PACTs (Proof of Address Control Timestamps)</strong>: Proposed by Dan Robinson at Paradigm, PACTs allow dormant holders to silently timestamp proof of address control. After a quantum sunset, holders can reclaim coins without having publicly moved them beforehand — preserving privacy for long-term holders, including Satoshi-era coins.</p>
    <p><a href="https://www.paradigm.xyz/2026/05/pacts-protecting-your-bitcoin-from-a-quantum-sunset" target="_blank" rel="noopener noreferrer">PACTs: Protecting Your Bitcoin From a Quantum Sunset</a></p>
    <Callout variant="warning" title="Research Proposal">
      PACTs are a research proposal from Paradigm, not a formal BIP. The mechanism has not been reviewed for consensus inclusion and represents one possible approach among many.
    </Callout>

    <h2>Step 4: Plan for the Future</h2>
    <p>Consider the timing of migration and potential transaction costs. Early adopters will be better positioned regardless of when quantum computers emerge.</p>
    <p>Independent analysis from Presidio Bitcoin outlines both orderly and rapid-response transition scenarios. In an orderly transition, users migrate at their own pace once quantum-resistant output types are available. In a rapid-response scenario, the network may implement emergency safeguards such as commit/reveal schemes or temporary freezing of vulnerable coins while migration proceeds.</p>
    <p><a href="https://github.com/presidiobtc/bitcoin-quantum" target="_blank" rel="noopener noreferrer">Presidio Bitcoin: Bitcoin's Quantum Readiness</a></p>

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
