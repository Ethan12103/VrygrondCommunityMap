#!/bin/bash
echo "Installing backend dependencies..."
cd backend
npm install
cd ..
echo "Installing frontend dependencies..."
cd frontend
npm install
npm run build
cd ..
echo "Installation completed."