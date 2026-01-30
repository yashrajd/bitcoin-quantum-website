/**
 * QuantumComputing101.vue - Quantum Computing Fundamentals
 * 
 * Landing page for quantum computing basics with subtopic navigation.
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Quantum Computing 101 - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Introduction to quantum computing fundamentals: history, key concepts, and recent developments.'
  }]
})

const subtopics = [
  {
    title: 'History & Origins',
    path: '/learn/quantum-computing-101/history',
    description: 'From Feynman\'s 1980s proposals to Shor\'s algorithm and today\'s quantum computers.',
    icon: '📜'
  },
  {
    title: 'Glossary of Terms',
    path: '/learn/quantum-computing-101/glossary',
    description: 'Key concepts explained: qubits, superposition, entanglement, and quantum algorithms.',
    icon: '📖'
  },
  {
    title: 'Recent Developments',
    path: '/learn/quantum-computing-101/recent-developments',
    description: 'Latest breakthroughs in quantum computing research and government initiatives.',
    icon: '📰'
  }
]
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <router-link to="/learn">Learn</router-link>
        <span aria-hidden="true">/</span>
        <span class="current">Quantum Computing 101</span>
      </nav>
      
      <h1>Quantum Computing 101</h1>
      <p class="lead">
        Quantum computing leverages the principles of quantum mechanics to perform calculations 
        impossible for classical computers. Understanding these fundamentals is key to grasping 
        the threat they pose to Bitcoin's cryptography.
      </p>
    </div>
    
    <div class="subtopics-grid">
      <router-link
        v-for="topic in subtopics"
        :key="topic.path"
        :to="topic.path"
        class="subtopic-card"
      >
        <span class="subtopic-icon">{{ topic.icon }}</span>
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.description }}</p>
        <span class="read-more">Read more →</span>
      </router-link>
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

.breadcrumbs {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-4);
}

.breadcrumbs a {
  color: var(--accent-primary);
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.breadcrumbs .current {
  color: var(--text-secondary);
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 800px;
}

.subtopics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.subtopic-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.subtopic-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
  text-decoration: none;
}

.subtopic-icon {
  font-size: var(--text-3xl);
  display: block;
  margin-bottom: var(--space-4);
}

.subtopic-card h3 {
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.subtopic-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.read-more {
  color: var(--accent-primary);
  font-weight: 600;
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

@media (max-width: 900px) {
  .subtopics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
