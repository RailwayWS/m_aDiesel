import { Logo } from './Logo'
import { address, contacts, navLinks, telHref } from '../data'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo className="footer__logo" />
          <p className="footer__tag">Bulk diesel delivered · 24/7</p>
        </div>
        <div>
          <h2 className="footer__head">Call</h2>
          <ul>
            {contacts.map((c) => (
              <li key={c.name}>
                <a href={telHref(c.phone)}>
                  {c.name} · {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer__head">Depot</h2>
          <p>
            {address.street}
            <br />
            {address.area}
            <br />
            {address.suburb}
          </p>
        </div>
        <div>
          <h2 className="footer__head">Explore</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__base">© {year} M&amp;A Diesel. All rights reserved.</div>
    </footer>
  )
}
