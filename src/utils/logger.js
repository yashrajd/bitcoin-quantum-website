/**
 * Logger Utility
 * 
 * Centralized logging service for the application.
 * Supports multiple log levels and configurable output.
 * 
 * @module utils/logger
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
}

const COLORS = {
  DEBUG: '#888',
  INFO: '#0f0',
  WARN: '#fa0',
  ERROR: '#f00'
}

/**
 * Logger class with level-based filtering and styling
 */
class Logger {
  constructor(options = {}) {
    this.level = LOG_LEVELS[options.level?.toUpperCase()] ?? LOG_LEVELS.INFO
    this.prefix = options.prefix || '[BitcoinQuantumHub]'
    this.enabled = options.enabled !== false
    this.persist = options.persist === true
    this.maxLogs = options.maxLogs || 100
  }

  /**
   * Get current timestamp
   * @returns {string} ISO timestamp
   */
  getTimestamp() {
    return new Date().toISOString()
  }

  /**
   * Store log in localStorage for debugging (optional)
   * @param {string} level - Log level
   * @param {string} message - Log message
   */
  storeLog(level, message) {
    if (!this.persist) return

    try {
      const key = 'app_logs'
      const logs = JSON.parse(localStorage.getItem(key) || '[]')
      logs.push({
        timestamp: this.getTimestamp(),
        level,
        message
      })
      // Keep only recent logs
      if (logs.length > this.maxLogs) {
        logs.shift()
      }
      localStorage.setItem(key, JSON.stringify(logs))
    } catch (e) {
      // Silent fail - don't let logging break the app
    }
  }

  /**
   * Format and output log message
   * @param {string} level - Log level name
   * @param {string} color - CSS color for console
   * @param {number} levelValue - Numeric log level
   * @param {...any} args - Arguments to log
   */
  log(level, color, levelValue, ...args) {
    if (!this.enabled || levelValue < this.level) return

    const timestamp = this.getTimestamp()
    const message = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ')

    // Console output with styling
    console.log(
      `%c${this.prefix} %c[${level}] %c${timestamp}`,
      'color: #0ff',
      `color: ${color}; font-weight: bold`,
      'color: #666',
      ...args
    )

    // Optional persistence
    this.storeLog(level, message)
  }

  debug(...args) {
    this.log('DEBUG', COLORS.DEBUG, LOG_LEVELS.DEBUG, ...args)
  }

  info(...args) {
    this.log('INFO', COLORS.INFO, LOG_LEVELS.INFO, ...args)
  }

  warn(...args) {
    this.log('WARN', COLORS.WARN, LOG_LEVELS.WARN, ...args)
  }

  error(...args) {
    this.log('ERROR', COLORS.ERROR, LOG_LEVELS.ERROR, ...args)
  }

  /**
   * Clear stored logs from localStorage
   */
  clearStoredLogs() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('app_logs')
    }
  }

  /**
   * Get stored logs from localStorage
   * @returns {Array} Array of log entries
   */
  getStoredLogs() {
    if (typeof localStorage === 'undefined') return []
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]')
    } catch (e) {
      return []
    }
  }
}

// Create default logger instance
const logger = new Logger({
  level: import.meta.env?.DEV ? 'DEBUG' : 'WARN',
  enabled: true,
  persist: false // Disabled by default for privacy
})

// Export both the class and default instance
export { Logger, LOG_LEVELS }
export default logger
