/**
 * PageTemplate.vue - Simple Template for Content Pages
 * 
 * Reusable template for pages that display content sections.
 */

<script setup>
defineProps({
  breadcrumbs: Array,
  title: String,
  description: String
})
</script>

<template>
  <PageContainer>
    <nav v-if="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumb">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link v-if="crumb.path" :to="crumb.path">{{ crumb.label }}</router-link>
        <span v-else class="current">{{ crumb.label }}</span>
        <span v-if="index < breadcrumbs.length - 1">/</span>
      </template>
    </nav>
    
    <h1>{{ title }}</h1>
    <p v-if="description" class="lead">{{ description }}</p>
    
    <slot />
  </PageContainer>
</template>

<style scoped>
.breadcrumbs {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.breadcrumbs a {
  color: var(--accent-primary);
  text-decoration: none;
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}
</style>
