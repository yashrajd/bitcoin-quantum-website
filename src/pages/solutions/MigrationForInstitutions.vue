<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Callout from '../../components/Callout.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'Migration for Institutions - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Strategic planning for institutional Bitcoin custody and quantum resistance.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Migration Pathways', path: '/solutions/migration' },
  { label: 'For Institutions' }
]

const relatedResources = [
  {
    title: 'Migration Guide for Individuals',
    link: '/solutions/migration/individuals',
    description: 'Step-by-step guidance for Bitcoin holders preparing for quantum threats.',
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
    title: 'Other Proposals: Mitigation Mechanisms',
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

    <h1>Migration Guide for Institutions</h1>

    <Callout variant="info" title="Concentrated Risk">
      Institutional exposure is disproportionately concentrated. Presidio Bitcoin's analysis notes that over two-thirds of immediately vulnerable supply (~4.5M BTC) is attributed to address reuse, much of it concentrated in a small number of large custodians. This concentration creates an economic priority list for potential attackers and makes institutional preparedness a systemic concern.
    </Callout>

    <h2>Risk Assessment Framework</h2>
    <p>Institutions must evaluate their exposure to quantum risks based on the types of addresses holding their Bitcoin assets and their custody arrangements.</p>
    <p><strong>Exposure Concentration</strong>: Institutional holdings that rely on address reuse represent a manageable but urgent quantum vulnerability. These are often a small number of high-value, identifiable addresses — high-value targets that would likely be prioritized by quantum attackers.</p>
    <p><strong>Mining Incentive Risk</strong>: Ben Carman has articulated a game-theory argument that quantum-vulnerable coins break mining incentives. Labs capable of breaking keys would have incentive to partner with miners, creating permanent reorganization incentives and chain-split risk that undermines Bitcoin's finality guarantees.</p>
    <p><a href="https://github.com/presidiobtc/bitcoin-quantum" target="_blank" rel="noopener noreferrer">Presidio Bitcoin: Bitcoin's Quantum Readiness</a></p>
    <p><a href="https://stacker.news/items/1476783" target="_blank" rel="noopener noreferrer">Ben Carman: The case for freezing quantum vulnerable coins</a></p>
    <Callout variant="warning" title="Opinion Piece">
      This is a game-theory argument published on Stacker News, not a formal proposal. It represents one perspective in an ongoing community debate.
    </Callout>

    <h2>Rapid-Response Planning</h2>
    <p>The CRQC Response Playbook, developed by Anthony Milton & Clara Shikhelman, outlines a concrete rapid-response timeline. In an emergency scenario: Month 1 focuses on prohibiting new quantum-vulnerable outputs and deciding legacy coin policy; Months 6–7 target activation of a post-quantum signature scheme; migration follows. With 100% of block space dedicated to migration, approximately 90% of Bitcoin's value could be moved in roughly 1 day.</p>
    <p><a href="https://pq-bitcoin.org/posts/bitcoins-crqc-response" target="_blank" rel="noopener noreferrer">Bitcoin's CRQC Response Playbook</a></p>

    <h2>Custody Provider Considerations</h2>
    <ul>
      <li>Evaluate custody providers' quantum preparedness</li>
      <li>Understand address management policies</li>
      <li>Plan for future migration support</li>
    </ul>

    <h2>Compliance and Governance</h2>
    <p>Quantum risk should be incorporated into existing risk management frameworks and governance structures.</p>

    <h2>Strategic Planning</h2>
    <p>Institutional investors must weigh the costs of inaction against the benefits of early adoption of quantum-resistant standards.</p>
    <p>Chaincode Labs proposes a dual-track strategy: a short-term contingency path (~2 years) delivering minimal but functional protection, pursued in parallel with a long-term comprehensive path (~7 years) for optimal quantum resistance. This mirrors historical Bitcoin upgrades: SegWit took ~8.5 years from conception to widespread adoption; Taproot took ~7.5 years. Institutions should plan for a 2–3 year key rotation window once blockchain PQC standards finalize.</p>
    <p><a href="https://chaincode.com/bitcoin-post-quantum.pdf" target="_blank" rel="noopener noreferrer">Chaincode Labs: Bitcoin and Quantum Computing</a></p>

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
