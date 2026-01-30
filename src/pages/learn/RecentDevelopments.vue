<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Recent Quantum Developments - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Latest breakthroughs and advancements in quantum computing research.'
  }]
})

const developments = [
  {
    category: 'Standardization',
    title: 'NIST Finalizes Post-Quantum Standards',
    description: 'NIST has released its final standards for post-quantum cryptography, including CRYSTALS-Dilithium for digital signatures and CRYSTALS-Kyber for encryption.',
    source: 'NIST',
    link: 'https://www.nist.gov'
  },
  {
    category: 'Government',
    title: 'CISA Issues Migration Guidance',
    description: 'The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has issued guidance on planning for the transition to post-quantum cryptography.',
    source: 'CISA',
    link: 'https://www.cisa.gov'
  },
  {
    category: 'International',
    title: 'UK NCSC Sets Migration Deadlines',
    description: 'The UK National Cyber Security Centre calls for an inventory of cryptographic dependencies by 2028 and migration of high-priority systems by 2031.',
    source: 'NCSC',
    link: 'https://www.ncsc.gov.uk'
  },
  {
    category: 'Security',
    title: 'NSA Transition Announcement',
    description: 'The U.S. National Security Agency announced plans to begin transitioning to quantum-resistant algorithms across national security systems.',
    source: 'NSA',
    link: 'https://www.nsa.gov'
  }
]
</script>

<template>
  <PageContainer>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link to="/learn">Learn</router-link>
      <span>/</span>
      <router-link to="/learn/quantum-computing-101">Quantum Computing 101</router-link>
      <span>/</span>
      <span class="current">Recent Developments</span>
    </nav>
    
    <h1>Recent Quantum Computing Developments</h1>
    <p class="lead">
      The quantum computing landscape is evolving rapidly, with several breakthrough 
      developments in recent years from government agencies and standards bodies.
    </p>
    
    <div class="developments-list">
      <article
        v-for="dev in developments"
        :key="dev.title"
        class="development-card"
      >
        <div class="dev-header">
          <span class="category-badge">{{ dev.category }}</span>
          <span class="source-badge">{{ dev.source }}</span>
        </div>
        <h3>{{ dev.title }}</h3>
        <p>{{ dev.description }}</p>
        <a 
          :href="dev.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="source-link"
        >
          Learn more →
        </a>
      </article>
    </div>
    
    <div class="last-updated">
      <span class="badge badge-info">Last Updated: January 2026</span>
      <p>
        The quantum computing landscape evolves rapidly—check back regularly for updates 
        on Bitcoin's quantum readiness.
      </p>
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

.developments-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.development-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.development-card:hover {
  border-color: var(--border-secondary);
  transform: translateY(-2px);
}

.dev-header {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}

.category-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--accent-info);
  color: var(--bg-primary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
}

.source-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-tertiary);
  color: var(--text-muted);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
}

.development-card h3 {
  margin-bottom: var(--space-3);
  font-size: var(--text-lg);
}

.development-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.source-link {
  color: var(--accent-primary);
  font-weight: 600;
  font-size: var(--text-sm);
}

.last-updated {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-align: center;
}

.last-updated .badge {
  margin-bottom: var(--space-3);
  display: inline-block;
}

.last-updated p {
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .developments-list {
    grid-template-columns: 1fr;
  }
}
</style>
