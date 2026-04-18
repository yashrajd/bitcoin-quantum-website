/**
 * Date formatting utilities
 * Shared date functions for consistent date display across the application
 */

/**
 * Format ISO date string to display format (e.g., 'Feb 3, 2026')
 *
 * @param {string} isoDate - ISO date string (YYYY-MM-DD)
 * @returns {string} Formatted date string
 */
export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
