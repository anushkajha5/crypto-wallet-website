import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { site } from '../config/site'

export function Privacy() {
  return (
    <article className="wrap legal">
      <Seo
        title={`Privacy Policy — ${site.appName}`}
        description={`Privacy Policy for ${site.appName}.`}
        path="/privacy-policy"
      />
      <h1>Privacy Policy</h1>
      <p className="meta">
        {site.appName}
        {site.privacyStatus === 'draft' ? ' · Draft' : ''}
        <br />
        Last updated {site.lastUpdated}
      </p>

      <h2>Who this covers</h2>
      <p>
        This policy applies to this website and the {site.appName} iOS app. The
        site is public and does not require an account.
      </p>

      <h2>What we collect</h2>
      <p>
        This website does not ask for a name, wallet, or payment details. If you
        email us, we will see the address and whatever you write. The iOS app
        may use information needed to run the product; that list will be updated
        when the app is final.
      </p>

      <h2>How it is used</h2>
      <p>
        To run the site, answer messages, and operate the app. We do not sell
        personal information.
      </p>

      <h2>Sharing</h2>
      <p>
        Hosting providers may process technical data to serve these pages. If
        you use a public blockchain through the app, those records can be
        visible to anyone. Do not send private keys or recovery phrases to this
        website.
      </p>

      <h2>Your requests</h2>
      <p>
        You may ask what we hold and request correction or deletion where the
        law allows. Use the contact below once it is published.
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
