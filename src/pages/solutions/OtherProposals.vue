<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Callout from '../../components/Callout.vue'
import NavigationCard from '../../components/NavigationCard.vue'
import { formatDate } from '../../utils/date.js'

useHead({
  title: 'Other Proposals - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Additional proposals for Bitcoin quantum resistance.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
  { label: 'Other Proposals' }
]

const relatedResources = [
  {
    title: 'BIP-360: Pay to Quantum Resistant Hash',
    link: '/solutions/bitcoin-proposals/bip-360',
    description: 'P2MR output type for quantum-resistant Bitcoin addresses.',
    linkText: 'Learn more →',
    layout: 'list'
  },
  {
    title: 'BIP-347: OP_CAT for Lamport Signatures',
    link: '/solutions/bitcoin-proposals/bip-347',
    description: 'How OP_CAT enables quantum-resistant Lamport signatures in Bitcoin Script.',
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
    title: 'Migration Guide for Individuals',
    link: '/solutions/migration/individuals',
    description: 'Step-by-step guidance for Bitcoin holders preparing for quantum threats.',
    linkText: 'Learn more →',
    layout: 'list'
  },
  {
    title: 'Migration Guide for Institutions',
    link: '/solutions/migration/institutions',
    description: 'Strategic planning for institutional Bitcoin custody and quantum resistance.',
    linkText: 'Learn more →',
    layout: 'list'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />

    <h1>Other Quantum-Resistant Proposals</h1>

    <Callout variant="warning" title="No Established Consensus">
      The proposals below are research-stage ideas, draft BIPs, and opinion pieces. There is currently no consensus on which path Bitcoin should take, and none of these are ready for mainnet activation. The Bitcoin development community holds three overlapping positions — ship the format now, only trust hash-based crypto, or individual migration is meaningless — with zero agreement. The bottleneck is governance, not technical feasibility.
    </Callout>

    <p class="lead">Beyond BIP-360, BIP-347, and BIP-361, the Bitcoin community has proposed numerous approaches to quantum resistance. As surveyed by NVK in April 2026, there are at least fourteen active proposals across overlapping developer positions. Below is a thematic overview of the most significant.</p>

    <h2>Section A: No-Soft-Fork Alternatives</h2>

    <article class="proposal-card">
      <h3>Quantum Safe Bitcoin (QSB)</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Repository</span>
          <span class="author">Avihu Levy</span>
        </div>
        <time class="card-date" datetime="2026-04-01">{{ formatDate('2026-04-01') }}</time>
      </div>
      <p>Achieves quantum-resistant transactions using only existing Bitcoin consensus rules — no soft fork required. Replaces elliptic curve assumptions with a hash-to-signature puzzle (Binohash) where security rests on RIPEMD-160 pre-image resistance. Cost: $75–150 in cloud GPU compute per transaction. Limited to legacy script and requires miner-direct submission. Not practical for everyday use, but proves Bitcoin's existing scripting language already contains quantum defense building blocks.</p>
      <Callout variant="warning" title="Experimental Implementation">
        QSB is an experimental repository, not a protocol standard. It has not been formally reviewed for security and the full transaction pipeline has not been demonstrated on-chain.
      </Callout>
      <a href="https://github.com/avihu28/Quantum-Safe-Bitcoin-Transactions/" target="_blank" rel="noopener noreferrer" class="proposal-link">View Repository ↗</a>
    </article>

    <article class="proposal-card">
      <h3>PQC Precommitment (Buchner)</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Draft BIP</span>
          <span class="author">Buchner</span>
        </div>
        <time class="card-date" datetime="2026-04-10">{{ formatDate('2026-04-10') }}</time>
      </div>
      <p>Uses a corner of BIP 342's tapscript rules to embed SLH-DSA or SHRINCS public keys as "unknown key type" slots in a tapscript leaf today. Spendable with dummy witnesses under current rules. When a future soft fork binds real verification semantics to those tags, the same UTXO gains post-quantum protection without requiring a migration spend. The first proposal designed to let holders act today without betting on which soft fork path Bitcoin eventually picks.</p>
      <Callout variant="warning" title="Recently Drafted">
        Buchner's PQC Precommitment is a recently published draft BIP (April 2026). It has not yet undergone significant community review.
      </Callout>
      <a href="https://github.com/csuwildcat/pqc-precommitment-migration" target="_blank" rel="noopener noreferrer" class="proposal-link">View Repository ↗</a>
    </article>

    <h2>Section B: Migration Mechanisms</h2>

    <article class="proposal-card">
      <h3>PACTs: Protecting Your Bitcoin From a Quantum Sunset</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Proposal</span>
          <span class="author">Dan Robinson / Paradigm</span>
        </div>
        <time class="card-date" datetime="2026-05-01">{{ formatDate('2026-05-01') }}</time>
      </div>
      <p>Allows holders to silently timestamp proof of address control so they can reclaim coins after a quantum sunset without publicly moving funds. Preserves privacy for dormant holders, including Satoshi-era coins.</p>
      <Callout variant="warning" title="Research Proposal">
        PACTs are a research proposal from Paradigm, not a formal BIP. The mechanism has not been reviewed for consensus inclusion and represents one possible approach among many.
      </Callout>
      <a href="https://www.paradigm.xyz/2026/05/pacts-protecting-your-bitcoin-from-a-quantum-sunset" target="_blank" rel="noopener noreferrer" class="proposal-link">View Proposal ↗</a>
    </article>

    <article class="proposal-card">
      <h3>Commit-Delay-Reveal (CDR)</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Research</span>
        </div>
        <span class="card-date">2018</span>
      </div>
      <p>A three-stage protocol where users first commit to a hash combining their vulnerable and quantum-resistant keys, wait for a mandatory security delay, then reveal and migrate. Conservative and user-involved, but requires two soft forks and quantum-resistant funds to pay for the initial commitment.</p>
      <Callout variant="warning" title="Research-Stage">
        CDR is a research-stage proposal. It has not been developed into a formal BIP and faces significant governance challenges.
      </Callout>
    </article>

    <article class="proposal-card">
      <h3>Hourglass Strategy</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Proposal</span>
          <span class="author">Hunter Beast and Michael Casey</span>
        </div>
        <span class="card-date">2025</span>
      </div>
      <p>Instead of freezing vulnerable coins, rate-limit their spending to one quantum-vulnerable UTXO per block. Creates fee competition among attackers and potentially generates miner revenue over decades. Explicitly accommodates theft rather than preventing it.</p>
      <Callout variant="warning" title="Mailing List Proposal">
        The Hourglass Strategy is a proposal discussed on the Bitcoin Development Mailing List, not a draft BIP. It has not undergone formal review.
      </Callout>
      <a href="https://github.com/cryptoquick/bips/blob/hourglass-v2/bip-hourglass-v2.mediawiki" target="_blank" rel="noopener noreferrer" class="proposal-link">View Draft BIP ↗</a>
    </article>

    <article class="proposal-card">
      <h3>QRAMP</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Research</span>
          <span class="author">Agustin Cruz</span>
        </div>
        <span class="card-date">2025</span>
      </div>
      <p>Quantum-Resistant Address Migration Protocol. Enforces a mandatory migration period with a hard deadline after which ECC-secured UTXOs become unspendable. A strict "burn" realization that prioritizes network security over individual autonomy. Faces significant governance challenges due to confiscation of unmigrated funds.</p>
      <Callout variant="warning" title="Research-Stage">
        QRAMP is a research-stage proposal discussed on the Bitcoin Development Mailing List. It has not been developed into a formal BIP and faces significant governance challenges.
      </Callout>
      <a href="https://groups.google.com/g/bitcoindev/c/8PM6iZCeDMc" target="_blank" rel="noopener noreferrer" class="proposal-link">View Discussion ↗</a>
    </article>

    <h2>Section C: Script and Wallet Innovations</h2>

    <article class="proposal-card">
      <h3>Dynamic Script Endorsement</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Research</span>
          <span class="author">conduition</span>
        </div>
      </div>
      <p>Users embed hash-based one-time-signature commitments in their Taproot script trees today, before PQ opcodes exist. When PQ opcodes become available, wallets upgrade without moving funds. Only helps outputs created after adoption.</p>
      <Callout variant="warning" title="Research-Stage">
        This is an independent research analysis exploring hash-based signature schemes for Bitcoin, including a proposed DASK upgrade path. It has not been formalized as a BIP.
      </Callout>
      <a href="https://conduition.io/cryptography/quantum-hbs/" target="_blank" rel="noopener noreferrer" class="proposal-link">View Analysis ↗</a>
    </article>

    <article class="proposal-card">
      <h3>zk-STARK Seed Proofs (roasbeef)</h3>
      <div class="card-meta">
        <div class="meta-badges">
          <span class="source">Proof of Concept</span>
          <span class="author">roasbeef</span>
        </div>
        <span class="card-date">2026-04</span>
      </div>
      <p>A zero-knowledge proof demonstrating BIP-32 seed ownership without revealing the seed. Enables migration for BIP-86 wallets (70–90% of Taproot outputs) even if the key-path is later disabled. Shrinks the confiscation surface from "most Taproot users" to "non-HD wallets and lost seeds."</p>
      <Callout variant="warning" title="Proof of Concept">
        roasbeef's zk-STARK proof is a proof-of-concept published in April 2026. It is not a formal proposal and requires significant further development.
      </Callout>
    </article>

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
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
.proposal-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-4);
}
.proposal-card h3 {
  margin-bottom: var(--space-2);
}
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}
.meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
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
.author {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
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
.proposal-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}
.proposal-link {
  color: var(--accent-primary);
  font-weight: 600;
}
.related-resources {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
