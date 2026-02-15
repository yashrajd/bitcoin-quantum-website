<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import MediaCard from '../../components/MediaCard.vue'
import { getAllMedia } from '../../content/media.js'

useHead({
  title: 'Podcasts & Videos - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Curated podcasts and video interviews about quantum computing and Bitcoin security.'
  }]
})

const mediaItems = getAllMedia()

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'Podcasts & Videos' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <div class="page-header">
      <h1>Podcasts & Videos</h1>
      <p class="lead">
        Curated podcasts and video interviews from the community about quantum computing, 
        Bitcoin security, and post-quantum cryptography.
      </p>
    </div>
    
    <!-- Media Grid -->
    <section v-if="mediaItems.length > 0" class="media-section" aria-labelledby="media-title">
      <h2 id="media-title" class="sr-only">Media List</h2>
      <div class="media-grid">
        <MediaCard
          v-for="item in mediaItems"
          :key="item.id"
          :title="item.title"
          :type="item.type"
          :url="item.url"
          :thumbnail="item.thumbnail"
          :date="item.date"
          :source="item.source"
        />
      </div>
    </section>
    
    <!-- Empty State -->
    <div v-else class="empty-state">
      <div class="empty-icon">⚛</div>
      <h2>No Media Found</h2>
      <p class="empty-message">
        The probability amplitude of finding content here has temporarily collapsed to zero. 
        Check back soon — new voices are always emerging from the quantum noise.
      </p>
      <div class="empty-actions">
        <router-link to="/resources" class="btn btn-secondary">Browse Resources</router-link>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.page-header {
  margin-bottom: var(--space-10);
}

.section-prompt {
  font-family: var(--font-family-mono);
  color: var(--accent-primary);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
  display: block;
}

.lead {
  font-size: var(--text-xl);
  color: var(--text-secondary);
}

.media-section {
  padding-bottom: var(--space-16);
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Empty State - styled like NotFound page */
.empty-state {
  text-align: center;
  padding: var(--space-16) 0;
}

.empty-icon {
  font-size: var(--text-4xl);
  animation: pulse 2s ease-in-out infinite;
  margin-bottom: var(--space-6);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.empty-state h2 {
  margin-bottom: var(--space-4);
}

.empty-message {
  color: var(--text-secondary);
  font-size: var(--text-lg);
  max-width: 480px;
  margin: 0 auto var(--space-8);
}

.empty-actions {
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

.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.btn-secondary:hover {
  background-color: var(--bg-secondary);
  text-decoration: none;
}

/* Responsive - match Updates section pattern */
@media (max-width: 1024px) {
  .media-grid {
    grid-template-columns: 1fr;
  }
}
</style>
