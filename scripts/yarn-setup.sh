#!/bin/bash

cd "$(dirname "$0")/.."

# Define log directory (can be a fixed path or dynamic)
LOG_DIR="/tmp/logs"
mkdir -p "$LOG_DIR"  # Ensure the log directory exists

# Get current timestamp for log filenames
TIMESTAMP=$(date "+%Y-%m-%d_%H-%M-%S")

# Define log filenames with timestamps
YARN_INSTALL_LOG="$LOG_DIR/yarn-install_$TIMESTAMP.log"
YARN_BUILD_LOG="$LOG_DIR/yarn-build_$TIMESTAMP.log"

# Log the installation process with timestamped log file
echo "Installing dependencies with Yarn..." | tee -a "$YARN_INSTALL_LOG"
yarnpkg install >> "$YARN_INSTALL_LOG" 2>&1

sleep 3

# Log the build process with timestamped log file
echo "Building the site" | tee -a "$YARN_BUILD_LOG"
yarnpkg build >> "$YARN_BUILD_LOG" 2>&1

# Log the pm2 delete process (no timestamp, as requested)
echo "Deleting pm2 process 'website'..."
pm2 delete website

sleep 3

# Log the pm2 start process (no timestamp, as requested)
echo "Starting new pm2 process..."
pm2 start yarnpkg --name="website" -- start

# Final log message with timestamped log file
echo "All operations are complete. Logs are stored in the '$LOG_DIR' directory."
