#!/usr/bin/env sh
npm run build
git add dist -f
git commit -m "adding dist1"
git subtree push --prefix dist origin gh-pages