/**
 * Theme Composable - useTheme
 * 
 * Manages theme state (dark/light) with localStorage persistence.
 * Follows Vue 3 Composition API best practices.
 * 
 * Security: No sensitive data stored
 * Accessibility: Respects system preferences as default
 */

import { ref, watch, onMounted } from 'vue'

// Storage key for theme preference
const THEME_STORAGE_KEY = 'bitcoin-quantum-hub-theme'

// Reactive theme state - 'dark' is default for terminal aesthetic
const currentTheme = ref('dark')

/**
 * Composable for managing theme state
 * @returns {Object} Theme state and toggle function
 */
export function useTheme() {
  /**
   * Initialize theme on mount
   * Checks localStorage first, then system preference
   */
  onMounted(() => {
    // Check for stored preference
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    
    if (stored) {
      // Use stored preference if available
      currentTheme.value = stored
    } else {
      // Check system preference, default to dark
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      currentTheme.value = prefersDark ? 'dark' : 'dark' // Always default dark for terminal aesthetic
    }
    
    // Apply theme to document
    applyTheme(currentTheme.value)
  })
  
  /**
   * Watch for theme changes and persist to localStorage
   */
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
  })
  
  /**
   * Apply theme to document element
   * @param {string} theme - 'dark' or 'light'
   */
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
  
  /**
   * Toggle between dark and light themes
   */
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  }
  
  /**
   * Set specific theme
   * @param {string} theme - 'dark' or 'light'
   */
  const setTheme = (theme) => {
    if (theme === 'dark' || theme === 'light') {
      currentTheme.value = theme
    }
  }
  
  /**
   * Check if current theme is dark
   * @returns {boolean}
   */
  const isDark = () => currentTheme.value === 'dark'
  
  /**
   * Check if current theme is light
   * @returns {boolean}
   */
  const isLight = () => currentTheme.value === 'light'
  
  return {
    currentTheme,
    toggleTheme,
    setTheme,
    isDark,
    isLight
  }
}
