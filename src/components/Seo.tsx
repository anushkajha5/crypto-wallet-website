import { useEffect } from 'react'
import { canonicalUrl, site } from '../config/site'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => el!.setAttribute(key, value))
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  useEffect(() => {
    const fullTitle = title.includes(site.appName) ? title : `${title} · ${site.appName}`
    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: site.allowIndexing ? 'index,follow' : 'noindex,nofollow',
    })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: site.appName,
    })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    const canonical = canonicalUrl(path)
    upsertLink('canonical', canonical)
    if (canonical) {
      upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    } else {
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }

    const ogImage = site.productionOrigin
      ? `${site.productionOrigin.replace(/\/$/, '')}/logo.svg`
      : ''
    if (ogImage) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove()
    }
  }, [title, description, path])

  return null
}
