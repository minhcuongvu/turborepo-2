#!/bin/bash

cd "$(dirname "$0")/.."

# echo "Copy nginx.conf to /etc/nginx/sites-available/default..."
# cp nginx.conf /etc/nginx/sites-available/default

rsync -avz -e "ssh -i ~/hetzner2_ed25519" nginx.conf root@5.78.70.232:/etc/nginx/sites-available/default
