import { services, primaryPhone, telHref, type Service } from '../data'
import { useReveal } from '../hooks'
import { PhoneIcon } from './Icons'
import { ServiceHive } from './ServiceHive'

function ServiceRow({ s, index }: { s: Service; index: number }) {
  const ref = useReveal<HTMLLIElement>()
  return (
    <li id={`service-${s.id}`} className={`service reveal-group ${s.emergency ? 'service--feature' : ''}`} ref={ref}>
      <div className="service__media">
        <img className="reveal-img" src={s.image} alt={s.alt} loading="lazy" decoding="async" />
      </div>
      <div className="service__text">
        {s.emergency && (
          <p className="badge-247 reveal">
            <span className="pulse-dot" aria-hidden="true" /> 24/7 Emergency
          </p>
        )}
        <div className="service__head reveal" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="service__index">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="service__title">{s.title}</h3>
        </div>
        <p className="service__body reveal" style={{ '--i': 2 } as React.CSSProperties}>
          {s.body}
        </p>
        {s.emergency && (
          <a className="btn btn--emergency reveal" style={{ '--i': 3 } as React.CSSProperties} href={telHref(primaryPhone)}>
            <PhoneIcon className="btn__icon" />
            Call now · {primaryPhone}
          </a>
        )}
      </div>
    </li>
  )
}

export function Services() {
  const head = useReveal<HTMLDivElement>()
  return (
    <section className="section section--tinted" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section__head reveal-group" ref={head}>
          <p className="eyebrow reveal">What we do</p>
          <h2 id="services-title" className="section__title reveal" style={{ '--i': 1 } as React.CSSProperties}>
            Fuel, where the work is.
          </h2>
          <p className="section__intro reveal" style={{ '--i': 2 } as React.CSSProperties}>
            Five services, one phone call. Our tankers, bakkies and bowsers bring diesel to you — so your vehicles,
            machines and generators never stop for fuel.
          </p>
        </div>
        <ServiceHive />
        <ol className="services">
          {services.map((s, i) => (
            <ServiceRow key={s.id} s={s} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
