# pandb-landing-page
The landing page for all [pixelandbyte.com](https://pixelandbyte.com) projects. It also inclides a client portal to simplify communication to and from clients.
 
## What's here
 
```
public/
  index.html        Home page: what we do, "Get in touch" form, client sign-in
  portal/index.html Client portal: sign in, then request work (with file uploads)
  config.js         All settings (Supabase keys, Make webhook URLs) in one place
  404.html          Not-found page
  robots.txt        Keeps the portal out of search engines
wrangler.jsonc      Cloudflare Workers settings (serves the public/ folder)
```
 
Plain HTML, CSS and JavaScript. No build step.
 
## Settings (public/config.js)
 
| Setting | What it's for |
|---|---|
| `SUPABASE_URL`, `SUPABASE_ANON_KEY` | Emailed sign-in links for clients (portal). Leave empty for demo mode. |
| `CONTACT_WEBHOOK_URL` | Make.com webhook for the "Get in touch" form. |
| `REQUEST_WEBHOOK_URL` | Make.com webhook for client work requests. Can be the same as above. |
 
Everything in `config.js` is public. That's expected for the Supabase anon key and the webhook URLs. Never put secret keys in this file.
 
Every submission includes a `source` field so one Make scenario can route all forms:
- `pixelandbyte.com contact form`
- `client portal request` (also includes `access_token` so Make can verify the client with Supabase)
## Deploy on Cloudflare
 
1. In the Cloudflare dashboard: **Workers & Pages > Create > Import a repository**, and pick this repo.
2. Deploy command: `npx wrangler deploy` (no build command needed).
3. Add the custom domain `pixelandbyte.com` under the Worker's **Settings > Domains & Routes**. The domain's DNS must be on Cloudflare.
Every push to `main` redeploys the site.
 
## Before going live
 
- [ ] Fill in `public/config.js`.
- [ ] **Make:** end each scenario with a **Webhook response** module (status 200) and add the header `Access-Control-Allow-Origin: https://pixelandbyte.com`. Without it, the forms may show an error even when Make received the data.
- [ ] **Make:** for portal requests, verify `access_token` with Supabase before accepting.
- [ ] **Make:** check the webhook file-size limit against the portal's 20 MB per-file limit (`MAX_FILE_MB` in `portal/index.html`).
- [ ] **Supabase:** add `https://pixelandbyte.com/portal/` to Authentication > URL Configuration > Redirect URLs, then invite each client under Authentication > Users.
- [ ] Review the wording on the home page project cards.
- [ ] Test end to end: contact form, sign-in link from a phone, work request with a file.
## Planned
 
- Replace Supabase sign-in with **Cloudflare Access** (email one-time PIN) on `/portal/`.
- Receive form posts with a Worker on `pixelandbyte.com/api/...` and forward them to Make (removes the cross-site issue).
- Add **Cloudflare Turnstile** spam protection to the public form.
 
