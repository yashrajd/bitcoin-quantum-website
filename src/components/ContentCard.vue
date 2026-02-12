/**
 * ContentCard.vue - Reusable Content Section Card
 * 
 * Displays a card with icon, title, description, topic list, and link.
 */

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  link: String,
  topics: Array
})
</script>

<template>
  <router-link :to="link" class="content-card">
    <span class="card-icon">{{ icon }}</span>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <ul class="topic-list">
      <li v-for="topic in topics" :key="topic" class="topic-item">
        <span class="topic-bullet" aria-hidden="true">›</span>
        {{ topic }}
      </li>
    </ul>
    <span class="card-link">
      Explore {{ title }}
      <span class="link-arrow" aria-hidden="true">→</span>
    </span>
  </router-link>
</template>

<style scoped>
.content-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  transition: all var(--transition-base);
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.content-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  text-decoration: none;
}

.content-card:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.content-card:active {
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
}

.topic-list {
  list-style: none;
  margin-bottom: var(--space-4);
}

.topic-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
}

.topic-bullet {
  color: var(--accent-primary);
  font-weight: bold;
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
  text-decoration: underline;
  gap: var(--space-3);
}

.link-arrow {
  transition: transform var(--transition-fast);
}

.card-link:hover .link-arrow {
  transform: translateX(4px);
}
</style>
