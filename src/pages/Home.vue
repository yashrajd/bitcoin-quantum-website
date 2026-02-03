/**
 * Home.vue - Landing Page
 * 
 * The main entry point of the Bitcoin Quantum Hub.
 * Features:
 * - Hero section with headline and introduction
 * - User pathway cards (Newcomers, Solutions, BIP-360)
 * - Key statistics callout
 * - Latest updates preview
 * 
 * Accessibility: Semantic structure with proper heading hierarchy
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../components/PageContainer.vue'
import PathwayCard from '../components/PathwayCard.vue'

// SEO meta tags
useHead({
  title: 'Bitcoin Quantum Hub - Understanding the Quantum Threat',
  meta: [
    {
      name: 'description',
      content: 'Your definitive resource on quantum computing threats to Bitcoin and post-quantum cryptographic solutions. Learn, explore solutions, and prepare for the future.'
    },
    {
      property: 'og:title',
      content: 'Bitcoin Quantum Hub - Understanding the Quantum Threat'
    },
    {
      property: 'og:description',
      content: 'Your definitive resource on quantum computing threats to Bitcoin and post-quantum cryptographic solutions.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// User pathway data
const pathways = [
  {
    id: 'newcomer',
    icon: '🎓',
    title: "I'm new to this",
    description: 'Start with the basics of quantum computing and understand why it matters for Bitcoin.',
    link: '/learn',
    linkText: 'Start Learning',
    color: 'info'
  },
  {
    id: 'solutions',
    icon: '🛡️',
    title: 'I want solutions',
    description: 'Explore post-quantum cryptography options and migration strategies.',
    link: '/solutions',
    linkText: 'Explore Solutions',
    color: 'success'
  },
  {
    id: 'bip360',
    icon: '⚡',
    title: 'Tell me about BIP-360',
    description: 'Deep dive into the leading proposal for quantum-resistant Bitcoin addresses.',
    link: '/bip-360',
    linkText: 'Visit BIP-360 Hub',
    color: 'primary'
  }
]

// Key statistics
const stats = [
  { value: '~1.8M', label: 'BTC in vulnerable addresses', highlight: true },
  { value: '2031', label: 'UK NCSC migration deadline', highlight: false },
  { value: '3', label: 'NIST standardized algorithms', highlight: false }
]

// Latest updates preview
const updates = [
  {
    date: 'January 2026',
    title: 'NIST Post-Quantum Standards Finalized',
    excerpt: 'NIST has released its final standards for post-quantum cryptography, including CRYSTALS-Dilithium and CRYSTALS-Kyber.',
    link: '/news/nist-standards'
  },
  {
    date: 'January 2026',
    title: 'BIP-360 Technical Specification Updated',
    excerpt: 'The latest revision clarifies quantum witness structure and SegWit integration details.',
    link: '/bip-360/status'
  },
  {
    date: 'December 2025',
    title: 'CISA Issues Quantum Migration Guidance',
    excerpt: 'New guidance from CISA helps organizations prepare for the transition to post-quantum cryptography.',
    link: '/learn/timeline/government-deadlines'
  }
]
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge badge badge-info">Educational Resource</span>
          <h1 id="hero-title" class="hero-title">
            Understanding the<br />
            <span class="highlight">Quantum Threat</span> to Bitcoin
          </h1>
          <p class="hero-description">
            Quantum computing represents both a potential existential threat and an evolution opportunity 
            for Bitcoin. Explore the risks, understand the solutions, and prepare for a 
            post-quantum future with our comprehensive, research-backed resources.
          </p>
          <div class="hero-actions">
            <router-link to="/learn" class="btn btn-primary">
              Start Learning
            </router-link>
            <router-link to="/resources/faq" class="btn btn-secondary">
              Read FAQ
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Decorative background elements -->
      <div class="hero-decoration" aria-hidden="true">
        <div class="grid-pattern"></div>
      </div>
    </section>
    
    <!-- User Pathways Section -->
    <PageContainer>
      <section class="pathways" aria-labelledby="pathways-title">
        <h2 id="pathways-title" class="section-title">Find Your Path</h2>
        <p class="section-description">
          Whether you're just starting to learn about quantum computing or looking for 
          technical implementation details, we have resources for you.
        </p>
        
        <div class="pathways-grid">
          <PathwayCard
            v-for="pathway in pathways"
            :key="pathway.id"
            v-bind="pathway"
          />
        </div>
      </section>
    </PageContainer>
    
    <!-- Statistics Callout -->
    <section class="stats-section" aria-labelledby="stats-title">
      <div class="container">
        <h2 id="stats-title" class="sr-only">Key Statistics</h2>
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="stat-card"
            :class="{ 'highlight': stat.highlight }"
          >
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Latest Updates Section -->
    <PageContainer>
      <section class="updates" aria-labelledby="updates-title">
        <div class="section-header">
          <h2 id="updates-title" class="section-title">Latest Updates</h2>
          <router-link to="/news" class="section-link">
            View All News →
          </router-link>
        </div>
        
        <div class="updates-grid">
          <article 
            v-for="update in updates" 
            :key="update.link"
            class="update-card"
          >
            <time class="update-date" :datetime="update.date">{{ update.date }}</time>
            <h3 class="update-title">
              <router-link :to="update.link">{{ update.title }}</router-link>
            </h3>
            <p class="update-excerpt">{{ update.excerpt }}</p>
          </article>
        </div>
      </section>
      
      <!-- Quick Links -->
      <section class="quick-links" aria-labelledby="quick-links-title">
        <h2 id="quick-links-title" class="section-title">Quick Links</h2>
        <div class="links-grid">
          <router-link to="/resources/faq" class="quick-link">
            <span class="quick-link-icon">❓</span>
            <span class="quick-link-text">Frequently Asked Questions</span>
          </router-link>
          <router-link to="/resources/reading-list" class="quick-link">
            <span class="quick-link-icon">📚</span>
            <span class="quick-link-text">Reading List & Resources</span>
          </router-link>
          <router-link to="/about/contact" class="quick-link">
            <span class="quick-link-icon">✉️</span>
            <span class="quick-link-text">Contact & Contribute</span>
          </router-link>
        </div>
      </section>
    </PageContainer>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  padding: var(--space-20) 0 var(--space-16);
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  overflow: hidden;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 768px;
}

.hero-badge {
  margin-bottom: var(--space-4);
}

.hero-title {
  font-size: var(--text-5xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--space-6);
  color: var(--text-primary);
}

.hero-title .highlight {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Decorative Background */
.hero-decoration {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

.grid-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: linear-gradient(90deg, transparent, black);
}

