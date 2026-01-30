/**
 * App.vue - Root Component
 * 
 * The main application wrapper that provides the layout structure.
 * Imports global styles and initializes theme system.
 * 
 * Security: Content Security Policy friendly
 * Accessibility: Landmark regions for screen readers
 */

<script setup>
import { useTheme } from './composables/useTheme.js'
import MainLayout from './layouts/MainLayout.vue'

// Initialize theme system
// This runs the composable which sets up theme persistence
useTheme()
</script>

<template>
  <!-- 
    Main layout wrapper
    Provides consistent header, main content area, and footer across all pages
  -->
  <MainLayout />
</template>

<style>
/* Import global CSS variables and base styles */
@import './styles/variables.css';

/* Additional global styles can be added here */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
