import { AppStoreButton } from '../components/AppStoreButton'
import { Seo } from '../components/Seo'
import { site } from '../config/site'

export function Download() {
  return (
    <section className="wrap download-page">
      <Seo
        title={`Download ${site.appName}`}
        description={`Get ${site.appName} on the App Store.`}
        path="/download"
      />
      <h1>Download</h1>
      <p>
        {site.appName} is on the App Store for iPhone. There is no Android
        listing on this site.
      </p>
      <div className="actions">
        <AppStoreButton />
      </div>
    </section>
  )
}
