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
    id: "rearden-wbd-feb2026",
    title: " The Quantum Computing Myth | Brandon Black",
    type: "video",
    url: "https://www.youtube.com/watch?v=uZZkQRqnNE4",
    thumbnail: null,
    date: "2026-02-03",
    featured: false,
    source: "What Bitcoin Did",
  },
  {
    id: "slp-bluematt-feb2026",
    title: " What do Bitcoiners do about Quantum? with Matt Corallo | SLP719 ",
    type: "video",
    url: "https://www.youtube.com/watch?v=Sm7y80gnA4k",
    thumbnail: null,
    date: "2026-02-11",
    featured: true,
    source: "Stephen Livera Podcast",
  },
  {
    id: "slp-jamesob-feb2026",
    title: "Is Quantum FUD BS? with James O'Beirne | SLP721",
    type: "video",
    url: "https://www.youtube.com/watch?v=NTj3otRXz0w",
    thumbnail: null,
    date: "2026-02-13",
    featured: true,
    source: "Stephen Livera Podcast",
  },

  {
    id: "wbd-hunter-beast-mar2025",
    title: "WILL QUANTUM BREAK BITCOIN? W/ Hunter Beast",
    type: "video",
    url: "https://www.youtube.com/watch?v=3s-7ry4NnHE",
    thumbnail: null,
    date: "2025-03-11",
    featured: false,
    source: "What Bitcoin Did",
  },
  {
    id: "isabel-foxen-duke-apr2025",
    title: "MAKE BITCOIN QUANTUM RESISTANT | with BIP360 author Hunter Beast",
    type: "video",
    url: "https://www.youtube.com/watch?v=yC2upxFHPwM",
    thumbnail: null,
    date: "2025-04-08",
    featured: false,
    source: "Isabel Foxen Duke",
  },
  {
    id: "mit-bitcoin-expo-apr2025",
    title:
      "Bitcoin and Quantum Computing Resistance w/ Hunter Beast | MIT Bitcoin Expo 2025",
    type: "video",
    url: "https://www.youtube.com/watch?v=_TsVRZeyiAY",
    thumbnail: null,
    date: "2025-04-06",
    featured: true,
    source: "MIT Bitcoin Expo 2025",
  },
];

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
  const sortedItems = [...mediaItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // Get featured items
  const featuredItems = sortedItems.filter((item) => item.featured);

  // If we have enough featured items, return them
  if (featuredItems.length >= count) {
    return featuredItems.slice(0, count);
  }

  // Otherwise, backfill with non-featured items
  const nonFeaturedItems = sortedItems.filter((item) => !item.featured);
  const needed = count - featuredItems.length;
  const backfill = nonFeaturedItems.slice(0, needed);

  return [...featuredItems, ...backfill];
}

/**
 * Get all media items sorted by date (newest first)
 *
 * @returns {Array} Sorted media items
 */
export function getAllMedia() {
  return [...mediaItems].sort((a, b) => new Date(b.date) - new Date(a.date));
}
