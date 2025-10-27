# HyperScalerOwl GreenCloud Landing Page

A modern, investor-ready landing experience for HyperScalerOwl's GreenCloud revolution. This project showcases the "who, what, and how" behind the distributed hyperscaler startup through a fully client-rendered Next.js application.

## ✨ Highlights
- Story-driven hero section that reframes cloud infrastructure as a people-powered cooperative.
- Interactive stakeholder toggles spotlighting affiliates, cloud users, and the founding team.
- Detailed breakdowns of the problem, solution, mission, business model, go-to-market strategy, and execution pillars.
- Responsive, cinematic design with gradient visuals optimized for presentations and investor reviews.
- Static export configuration for seamless GitHub Pages hosting.

## 🚀 Getting Started

Install dependencies with npm (the repository is configured for npm-based workflows):

```bash
npm install
```

Start the client-rendered development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the landing page. Edits to files inside `src/app` will hot-reload instantly.

## 🧱 Project Structure

```
├── public/                # Static assets
├── src/app/               # App Router entry point
│   ├── layout.tsx         # Global metadata and font configuration
│   ├── page.tsx           # Client-rendered landing experience
│   └── globals.css        # Global design tokens and base styles
├── next.config.ts         # Static export + GitHub Pages base path helpers
└── .github/workflows/     # Build and deployment automation
```

## 🧪 Available Scripts

- `npm run dev` – Run the app in development mode.
- `npm run build` – Produce the static site in `out/` (via `next build` with `output: "export"`).
- `npm run lint` – Lint the project with ESLint.

## 🌐 Deployment

This repository is configured to publish the exported static site to GitHub Pages via GitHub Actions:

1. `build.yml` validates installs, linting, and the production build on every push and pull request.
2. `deploy.yml` runs on pushes to the default branch, exporting the site and publishing the `out/` directory to GitHub Pages.

> **Tip:** The Next.js configuration automatically detects the GitHub repository name during CI and adjusts the `basePath` and `assetPrefix` so links work correctly on GitHub Pages.

## 🤝 Contributing

Issues and pull requests are welcome. Please review the included [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guide](CONTRIBUTING.md) before submitting changes.

## 🛡️ Security

For security disclosures, please follow the process outlined in [SECURITY.md](SECURITY.md).

## 📄 License

Distributed under the terms of the [MIT License](LICENSE).
