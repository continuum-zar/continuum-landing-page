# Continuum — marketing landing

Static marketing site built with Vite, React, and Tailwind CSS. The **Join waitlist** form calls the same Continuum backend as the main app: `POST /api/v1/auth/waitlist` (rate limit: 5 requests per minute per email).

## Development

```bash
npm install
npm run dev
```

The dev server runs on port **5175** by default. API requests use `VITE_API_BASE_URL` or default to `/api/v1`, which is proxied to `http://localhost:8001` (override with `VITE_PROXY_TARGET`). Start the Continuum backend locally so waitlist signup works.

## Production build

```bash
npm run build
npm run preview
```

Set **`VITE_API_BASE_URL`** to your public API base **including** `/api/v1`, for example:

```bash
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1 npm run build
```

### CORS

The backend must list this site’s origin in **`CORS_ORIGINS`** (see `continuum-backend` `app/core/config.py` / environment). Without it, the browser will block waitlist requests from the deployed landing domain.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `VITE_API_BASE_URL` | Full API base path including `/api/v1`. Unset in dev uses Vite proxy. |
| `VITE_PROXY_TARGET` | Backend URL for the dev proxy (default `http://localhost:8001`). |

Copy `.env.example` to `.env.local` and adjust as needed.
