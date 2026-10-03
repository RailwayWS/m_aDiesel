import { useState, type FormEvent, type ReactNode } from 'react'
import backdrop from '../assets/photos/emergency-tanker-dusk.webp'
import { address, contacts, primaryPhone, telHref, waHref } from '../data'
import { useReveal } from '../hooks'
import {
  ArrowIcon,
  BuildingIcon,
  CalendarIcon,
  ChevronIcon,
  DropIcon,
  FuelIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  TagIcon,
  TruckIcon,
} from './Icons'

const uses = ['Generator', 'Plant & machinery', 'Fleet vehicles', 'Farm equipment', 'Marine vessel', 'Bulk storage tank', 'Other']

const trust = [
  { icon: ShieldIcon, label: 'Reliable supply' },
  { icon: TruckIcon, label: '24/7 delivery' },
  { icon: TagIcon, label: 'Competitive pricing' },
  { icon: DropIcon, label: 'Quality fuel' },
]

type Errors = Partial<Record<'name' | 'phone', string>>

function Field({
  id,
  label,
  icon,
  error,
  children,
}: {
  id: string
  label: ReactNode
  icon: ReactNode
  error?: string
  children: ReactNode
}) {
  return (
    <div className="qfield" data-invalid={!!error}>
      <label className="qfield__box" htmlFor={id}>
        <span className="qfield__icon">{icon}</span>
        <span className="qfield__body">
          <span className="qfield__label">{label}</span>
          {children}
        </span>
      </label>
      {error && (
        <p className="qfield__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const trustRef = useReveal<HTMLUListElement>()
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  // No backend yet: the form composes a WhatsApp message to the depot line.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const next: Errors = {}
    if (!get('name')) next.name = 'Please tell us who the quote is for.'
    if (get('phone').replace(/\D/g, '').length < 9) next.phone = 'Enter a number we can call you back on.'
    setErrors(next)
    if (Object.keys(next).length) return

    const text = [
      'Quote request',
      `Name / company: ${get('name')}`,
      `Phone: ${get('phone')}`,
      get('email') && `Email: ${get('email')}`,
      get('address') && `Delivery address: ${get('address')}`,
      get('use') && `Diesel for: ${get('use')}`,
      get('litres') && `Litres: ${get('litres')}`,
      get('date') && `Preferred date: ${get('date')}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waHref(primaryPhone, text), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <img className="contact__backdrop" src={backdrop} alt="" loading="lazy" decoding="async" />

      <div className="container contact__grid reveal-group" ref={ref}>
        <div className="contact__info">
          <p className="eyebrow eyebrow--light reveal">Get in touch</p>
          <h2 id="contact-title" className="contact__title reveal" style={{ '--i': 1 } as React.CSSProperties}>
            Request a <span>free quote</span>
          </h2>
          <p className="contact__intro reveal" style={{ '--i': 2 } as React.CSSProperties}>
            Fill in the form and our team will get back to you with a competitive quote as soon as possible. Need
            diesel right now? Call — we answer 24/7.
          </p>

          <ul className="phones">
            {contacts.map((c, i) => (
              <li key={c.name} className="reveal" style={{ '--i': 3 + i } as React.CSSProperties}>
                <a className="phone-row" href={telHref(c.phone)}>
                  <span className="phone-row__icon">
                    <PhoneIcon />
                  </span>
                  <span className="phone-row__name">{c.name}</span>
                  <span className="phone-row__num">{c.phone}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            className="addr reveal"
            style={{ '--i': 6 } as React.CSSProperties}
            href="https://www.google.com/maps/search/?api=1&query=49+Beacon+Way,+Beaconvale,+Parow+Valley,+Cape+Town"
            target="_blank"
            rel="noopener"
          >
            <PinIcon className="addr__icon" />
            <span>
              {address.street}, {address.area}
              <br />
              {address.suburb}
              <span className="addr__link">
                Get directions <ArrowIcon />
              </span>
            </span>
          </a>
        </div>

        <form className="quote reveal" style={{ '--i': 2 } as React.CSSProperties} onSubmit={onSubmit} noValidate>
          <Field id="q-name" label="Company / Name *" icon={<BuildingIcon />} error={errors.name}>
            <input id="q-name" name="name" autoComplete="organization" placeholder="e.g. Cape Earthworks" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'q-name-error' : undefined} />
          </Field>
          <div className="quote__row">
            <Field id="q-phone" label="Phone *" icon={<PhoneIcon />} error={errors.phone}>
              <input id="q-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 082 123 4567" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'q-phone-error' : undefined} />
            </Field>
            <Field id="q-email" label={<>Email <em>(optional)</em></>} icon={<MailIcon />}>
              <input id="q-email" name="email" type="email" autoComplete="email" placeholder="you@company.co.za" />
            </Field>
          </div>
          <Field id="q-address" label="Delivery address" icon={<PinIcon />}>
            <input id="q-address" name="address" autoComplete="street-address" placeholder="Street address, suburb, city" />
          </Field>
          <Field id="q-use" label="What is the diesel for?" icon={<FuelIcon />}>
            <select id="q-use" name="use" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              {uses.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
            <ChevronIcon className="qfield__chevron" />
          </Field>
          <div className="quote__row">
            <Field id="q-litres" label="Total amount (litres)" icon={<DropIcon />}>
              <input id="q-litres" name="litres" inputMode="numeric" placeholder="e.g. 5 000" />
            </Field>
            <Field id="q-date" label={<>Preferred date <em>(optional)</em></>} icon={<CalendarIcon />}>
              <input id="q-date" name="date" type="date" />
            </Field>
          </div>

          <button className="btn btn--light btn--block btn--lg quote__submit" type="submit">
            Get pricing
            <ArrowIcon className="btn__icon btn__icon--trail" />
          </button>
          <p className="quote__hint">Opens WhatsApp with your details filled in — just press send.</p>
          <div role="status">
            {sent && <p className="notice-success">WhatsApp opened in a new tab. For urgent fuel, call us instead.</p>}
          </div>
        </form>
      </div>

      <div className="container">
        <ul className="trust reveal-group" ref={trustRef}>
          {trust.map(({ icon: Icon, label }, i) => (
            <li key={label} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <Icon className="trust__icon" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
