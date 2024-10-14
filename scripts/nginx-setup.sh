#!/bin/bash

cd "$(dirname "$0")/.."

echo "Copy nginx.conf to /etc/nginx/sites-available/default..."
cp nginx.conf /etc/nginx/sites-available/default
