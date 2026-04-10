import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const AGENTS_MD = resolve(ROOT, 'AGENTS.md')
const ROUTER_FILE = resolve(ROOT, 'src/router/index.js')
const COMPONENTS_DIR = resolve(ROOT, 'src/components')

function generateRoutesTable() {
  const routerContent = readFileSync(ROUTER_FILE, 'utf-8')
  const lines = routerContent.split('\n')

  const routes = []
  let currentRoute = null

  for (const line of lines) {
    const pathMatch = line.match(/^\s*path:\s*'([^']+)'/)
    const nameMatch = line.match(/^\s*name:\s*'([^']+)'/)
    const componentMatch = line.match(/^\s*component:\s*\(\)\s*=>\s*import\('([^']+)'\)/)
    const redirectMatch = line.match(/^\s*redirect:/)

    if (pathMatch) {
      currentRoute = { path: pathMatch[1] }
    } else if (nameMatch && currentRoute) {
      currentRoute.name = nameMatch[1]
    } else if (componentMatch && currentRoute) {
      currentRoute.componentFile = componentMatch[1].replace('../', 'src/')
      routes.push({ ...currentRoute })
      currentRoute = null
    } else if (redirectMatch && currentRoute) {
      currentRoute = null
    }
  }

  let table = '| Route Path | Route Name | Component File |\n|---|---|---|\n'
  for (const r of routes) {
    table += `| \`${r.path}\` | ${r.name} | \`${r.componentFile}\` |\n`
  }
  return table
}

function generateComponentsTable() {
  const files = readdirSync(COMPONENTS_DIR)
    .filter(f => f.endsWith('.vue'))
    .sort()

  let table = '| Component | File |\n|---|---|\n'
  for (const f of files) {
    const name = f.replace('.vue', '')
    table += `| ${name} | \`src/components/${f}\` |\n`
  }
  return table
}

function updateSection(content, markerStart, markerEnd, newContent) {
  const startIndex = content.indexOf(markerStart)
  const endIndex = content.indexOf(markerEnd)

  if (startIndex === -1 || endIndex === -1) {
    console.error(`Could not find markers: ${markerStart} / ${markerEnd}`)
    process.exit(1)
  }

  const before = content.substring(0, startIndex + markerStart.length)
  const after = content.substring(endIndex)

  return before + '\n' + newContent + '\n' + after
}

function main() {
  let content
  try {
    content = readFileSync(AGENTS_MD, 'utf-8')
  } catch {
    console.error('AGENTS.md not found. Create it manually first.')
    process.exit(1)
  }

  const routesTable = generateRoutesTable()
  const componentsTable = generateComponentsTable()

  content = updateSection(
    content,
    '<!-- AUTO-GENERATED:routes START -->',
    '<!-- AUTO-GENERATED:routes END -->',
    routesTable
  )

  content = updateSection(
    content,
    '<!-- AUTO-GENERATED:components START -->',
    '<!-- AUTO-GENERATED:components END -->',
    componentsTable
  )

  writeFileSync(AGENTS_MD, content, 'utf-8')
  console.log('✓ AGENTS.md updated (routes table + components table)')
}

main()