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
    featured: true
  },
  { 
    label: 'Resources', 
    path: '/resources',
    children: [
      { label: 'FAQ', path: '/resources/faq' },
      { label: 'Reading List', path: '/resources/reading-list' }
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
            :class="{ 'featured': item.featured }"
            role="none"
          >
            <router-link 
              :to="item.path"
              class="nav-link"
              role="menuitem"
              :class="{ 'featured-link': item.featured }"
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
            :class="{ 'featured-link': item.featured }"
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
  color: var(--text-primary);
  background-color: var(--bg-tertiary);
}

.nav-link.featured-link {
  color: var(--accent-primary);
  border: 1px solid var(--accent-primary);
}

.nav-link.featured-link:hover {
  background-color: rgba(0, 255, 136, 0.1);
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
  color: var(--text-primary);
  background-color: var(--bg-tertiary);
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
  padding: var(--space-3) 0;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-lg);
}

.mobile-nav-link.featured-link {
  color: var(--accent-primary);
}

.mobile-submenu {
  list-style: none;
  padding-left: var(--space-4);
  padding-bottom: var(--space-3);
}

.mobile-submenu-link {
  display: block;
  padding: var(--space-2) 0;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-base);
}

/* Responsive */
@media (max-width: 900px) {
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
