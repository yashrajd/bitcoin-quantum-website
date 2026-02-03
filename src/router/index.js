/**
 * Vue Router Configuration
 * 
 * Defines all routes for the Bitcoin Quantum Hub website.
 * Routes are organized by section: Learn, Solutions, BIP-360, Resources, News, About
 * 
 * Security: All routes use lazy loading for code splitting
 * Accessibility: Route meta includes page titles for head management
 */

import { createRouter, createWebHistory } from 'vue-router'

// Lazy load all page components for better performance
// This enables code-splitting - each page is loaded only when needed
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'Bitcoin Quantum Hub - Understanding the Quantum Threat',
      description: 'Your definitive resource on quantum computing threats to Bitcoin and post-quantum cryptographic solutions.'
    }
  },
  
  // ==========================================
  // LEARN SECTION
  // ==========================================
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../pages/learn/Index.vue'),
    meta: {
      title: 'Learn - Bitcoin Quantum Hub',
      description: 'Educational resources about quantum computing and its impact on Bitcoin.'
    }
  },
  {
    path: '/learn/quantum-computing-101',
    name: 'QuantumComputing101',
    component: () => import('../pages/learn/QuantumComputing101.vue'),
    meta: {
      title: 'Quantum Computing 101 - Bitcoin Quantum Hub',
      description: 'Introduction to quantum computing fundamentals and concepts.'
    }
  },
  {
    path: '/learn/quantum-computing-101/history',
    name: 'QuantumHistory',
    component: () => import('../pages/learn/QuantumHistory.vue'),
    meta: {
      title: 'History & Origins of Quantum Computing - Bitcoin Quantum Hub',
      description: 'The evolution of quantum computing from theoretical concept to practical technology.'
    }
  },
  {
    path: '/learn/quantum-computing-101/glossary',
    name: 'QuantumGlossary',
    component: () => import('../pages/learn/QuantumGlossary.vue'),
    meta: {
      title: 'Quantum Computing Glossary - Bitcoin Quantum Hub',
      description: 'Key terms and concepts in quantum computing explained.'
    }
  },
  {
    path: '/learn/quantum-computing-101/recent-developments',
    name: 'RecentDevelopments',
    component: () => import('../pages/learn/RecentDevelopments.vue'),
    meta: {
      title: 'Recent Quantum Computing Developments - Bitcoin Quantum Hub',
      description: 'Latest breakthroughs and advancements in quantum computing research.'
    }
  },
  {
    path: '/learn/threat-to-bitcoin',
    name: 'ThreatToBitcoin',
    component: () => import('../pages/learn/ThreatToBitcoin.vue'),
    meta: {
      title: 'The Threat to Bitcoin - Bitcoin Quantum Hub',
      description: 'Understanding how quantum computing threatens Bitcoin\'s cryptographic security.'
    }
  },
  {
    path: '/learn/threat-to-bitcoin/bitcoin-cryptography',
    name: 'BitcoinCryptography',
    component: () => import('../pages/learn/BitcoinCryptography.vue'),
    meta: {
      title: 'How Bitcoin\'s Cryptography Works - Bitcoin Quantum Hub',
      description: 'Technical explanation of Bitcoin\'s cryptographic foundations.'
    }
  },
  {
    path: '/learn/threat-to-bitcoin/quantum-impact',
    name: 'QuantumImpact',
    component: () => import('../pages/learn/QuantumImpact.vue'),
    meta: {
      title: 'What Quantum Computers Change - Bitcoin Quantum Hub',
      description: 'How quantum algorithms like Shor\'s and Grover\'s threaten current cryptography.'
    }
  },
  {
    path: '/learn/threat-to-bitcoin/address-vulnerability',
    name: 'AddressVulnerability',
    component: () => import('../pages/learn/AddressVulnerability.vue'),
    meta: {
      title: 'Vulnerable vs Safe Addresses - Bitcoin Quantum Hub',
      description: 'Which Bitcoin addresses are at risk from quantum attacks and why.'
    }
  },
  {
    path: '/learn/timeline',
    name: 'Timeline',
    component: () => import('../pages/learn/Timeline.vue'),
    meta: {
      title: 'Timeline & Estimates - Bitcoin Quantum Hub',
      description: 'Expert predictions and government timelines for quantum threats.'
    }
  },
  
  // ==========================================
  // SOLUTIONS SECTION
  // ==========================================
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../pages/solutions/Index.vue'),
    meta: {
      title: 'Solutions - Bitcoin Quantum Hub',
      description: 'Post-quantum cryptographic solutions for securing Bitcoin.'
    }
  },
  {
    path: '/solutions/post-quantum-cryptography',
    name: 'PostQuantumCryptography',
    component: () => import('../pages/solutions/PostQuantumCryptography.vue'),
    meta: {
      title: 'Post-Quantum Cryptography - Bitcoin Quantum Hub',
      description: 'Cryptographic approaches that resist quantum computing attacks.'
    }
  },
  {
    path: '/solutions/post-quantum-cryptography/hash-based',
    name: 'HashBasedSignatures',
    component: () => import('../pages/solutions/HashBasedSignatures.vue'),
    meta: {
      title: 'Hash-Based Signatures - Bitcoin Quantum Hub',
      description: 'Quantum-resistant signature schemes based on cryptographic hash functions.'
    }
  },
  {
    path: '/solutions/post-quantum-cryptography/lattice-based',
    name: 'LatticeBasedCryptography',
    component: () => import('../pages/solutions/LatticeBasedCryptography.vue'),
    meta: {
      title: 'Lattice-Based Cryptography - Bitcoin Quantum Hub',
      description: 'NIST-standardized quantum-resistant cryptographic algorithms.'
    }
  },
  {
    path: '/solutions/post-quantum-cryptography/hybrid',
    name: 'HybridModels',
    component: () => import('../pages/solutions/HybridModels.vue'),
    meta: {
      title: 'Hybrid Cryptographic Models - Bitcoin Quantum Hub',
      description: 'Combining classical and post-quantum cryptography for transition periods.'
    }
  },
  {
    path: '/solutions/bitcoin-proposals',
    name: 'BitcoinProposals',
    component: () => import('../pages/solutions/BitcoinProposals.vue'),
    meta: {
      title: 'Bitcoin Proposals - Bitcoin Quantum Hub',
      description: 'Bitcoin Improvement Proposals addressing quantum resistance.'
    }
  },
  {
    path: '/solutions/bitcoin-proposals/bip-360',
    name: 'BIP360Brief',
    component: () => import('../pages/solutions/BIP360Brief.vue'),
    meta: {
      title: 'BIP-360 Overview - Bitcoin Quantum Hub',
      description: 'Summary of Bitcoin Improvement Proposal 360 for quantum resistance.'
    }
  },
  {
    path: '/solutions/bitcoin-proposals/bip-347',
    name: 'BIP347',
    component: () => import('../pages/solutions/BIP347.vue'),
    meta: {
      title: 'BIP-347 / OP_CAT - Bitcoin Quantum Hub',
      description: 'How OP_CAT enables quantum-resistant Lamport signatures.'
    }
  },
  {
    path: '/solutions/bitcoin-proposals/other',
    name: 'OtherProposals',
    component: () => import('../pages/solutions/OtherProposals.vue'),
    meta: {
      title: 'Other Quantum-Resistant Proposals - Bitcoin Quantum Hub',
      description: 'Additional proposals for Bitcoin quantum resistance.'
    }
  },
  {
    path: '/solutions/migration',
    name: 'Migration',
    component: () => import('../pages/solutions/Migration.vue'),
    meta: {
      title: 'Migration Pathways - Bitcoin Quantum Hub',
      description: 'Practical guidance for transitioning to quantum-resistant Bitcoin addresses.'
    }
  },
  {
    path: '/solutions/migration/individuals',
    name: 'MigrationForIndividuals',
    component: () => import('../pages/solutions/MigrationForIndividuals.vue'),
    meta: {
      title: 'Migration Guide for Individuals - Bitcoin Quantum Hub',
      description: 'Step-by-step guide for Bitcoin holders to prepare for quantum threats.'
    }
  },
  {
    path: '/solutions/migration/institutions',
    name: 'MigrationForInstitutions',
    component: () => import('../pages/solutions/MigrationForInstitutions.vue'),
    meta: {
      title: 'Migration Guide for Institutions - Bitcoin Quantum Hub',
      description: 'Strategic planning for institutional Bitcoin custody and quantum resistance.'
    }
  },
  
  // ==========================================
  // BIP-360 HUB SECTION
  // ==========================================
  {
    path: '/bip-360',
    name: 'BIP360Hub',
    component: () => import('../pages/bip360/Index.vue'),
    meta: {
      title: 'BIP-360 Hub - Bitcoin Quantum Hub',
      description: 'Comprehensive resource on Bitcoin Improvement Proposal 360 for quantum resistance.'
    }
  },
  {
    path: '/bip-360/overview',
    name: 'BIP360Overview',
    component: () => import('../pages/bip360/Overview.vue'),
    meta: {
      title: 'BIP-360 Overview - Bitcoin Quantum Hub',
      description: 'Summary and approach of Bitcoin Improvement Proposal 360.'
    }
  },
  {
    path: '/bip-360/technical',
    name: 'BIP360Technical',
    component: () => import('../pages/bip360/Technical.vue'),
    meta: {
      title: 'BIP-360 Technical Deep Dive - Bitcoin Quantum Hub',
      description: 'Technical details of P2TSH and quantum witness structures.'
    }
  },
  {
    path: '/bip-360/status',
    name: 'BIP360Status',
    component: () => import('../pages/bip360/Status.vue'),
    meta: {
      title: 'BIP-360 Implementation Status - Bitcoin Quantum Hub',
      description: 'Current development status and roadmap for BIP-360.'
    }
  },
  {
    path: '/bip-360/user-guide',
    name: 'BIP360UserGuide',
    component: () => import('../pages/bip360/UserGuide.vue'),
    meta: {
      title: 'BIP-360 User Guide - Bitcoin Quantum Hub',
      description: 'What Bitcoin users need to know about BIP-360 migration.'
    }
  },
  {
    path: '/bip-360/developers',
    name: 'BIP360Developers',
    component: () => import('../pages/bip360/Developers.vue'),
    meta: {
      title: 'BIP-360 Developer Resources - Bitcoin Quantum Hub',
      description: 'Technical resources for developers implementing BIP-360.'
    }
  },
  
  // ==========================================
  // RESOURCES SECTION
  // ==========================================
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../pages/resources/Index.vue'),
    meta: {
      title: 'Resources - Bitcoin Quantum Hub',
      description: 'Curated resources for deeper learning about quantum threats to Bitcoin.'
    }
  },
  {
    path: '/resources/faq',
    name: 'FAQ',
    component: () => import('../pages/resources/FAQ.vue'),
    meta: {
      title: 'FAQ - Bitcoin Quantum Hub',
      description: 'Frequently asked questions about quantum computing and Bitcoin security.'
    }
  },
  {
    path: '/resources/reading-list',
    name: 'ReadingList',
    component: () => import('../pages/resources/ReadingList.vue'),
    meta: {
      title: 'Reading List - Bitcoin Quantum Hub',
      description: 'Academic papers, government publications, and technical documentation.'
    }
  },
  {
    path: '/resources/reading-list/academic',
    name: 'AcademicPapers',
    component: () => import('../pages/resources/AcademicPapers.vue'),
    meta: {
      title: 'Academic Papers - Bitcoin Quantum Hub',
      description: 'Peer-reviewed research on quantum computing and blockchain security.'
    }
  },
  {
    path: '/resources/reading-list/government',
    name: 'GovernmentPublications',
    component: () => import('../pages/resources/GovernmentPublications.vue'),
    meta: {
      title: 'Government Publications - Bitcoin Quantum Hub',
      description: 'Official guidance from NIST, CISA, NSA, and other agencies.'
    }
  },
  {
    path: '/resources/reading-list/technical',
    name: 'TechnicalDocumentation',
    component: () => import('../pages/resources/TechnicalDocumentation.vue'),
    meta: {
      title: 'Technical Documentation - Bitcoin Quantum Hub',
      description: 'BIPs, technical specifications, and developer resources.'
    }
  },
  {
    path: '/resources/external-links',
    name: 'ExternalLinks',
    component: () => import('../pages/resources/ExternalLinks.vue'),
    meta: {
      title: 'External Links - Bitcoin Quantum Hub',
      description: 'Additional resources and community links.'
    }
  },
  
  // ==========================================
  // NEWS SECTION
  // ==========================================
  {
    path: '/news',
    name: 'News',
    component: () => import('../pages/news/Index.vue'),
    meta: {
      title: 'News & Updates - Bitcoin Quantum Hub',
      description: 'Latest developments in quantum computing and Bitcoin security.'
    }
  },
  
  // ==========================================
  // ABOUT SECTION
  // ==========================================
  {
    path: '/about',
    name: 'About',
    redirect: '/about/project'
  },
  {
    path: '/about/project',
    name: 'AboutProject',
    component: () => import('../pages/about/Project.vue'),
    meta: {
      title: 'About This Project - Bitcoin Quantum Hub',
      description: 'Mission, editorial standards, and methodology of the Bitcoin Quantum Hub.'
    }
  },
  {
    path: '/about/contact',
    name: 'Contact',
    component: () => import('../pages/about/Contact.vue'),
    meta: {
      title: 'Contact - Bitcoin Quantum Hub',
      description: 'Get in touch or contribute to the Bitcoin Quantum Hub.'
    }
  },
  
  // ==========================================
  // LEGAL SECTION
  // ==========================================
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../pages/legal/Privacy.vue'),
    meta: {
      title: 'Privacy Policy - Bitcoin Quantum Hub',
      description: 'Privacy policy for the Bitcoin Quantum Hub website.'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../pages/legal/Terms.vue'),
    meta: {
      title: 'Terms of Use - Bitcoin Quantum Hub',
      description: 'Terms of use for the Bitcoin Quantum Hub website.'
    }
  },
  
  // ==========================================
  // 404 CATCH-ALL
  // ==========================================
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: 'Page Not Found - Bitcoin Quantum Hub',
      description: 'The requested page could not be found.'
    }
  }
]

// Create router instance with HTML5 history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll to top on route change for better UX
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Global navigation guard to update page title and meta
// This improves SEO and accessibility
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }
  
  next()
})

export default router
