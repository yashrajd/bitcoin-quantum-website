/**
 * bip360/Index.vue - BIP-360 Hub Landing
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import NavigationCard from '../../components/NavigationCard.vue'

useHead({
  title: 'BIP-360 Hub - Bitcoin Quantum Hub',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive resource on Bitcoin Improvement Proposal 360 for quantum resistance.'
    },
    {
      property: 'og:title',
      content: 'BIP-360 Hub - Bitcoin Quantum Hub'
    },
    {
      property: 'og:description',
      content: 'Comprehensive resource on Bitcoin Improvement Proposal 360 for quantum resistance.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

const sections = [
  {
    title: 'Overview',
    link: '/bip-360/overview',
    icon: '📖',
    description: 'What BIP-360 is, who authored it, and why it matters for Bitcoin\'s future.'
  },
  {
    title: 'Technical Deep Dive',
    link: '/bip-360/technical',
    icon: '🔧',
    description: 'P2TSH output types, quantum witness structures, and implementation details.'
  },
  {
    title: 'Implementation Status',
    link: '/bip-360/status',
    icon: '📊',
    description: 'Current status, development milestones, and roadmap for BIP-360.'
  },
  {
    title: 'User Guide',
    link: '/bip-360/user-guide',
    icon: '👤',
    description: 'What Bitcoin users need to know about migration and wallet compatibility.'
  },
  {
    title: 'Developer Resources',
    link: '/bip-360/developers',
    icon: '💻',
    description: 'Technical specifications, reference implementations, and contribution guidelines.'
  }
]
</script>

<template>
  <PageContainer>
    <div class="hero-section">
      <span class="terminal-prompt section-prompt">/bip-360</span>
      <h1>BIP-360: Pay to Quantum Resistant Hash</h1>
      <p class="lead">
        BIP-360 introduces a new output type called "Pay-to-Tapscript-Hash (P2TSH)" 
        designed specifically to mitigate quantum risks. This is the hub for all 
        BIP-360 related information.
      </p>
      <div class="hero-meta">
        <span class="badge badge-info">Status: Draft</span>
        <span class="badge badge-warning">Soft Fork</span>
        <span class="meta-text">Authors: Hunter Beast, Ethan Heilman, Isabel Foxen Duke</span>
      </div>
    </div>
    
    <div class="sections-grid">
      <NavigationCard
        v-for="section in sections"
        :key="section.link"
        v-bind="section"
      />
    </div>
    
    <div class="external-links">
      <h2>External Resources</h2>
      <div class="link-grid">
        <a 
          href="https://bip360.org" 
          target="_blank" 
          rel="noopener noreferrer"
          class="external-link"
        >
          <span>Official BIP-360 Website</span>
          <span class="link-arrow">↗</span>
        </a>
        <a 
          href="https://github.com/bitcoin/bips" 
          target="_blank" 
          rel="noopener noreferrer"
          class="external-link"
        >
          <span>BIPs Repository</span>
          <span class="link-arrow">↗</span>
        </a>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--bg-secondary), rgba(0, 255, 136, 0.05));
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-8);
  margin-bottom: var(--space-10);
}

.section-prompt {
  font-family: var(--font-family-mono);
  color: var(--accent-primary);
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
  display: block;
}

.hero-section h1 {
  margin-bottom: var(--space-4);
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.hero-meta {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  flex-wrap: wrap;
}

.meta-text {
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.external-links {
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-primary);
}

.external-links h2 {
  margin-bottom: var(--space-6);
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.external-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.external-link:hover {
  border-color: var(--accent-primary);
  text-decoration: none;
}

.link-arrow {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .sections-grid {
    grid-template-columns: 1fr;
  }
  
  .link-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
