import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { site } from '../config/site'

export function Terms() {
  return (
    <article className="wrap legal">
      <Seo
        title={`Terms — ${site.appName}`}
        description={`Terms for ${site.appName}.`}
        path="/terms"
      />
      <h1>Terms & Conditions</h1>
      <p className="meta">
        {site.appName}
        {site.termsStatus === 'draft' ? ' · Draft' : ''}
        <br />
        Last updated {site.lastUpdated}
      </p>

      <h2>Using this site</h2>
      <p>
        This website explains {site.appName} and links to the App Store. It is
        not a web wallet. By using the site or the app, you agree to these
        terms and the <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>The app</h2>
      <p>
        The product is an iOS cryptocurrency wallet. Use it only as allowed by
        law and by Apple’s terms. You are responsible for your device and any
        credentials you keep with the app.
      </p>

      <h2>Risk</h2>
      <p>
        Digital assets can lose value. Transactions on a public network may be
        irreversible. This site is not investment advice. The service is
        provided as is, to the extent the law allows.
      </p>

      <h2>Contact</h2>
      <p>
        [OFFICIAL SUPPORT EMAIL]
        <br />
        [LEGAL COMPANY NAME]
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </article>
  )
}
