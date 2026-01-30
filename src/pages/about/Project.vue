<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'About This Project - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Mission, editorial standards, and methodology of the Bitcoin Quantum Hub.' }]
})
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/about">About</router-link>
      <span>/</span>
      <span class="current">Project</span>
    </nav>
    
    <h1>About This Project</h1>
    
    <h2>Mission</h2>
    <p>The Bitcoin Quantum Hub is an educational resource dedicated to helping the Bitcoin community understand and prepare for the quantum computing threat. Our goal is to provide accurate, accessible information about quantum risks and the solutions being developed.</p>
    
    <h2>Editorial Standards</h2>
    <ul>
      <li>All content is backed by verifiable sources</li>
      <li>We prioritize academic, government, and primary sources</li>
      <li>Technical accuracy is reviewed by domain experts</li>
      <li>Content is regularly updated as the field evolves</li>
    </ul>
    
    <h2>Methodology</h2>
    <p>Information presented on this site is sourced from peer-reviewed academic papers, official government publications, Bitcoin Improvement Proposals, and community technical discussions. We avoid sensationalism and present balanced viewpoints.</p>
    
    <h2>Update Policy</h2>
    <p>This site is actively maintained. The quantum computing landscape evolves rapidly, and we strive to keep our content current with the latest developments in research, standards, and Bitcoin protocol proposals.</p>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
