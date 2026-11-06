# Owner handover

This project is **not** App Store submission-ready. Essential legal disclosures, privacy practices and the App Store destination remain unverified. This website has not been deployed to a public HTTPS URL in this session, so pages are not yet publicly accessible for Apple’s listing.

## 1. Development completed

- Informational Vite + React website with shared header/footer
- Routes: `/`, `/download`, `/faq`, `/privacy-policy`, `/privacy` → privacy policy, `/terms`
- SPA fallback: `vercel.json`, `public/_redirects`
- Central config: `src/config/site.ts`
- Temporary name **Crypto Wallet (Demo)** used from that config
- App Store control is **Coming Soon** until `appStoreUrl` is set
- Draft Privacy Policy and Terms without claiming an iOS-app audit
- SEO tags, `noindex` while `allowIndexing` is false
- `public/robots.txt` disallows crawling; `public/sitemap.xml` is empty until a production origin exists
- Favicon and logo placeholders

## 2. Website content awaiting approval

- Final application name (replace `appName`)
- Logo and favicon
- Home/FAQ copy after real features are supplied
- Product screenshots (current phone frames are illustrative layouts)

## 3. Legal information awaiting confirmation

See `docs/PRIVACY_POLICY_OWNER_CHECKLIST.md`.

- Privacy Policy remains **Draft for Review**
- Terms remain **Draft for Review**
- Contact placeholders: `[OFFICIAL SUPPORT EMAIL]`, `[LEGAL COMPANY NAME]`, `[REGISTERED BUSINESS ADDRESS, IF APPLICABLE]`
- Dates remain `[DATE]`
- Counsel review not completed

## 4. App Store information awaiting confirmation

- Official App Store listing URL (`site.appStoreUrl`)
- Bundle / listing text alignment with this site
- Confirmed iOS-only distribution

## 5. Deployment requirements

1. Set `productionOrigin` to the live HTTPS domain (not localhost).
2. Fill `appStoreUrl` so the download control becomes a real link.
3. Complete owner checklist and legal review.
4. Set `privacyStatus` / `termsStatus` to `'published'` only after approval.
5. Set `allowIndexing` to `true` only then; update `robots.txt` and `sitemap.xml` to list production URLs.
6. Deploy with HTTPS.
7. Test the **public** Privacy Policy URL in a private window: `https://YOUR-DOMAIN/privacy-policy`.
8. Do not submit that URL to Apple until step 7 succeeds and the policy matches the live app.

### Enable the App Store button

In `src/config/site.ts`:

```ts
appStoreUrl: 'https://apps.apple.com/app/idYOUR_REAL_ID',
```

Leave it as `''` to keep Coming Soon.
