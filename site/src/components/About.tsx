import depot from '../assets/photos/depot-tanks.webp'
import { useReveal } from '../hooks'

export function About() {
  const block = useReveal<HTMLDivElement>()
  return (
    <section className="section section--tinted" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about reveal-group" ref={block}>
          <div className="about__media">
            <img className="reveal-img" src={depot} alt="Bunded diesel storage tanks at the M&A Diesel depot" loading="lazy" />
          </div>
          <div className="about__text">
            <p className="eyebrow reveal">About M&amp;A Diesel</p>
            <h2 id="about-title" className="section__title reveal" style={{ '--i': 1 } as React.CSSProperties}>
              Our depot. Our fleet. Your fuel, delivered.
            </h2>
            <p className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
              M&amp;A Diesel operates from its bulk fuel depot at 49 Beacon Way, Beaconvale industrial, Parow, where
              diesel is held in bunded storage and loaded directly into our own tanker trucks and bowser trailers for
              delivery to your site.
            </p>
            <p className="reveal" style={{ '--i': 3 } as React.CSSProperties}>
              <strong>Direct supply. Greater control. Personal service.</strong>
            </p>
            <p className="reveal" style={{ '--i': 4 } as React.CSSProperties}>
              By managing our own depot, vehicles and dispatch operations, we maintain direct control over the delivery
              process. When you call M&amp;A Diesel, you deal directly with the team coordinating your delivery — and
              often with the very person delivering your fuel.
            </p>
            <p className="reveal" style={{ '--i': 5 } as React.CSSProperties}>
              Prefer to collect your diesel? Our depot features two dedicated bulk filling points for wholesale
              customers, with a minimum collection volume of 1,500 litres per filling.
            </p>
            <p className="reveal" style={{ '--i': 6 } as React.CSSProperties}>
              Whether you require delivery directly to your site or prefer to collect in bulk, M&amp;A Diesel offers a
              practical, direct and dependable diesel supply solution tailored to your operation.
            </p>
            <p className="tagline reveal" style={{ '--i': 7 } as React.CSSProperties}>
              Bulk diesel collection — direct from our depot
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
