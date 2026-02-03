<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Government Deadlines - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Official government timelines for quantum threat preparation.' }]
})

const breadcrumbs = [
  { label: 'Learn', path: '/learn' },
  { label: 'Timeline', path: '/learn/timeline' },
  { label: 'Government Deadlines' }
]

const deadlines = [
  {
    agency: 'UK NCSC',
    deadline: '2028 / 2031',
    requirement: 'Inventory by 2028, high-priority migration by 2031',
    link: 'https://www.ncsc.gov.uk'
  },
  {
    agency: 'US NSA',
    deadline: 'Ongoing',
    requirement: 'Transition to quantum-resistant algorithms for national security systems',
    link: 'https://www.nsa.gov'
  },
  {
    agency: 'US CISA',
    deadline: 'Ongoing',
    requirement: 'Guidance for organizations on post-quantum cryptography planning',
    link: 'https://www.cisa.gov'
  },
  {
    agency: 'NIST',
    deadline: '2024-2025',
    requirement: 'Finalization and publication of post-quantum cryptographic standards',
    link: 'https://www.nist.gov'
  }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Government Deadlines</h1>
    <p class="lead">Government agencies worldwide are establishing concrete timelines for the transition to quantum-resistant cryptography.</p>
    
    <div class="deadlines-table">
      <div class="table-header">
        <span>Agency</span>
        <span>Deadline</span>
        <span>Requirement</span>
      </div>
      <div v-for="d in deadlines" :key="d.agency" class="table-row">
        <a :href="d.link" target="_blank" rel="noopener noreferrer" class="agency">{{ d.agency }}</a>
        <span class="deadline">{{ d.deadline }}</span>
        <span class="requirement">{{ d.requirement }}</span>
      </div>
    </div>
    
    <div class="implications">
      <h2>What This Means for Bitcoin</h2>
      <p>These deadlines signal that governments are taking the quantum threat seriously. For Bitcoin, this means:</p>
      <ul>
        <li>Increased urgency for quantum-resistant protocol upgrades</li>
        <li>Growing institutional pressure to address cryptographic vulnerabilities</li>
        <li>Potential regulatory attention to quantum preparedness</li>
        <li>Opportunity for Bitcoin to lead in post-quantum cryptocurrency design</li>
      </ul>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.deadlines-table {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  margin-bottom: var(--space-10);
}
.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background-color: var(--bg-tertiary);
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-secondary);
}
.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--border-primary);
  align-items: center;
}
.agency {
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
}
.agency:hover { text-decoration: underline; }
.deadline {
  font-family: var(--font-family-mono);
  color: var(--accent-warning);
}
.requirement { color: var(--text-secondary); }
.implications h2 { color: var(--accent-primary); margin-bottom: var(--space-4); }
.implications p, .implications ul { color: var(--text-secondary); line-height: 1.8; }
.implications ul { padding-left: var(--space-5); }
.implications li { margin-bottom: var(--space-2); }
@media (max-width: 768px) {
  .table-header, .table-row { grid-template-columns: 1fr; }
  .table-header span:nth-child(2), .table-header span:nth-child(3) { display: none; }
}
</style>
