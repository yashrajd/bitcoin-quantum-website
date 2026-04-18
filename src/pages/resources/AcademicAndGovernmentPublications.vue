<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import { formatDate } from '../../utils/date.js'

useHead({
  title: 'Academic and Government Publications - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Peer-reviewed research and official government guidance on quantum computing and blockchain security.' }]
})

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'Reading List', path: '/resources/reading-list' },
  { label: 'Academic and Government Publications' }
]

const papers = [
  {
    title: 'Safeguarding cryptocurrency by disclosing quantum vulnerabilities responsibly',
    source: 'Google Research',
    date: '2026-03-31',
    description: 'Blog post introducing Google\'s whitepaper on quantum vulnerabilities in cryptocurrency. Explores a new responsible disclosure model using zero-knowledge proofs to verify claims without leaking sensitive attack details, and outlines steps for transitioning blockchains to post-quantum cryptography.',
    link: 'https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/'
  },
  {
    title: 'Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations',
    source: 'Google Research',
    date: '2026-03-30',
    description: 'Provides new resource estimates for breaking 256-bit Elliptic Curve Discrete Logarithm Problem—demonstrating Shor\'s algorithm can execute with fewer than 1,200 logical qubits and 90 million Toffoli gates. Validates results via zero-knowledge proof without disclosing attack vectors, and surveys systemic risks in smart contracts, Proof-of-Stake consensus, and Data Availability Sampling.',
    link: 'https://arxiv.org/abs/2603.28846'
  },
  {
    title: 'SHRIMPS: 2.5 KB post-quantum signatures across multiple stateful devices',
    source: 'Blockstream Research',
    date: '2026-03-27',
    description: 'Extends SHRINCS to support multiple stateful signing devices with the same seed backup, achieving ~2.5 KB signatures on the compact path—about three times smaller than SLH-DSA.',
    link: 'https://blog.blockstream.com/shrimps-2-5-kb-post-quantum-signatures-across-multiple-stateful-devices/'
  },
  {
    title: 'Hash-based Signature Schemes for Bitcoin',
    source: 'Blockstream Research',
    date: '2025-12-08',
    description: 'Comprehensive overview of hash-based signature schemes for Bitcoin, investigating parameter selection tailored to Bitcoin\'s requirements. Achieves significant size improvements over standardized SPHINCS+ by applying recent optimizations and reducing allowed signatures per public key.',
    link: 'https://eprint.iacr.org/2025/2203'
  },
  {
    title: 'SHRINCS: 324-byte stateful post-quantum signatures with static backups',
    source: 'Blockstream Research',
    date: '2025-12-20',
    description: 'Introduces a hybrid hash-based signature scheme combining stateful and stateless approaches to achieve 324-byte post-quantum signatures with a static seed backup fallback for robustness.',
    link: 'https://blog.blockstream.com/shrincs-324-byte-stateful-post-quantum-signatures-with-static-backups/'
  },
  {
    title: 'Bitcoin\'s Quantum Readiness: Exposure, Mitigations, and Upgrade Paths',
    source: 'Presidio Bitcoin',
    date: '2026-04-01',
    description: 'Institutional analysis of Bitcoin\'s quantum exposure, vulnerability of exposed UTXOs, mitigation strategies, orderly and rapid-response transition scenarios, and migration capacity estimates.',
    link: 'https://github.com/presidiobtc/bitcoin-quantum'
  },
  {
    title: 'Bitcoin and Quantum Computing: Current Status and Future Directions',
    source: 'Chaincode Labs',
    date: '2025-05-27',
    description: 'Comprehensive report on Bitcoin\'s post-quantum future, covering quantum computing\'s impact on mining, signature schemes, and migration pathways.',
    link: 'https://chaincode.com/bitcoin-post-quantum.pdf'
  },
  {
    title: 'Bitcoin\'s CRQC Response Playbook',
    source: 'Anthony Milton & Clara Shikhelman',
    date: '2025-09-18',
    description: 'Concrete rapid-response plan for how Bitcoin can reach quantum resistance if cryptographically relevant quantum computers emerge sooner than expected.',
    link: 'https://pq-bitcoin.org/posts/bitcoins-crqc-response'
  }
]

const sortedPapers = computed(() =>
  [...papers].sort((a, b) => new Date(b.date) - new Date(a.date))
)
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Academic and Government Publications</h1>
    
    <div class="papers-list">
      <article v-for="paper in sortedPapers" :key="paper.title" class="paper-card">
        <h3>{{ paper.title }}</h3>
        <div class="card-meta">
          <span class="source">{{ paper.source }}</span>
          <time class="card-date" :datetime="paper.date">{{ formatDate(paper.date) }}</time>
        </div>
        <p>{{ paper.description }}</p>
        <a :href="paper.link" target="_blank" rel="noopener noreferrer" class="paper-link">
          View Paper ↗
        </a>
      </article>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.papers-list { display: flex; flex-direction: column; gap: var(--space-4); }
.paper-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.paper-card h3 { margin-bottom: var(--space-2); }
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}
.source {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  background-color: rgba(0, 229, 255, 0.1);
  color: var(--accent-info);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
}
.card-date {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}
.paper-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.paper-link { color: var(--accent-primary); font-weight: 600; }

</style>
