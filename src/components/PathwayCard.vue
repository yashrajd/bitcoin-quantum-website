/**
 * PathwayCard.vue - User Pathway Card Component
 * 
 * Displays a card with icon, title, description, and call-to-action link.
 * Used on the home page to guide users to different sections.
 * 
 * Props:
 * - icon: String - Emoji or icon to display
 * - title: String - Card heading
 * - description: String - Card description text
 * - link: String - Router link destination
 * - linkText: String - Text for the CTA link
 * - color: String - Color theme (primary, success, info)
 */

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'info', 'warning'].includes(value)
  }
})
</script>

<template>
  <div 
    class="pathway-card"
    :class="[`color-${color}`]"
  >
    <div class="card-icon">{{ icon }}</div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <router-link :to="link" class="card-link">
      {{ linkText }}
      <span class="link-arrow" aria-hidden="true">→</span>
    </router-link>
  </div>
</template>

<style scoped>
.pathway-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-base);
  height: 100%;
}

.pathway-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
}

.pathway-card:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.pathway-card:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.card-icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

.card-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}

.card-description {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
  flex: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.card-link:hover {
  gap: var(--space-3);
  text-decoration: none;
}

.link-arrow {
  transition: transform var(--transition-fast);
}

.card-link:hover .link-arrow {
  transform: translateX(4px);
}


</style>
