import { AppStoreButton } from '../components/AppStoreButton'
import { PhoneMocks } from '../components/PhoneMocks'
import { Seo } from '../components/Seo'
import { site } from '../config/site'

const faqs = [
  {
    q: `What is ${site.appName}?`,
    a: 'An iOS app for holding cryptocurrency. This website is only here to explain the product and point you to the App Store.',
  },
  {
    q: 'Can I send crypto from this website?',
    a: 'No. Nothing on this site can access a wallet or move funds. Use the iPhone app.',
  },
  {
    q: 'Where do I download it?',
    a: 'On the Apple App Store. There is no Android or web version listed here.',
  },
  {
    q: 'How do I reach support?',
    a: 'Use the contact details on the Privacy Policy page once they are published.',
  },
]

export function Home() {
  return (
    <>
      <Seo
        title={`${site.appName}`}
        description={site.description}
        path="/"
      />

      <section className="wrap hero">
        <div>
          <p className="kicker">iOS</p>
          <h1>A wallet for iPhone.</h1>
          <p className="lede">
            {site.appName} is a mobile app. This page is information only — it
            does not open a wallet in the browser.
          </p>
          <div className="actions">
            <AppStoreButton />
          </div>
        </div>
        <PhoneMocks />
      </section>

      <section className="wrap section">
        <h2>On this site</h2>
        <div className="cards cards-3">
          <article className="card">
            <h3>iPhone app</h3>
            <p>The product lives in iOS. Open it from the App Store, not from a web login.</p>
          </article>
          <article className="card">
            <h3>App Store only</h3>
            <p>Download is through Apple. We do not offer Play Store or file downloads.</p>
          </article>
          <article className="card">
            <h3>Quiet by design</h3>
            <p>No trading terminal here. Just the listing, answers, and legal pages.</p>
          </article>
        </div>
      </section>

      <section className="wrap section faq-section" id="faq">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="band">
          <div>
            <h2>Get the app</h2>
            <p className="section-intro">Available on the App Store for iPhone.</p>
          </div>
          <AppStoreButton />
        </div>
      </section>
    </>
  )
}
