<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Migration Pathways - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Practical guidance for transitioning to quantum-resistant Bitcoin addresses.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/solutions">Solutions</router-link>
      <span>/</span>
      <span class="current">Migration Pathways</span>
    </nav>
    
    <h1>Migration Pathways</h1>
    <p class="lead">Practical guidance for transitioning to quantum-resistant solutions for both individuals and institutions.</p>
    
    <div class="migration-grid">
      <router-link to="/solutions/migration/individuals" class="migration-card">
        <h3>For Individuals</h3>
        <p>Step-by-step preparation guide for Bitcoin holders including address hygiene best practices.</p>
        <span>Learn more →</span>
      </router-link>
      
      <router-link to="/solutions/migration/institutions" class="migration-card">
        <h3>For Institutions</h3>
        <p>Risk assessment frameworks, custody provider considerations, and strategic planning.</p>
        <span>Learn more →</span>
      </router-link>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.migration-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
.migration-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}
.migration-card:hover { border-color: var(--accent-primary); transform: translateY(-4px); text-decoration: none; }
.migration-card h3 { color: var(--text-primary); margin-bottom: var(--space-3); }
.migration-card p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.migration-card span { color: var(--accent-primary); font-weight: 600; }
@media (max-width: 768px) { .migration-grid { grid-template-columns: 1fr; } }
</style>
