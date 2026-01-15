# Environment & Deployment Setup

This repository separates frontend (`clients/`) and backend (`server/`).

## Frontend (clients)
- Put runtime API URL in Vite env: `VITE_API_URL`.
- Example file: `clients/.env.example`.
- Development: create `clients/.env.local` with `VITE_API_URL=http://localhost:8000`.
- Access in code: `import.meta.env.VITE_API_URL` (we expose it globally as `window.__API_BASE__`).

## Backend (server)
- Use `.env` for DB and app settings; do not commit `.env`.
- Example file provided: `server/.env.example`.
- Typical steps:
  - `composer install`
  - copy `.env.example` to `.env` and set DB credentials
  - `php artisan key:generate`
  - `php artisan migrate --seed`

## repo env 
- Frontend reads `VITE_API_URL` and falls back to `http://127.0.0.1:8000`.
- Existing code was updated to use `window.__API_BASE__` (global), so API calls become e.g. `fetch(window.__API_BASE__ + '/api/messages')`.

