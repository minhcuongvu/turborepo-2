#!/bin/bash

# Exit on any error
set -e

# Ensure that SSH key and IP are provided as arguments
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <ssh-key-path> <remote-ip>"
  exit 1
fi

# Define variables
SSH_KEY="$1"                 # SSH Key passed as first argument
REMOTE_IP="$2"               # Remote IP passed as second argument
SCRIPT_DIR=$(dirname "$(realpath "$0")")         # Absolute path to the directory where this script is located
LOCAL_DIR="$(realpath "$SCRIPT_DIR/..")"        # Local directory is one level up from the script
RSYNC_EXCLUDES="$SCRIPT_DIR/../rsync-excludes"  # rsync-excludes is in the parent directory of the script
REMOTE_USER="root"
REMOTE_DIR="/app"
SCRIPTS_DIR="$REMOTE_DIR/scripts"
ARCHIVE_NAME="deployment-$(date +%Y%m%d%H%M%S).tar.gz"  # Generate unique archive name based on the current timestamp

# Define log directory and create it if it doesn't exist
LOG_DIR="/tmp/logs"
mkdir -p "$LOG_DIR"  # Ensure the log directory exists

# Check if rsync-excludes file exists
if [ ! -f "$RSYNC_EXCLUDES" ]; then
  echo "Error: Excludes file '$RSYNC_EXCLUDES' not found."
  exit 1
fi

# Function to run SSH commands with ssh-agent support
run_ssh() {
  echo "Running SSH command: $1"
  ssh -A -i "$SSH_KEY" "$REMOTE_USER@$REMOTE_IP" "$1" > /dev/null 2>&1
}

# Function to start ssh-agent and add the key
start_ssh_agent() {
  echo "Starting ssh-agent..."
  eval $(ssh-agent -s) > /dev/null 2>&1  # Not logging ssh-agent start

  # Add the SSH key if it's not already added
  if ! ssh-add -l | grep -q "$SSH_KEY"; then
    echo "Adding SSH key to ssh-agent..."
    ssh-add "$SSH_KEY" > /dev/null 2>&1  # Not logging adding key
  else
    echo "SSH key is already added."
  fi
}

# Start ssh-agent and add the key (no logging)
start_ssh_agent

# Step 1: Clean the /app directory on the remote server
echo "Cleaning /app directory on remote server..."
run_ssh "rm -rf $REMOTE_DIR/*"
echo "Done."

# Step 2: Create a compressed tar archive of the local files, excluding specified files
echo "Creating tar archive of local files..."
tar --exclude-from="$RSYNC_EXCLUDES" -czf "$ARCHIVE_NAME" -C "$LOCAL_DIR" .
echo "Done."

# Step 3: Transfer the tar archive to the /tmp directory on the remote server using rsync
echo "Transferring archive to remote server (/tmp)..."
rsync -avz -e "ssh -A -i $SSH_KEY" "$ARCHIVE_NAME" "$REMOTE_USER@$REMOTE_IP:/tmp"
echo "Done."

# Step 4: Unpack the archive in /tmp, excluding the parent folder, into /app
echo "Unpacking the archive into /app..."
run_ssh "tar -xzf /tmp/$ARCHIVE_NAME -C $REMOTE_DIR --strip-components=1 && rm -f /tmp/$ARCHIVE_NAME"
echo "Done."

# Step 5: Run the site setup script
echo "Running site setup script..."
run_ssh "$SCRIPTS_DIR/yarn-setup.sh"
echo "Done."

# Step 7: Kill ssh-agent to clean up
echo "Cleaning up ssh-agent..."
ssh-agent -k > /dev/null 2>&1

echo "Deployment complete."
