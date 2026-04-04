/**
 * News content data
 * Latest developments in quantum computing and Bitcoin security
 *
 * DATA STRUCTURE:
 * - date: Display date string (e.g., 'January 2026')
 * - title: News headline
 * - excerpt: Brief summary
 * - link: Router link path
 *
 * Dates are parsed internally for sorting but displayed as provided.
 */

export const newsItems = [
  {
    date: 'January 2026',
    title: 'NIST Post-Quantum Standards Finalized',
    excerpt: 'NIST has released its final standards for post-quantum cryptography, including CRYSTALS-Dilithium and CRYSTALS-Kyber.',
    link: '/news/nist-standards'
  },
  {
    date: 'January 2026',
    title: 'BIP-360 Technical Specification Updated',
    excerpt: 'The latest revision clarifies quantum witness structure and SegWit integration details.',
    link: '/bip-360/status'
  },
  {
    date: 'December 2025',
    title: 'CISA Issues Quantum Migration Guidance',
    excerpt: 'New guidance from CISA helps organizations prepare for the transition to post-quantum cryptography.',
    link: '/learn/timeline/government-deadlines'
  }
]

/**
 * Get latest news items sorted by date (newest first)
 *
 * @param {number} count - Number of items to return (default: all)
 * @returns {Array} Sorted news items with display dates preserved
 */
export function getLatestNews(count = null) {
  const sortedItems = [...newsItems].sort((a, b) => new Date(b.date) - new Date(a.date))
  return count ? sortedItems.slice(0, count) : sortedItems
}

/**
 * Get all news items sorted by date (newest first)
 *
 * @returns {Array} All news items sorted newest first
 */
export function getAllNews() {
  return getLatestNews()
}
