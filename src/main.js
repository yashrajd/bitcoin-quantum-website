/**
 * main.js - Application Entry Point
 * 
 * Bootstraps the Vue 3 application with router and head management.
 * 
 * Architecture:
 * - Vue 3 with Composition API
 * - Vue Router for SPA navigation
 * - @vueuse/head for SEO meta tag management
 */

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router/index.js'
import logger from './utils/logger.js'

// Initialize logger early
logger.info('Application starting...')

// Create Vue application instance
const app = createApp(App)

// Initialize head management for SEO
const head = createHead()

// Register plugins
app.use(router)
app.use(head)

// Log app initialization
logger.info('Vue app initialized', {
  env: import.meta.env?.MODE || 'production',
  version: import.meta.env?.VITE_APP_VERSION || '0.0.0'
})

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  logger.error('Vue Error:', err, info)
}

// Mount to DOM
app.mount('#app')

logger.info('Application mounted successfully')
