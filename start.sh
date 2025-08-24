#!/bin/bash

echo "🚀 Starting ENIAC LLM Loader..."
echo "📁 Project directory: $(pwd)"
echo "🌐 Development server will be available at: http://localhost:3000"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo "🔥 Launching development server..."
npm run dev
