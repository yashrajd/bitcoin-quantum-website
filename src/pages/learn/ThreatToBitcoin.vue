/**
 * ThreatToBitcoin.vue - Bitcoin Security Threat Overview
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'The Threat to Bitcoin - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Understanding how quantum computing threatens Bitcoin\'s cryptographic security.'
  }]
})
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
      <router-link to="/learn/threat-to-bitcoin/bitcoin-cryptography" class="topic-card">
        <span class="topic-number">01</span>
        <h3>How Bitcoin's Cryptography Works</h3>
        <p>ECDSA, Schnorr signatures, and the mathematical foundation of Bitcoin security.</p>
        <span class="read-more">Explore →</span>
      </router-link>
      
      <router-link to="/learn/threat-to-bitcoin/quantum-impact" class="topic-card">
        <span class="topic-number">02</span>
        <h3>What Quantum Computers Change</h3>
        <p>How Shor's and Grover's algorithms threaten current cryptographic systems.</p>
        <span class="read-more">Explore →</span>
      </router-link>
      
      <router-link to="/learn/threat-to-bitcoin/address-vulnerability" class="topic-card">
        <span class="topic-number">03</span>
        <h3>Vulnerable vs Safe Addresses</h3>
        <p>Which Bitcoin addresses are at risk and why some are more secure than others.</p>
        <span class="read-more">Explore →</span>
      </router-link>
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

.topic-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-6);
  align-items: center;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.topic-card:hover {
  border-color: var(--accent-primary);
  transform: translateX(8px);
  text-decoration: none;
}

.topic-number {
  font-family: var(--font-family-mono);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--accent-primary);
  opacity: 0.5;
}

.topic-card h3 {
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.topic-card p {
  color: var(--text-secondary);
  margin: 0;
}

.read-more {
  color: var(--accent-primary);
  font-weight: 600;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .topic-card {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .read-more {
    justify-self: start;
  }
}
</style>
