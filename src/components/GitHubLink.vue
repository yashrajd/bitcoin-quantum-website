/**
 * GitHubLink.vue - GitHub Repository Link Button
 * 
 * Accessible button linking to the project's GitHub repository.
 * Opens in new tab with proper security attributes.
 * Visual styling matches ThemeToggle component.
 * 
 * Accessibility: Includes aria-label and visible focus state
 */

<script setup>
// No reactive state needed - simple link button
</script>

<template>
  <a
    href="https://github.com/yashrajd/bitcoin-quantum-website"
    target="_blank"
    rel="noopener noreferrer"
    class="github-link"
    aria-label="View source code on GitHub"
    title="View source code on GitHub"
  >
    <!-- GitHub Logo Icon -->
    <svg 
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
    </svg>
  </a>
</template>

<style scoped>
.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: var(--space-2);
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius);
  color: var(--text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.github-link:hover {
  background-color: var(--bg-elevated);
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

.github-link:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.icon {
  width: 20px;
  height: 20px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .github-link {
    transition: none;
  }
}
</style>
