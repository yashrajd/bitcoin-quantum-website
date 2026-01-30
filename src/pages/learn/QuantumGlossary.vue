/**
 * QuantumGlossary.vue - Quantum Computing Terms Glossary
 * 
 * Alphabetized glossary of quantum computing concepts.
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Quantum Computing Glossary - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Key terms and concepts in quantum computing explained simply.'
  }]
})

const glossaryTerms = [
  {
    term: 'Qubit',
    definition: 'The fundamental unit of quantum information. Unlike classical bits (which are either 0 or 1), qubits can exist in superposition—simultaneously representing multiple states through quantum mechanical properties like electron spin or photon polarization.'
  },
  {
    term: 'Superposition',
    definition: 'The quantum principle allowing particles to exist in multiple states simultaneously. This enables quantum computers to process vast numbers of possibilities in parallel, providing exponential speedup for certain problems.'
  },
  {
    term: 'Entanglement',
    definition: 'A quantum phenomenon where qubits become interconnected such that the state of one instantly affects others, regardless of distance. This property enables quantum computers to maintain complex correlations across their systems.'
  },
  {
    term: "Shor's Algorithm",
    definition: 'A quantum algorithm developed in 1994 that can efficiently factor large numbers and solve discrete logarithm problems—the mathematical foundations of Bitcoin\'s elliptic curve cryptography. A sufficiently powerful quantum computer running Shor\'s Algorithm could derive Bitcoin private keys from public keys.'
  },
  {
    term: "Grover's Algorithm",
    definition: 'A quantum algorithm that provides quadratic speedup for searching unstructured databases. While less threatening to Bitcoin than Shor\'s Algorithm, it could theoretically weaken SHA-256 hashing by reducing its effective security level by half.'
  },
  {
    term: 'Quantum Supremacy',
    definition: 'The point at which quantum computers can solve problems that are practically impossible for classical computers. While achieved for specific problems, practical quantum supremacy for cryptographic applications remains years away.'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/learn">Learn</router-link>
      <span>/</span>
      <router-link to="/learn/quantum-computing-101">Quantum Computing 101</router-link>
      <span>/</span>
      <span class="current">Glossary</span>
    </nav>
    
    <h1>Glossary of Quantum Concepts</h1>
    <p class="lead">
      Essential terminology for understanding quantum computing and its implications for cryptography.
    </p>
    
    <div class="glossary-list">
      <article
        v-for="item in glossaryTerms"
        :key="item.term"
        class="glossary-item"
        :id="item.term.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')"
      >
        <h2 class="term">{{ item.term }}</h2>
        <p class="definition">{{ item.definition }}</p>
      </article>
    </div>
    
    <div class="navigation-links">
      <router-link to="/learn/quantum-computing-101/history" class="nav-link-prev">
        ← History & Origins
      </router-link>
      <router-link to="/learn/quantum-computing-101/recent-developments" class="nav-link-next">
        Recent Developments →
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

.breadcrumbs span {
  margin: 0 var(--space-2);
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
}

.glossary-list {
  margin-bottom: var(--space-10);
}

.glossary-item {
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--border-primary);
}

.glossary-item:first-child {
  padding-top: 0;
}

.term {
  font-size: var(--text-xl);
  color: var(--accent-primary);
  margin-bottom: var(--space-3);
}

.definition {
  color: var(--text-secondary);
  margin: 0;
}

.navigation-links {
  display: flex;
  justify-content: space-between;
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-primary);
}

.nav-link-prev,
.nav-link-next {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
}

.nav-link-prev:hover,
.nav-link-next:hover {
  text-decoration: underline;
}
</style>
