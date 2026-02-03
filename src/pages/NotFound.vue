/**
 * NotFound.vue - 404 Error Page
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../components/PageContainer.vue'

useHead({
  title: 'Page Not Found - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'The requested page could not be found.'
  }]
})
</script>

<template>
  <PageContainer>
    <div class="error-page">
      <div class="error-code">
        <span class="error-number">4</span>
        <span class="error-icon">⚛</span>
        <span class="error-number">4</span>
      </div>
      <h1>Page Not Found</h1>
      <p class="error-message">
        The page you're looking for seems to have entered a quantum superposition 
        and collapsed into a different state.
      </p>
      <div class="error-actions">
        <router-link to="/" class="btn btn-primary">Return Home</router-link>
        <router-link to="/resources/faq" class="btn btn-secondary">View FAQ</router-link>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.error-page {
  text-align: center;
  padding: var(--space-16) 0;
}

.error-code {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.error-number {
  font-family: var(--font-family-mono);
  font-size: var(--text-5xl);
  font-weight: 700;
  color: var(--accent-primary);
}

.error-icon {
  font-size: var(--text-4xl);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.error-page h1 {
  margin-bottom: var(--space-4);
}

.error-message {
  color: var(--text-secondary);
  font-size: var(--text-lg);
  max-width: 480px;
  margin: 0 auto var(--space-8);
}

.error-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.btn-primary {
  background-color: var(--accent-primary);
  color: var(--bg-primary);
}

.btn-primary:hover {
  filter: brightness(1.1);
  text-decoration: none;
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.btn-secondary:hover {
  background-color: var(--bg-secondary);
  text-decoration: none;
}
</style>
