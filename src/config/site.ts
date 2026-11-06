/**
 * Single source of truth for branding, URLs and publication flags.
 * Replace placeholders before production indexing or App Store submission.
 */
export const site = {
  appName: 'Crypto Wallet (Demo)',
  description:
    'Informational website for Crypto Wallet (Demo), an iOS cryptocurrency wallet application. This website does not provide web-based wallet or transaction functionality.',
  copyrightYear: 2026,
  lastUpdated: '[DATE]',
  effectiveDate: '[DATE]',
  legalEntity: '',
  supportEmail: '',
  address: '',
  /** Set to the live Apple App Store listing. Leave empty until the real URL exists. */
  appStoreUrl: '',
  /** Production origin only, e.g. https://example.com — never localhost. */
  productionOrigin: '',
  /**
   * Keep false until the production domain is live AND legal copy is approved.
   * When false, pages send noindex and robots.txt disallows crawling.
   */
  allowIndexing: false,
  privacyStatus: 'draft' as 'draft' | 'published',
  termsStatus: 'draft' as 'draft' | 'published',
}

export function isAppStoreLive() {
  return Boolean(site.appStoreUrl.trim())
}

export function canonicalUrl(path: string) {
  if (!site.productionOrigin) return ''
  const origin = site.productionOrigin.replace(/\/$/, '')
  if (path === '/') return `${origin}/`
  return `${origin}${path}`
}
