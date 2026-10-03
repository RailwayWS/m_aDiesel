import hero from '../assets/photos/hero-tanker-sunset.webp'
import { PhoneIcon, ArrowIcon } from './Icons'
import { Swoosh } from './Swoosh'
import { primaryPhone, telHref } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero__img" src={hero} alt="" fetchPriority="high" />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="badge-247 hero__stagger" style={{ '--i': 0 } as React.CSSProperties}>
          <span className="pulse-dot" aria-hidden="true" /> 24/7 Emergency
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line" style={{ '--i': 1 } as React.CSSProperties}>
            <span>Bulk diesel</span>
          </span>
          <span className="hero__line" style={{ '--i': 2 } as React.CSSProperties}>
            <span>delivered.</span>
          </span>
        </h1>
        <p className="hero__sub hero__stagger" style={{ '--i': 3 } as React.CSSProperties}>
          Emergency fills, bulk loads and on-site refuelling for generators, plant and fleets across Cape Town — day or
          night, from our depot in Parow Valley.
        </p>
        <div className="hero__ctas hero__stagger" style={{ '--i': 4 } as React.CSSProperties}>
          <a className="btn btn--emergency btn--lg" href={telHref(primaryPhone)}>
            <PhoneIcon className="btn__icon" />
            Call {primaryPhone}
          </a>
          <a className="btn btn--ghost btn--lg" href="#contact">
            Get a quote
            <ArrowIcon className="btn__icon btn__icon--trail" />
          </a>
        </div>
      </div>
      <Swoosh className="hero__swoosh" />
    </section>
  )
}
