# Agent Guidelines & Workflow Rules

## Critical Mandate: Codebase & Git Push Workflow
- **Local Testing**: Always run `npm run build` or inspect runtime behavior locally whenever making code changes.
- **User Review Before Push**: NEVER execute `git push` to GitHub automatically after modifying files. Always stop and explicitly ask the USER to test the changes locally first.
- **Pushing**: Only execute `git push origin main` after the USER has tested and confirmed approval.

## Project Stack & Standards
- Framework: Next.js (App Router, Turbopack)
- Styling: Vanilla CSS (`app/globals.css`), Glassmorphism, Google Fonts (`Inter`, `Sora`)
- Structure: Modular components under `app/components/`
