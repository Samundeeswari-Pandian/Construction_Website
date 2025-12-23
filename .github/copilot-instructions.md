## Quick context for AI coding agents

This is an Angular 20 application generated with Angular CLI (20.3.7) that includes server-side rendering (SSR) integration via `@angular/ssr` and a small Express server.

Key files to read first:
- `angular.json` — build targets, SSR entries (`server`: `src/main.server.ts`, `ssr.entry`: `src/server.ts`).
- `package.json` — available npm scripts: `start` (`ng serve`), `build` (`ng build`), `watch`, `test` (`ng test`) and `serve:ssr:builder-website` (`node dist/builder-website/server/server.mjs`).
- `src/main.ts` and `src/main.server.ts` — client and server Angular entry points.
- `src/server.ts` — SSR entry (Express integration).

High-level architecture notes (why/how):
- Single Angular application with SSR enabled. Browser entry is `src/main.ts`; server bundle entry is `src/main.server.ts` and runtime server code is `src/server.ts`.
- Static/public assets are served from the `public/` folder (see `angular.json` assets). CSS is SCSS (`inlineStyleLanguage: scss`) and app-wide styles are `src/styles.scss`.
- Feature modules are under `src/app/features/` and shared UI components live under `src/app/shared/components/` (e.g. `navigation`, `header`, `footer`). Core/shared services live in `src/app/core/services` and `src/app/shared/services`.

Developer workflows and commands (use these exact scripts):
- Local dev server (client-only): `npm run start` or `ng serve` — serves at http://localhost:4200 by default.
- Build (browser + server config per `angular.json`): `npm run build` (runs `ng build`).
- Watch incremental builds: `npm run watch`.
- Tests: `npm run test` (Karma/Jasmine configured).
- Run produced SSR server (after building server bundle): `npm run serve:ssr:builder-website` (this runs the compiled `dist/builder-website/server/server.mjs`).

Notes about common troubleshooting (project-specific):
- If the app "keeps loading" in browser, confirm which dev mode is used: `ng serve` serves client-only content; SSR requires building both browser+server artifacts and running the node server from `dist/` (see `serve:ssr:builder-website`).
- Check for missing assets in `public/` — `angular.json` maps `public` into build assets; missing files there will break runtime requests.
- Look at `src/server.ts` and `src/main.server.ts` when debugging render-time errors (server logs will surface template/DI errors that don't appear in client-only builds).

Project conventions and patterns to follow when editing:
- SCSS is used across the project and the component schematic default is SCSS — prefer `.scss` when adding styles.
- Each feature folder contains `*.ts`, `*.html`, `*.scss`, and `*.spec.ts` files; follow this pattern for new components/modules.
- Tests exist alongside code (`*.spec.ts`) and use Karma/Jasmine — run `npm run test` for quick feedback.

Integration points & dependencies:
- Express is used at runtime for SSR (`express` in `package.json`). When changing server bootstrapping, update `src/server.ts`.
- `@angular/ssr` and `@angular/platform-server` are installed — server-side code should avoid browser-only globals unless guarded.

Actionable tips for the next edit:
- To add a new component, prefer the Angular CLI to keep structure consistent: `ng generate component <name>` (project uses `app` prefix by default).
- When fixing an SSR render issue, reproduce with a browser refresh on the server-run bundle (build then `npm run serve:ssr:builder-website`) to see server logs.

Files that are especially valuable to open for context in PRs:
- `angular.json`, `package.json`, `src/server.ts`, `src/main.server.ts`, `src/main.ts`, `src/app/app.routes.ts`, `src/app/app.config.ts`.

If anything is missing or you want me to expand a section (e.g., a step-by-step local SSR build recipe), tell me which area to broaden.
