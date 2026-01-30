#!/usr/bin/env bash
set -euo pipefail

# Bitcoin Quantum Hub - Build and Preview Orchestrator
# This script builds the project, starts the preview server, waits for it to be ready,
# and provides clean shutdown on Ctrl+C
#
# Usage: ./scripts/build-and-preview.sh

DEFAULT_PORT=4173
BUILD_CMD="npm run build"
PREVIEW_CMD="npm run preview"
TIMEOUT_MS=120000
INTERVAL_MS=500

# Color codes for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Global variables
PREVIEW_PID=""
SERVER_URL=""

# Cleanup function - handles Ctrl+C and other exit signals
cleanup() {
    local exit_code=$?
    if [ -n "$PREVIEW_PID" ] && kill -0 "$PREVIEW_PID" 2>/dev/null; then
        echo -e "\n${YELLOW}Shutting down preview server...${NC}"
        kill "$PREVIEW_PID" 2>/dev/null || true
        wait "$PREVIEW_PID" 2>/dev/null || true
        echo -e "${GREEN}Preview server stopped.${NC}"
    fi
    exit $exit_code
}

# Set up trap for Ctrl+C (SIGINT), SIGTERM, and EXIT
trap cleanup SIGINT SIGTERM EXIT

# Function to extract URL from server output
extract_url() {
    local line="$1"
    if [[ "$line" =~ Local:[[:space:]]+(http://[^[:space:]]+) ]]; then
        echo "${BASH_REMATCH[1]}"
    fi
}

echo -e "${YELLOW}Building project...${NC}"
if ! $BUILD_CMD; then
    echo -e "${RED}Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}Build successful!${NC}"

echo -e "${YELLOW}Starting preview server...${NC}"

# Create a temporary file to capture output
TEMP_OUTPUT=$(mktemp)

# Start preview server and capture output
$PREVIEW_CMD > "$TEMP_OUTPUT" 2>&1 &
PREVIEW_PID=$!

# Wait a moment for server to start writing output
sleep 1

echo -e "${YELLOW}Waiting for server to be ready...${NC}"
ELAPSED=0
SERVER_READY=false

while [ $ELAPSED -lt $TIMEOUT_MS ]; do
    # Check if preview process is still running
    if ! kill -0 "$PREVIEW_PID" 2>/dev/null; then
        echo -e "${RED}Preview server exited unexpectedly${NC}"
        cat "$TEMP_OUTPUT"
        rm -f "$TEMP_OUTPUT"
        exit 1
    fi
    
    # Try to extract URL from output
    if [ -z "$SERVER_URL" ]; then
        SERVER_URL=$(grep -o 'Local:[[:space:]]*http://[^[:space:]]*' "$TEMP_OUTPUT" | head -1 | sed 's/Local:[[:space:]]*//' || true)
    fi
    
    # If we have a URL, test if it's responding
    if [ -n "$SERVER_URL" ]; then
        if curl -sSf "$SERVER_URL" >/dev/null 2>&1; then
            SERVER_READY=true
            break
        fi
    fi
    
    sleep $(awk "BEGIN{print $INTERVAL_MS/1000}")
    ELAPSED=$((ELAPSED + INTERVAL_MS))
done

# Clean up temp file
rm -f "$TEMP_OUTPUT"

if [ "$SERVER_READY" = false ]; then
    echo -e "${RED}Preview server did not become ready within $TIMEOUT_MS ms${NC}"
    cleanup
    exit 1
fi

echo -e "${GREEN}Server is ready!${NC}"
echo -e "${GREEN}Preview available at: ${BLUE}$SERVER_URL${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"

# Show the server output in real-time
wait "$PREVIEW_PID"
