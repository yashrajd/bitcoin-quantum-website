<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'video',
    validator: (value) => ['video', 'audio'].includes(value)
  },
  url: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: null
  },
  date: {
    type: String,
    required: true
  },
  source: {
    type: String,
    default: null
  }
})

const typeEmoji = computed(() => props.type === 'video' ? '🎥' : '🎧')

/**
 * Extract YouTube video ID from various URL formats
 * Supports: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
 */
function extractYouTubeId(url) {
  if (!url) return null

  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

const thumbnailSrc = computed(() => {
  // Use provided thumbnail if available
  if (props.thumbnail) return props.thumbnail

  // Auto-generate thumbnail for YouTube URLs
  const youtubeId = extractYouTubeId(props.url)
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
  }

  // Fallback to placeholder
  return '/images/media-placeholder.svg'
})

const formattedDate = computed(() => {
  const date = new Date(props.date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
})
</script>

<template>
  <article class="media-card">
    <div class="media-thumbnail">
      <img :src="thumbnailSrc" :alt="title" class="thumbnail-image" />
      <span class="media-type" aria-hidden="true">{{ typeEmoji }}</span>
    </div>
    <div class="media-content">
      <div class="media-meta">
        <time class="media-date" :datetime="date">{{ formattedDate }}</time>
        <span v-if="source" class="source-badge">{{ source }}</span>
      </div>
      <h3 class="media-title">
        <a 
          :href="url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="media-link"
        >
          {{ title }}
          <span class="link-arrow" aria-hidden="true">↗</span>
        </a>
      </h3>
    </div>
  </article>
</template>

<style scoped>
.media-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.media-card:hover {
  border-color: var(--border-secondary);
  transform: translateY(-2px);
}

.media-thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: var(--bg-tertiary);
  overflow: hidden;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.media-type {
  position: absolute;
  bottom: var(--space-3);
  right: var(--space-3);
  font-size: var(--text-xl);
  background-color: rgba(0, 0, 0, 0.7);
  padding: var(--space-2);
  border-radius: var(--border-radius);
  line-height: 1;
}

.media-content {
  padding: var(--space-6);
}

.media-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3);
}

.media-date {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.source-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-tertiary);
  color: var(--text-muted);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
}

.media-title {
  font-size: var(--text-lg);
  margin: 0;
  line-height: 1.4;
}

.media-link {
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.media-link:hover {
  color: var(--accent-primary);
}

.link-arrow {
  font-size: var(--text-sm);
  margin-left: var(--space-1);
  white-space: nowrap;
  transition: transform var(--transition-fast);
  display: inline-block;
}

.media-link:hover .link-arrow {
  transform: translate(2px, -2px);
}
</style>
