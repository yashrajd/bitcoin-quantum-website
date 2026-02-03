/**
 * Callout.vue - Info/Warning Callout Box Component
 * 
 * Displays highlighted information boxes with consistent styling.
 * 
 * Props:
 * - variant: String - 'info' (blue), 'warning' (yellow), 'success' (green), 'error' (red)
 * - title: String - Optional title for the callout
 */

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'warning', 'success', 'error'].includes(value)
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="callout" :class="`callout-${variant}`">
    <div v-if="title" class="callout-title">{{ title }}</div>
    <div class="callout-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.callout {
  border: 1px solid;
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  margin: var(--space-6) 0;
}

.callout-title {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--space-3);
}

.callout-content {
  color: var(--text-secondary);
  line-height: 1.8;
}

.callout-content p:last-child {
  margin-bottom: 0;
}

/* Variant: Info (Blue) */
.callout-info {
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(0, 229, 255, 0.05));
  border-color: var(--accent-info);
}

.callout-info .callout-title {
  color: var(--accent-info);
}

/* Variant: Warning (Yellow) */
.callout-warning {
  background: linear-gradient(135deg, rgba(255, 183, 3, 0.1), rgba(255, 183, 3, 0.05));
  border-color: var(--accent-warning);
}

.callout-warning .callout-title {
  color: var(--accent-warning);
}

/* Variant: Success (Green) */
.callout-success {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 136, 0.05));
  border-color: var(--accent-primary);
}

.callout-success .callout-title {
  color: var(--accent-primary);
}

/* Variant: Error (Red) */
.callout-error {
  background: linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(255, 51, 102, 0.05));
  border-color: var(--accent-danger);
}

.callout-error .callout-title {
  color: var(--accent-danger);
}
</style>
