/**
 * QuantumComputing101.vue - Quantum Computing Fundamentals
 * 
 * Landing page for quantum computing basics with subtopic navigation.
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

useHead({
  title: 'Quantum Computing 101 - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Introduction to quantum computing fundamentals: history, key concepts, and recent developments.'
  }]
})

const breadcrumbs = [
  { label: 'Learn', path: '/learn' },
  { label: 'Quantum Computing 101' }
]

const subtopics = [
  {
    title: 'History & Origins',
    link: '/learn/quantum-computing-101/history',
    description: 'From Feynman\'s 1980s proposals to Shor\'s algorithm and today\'s quantum computers.',
    icon: '📜'
  },
  {
    title: 'Glossary of Terms',
    link: '/learn/quantum-computing-101/glossary',
    description: 'Key concepts explained: qubits, superposition, entanglement, and quantum algorithms.',
    icon: '📖'
  },
  {
    title: 'Recent Developments',
    link: '/learn/quantum-computing-101/recent-developments',
    description: 'Latest breakthroughs in quantum computing research and government initiatives.',
    icon: '📰'
  }
]
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <Breadcrumbs :items="breadcrumbs" />
      
      <h1>Quantum Computing 101</h1>
      <p class="lead">
        Quantum computing leverages the principles of quantum mechanics to perform calculations 
        impossible for classical computers. Understanding these fundamentals is key to grasping 
        the threat they pose to Bitcoin's cryptography.
      </p>
    </div>
    
    <div class="subtopics-grid">
      <NavigationCard
        v-for="topic in subtopics"
        :key="topic.link"
        v-bind="topic"
        link-text="Read more →"
      />
    </div>
    
    <div class="callout">
      <span class="badge badge-info">Why This Matters</span>
      <p>
        The theoretical foundation of quantum computing dates back to the 1980s, when physicist 
        Richard Feynman proposed that quantum systems could be used to perform computations that 
        were impossible for classical computers. Today, this theory is becoming reality, with 
        major technology companies and governments investing billions in quantum research.
      </p>
    </div>
  </PageContainer>
</template>

<style scoped>
.page-header {
  margin-bottom: var(--space-10);
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 768px;
}

.subtopics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.callout {
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(0, 229, 255, 0.05));
  border: 1px solid var(--accent-info);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}

.callout .badge {
  margin-bottom: var(--space-3);
  display: inline-block;
}

.callout p {
  margin: 0;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .subtopics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
