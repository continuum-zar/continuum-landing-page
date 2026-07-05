# Continuum Landing Page

Continuum’s public-facing marketing site built with Vite, React, Tailwind CSS, and shadcn/ui components. The **Join waitlist** form posts directly to the Continuum backend (`POST /api/v1/auth/waitlist`) so prospective users land in the same pipeline as the main app.

## Overview
- Responsive single-page experience that mirrors the Continuum brand system.
- Animated hero and feature sections powered by `motion` and shadcn/ui primitives.
- Axios client that respects the configured API base URL and applies sensible defaults.

## Tech Stack
- React 19 + TypeScript
- Vite 6 with Tailwind CSS 4 plugin pipeline
- shadcn/ui, lucide-react icons, and class-variance-authority helpers
- Axios for API calls and `sonner` for toast notifications

## Prerequisites
- Node.js **18.18+** (Vite 6 requirement) and npm 9+ (ships with Node).
- Access to a Continuum backend instance for waitlist submissions.

## Quick Start
```bash
git clone https://github.com/continuum-zar/continuum-landing-page.git
cd continuum-landing-page
npm install
cp .env.example .env.local
# Update environment variables as needed (see below)
npm run dev
```

Visit `http://localhost:5175` after the dev server boots. By default, API calls proxy to `http://localhost:8001`. Start the Continuum backend locally (or point `VITE_PROXY_TARGET` to a reachable instance) so waitlist signups succeed.

## Configuration
Populate `.env.local` (not committed) with the variables your environment needs:

| Variable | Purpose |
|----------|---------|
| `VITE_API_BASE_URL` | Fully qualified API base including `/api/v1`. In development you can leave this unset to use the Vite proxy. |
| `VITE_PROXY_TARGET` | Backend URL for the dev proxy. Defaults to `http://localhost:8001`. |

For production, always set `VITE_API_BASE_URL` to the publicly accessible API origin. Example:

```bash
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1 npm run build
```

Ensure the backend’s `CORS_ORIGINS` (see `continuum-backend/app/core/config.py`) includes the deployed landing page origin. Without the correct CORS settings, browsers will block waitlist requests.

## Available Scripts
- `npm run dev` – Start the Vite dev server on port 5175 with API proxying.
- `npm run build` – Type-check with `tsc -b` and generate an optimized production build.
- `npm run preview` – Serve the production build locally for smoke testing.
- `npm run lint` – Run ESLint with the shared Continuum config.

## Running Locally
1. Start the Continuum backend (`docker compose up` in the backend repo or your usual process).
2. Update `.env.local` if your backend is not running on `http://localhost:8001`.
3. Run `npm run dev`.
4. Navigate to `http://localhost:5175` and submit the waitlist form with a test email. Successful responses should render the confirmation toast from `sonner`.

## Production Build & Deploy
1. Set the production environment variables (at minimum `VITE_API_BASE_URL`).
2. Run `npm run build` to produce artifacts in `dist/` (`.gz` and `.br` precompressed assets are generated automatically).
3. Optionally, `npm run preview` to double-check the bundle before uploading.
4. Upload the `dist/` directory to your static hosting provider (Vercel, Netlify, S3 + CloudFront, etc.).

When deploying behind a CDN, ensure the backend still allows requests from the landing page origin. Consider caching the static assets aggressively since they are content-hashed by Vite.

## Project Structure
```
├── public/             # Favicons, OG images, robots.txt
├── src/
│   ├── api/            # Axios clients (e.g., waitlist signup)
│   ├── components/     # Reusable UI components and sections
│   ├── hooks/          # Client-side hooks for motion and interactions
│   ├── pages/          # Page-level compositions
│   ├── styles/         # Tailwind entrypoints and global styles
│   └── main.tsx        # React entrypoint
└── scripts/            # Build tooling helpers
```

## Contributing
- Create a feature branch off the active task branch (`continuum/agent/task-xxxx`).
- Keep changes scoped; update or add Storybook examples if you introduce new components (when applicable).
- Run `npm run lint` and `npm run build` before opening a pull request.
- Describe visual changes and include screenshots or Loom links if the UI is affected.

## Contact
Open an issue in this repository for bugs or questions. Internal teams can also reach the Continuum marketing engineering squad via the usual Slack channel (#continuum-web) for faster coordination.
