# QR → Details Demo

This project gives you a URL you can encode in a QR code. When scanned, it opens a webpage that shows details based on `?id=...`.

Works on **both Netlify** and **Vercel** with the same repo.

## Quick Start (Netlify)

1. Create a new repo on GitHub and push these files.
2. Go to https://app.netlify.com → **Add new site** → **Import from Git**.
3. Accept defaults. After deploy, your site will be like: `https://YOUR-SITE.netlify.app`.
4. Visit `https://YOUR-SITE.netlify.app/?id=ABC123`

> The `netlify.toml` maps `/api/*` -> `/.netlify/functions/*`, so the frontend uses `/api/getDetail`.

## Quick Start (Vercel)

1. Create a new repo on GitHub and push these files.
2. Go to https://vercel.com → **New Project** → Import the repo → Deploy.
3. Visit `https://YOUR-APP.vercel.app/?id=ABC123`

> The API route is `/api/getDetail` (Next-style serverless function).

## Modify the Data

Edit one (or both) files:
- `netlify/functions/getDetail.js`
- `api/getDetail.js`

Replace the in-memory `details` object with your own data, or connect a DB.

## Generate a QR code

Your QR URL will look like:
```
https://YOUR-DOMAIN/?id=ABC123
```

If you use Python:

```bash
pip install segno pillow
python make_qr.py "https://YOUR-DOMAIN/?id=ABC123" my_qr
```

This creates `my_qr.svg` and `my_qr.png`.

## Local Testing (Optional)

**Netlify CLI**:
```bash
npm i -g netlify-cli
netlify dev
# open http://localhost:8888/?id=ABC123
```

**Vercel CLI**:
```bash
npm i -g vercel
vercel dev
# open http://localhost:3000/?id=ABC123
```

## Notes
- Keep a **quiet zone** around the QR code (2–4 modules) for reliable scanning.
- Use higher error correction for printing (`error='Q'` or `H`) if the QR might get damaged.
