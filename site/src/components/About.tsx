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
              Our own depot. Our own fleet.
            </h2>
            <p className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
              M&amp;A Diesel runs from a bulk fuel depot at 49 Beacon Way in Beaconvale, Parow Valley. Diesel is held in
              bunded storage on site and loaded straight into our own tankers, bakkies and bowser trailers.
            </p>
            <p className="reveal" style={{ '--i': 3 } as React.CSSProperties}>
              That means no middlemen between the tank and your machine. When you call, you speak to the people who
              dispatch the truck — and very often to the person who drives it.
            </p>
            <p className="reveal" style={{ '--i': 4 } as React.CSSProperties}>
              The depot also has a bulk filling point for retail and trade customers who prefer to collect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
