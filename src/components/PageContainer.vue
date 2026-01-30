/**
 * PageContainer.vue - Consistent Page Wrapper
 * 
 * Provides consistent padding and max-width for page content.
 * Used across all pages for visual consistency.
 */

<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style scoped>
.page-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

@media (max-width: 768px) {
  .page-container {
    padding: var(--space-6) var(--space-4);
  }
}
</style>
