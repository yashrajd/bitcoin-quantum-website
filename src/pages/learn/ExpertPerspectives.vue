<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
useHead({
  title: 'Expert Perspectives - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Expert predictions and academic estimates on quantum threats to Bitcoin.' }]
})

const perspectives = [
  {
    source: 'Academic Research',
    view: 'Conservative',
    timeline: '10-20+ years',
    summary: 'Academic surveys suggest practical quantum computers capable of breaking ECDSA remain many years away, though preparation should begin now.'
  },
  {
    source: 'Industry Analysts',
    view: 'Moderate',
    timeline: '10-15 years',
    summary: 'Various industry experts estimate 10-15 years before quantum computers pose a practical threat to current cryptography.'
  },
  {
    source: 'Government Agencies',
    view: 'Pragmatic',
    timeline: 'Action by 2031',
    summary: 'UK NCSC and other agencies have set concrete deadlines, calling for migration of high-priority systems by 2031.'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/learn">Learn</router-link>
      <span>/</span>
      <router-link to="/learn/timeline">Timeline</router-link>
      <span>/</span>
      <span class="current">Expert Perspectives</span>
    </nav>
    
    <h1>Expert Perspectives</h1>
    <p class="lead">Estimates vary widely on when quantum computers will threaten Bitcoin. Here's what different experts are saying.</p>
    
    <div class="perspectives-list">
      <article v-for="p in perspectives" :key="p.source" class="perspective-card">
        <div class="perspective-header">
          <h3>{{ p.source }}</h3>
          <span class="view-badge">{{ p.view }}</span>
        </div>
        <div class="timeline">{{ p.timeline }}</div>
        <p>{{ p.summary }}</p>
      </article>
    </div>
    
    <div class="disclaimer">
      <p><strong>Note:</strong> These estimates are subject to significant uncertainty. The field is evolving rapidly, and predictions should be treated as guidance rather than certainty.</p>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs { font-family: var(--font-family-mono); font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6); }
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.lead { font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-10); }
.perspectives-list { display: flex; flex-direction: column; gap: var(--space-4); }
.perspective-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.perspective-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3);
  flex-wrap: wrap;
  gap: var(--space-2);
}
.perspective-header h3 { margin: 0; }
.view-badge {
  padding: var(--space-1) var(--space-3);
  background-color: var(--bg-tertiary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-secondary);
}
.timeline {
  font-family: var(--font-family-mono);
  font-size: var(--text-xl);
  color: var(--accent-primary);
  margin-bottom: var(--space-3);
}
.perspective-card p { color: var(--text-secondary); margin: 0; }
.disclaimer {
  margin-top: var(--space-8);
  padding: var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--border-radius);
  color: var(--text-muted);
}
</style>
