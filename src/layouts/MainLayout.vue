/**
 * MainLayout.vue - Primary Layout Component
 * 
 * Provides the structural wrapper for all pages including:
 * - Header with navigation
 * - Main content area
 * - Footer with secondary navigation
 * 
 * Accessibility: Uses semantic HTML landmarks
 */

<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div class="layout">
    <!-- 
      Site Header
      Contains primary navigation and theme toggle
      Sticky positioning keeps it accessible while scrolling
    -->
    <SiteHeader />
    
    <!-- 
      Main Content Area
      Router outlet renders the current page component
      Main landmark helps screen readers identify primary content
    -->
    <main class="main-content" role="main">
      <router-view v-slot="{ Component }">
        <!-- 
          Transition wrapper for smooth page changes
          Provides visual feedback during navigation
        -->
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- 
      Site Footer
      Contains secondary navigation and legal links
    -->
    <SiteFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
}

.main-content {
  flex: 1;
  padding-top: var(--header-height);
}

/* Page transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
