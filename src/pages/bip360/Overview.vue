/**
 * bip360/Overview.vue - BIP-360 Overview Page
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'BIP-360 Overview - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Summary and approach of Bitcoin Improvement Proposal 360 for quantum resistance.'
  }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/bip-360">BIP-360 Hub</router-link>
      <span>/</span>
      <span class="current">Overview</span>
    </nav>
    
    <h1>BIP-360 Overview</h1>
    
    <div class="content-section">
      <h2>What is BIP-360?</h2>
      <p>
        Bitcoin Improvement Proposal 360 (BIP-360), authored by Hunter Beast and refined by 
        Ethan Heilman and Isabel Foxen Duke, introduces a new output type called 
        "Pay-to-Tapscript-Hash (P2TSH)" designed specifically to mitigate quantum risks.
      </p>
    </div>
    
    <div class="content-section">
      <h2>Core Innovation</h2>
      <p>
        The core innovation of BIP-360 is the removal of the "key path spend" feature from 
        Taproot addresses, ensuring that private keys are never exposed on-chain where they 
        could be vulnerable to quantum attacks. This makes Taproot addresses more 
        quantum-resistant while providing a flexible framework to accommodate various 
        post-quantum algorithms.
      </p>
    </div>
    
    <div class="content-section">
      <h2>Key Features</h2>
      <ul class="feature-list">
        <li>
          <strong>Soft Fork Design:</strong> Can be implemented without forcing all network 
          participants to update, maintaining backward compatibility.
        </li>
        <li>
          <strong>Signature Scheme Agnostic:</strong> Allows Bitcoin to adopt the most suitable 
          quantum-resistant algorithms as they are developed and standardized.
        </li>
        <li>
          <strong>Three Quantum-Resistant Methods:</strong> Outlines multiple signature approaches, 
          enabling gradual transition to post-quantum cryptography.
        </li>
        <li>
          <strong>SegWit Integration:</strong> Places quantum witness data in the discounted 
          witness segment, mitigating increased transaction sizes.
        </li>
      </ul>
    </div>
    
    <div class="content-section">
      <h2>Why It Matters</h2>
      <p>
        BIP-360 represents a practical path forward for Bitcoin's quantum resistance. Unlike 
        theoretical proposals, it provides concrete technical specifications that can be 
        implemented and tested. The proposal balances security improvements with practical 
        considerations like transaction size and backward compatibility.
      </p>
    </div>
    
    <div class="navigation-links">
      <router-link to="/bip-360/technical" class="next-link">
        Technical Deep Dive →
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

.content-section {
  margin-bottom: var(--space-8);
}

.content-section h2 {
  color: var(--accent-primary);
  margin-bottom: var(--space-4);
}

.content-section p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: var(--space-3) 0;
  padding-left: var(--space-6);
  position: relative;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-primary);
}

.feature-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-weight: bold;
}

.feature-list li:last-child {
  border-bottom: none;
}

.navigation-links {
  display: flex;
  justify-content: flex-end;
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-primary);
  margin-top: var(--space-10);
}

.next-link {
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
}

.next-link:hover {
  text-decoration: underline;
}
</style>
