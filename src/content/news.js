import { formatDate } from '../utils/date.js'

/**
 * News content data
 * Latest developments in quantum computing and Bitcoin security
 *
 * DATA STRUCTURE:
 * - date: ISO date string (YYYY-MM-DD) for reliable sorting
 * - displayDate: Formatted display string (e.g., 'Feb 3, 2026')
 * - title: News headline
 * - excerpt: Brief summary
 * - link: Router link path
 */

export const newsItems = [
  {
    date: '2026-01-15',
    title: 'NIST Post-Quantum Standards Finalized',
    excerpt: 'NIST has released its final standards for post-quantum cryptography, including CRYSTALS-Dilithium and CRYSTALS-Kyber.',
    link: '/news/nist-standards'
  },
  {
    date: '2026-01-10',
    title: 'BIP-360 Technical Specification Updated',
    excerpt: 'The latest revision clarifies quantum witness structure and SegWit integration details.',
    link: '/bip-360/status'
  },
  {
    date: '2025-12-05',
    title: 'CISA Issues Quantum Migration Guidance',
    excerpt: 'New guidance from CISA helps organizations prepare for the transition to post-quantum cryptography.',
    link: '/learn/timeline/government-deadlines'
  }
]

/**
 * Get latest news items sorted by date (newest first)
 *
 * @param {number} count - Number of items to return (default: all)
 * @returns {Array} Sorted news items with displayDate property added
 */
export function getLatestNews(count = null) {
  const sortedItems = [...newsItems]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(item => ({
      ...item,
      displayDate: formatDate(item.date)
    }))
  return count ? sortedItems.slice(0, count) : sortedItems
}

/**
 * Get all news items sorted by date (newest first)
 *
 * @returns {Array} All news items sorted newest first with displayDate property
 */
export function getAllNews() {
  return getLatestNews()
}
