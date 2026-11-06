import { Link } from 'react-router-dom'
import { site } from '../config/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h2>{site.appName}</h2>
          <p>
            An iOS wallet site. No web wallet, no on-site transfers.
          </p>
        </div>
        <div>
          <h2>Site</h2>
          <Link to="/">Home</Link>
          <Link to="/download">Download</Link>
          <Link to="/#faq">FAQ</Link>
        </div>
        <div>
          <h2>Legal</h2>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {site.copyrightYear} {site.appName}</p>
      </div>
    </footer>
  )
}
