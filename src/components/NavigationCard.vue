/**
 * NavigationCard.vue - Reusable Navigation Card Component
 * 
 * A flexible card component for navigation links throughout the site.
 * Supports different layouts and hover animations.
 * 
 * Props:
 * - icon: String - Emoji or icon to display
 * - title: String - Card heading (required)
 * - description: String - Card description text (required)
 * - link: String - Router link destination (required)
 * - linkText: String - Text for the CTA link (default: "Learn more →")
 * - layout: String - "grid" or "list" (default: "grid")
 * - number: String - Optional number badge (for sequential layouts)
 * - badge: String - Optional status/category badge
 */

<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
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
    default: 'Learn more →'
  },
  layout: {
    type: String,
    default: 'grid',
    validator: (value) => ['grid', 'list'].includes(value)
  },
  number: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <router-link 
    :to="link" 
    class="navigation-card"
    :class="{ 
      'layout-grid': layout === 'grid',
      'layout-list': layout === 'list'
    }"
  >
    <!-- Number badge for sequential layouts -->
    <span v-if="number" class="card-number">{{ number }}</span>
    
    <!-- Icon -->
    <span v-if="icon" class="card-icon">{{ icon }}</span>
    
    <!-- Content wrapper for list layout -->
    <div class="card-content">
      <!-- Header with optional badge -->
      <div class="card-header">
        <h3 class="card-title">{{ title }}</h3>
        <span v-if="badge" class="card-badge">{{ badge }}</span>
      </div>
      
      <!-- Description -->
      <p class="card-description">{{ description }}</p>
      
      <!-- CTA Link -->
      <span class="card-link">{{ linkText }}</span>
    </div>
  </router-link>
</template>

<style scoped>
/* Base Card Styles */
.navigation-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

/* Grid Layout (default) - Cards in a grid, lift up on hover */
.navigation-card.layout-grid {
  flex-direction: column;
}

.navigation-card.layout-grid:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  text-decoration: none;
}

/* List Layout - Horizontal cards, slide right on hover */
.navigation-card.layout-list {
  flex-direction: row;
  gap: var(--space-6);
  align-items: center;
}

.navigation-card.layout-list:hover {
  border-color: var(--accent-primary);
  transform: translateX(8px);
  text-decoration: none;
}

/* Number Badge (for sequential list layouts) */
.card-number {
  font-family: var(--font-family-mono);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--accent-primary);
  opacity: 0.5;
  flex-shrink: 0;
}

/* Icon */
.card-icon {
  font-size: var(--text-3xl);
  display: block;
  margin-bottom: var(--space-4);
  flex-shrink: 0;
}

.layout-list .card-icon {
  margin-bottom: 0;
  font-size: var(--text-2xl);
}

/* Content Wrapper */
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header with badge */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.layout-list .card-header {
  margin-bottom: var(--space-2);
}

/* Title */
.card-title {
  font-size: var(--text-xl);
  margin: 0;
  color: var(--text-primary);
}

.layout-list .card-title {
  font-size: var(--text-lg);
}

/* Badge */
.card-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  white-space: nowrap;
  flex-shrink: 0;
}

/* Description */
.card-description {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
  flex: 1;
  line-height: 1.6;
}

.layout-list .card-description {
  margin: 0;
}

/* Link Text */
.card-link {
  color: var(--accent-primary);
  font-weight: 600;
  display: inline-block;
}

.layout-list .card-link {
  white-space: nowrap;
  margin-left: auto;
  flex-shrink: 0;
}

/* Responsive - List cards become vertical on mobile */
@media (max-width: 768px) {
  .navigation-card.layout-list {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }
  
  .layout-list .card-icon {
    font-size: var(--text-3xl);
  }
  
  .layout-list .card-link {
    margin-left: 0;
  }
  
  .card-number {
    font-size: var(--text-2xl);
  }
}
</style>
