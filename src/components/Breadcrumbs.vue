/**
 * Breadcrumbs.vue - Navigation Breadcrumbs Component
 * 
 * Displays hierarchical navigation path for better user orientation.
 * 
 * Props:
 * - items: Array of breadcrumb objects with { label, path? }
 *   Last item should not have a path (current page)
 */

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.length > 0 && value.every(item => item.label)
    }
  }
})
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(crumb, index) in items" :key="index">
      <router-link v-if="crumb.path" :to="crumb.path" class="breadcrumb-link">
        {{ crumb.label }}
      </router-link>
      <span v-else class="breadcrumb-current">{{ crumb.label }}</span>
      <span v-if="index < items.length - 1" class="breadcrumb-separator" aria-hidden="true">/</span>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumb-link {
  color: var(--accent-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--text-secondary);
}

.breadcrumb-separator {
  color: var(--text-muted);
}
</style>
