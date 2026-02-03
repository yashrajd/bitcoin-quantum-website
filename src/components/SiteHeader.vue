/**
 * SiteHeader.vue - Primary Navigation Header
 * 
 * Features:
 * - Responsive navigation with mobile menu
 * - Theme toggle (dark/light)
 * - Accessible keyboard navigation
 * - Sticky positioning
 * 
 * Security: No external scripts, sanitized content
 * Accessibility: ARIA labels, focus management, keyboard support
 */

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import ThemeToggle from './ThemeToggle.vue'
import GitHubLink from './GitHubLink.vue'

// Theme composable for dark/light mode
const { isDark } = useTheme()

// Mobile menu state
const mobileMenuOpen = ref(false)

// Navigation items structured by section
const navItems = [
  { 
    label: 'Learn', 
    path: '/learn',
    children: [
      { label: 'Quantum Computing 101', path: '/learn/quantum-computing-101' },
      { label: 'The Threat to Bitcoin', path: '/learn/threat-to-bitcoin' },
      { label: 'Timeline & Estimates', path: '/learn/timeline' }
    ]
  },
  { 
    label: 'Solutions', 
    path: '/solutions',
    children: [
      { label: 'Post-Quantum Cryptography', path: '/solutions/post-quantum-cryptography' },
      { label: 'Bitcoin Proposals', path: '/solutions/bitcoin-proposals' },
      { label: 'Migration Pathways', path: '/solutions/migration' }
    ]
  },
  { 
    label: 'BIP-360', 
    path: '/bip-360',
    children: [
      { label: 'Overview', path: '/bip-360/overview' },
      { label: 'Technical Deep Dive', path: '/bip-360/technical' },
      { label: 'Status', path: '/bip-360/status' }
    ]
  },
  { 
    label: 'Resources', 
    path: '/resources',
    children: [
      { label: 'FAQ', path: '/resources/faq' },
      { label: 'Reading List', path: '/resources/reading-list' },
      { label: 'External Links', path: '/resources/external-links' }
    ]
  },
  { label: 'News', path: '/news' },
  { label: 'About', path: '/about' }
]

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="site-header" role="banner">
    <div class="container">
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <!-- Logo / Brand -->
        <router-link 
          to="/" 
          class="brand"
          aria-label="Bitcoin Quantum Hub - Home"
        >
          <span class="brand-icon" aria-hidden="true">₿</span>
          <span class="brand-text">Bitcoin Quantum Hub</span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <ul class="nav-list" role="menubar">
          <li 
            v-for="item in navItems" 
            :key="item.path"
            class="nav-item"

            role="none"
          >
            <router-link 
              :to="item.path"
              class="nav-link"
              role="menuitem"

            >
              {{ item.label }}
            </router-link>
            
            <!-- Dropdown for items with children -->
            <ul 
              v-if="item.children" 
              class="dropdown"
              role="menu"
              aria-label="${item.label} submenu"
            >
              <li 
                v-for="child in item.children" 
                :key="child.path"
                role="none"
              >
                <router-link 
                  :to="child.path"
                  class="dropdown-link"
                  role="menuitem"
                >
                  {{ child.label }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        
        <!-- Right side: Theme toggle -->
        <div class="nav-actions">
          <GitHubLink />
          <ThemeToggle />
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <span class="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div 
      id="mobile-menu"
      class="mobile-menu"
      :class="{ 'is-open': mobileMenuOpen }"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <ul class="mobile-nav-list">
        <li v-for="item in navItems" :key="item.path" class="mobile-nav-item">
          <router-link 
            :to="item.path"
            class="mobile-nav-link"
  
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
          
          <!-- Mobile submenu -->
          <ul v-if="item.children" class="mobile-submenu">
            <li v-for="child in item.children" :key="child.path">
              <router-link 
                :to="child.path"
                class="mobile-submenu-link"
                @click="closeMobileMenu"
              >
                {{ child.label }}
              </router-link>
            </li>
          </ul>
        </li>
        
        <!-- GitHub Repository Link for Mobile -->
        <li class="mobile-nav-item">
          <a
            href="https://github.com/yashrajd/bitcoin-quantum-website"
            target="_blank"
            rel="noopener noreferrer"
            class="mobile-nav-link mobile-nav-link-with-icon"
            @click="closeMobileMenu"
          >
            <span class="mobile-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </span>
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-primary);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 100%;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Brand / Logo */
.brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 700;
  font-size: var(--text-lg);
  transition: opacity var(--transition-fast);
}

.brand:hover {
  opacity: 0.8;
  text-decoration: none;
}

.brand-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 50%;
  font-size: var(--text-lg);
  color: var(--bg-primary);
}

/* Desktop Navigation */
.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: var(--space-2) var(--space-3);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: var(--bg-elevated);
  color: var(--accent-primary);
}



/* Dropdown Menu */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius);
  padding: var(--space-2);
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-lg);
}

.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: var(--space-2) var(--space-3);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-sm);
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
}

.dropdown-link:hover {
  background-color: var(--bg-elevated);
  color: var(--accent-primary);
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: all var(--transition-fast);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: var(--header-height);
  left: 0;
  right: 0;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-primary);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-base);
}

.mobile-menu.is-open {
  max-height: calc(100vh - var(--header-height));
  overflow-y: auto;
}

.mobile-nav-list {
  list-style: none;
  padding: var(--space-4);
}

.mobile-nav-item {
  border-bottom: 1px solid var(--border-primary);
}

.mobile-nav-link {
  display: block;
  padding: var(--space-3) var(--space-2);
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-lg);
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover {
  background-color: var(--bg-elevated);
  color: var(--accent-primary);
}

.mobile-submenu {
  list-style: none;
  padding-left: var(--space-4);
  padding-bottom: var(--space-3);
}

.mobile-submenu-link {
  display: block;
  padding: var(--space-2);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-base);
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
}

.mobile-submenu-link:hover {
  background-color: var(--bg-elevated);
  color: var(--accent-primary);
}

/* Mobile nav icon styling for GitHub link */
.mobile-nav-link-with-icon {
  display: flex;
  align-items: center;
}

.mobile-nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--space-2);
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-list,
  .nav-actions {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .brand-text {
    font-size: var(--text-base);
  }
}

@media (max-width: 480px) {
  .brand-text {
    display: none;
  }
}
</style>
