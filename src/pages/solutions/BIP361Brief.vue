/**
 * BIP361Brief.vue - BIP-361 Overview Page
 *
 * Summary of Bitcoin Improvement Proposal 361 for post-quantum migration
 * and legacy signature sunset.
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

useHead({
  title: 'BIP-361 Overview - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Summary of Bitcoin Improvement Proposal 361 for post-quantum migration and legacy signature sunset.' }]
})

const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
  { label: 'BIP-361' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />

    <h1>BIP-361 Overview</h1>

    <p class="lead">BIP-361 proposes a three-phase migration to quantum resistance: (1) disallowing sends to vulnerable addresses, (2) sunsetting ECDSA/Schnorr signatures via a flag day, and (3) enabling quantum-safe recovery of legacy UTXOs via zero-knowledge proofs.</p>

    <p class="meta">Authors: Jameson Lopp et al.</p>

    <h2>Key Features</h2>
    <ul>
      <li>Disallow sends to quantum-vulnerable address types</li>
      <li>Sunset ECDSA/Schnorr signatures via coordinated flag day</li>
      <li>ZKP-based recovery for legitimate owners of frozen legacy UTXOs</li>
      <li>Designed to complement BIP-360's P2MR destination format</li>
    </ul>

    <h2>Relationship to BIP-360</h2>
    <p>BIP-360 provides the quantum-resistant destination output type; BIP-361 provides the migration path and legacy-coin policy to reach it.</p>

    <h2>Current Status</h2>
    <p>BIP-361 is currently in draft status and under active discussion on the Bitcoin Development Mailing List. No activation timeline exists.</p>

    <a href="https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View BIP-361 Draft</a>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-8); }
.meta { color: var(--text-secondary); font-style: italic; margin-bottom: var(--space-8); }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
ul { color: var(--text-secondary); padding-left: var(--space-5); line-height: 1.8; }
li { margin-bottom: var(--space-2); }
p { color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--space-4); }
.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-6);
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  margin-top: var(--space-6);
}
.btn:hover { filter: brightness(1.1); text-decoration: none; }
</style>
