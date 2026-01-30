<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Timeline & Estimates - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Expert predictions and government timelines for quantum threat preparation.'
  }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/learn">Learn</router-link>
      <span>/</span>
      <span class="current">Timeline & Estimates</span>
    </nav>
    
    <h1>Timeline & Estimates</h1>
    <p class="lead">
      Estimates vary widely on when quantum computers will be able to break Bitcoin's 
      cryptography. Explore expert perspectives and government deadlines.
    </p>
    
    <div class="timeline-nav">
      <router-link to="/learn/timeline/expert-perspectives" class="timeline-card">
        <h3>Expert Perspectives</h3>
        <p>Balanced presentation of different viewpoints from academic and research estimates.</p>
        <span class="nav-arrow">→</span>
      </router-link>
      
      <router-link to="/learn/timeline/government-deadlines" class="timeline-card">
        <h3>Government Deadlines</h3>
        <p>Official timelines from NIST, CISA, NSA, UK NCSC, and other agencies.</p>
        <span class="nav-arrow">→</span>
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

.timeline-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.timeline-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
  position: relative;
}

.timeline-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  text-decoration: none;
}

.timeline-card h3 {
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.timeline-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.nav-arrow {
  position: absolute;
  bottom: var(--space-6);
  right: var(--space-6);
  color: var(--accent-primary);
  font-size: var(--text-xl);
  font-weight: bold;
}

@media (max-width: 768px) {
  .timeline-nav {
    grid-template-columns: 1fr;
  }
}
</style>