/* Pathways Section */
.pathways {
  padding: var(--space-16) 0;
}

.section-title {
  font-size: var(--text-3xl);
  text-align: center;
  margin-bottom: var(--space-4);
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  max-width: 768px;
  margin: 0 auto var(--space-10);
}

.pathways-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

/* Statistics Section */
.stats-section {
  background-color: var(--bg-secondary);
  padding: var(--space-12) 0;
  border-top: 1px solid var(--border-primary);
  border-bottom: 1px solid var(--border-primary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.stat-card {
  text-align: center;
  padding: var(--space-6);
  border-radius: var(--border-radius-lg);
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-secondary);
  box-shadow: var(--shadow-md);
}

.stat-card:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.stat-card:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.stat-card.highlight {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 229, 255, 0.1));
  border-color: var(--accent-primary);
}

.stat-value {
  display: block;
  font-family: var(--font-family-mono);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: var(--space-2);
}

.stat-label {
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

/* Updates Section */
.updates {
  padding: var(--space-16) 0 var(--space-8);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-8);
}

.section-header .section-title {
  text-align: left;
  margin: 0;
}

.section-link {
  color: var(--accent-primary);
  font-weight: 600;
}

.updates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.update-card {
  padding: var(--space-6);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-base);
}

.update-card:hover {
  border-color: var(--border-secondary);
  transform: translateY(-2px);
}

.update-date {
  display: block;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-3);
}

.update-title {
  font-size: var(--text-lg);
  margin-bottom: var(--space-3);
}

.update-title a {
  color: var(--text-primary);
  text-decoration: none;
}

.update-title a:hover {
  color: var(--accent-primary);
}

.update-excerpt {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin: 0;
}

/* Quick Links Section */
.quick-links {
  padding: var(--space-8) 0 var(--space-16);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.quick-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.quick-link:hover {
  background-color: var(--bg-tertiary);
  border-color: var(--accent-primary);
  text-decoration: none;
}

.quick-link-icon {
  font-size: var(--text-xl);
}

.quick-link-text {
  font-weight: 500;
}

/* Responsive */
@media (max-width: 1024px) {
  .pathways-grid,
  .stats-grid,
  .updates-grid,
  .links-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: var(--text-4xl);
  }
  
  .section-header {
    flex-direction: column;
    gap: var(--space-4);
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--text-3xl);
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
