import { site } from '../config/site'

export function AppStoreButton({ className = '' }: { className?: string }) {
  const live = Boolean(site.appStoreUrl.trim())
  const href = live ? site.appStoreUrl : '/download'

  return (
    <a
      className={`store-btn ${className}`}
      href={href}
      target={live ? '_blank' : undefined}
      rel={live ? 'noreferrer' : undefined}
      aria-label={`Download ${site.appName} on the App Store`}
    >
      <svg viewBox="0 0 16 20" fill="currentColor" aria-hidden="true">
        <path d="M13.2 10.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-3.9 2.5-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.7 3.1-.7s1.8.7 3.1.7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.5-1-2.5-3.1zM11 3.8c.6-.8 1.1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3z" />
      </svg>
      <span>
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}
