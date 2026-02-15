/**
 * Media content data
 * Curated podcasts and video interviews about quantum computing and Bitcoin
 *
 * DATA STRUCTURE:
 * - id: Unique identifier (kebab-case)
 * - title: Display title
 * - type: 'video' or 'audio'
 * - url: External link to the media
 * - thumbnail: Optional thumbnail URL. If null:
 *   - YouTube URLs: Automatically generates thumbnail from video ID
 *   - Other platforms: Falls back to placeholder image
 * - date: ISO date string (YYYY-MM-DD)
 * - featured: Boolean - featured items appear on homepage
 * - source: Optional source name (shown as badge)
 *
 * THUMBNAIL AUTO-GENERATION:
 * YouTube URLs automatically get thumbnails. Supported formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 *
 * For other platforms (Spotify, etc.), manually provide thumbnail URL
 * or leave null to use the placeholder.
 */

export const mediaItems = [
  {
    id: "quantum-threats-bitcoin-security-2025",
    title: "Quantum Threats to Bitcoin Security",
    type: "video",
    url: "https://www.youtube.com/watch?v=example1",
    thumbnail: null,
    date: "2025-11-15",
    featured: true,
    source: "What Bitcoin Did"
  },
  {
    id: "post-quantum-cryptography-explained",
    title: "Post-Quantum Cryptography Explained",
    type: "audio",
    url: "https://open.spotify.com/episode/example2",
    thumbnail: null,
    date: "2025-10-28",
    featured: true,
    source: "NIST"
  },
  {
    id: "bip360-technical-deep-dive",
    title: "BIP-360 Technical Deep Dive",
    type: "video",
    url: "https://www.youtube.com/watch?v=example3",
    thumbnail: null,
    date: "2025-09-20",
    featured: true,
    source: "Bitcoin Explained"
  },
  {
    id: "quantum-computing-timeline-predictions",
    title: "Quantum Computing Timeline Predictions",
    type: "audio",
    url: "https://open.spotify.com/episode/example4",
    thumbnail: null,
    date: "2025-08-12",
    featured: false,
    source: "Lex Fridman Podcast"
  },
  {
    id: "bitcoin-cryptography-fundamentals",
    title: "Bitcoin Cryptography Fundamentals",
    type: "video",
    url: "https://www.youtube.com/watch?v=example5",
    thumbnail: null,
    date: "2025-07-05",
    featured: false
  }
]

/**
 * Get featured media items for homepage
 * Returns up to count items, prioritizing featured items
 * Falls back to non-featured items if not enough featured items
 * 
 * @param {number} count - Number of items to return (default: 3)
 * @returns {Array} Sorted media items (newest first)
 */
export function getFeaturedMedia(count = 3) {
  // Sort all items by date (newest first)
  const sortedItems = [...mediaItems].sort((a, b) => new Date(b.date) - new Date(a.date))
  
  // Get featured items
  const featuredItems = sortedItems.filter(item => item.featured)
  
  // If we have enough featured items, return them
  if (featuredItems.length >= count) {
    return featuredItems.slice(0, count)
  }
  
  // Otherwise, backfill with non-featured items
  const nonFeaturedItems = sortedItems.filter(item => !item.featured)
  const needed = count - featuredItems.length
  const backfill = nonFeaturedItems.slice(0, needed)
  
  return [...featuredItems, ...backfill]
}

/**
 * Get all media items sorted by date (newest first)
 * 
 * @returns {Array} Sorted media items
 */
export function getAllMedia() {
  return [...mediaItems].sort((a, b) => new Date(b.date) - new Date(a.date))
}
