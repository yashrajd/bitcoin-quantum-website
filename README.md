# Bitcoin Quantum Hub

A comprehensive educational resource about quantum computing threats to Bitcoin and post-quantum cryptographic solutions.

## Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Routing:** Vue Router
- **Head Management:** @vueuse/head
- **Styling:** CSS Variables with terminal aesthetic

## Features

- Terminal-inspired dark theme (default) with light mode toggle
- Responsive design for all screen sizes
- WCAG AA accessibility compliance
- SEO-optimized with proper meta tags
- Multi-page architecture with comprehensive content

## Project Structure

```
/src
  /assets          # Images, icons, fonts
  /components      # Reusable Vue components
  /layouts         # Layout wrappers
  /pages           # Route-level components
  /router          # Vue Router configuration
  /content         # Content data
  /styles          # Global styles and CSS variables
  main.js          # App entry point
  App.vue          # Root component
/scripts           # Build and utility scripts
/public            # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Build and Preview (Automated)

For a smoother workflow that builds and automatically starts the preview server with readiness detection and graceful shutdown:

```bash
./scripts/build-and-preview.sh
```

This script will:
- Build the project for production
- Start the preview server in the background
- Poll the server until it's ready (up to 120 seconds)
- Display the actual URL (handles dynamic port assignment)
- **Press Ctrl+C to gracefully stop the server**

**Note:** The script automatically detects if the default port (4173) is in use and will use the next available port (e.g., 4174).

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy!

### Netlify

1. Connect your repository
2. Build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy

## Theme System

The site uses CSS variables for theming:

- Default: Dark terminal theme (`theme-dark`)
- Toggle: Light mode (`theme-light`)
- Theme preference persisted in localStorage

## Logging System

The application includes a centralized logging utility at `src/utils/logger.js`.

### Log Levels

- **DEBUG** (0): Detailed debugging information
- **INFO** (1): General operational information
- **WARN** (2): Warning messages
- **ERROR** (3): Error messages

### Usage

Import and use the logger in components or composables:

```javascript
import logger from '../utils/logger.js'

// Log messages
logger.debug('Debug message', { data: 'value' })
logger.info('User action', { userId: 123 })
logger.warn('Deprecated feature used')
logger.error('Failed to load data', error)
```

### Configuration

The logger auto-configures based on environment:
- **Development**: DEBUG level and above
- **Production**: WARN level and above

### Log Storage

- Console output is styled with timestamps and color-coded levels
- Optional localStorage persistence (disabled by default for privacy)
- Log storage path: Browser DevTools Console or localStorage (when enabled)

### Log Directory

- **Location**: `/logs/` (reserved for server-side logs)
- **Note**: Client-side logs output to browser console only

### Viewing Logs

1. Open browser DevTools (F12)
2. Go to Console tab
3. Filter by `[BitcoinQuantumHub]` prefix

## Security Considerations

- No external scripts loaded without integrity checks
- CSP headers recommended for production
- Form inputs properly sanitized
- No sensitive data stored client-side

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast meets WCAG AA standards

## Content Source

All content is sourced from `/inputs` directory and mapped to the site structure defined in the content files.

## License

GNU General Public License v3.0 - See LICENSE file for details

## Contributing

Contributions welcome! Please read CONTRIBUTING.md for guidelines.

## Contact

For questions or suggestions, visit the Contact page or open an issue on GitHub.
