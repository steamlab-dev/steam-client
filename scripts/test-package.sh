#!/bin/bash

# Exit immediately if any command exits with a non-zero status.
# This ensures that if the build fails, we don't try to test a broken package.
set -e

echo -e "\n🔨 Building package..."

# 1. Compile Source Code
npm run build > /dev/null 2>&1

echo "📦 Packing package..."
# 2. Create Production Artifact
# 'npm pack' creates a .tgz tarball exactly as it would be uploaded to NPM.
# This validates "files" config in package.json (ensuring you aren't missing files).
TARBALL=$(npm pack --quiet)

echo "📋 Creating test directory..."
# 3. Create Sandbox Environment
# Creates a temporary directory (e.g., /tmp/tmp.XyZ)
TEST_DIR=$(mktemp -d)
cd "$TEST_DIR"

echo "🧪 Setting up test project..."
# 4. Initialize Dummy Project
# Creates a basic package.json in the temp folder so we can install dependencies.
npm init -y > /dev/null 2>&1

echo "📥 Installing packed package..."
# 5. Install the Artifact
# Installs newly created .tgz file into this dummy project.
# '$OLDPWD' refers to project root (where we started).
# This proves that 'npm install' will actually work
npm install "$OLDPWD/$TARBALL" --ignore-scripts > /dev/null 2>&1

echo -e "✅ Running package tests..."
# 6. Verify Imports
# Copies verification script (test-package.ts) into the temp folder.
# Runs it using 'tsx'. If package.json 'exports' or 'main' fields are wrong,
# this script will crash because it won't be able to find the module.
cp "$OLDPWD/scripts/test-package.ts" ./test.ts
npx tsx test.ts
echo -e "🎉 All package tests passed!"

echo "🧹 Cleaning up..."
# 7. Cleanup
# Go back to the project root and delete the temp folder and the .tgz file.
cd "$OLDPWD"
rm -rf "$TEST_DIR"
rm "$TARBALL"

echo "✨ Package test complete!"