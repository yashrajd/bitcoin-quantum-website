import { execSync } from 'child_process'
import { writeFileSync } from 'fs'

try {
  // Get last commit date from master branch in "Jan 2026" format
  const lastCommitDate = execSync(
    'git log -1 --format=%cd --date=format:"%b %Y" master',
    { encoding: 'utf-8', cwd: process.cwd() }
  ).trim()
  
  // Write to .env file
  writeFileSync('.env', `VITE_LAST_UPDATED=${lastCommitDate}\n`)
  console.log(`✓ Build info generated: ${lastCommitDate}`)
} catch (error) {
  console.error('✗ Failed to get git info:', error.message)
  // Write Unknown if git command fails
  writeFileSync('.env', 'VITE_LAST_UPDATED=Unknown\n')
  console.log('✓ Build info set to: Unknown')
}
