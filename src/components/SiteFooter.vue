/**
 * SiteFooter.vue - Footer Component
 * 
 * Contains secondary navigation, legal links, and site information.
 * Organized in a multi-column layout for desktop, stacked for mobile.
 * 
 * Accessibility: Semantic footer element with proper heading structure
 */

<script setup>
// Footer navigation sections
const footerNav = {
  learn: {
    title: 'Learn',
    links: [
      { label: 'Quantum Computing 101', path: '/learn/quantum-computing-101' },
      { label: 'The Threat to Bitcoin', path: '/learn/threat-to-bitcoin' },
      { label: 'Timeline & Estimates', path: '/learn/timeline' }
    ]
  },
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'Post-Quantum Cryptography', path: '/solutions/post-quantum-cryptography' },
      { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
      { label: 'Migration Pathways', path: '/solutions/migration' }
    ]
  },
  bip360: {
    title: 'BIP-360',
    links: [
      { label: 'Overview', path: '/bip-360/overview' },
      { label: 'Technical Deep Dive', path: '/bip-360/technical' },
      { label: 'User Guide', path: '/bip-360/user-guide' }
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'FAQ', path: '/resources/faq' },
      { label: 'Reading List', path: '/resources/reading-list' },
      { label: 'External Links', path: '/resources/external-links' }
    ]
  },
  about: {
    title: 'About',
    links: [
      { label: 'About This Project', path: '/about/project' },
      { label: 'Contact', path: '/about/contact' }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Use', path: '/terms' }
    ]
  }
}

const currentYear = new Date().getFullYear()

// Get last updated date from build-time environment variable
const lastUpdated = import.meta.env?.VITE_LAST_UPDATED || 'Unknown'
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <!-- Footer Navigation Grid -->
      <div class="footer-grid">
        <div 
          v-for="(section, key) in footerNav" 
          :key="key"
          class="footer-section"
        >
          <h3 class="footer-heading">{{ section.title }}</h3>
          <ul class="footer-links">
            <li v-for="link in section.links" :key="link.path">
              <router-link :to="link.path" class="footer-link">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-brand">
          <span class="brand-icon" aria-hidden="true">₿</span>
          <span class="brand-text">Bitcoin Quantum Hub</span>
        </div>
        
        <p class="copyright">
          © {{ currentYear }} Bitcoin Quantum Hub by yashrajd. 
          <span class="disclaimer">
            Open Source (GPL v3.0) • Educational content only • Not financial advice.
          </span>
        </p>
        
        <div class="footer-meta">
          <span class="badge badge-info">Last Updated: {{ lastUpdated }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-primary);
  padding: var(--space-12) 0 var(--space-6);
  margin-top: auto;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Footer Navigation Grid */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}

.footer-section {
  min-width: 0;
}

.footer-heading {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--space-2);
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--accent-primary);
  text-decoration: none;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-primary);
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  color: var(--text-primary);
}

.brand-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 50%;
  font-size: var(--text-sm);
  color: var(--bg-primary);
}

.copyright {
  color: var(--text-muted);
  font-size: var(--text-sm);
  margin: 0;
}

.disclaimer {
  display: block;
  margin-top: var(--space-1);
}

.footer-meta {
  margin-top: var(--space-2);
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
  
  .site-footer {
    padding: var(--space-8) 0 var(--space-4);
  }
}

@media (max-width: 400px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
