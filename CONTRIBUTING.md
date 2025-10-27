# Contributing Guide

Thank you for your interest in contributing to the HyperScalerOwl GreenCloud landing page! We welcome bug reports, design ideas, and documentation improvements.

## Getting Started

1. Fork the repository and clone your fork locally.
2. Install dependencies with `npm install`.
3. Use `npm run dev` to launch the development server and iterate locally.
4. Ensure `npm run lint` passes before opening a pull request.

## Development Standards

- The landing experience is fully client-rendered. Keep new components within `src/app` marked with the `"use client"` directive when needed.
- Follow the existing design language: cinematic gradients, accessible contrast, and data-backed storytelling.
- Provide descriptive commit messages and include screenshots for visual changes when feasible.
- Update or extend documentation (README, relevant Markdown files) when introducing noteworthy changes.

## Pull Requests

- Open pull requests against the `main` branch.
- Fill out the PR description with a summary of the change, testing performed, and any deployment considerations.
- Automated GitHub Actions workflows must pass before maintainers will review.

## Community Expectations

All contributors are expected to uphold the [Code of Conduct](CODE_OF_CONDUCT.md). For questions, reach out at [hello@hyperscalerowl.com](mailto:hello@hyperscalerowl.com).
