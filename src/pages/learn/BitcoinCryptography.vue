<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

useHead({
  title: 'How Bitcoin\'s Cryptography Works - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Technical explanation of Bitcoin\'s cryptographic foundations including ECDSA and Schnorr signatures.'
  }]
})


const breadcrumbs = [
  { label: 'Learn', path: '/learn' },
  { label: 'The Threat to Bitcoin', path: '/learn/threat-to-bitcoin' },
  { label: 'Bitcoin Cryptography' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>How Bitcoin's Cryptography Works</h1>
    
    <div class="content">
      <h2>Elliptic Curve Digital Signature Algorithm (ECDSA)</h2>
      <p>
        Bitcoin's security model relies primarily on ECDSA to verify transaction authenticity. 
        ECDSA could be broken by Shor's Algorithm, allowing attackers to derive private keys 
        from public keys and steal funds. This is the most critical vulnerability.
      </p>
      
      <h2>Schnorr Signatures</h2>
      <p>
        Implemented through the Taproot upgrade, these signatures enhance privacy and reduce 
        data size but remain vulnerable to the same quantum attacks as ECDSA, as they rely on 
        the same underlying elliptic curve mathematics.
      </p>
      
      <div class="info-box">
        <h3>Key Takeaway</h3>
        <p>
          The most vulnerable addresses are those where public keys have been exposed on-chain, 
          including Pay-to-Public-Key (P2PK) addresses (containing approximately 1.8 million BTC, 
          including Satoshi's coins), reused addresses, and all Taproot addresses due to their design.
        </p>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.content h2 {
  color: var(--accent-primary);
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

.content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-4);
}

.info-box {
  background: linear-gradient(135deg, rgba(255, 183, 3, 0.1), rgba(255, 183, 3, 0.05));
  border: 1px solid var(--status-warning);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  margin-top: var(--space-8);
}

.info-box h3 {
  color: var(--status-warning);
  margin-bottom: var(--space-3);
}

.info-box p {
  color: var(--text-secondary);
  margin: 0;
}
</style>
