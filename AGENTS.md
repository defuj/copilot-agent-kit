# Agent Kit — AI Agent System for GitHub Copilot

This is the Agent Kit: a portable meta-project containing agent configurations, skills, rules, and commands for a multi-stack development agent system. It covers Nuxt/Vue frontend, React/Next.js frontend, Node.js backend, Laravel, CodeIgniter 3, mobile (Android + Flutter), and supporting roles (design, review, database, devops, SEO). There is no actual application source code — all content is configuration and documentation for AI agent orchestration.

Supports **GitHub Copilot**.

## Project Structure

- `.github/agents/` — GitHub Copilot agent profiles (`.agent.md` files):
  - **Primary**: `it-leader` (orchestrator)
  - **Web Frontend**: `frontend-nuxt`, `frontend-react`
  - **Backend**: `backend`, `ci3`, `laravel`
  - **Mobile**: `android`, `flutter`
  - **Support**: `designer`, `reviewer`, `database`, `devops`, `seo`
- `.github/hooks/` — Automation hooks
- `.github/workflows/` — GitHub Actions workflows

## Key Architecture

- **Copilot Mode**: 13 custom agents auto-selected by Copilot runtime via intent matching
- **Subagents** (12 total): `frontend-nuxt`, `frontend-react`, `backend`, `ci3`, `laravel`, `android`, `flutter`, `designer`, `reviewer`, `database`, `devops`, `seo`

## Mobile Development

### Android (`@android`)
- Stack: Kotlin, Jetpack Compose, Material Design 3, Gradle KTS, Hilt, Room, MVVM/Clean Architecture
- Skills: android-jetpack-compose, edge-to-edge, navigation-3, firebase-basics, play-billing, camera1-to-camerax, r8-analyzer, migrate-xml-views-to-jetpack-compose
- GPC (Google Play Console) integration: gpc-setup, gpc-release-flow, gpc-preflight, gpc-vitals-monitoring, gpc-metadata-sync, gpc-monetization, gpc-ci-integration
- Commands: `/android-build`, `/android-test`, `/gpc-release`

### Flutter (`@flutter`)
- Stack: Dart, Flutter SDK, Material Design 3, Cupertino, Bloc/Riverpod, GoRouter, Dio, Clean Architecture
- Skills: flutter (patterns), 10 Flutter task skills, 9 Dart task skills, firebase-basics
- Commands: `/flutter-build`, `/flutter-test`

## No Build/Lint/Test Commands

This project has no application code. Build, lint, or test commands from `package.json` or other tooling configs are NOT relevant here. All validation is structural (valid JSON/YAML/Markdown).

## Installation as NPM Package

This project is also available as `copilot-agent-kit` on npm for easy installation into any project:

```bash
npx copilot-agent-kit init
```

See `README.md` for full setup instructions.
