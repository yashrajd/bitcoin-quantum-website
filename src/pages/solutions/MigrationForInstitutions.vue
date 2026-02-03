<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Migration for Institutions - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Strategic planning for institutional Bitcoin custody and quantum resistance.' }]
})


const breadcrumbs = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Migration Pathways', path: '/solutions/migration' },
  { label: 'For Institutions' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Migration Guide for Institutions</h1>
    
    <h2>Risk Assessment Framework</h2>
    <p>Institutions must evaluate their exposure to quantum risks based on the types of addresses holding their Bitcoin assets and their custody arrangements.</p>
    
    <h2>Custody Provider Considerations</h2>
    <ul>
      <li>Evaluate custody providers' quantum preparedness</li>
      <li>Understand address management policies</li>
      <li>Plan for future migration support</li>
    </ul>
    
    <h2>Compliance and Governance</h2>
    <p>Quantum risk should be incorporated into existing risk management frameworks and governance structures.</p>
    
    <h2>Strategic Planning</h2>
    <p>Institutional investors must weigh the costs of inaction against the benefits of early adoption of quantum-resistant standards.</p>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
h2 { color: var(--accent-primary); margin-top: var(--space-8); margin-bottom: var(--space-4); }
p, ul { color: var(--text-secondary); line-height: 1.8; }
ul { padding-left: var(--space-5); }
li { margin-bottom: var(--space-2); }
</style>
