# sathak — Inferploy website

@HANDOFF.md

## What it is
Static marketing site for **Inferploy**, a startup platform: homepage, about us,
startup cards, "apply now" (for people) and "apply as startup" forms, thank-you page.
No build step, no backend.

## Layout
- `*.html` (root) — pages: `index.html`, `about_us.html`, `apply_now.html`,
  `apply_as_startup.html`, `start-up-cards-all.html`, `start_up1.html`, `thankyou.html`.
- `components/` — HTML fragments (navbar, header, footer, partners, streams,
  testimonials, startup cards) injected at runtime with jQuery `$('#id').load(...)`.
- `css/` — one stylesheet per page/component, plus vendored Bootstrap 4.5.2.
- `js/` — vendored jQuery 3.5.1 and Bootstrap 4.5.2, plus `nav.js`, `footer.js`, `testimonial.js`.
- `Images/` — logos, headers, partner logos.
- CDN deps: Font Awesome 5.0.8, slick-carousel 1.6.0.

## Run
Components load via AJAX, so opening files with `file://` breaks them. Serve the folder:
`python3 -m http.server 8000` then open http://localhost:8000.

## Forms
`apply_now.html` and `apply_as_startup.html` POST directly to Google Forms
`formResponse` endpoints into a hidden iframe, then redirect to `thankyou.html`.
Changing form fields requires matching the Google Form `entry.*` ids.

## Conventions
- Keep it dependency-free static HTML/CSS/JS unless a decision says otherwise.
- New shared UI goes in `components/` + its own CSS file in `css/`.

## Pitfalls
- Repo is public: never commit secrets, form-owner data, or applicant data.
- `inferploy-logo.png` exists both in root and `Images/`; pages use `Images/`.
