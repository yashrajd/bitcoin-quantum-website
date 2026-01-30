<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Resources - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Curated resources for deeper learning about quantum threats to Bitcoin.' }]
})
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <span class="terminal-prompt section-prompt">/resources</span>
      <h1>Resources</h1>
      <p class="lead">Curated collection of additional materials for deeper learning.</p>
    </div>
    
    <div class="resources-grid">
      <router-link to="/resources/faq" class="resource-card">
        <span class="icon">❓</span>
        <h3>FAQ</h3>
        <p>Frequently asked questions about quantum computing and Bitcoin.</p>
      </router-link>
      
      <router-link to="/resources/reading-list" class="resource-card">
        <span class="icon">📚</span>
        <h3>Reading List</h3>
        <p>Academic papers, government publications, and technical documentation.</p>
      </router-link>
      
      <router-link to="/resources/external-links" class="resource-card">
        <span class="icon">🔗</span>
        <h3>External Links</h3>
        <p>Community forums, news sources, and additional resources.</p>
      </router-link>
    </div>
  </PageContainer>
</template>

<style scoped>
.page-header { margin-bottom: var(--space-10); }
.section-prompt { font-family: var(--font-family-mono); color: var(--accent-primary); font-size: var(--text-sm); margin-bottom: var(--space-2); display: block; }
.lead { font-size: var(--text-xl); color: var(--text-secondary); }
.resources-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.resource-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}
.resource-card:hover { border-color: var(--accent-primary); transform: translateY(-4px); text-decoration: none; }
.icon { font-size: var(--text-3xl); display: block; margin-bottom: var(--space-4); }
.resource-card h3 { color: var(--text-primary); margin-bottom: var(--space-3); }
.resource-card p { color: var(--text-secondary); margin: 0; }
@media (max-width: 900px) { .resources-grid { grid-template-columns: 1fr; } }
</style>
