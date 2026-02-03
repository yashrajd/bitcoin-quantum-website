/**
 * ThreatToBitcoin.vue - Bitcoin Security Threat Overview
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'The Threat to Bitcoin - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Understanding how quantum computing threatens Bitcoin\'s cryptographic security.'
  }]
})

const topics = [
  {
    number: '01',
    title: 'How Bitcoin\'s Cryptography Works',
    description: 'ECDSA, Schnorr signatures, and the mathematical foundation of Bitcoin security.',
    link: '/learn/threat-to-bitcoin/bitcoin-cryptography',
    linkText: 'Explore →'
  },
  {
    number: '02',
    title: 'What Quantum Computers Change',
    description: 'How Shor\'s and Grover\'s algorithms threaten current cryptographic systems.',
    link: '/learn/threat-to-bitcoin/quantum-impact',
    linkText: 'Explore →'
  },
  {
    number: '03',
    title: 'Vulnerable vs Safe Addresses',
    description: 'Which Bitcoin addresses are at risk and why some are more secure than others.',
    link: '/learn/threat-to-bitcoin/address-vulnerability',
    linkText: 'Explore →'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/learn">Learn</router-link>
      <span>/</span>
      <span class="current">The Threat to Bitcoin</span>
    </nav>
    
    <h1>The Threat to Bitcoin</h1>
    <p class="lead">
      Bitcoin's security model relies on cryptographic algorithms that quantum computers 
      could potentially break. Understanding these vulnerabilities is the first step toward 
      protecting your assets.
    </p>
    
    <div class="topics-grid">
      <NavigationCard
        v-for="topic in topics"
        :key="topic.link"
        v-bind="topic"
        layout="list"
      />
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.breadcrumbs a {
  color: var(--accent-primary);
  text-decoration: none;
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
}

.topics-grid {
  display: grid;
  gap: var(--space-6);
}
</style>
