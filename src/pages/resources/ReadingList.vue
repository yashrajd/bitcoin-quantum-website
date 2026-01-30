<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Reading List - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Academic papers, government publications, and technical documentation.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/resources">Resources</router-link>
      <span>/</span>
      <span class="current">Reading List</span>
    </nav>
    
    <h1>Reading List</h1>
    <p class="lead">Curated resources organized by category for deeper learning.</p>
    
    <div class="reading-nav">
      <router-link to="/resources/reading-list/academic" class="reading-card">
        <h3>Academic Papers</h3>
        <p>Peer-reviewed research on quantum computing and blockchain security.</p>
        <span>Explore →</span>
      </router-link>
      
      <router-link to="/resources/reading-list/government" class="reading-card">
        <h3>Government Publications</h3>
        <p>Official guidance from NIST, CISA, NSA, UK NCSC, and other agencies.</p>
        <span>Explore →</span>
      </router-link>
      
      <router-link to="/resources/reading-list/technical" class="reading-card">
        <h3>Technical Documentation</h3>
        <p>BIPs, Bitcoin Wiki articles, and developer resources.</p>
        <span>Explore →</span>
      </router-link>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.reading-nav { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.reading-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}
.reading-card:hover { border-color: var(--accent-primary); transform: translateY(-4px); text-decoration: none; }
.reading-card h3 { color: var(--text-primary); margin-bottom: var(--space-3); }
.reading-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.reading-card span { color: var(--accent-primary); font-weight: 600; }
@media (max-width: 900px) { .reading-nav { grid-template-columns: 1fr; } }
</style>
