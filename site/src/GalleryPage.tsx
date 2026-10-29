import { Header } from './components/Header'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'
import { CallBar } from './components/CallBar'
import { CallPopup } from './components/CallPopup'
import { openCallPopup } from './callPopup'
import { ArrowIcon, PhoneIcon } from './components/Icons'
import { galleryPhotos } from './gallery'
import { primaryPhone, telHref } from './data'

export default function GalleryPage() {
  return (
    <>
      <a className="skip" href="#gallery">
        Skip to content
      </a>
      <Header page="gallery" />
      <main className="gpage">
        <section className="container gintro" aria-labelledby="gallery-title">
          <p className="eyebrow eyebrow--light hero__stagger" style={{ '--i': 0 } as React.CSSProperties}>
            Gallery
          </p>
          <h1 id="gallery-title" className="gintro__title">
            <span className="hero__line" style={{ '--i': 1 } as React.CSSProperties}>
              <span>Our depot. Our fleet.</span>
            </span>
            <span className="hero__line" style={{ '--i': 2 } as React.CSSProperties}>
              <span>Your fuel, delivered.</span>
            </span>
          </h1>
          {/* Copy taken from the home page's About section — the gallery adds no new claims */}
          <p className="gintro__sub hero__stagger" style={{ '--i': 3 } as React.CSSProperties}>
            M&amp;A Diesel operates from its bulk fuel depot at 49 Beacon Way, Beaconvale industrial, Parow, where diesel
            is held in bunded storage and loaded directly into our own tanker trucks and bowser trailers for delivery to
            your site.
          </p>
        </section>

        <section id="gallery" className="container gwall-wrap" aria-label="Photos">
          <Gallery photos={galleryPhotos} />
        </section>

        <section className="container gcta" aria-labelledby="gcta-title">
          <h2 id="gcta-title" className="gcta__title">
            Request a free quote
          </h2>
          <div className="gcta__actions">
            <a className="btn btn--emergency btn--lg" href={telHref(primaryPhone)} onClick={openCallPopup}>
              <PhoneIcon className="btn__icon" />
              Call now
            </a>
            <a className="btn btn--ghost btn--lg" href="/#contact">
              Get a quote
              <ArrowIcon className="btn__icon btn__icon--trail" />
            </a>
          </div>
        </section>
      </main>
      <Footer page="gallery" />
      <CallBar />
      <CallPopup />
    </>
  )
}
