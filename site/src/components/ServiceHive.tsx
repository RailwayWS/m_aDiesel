import type { ComponentType } from 'react'
import { primaryPhone, services, telHref } from '../data'
import { useReveal } from '../hooks'
import { Logo } from './Logo'
import { AlarmIcon, BoltIcon, ExcavatorIcon, HomeIcon, PhoneIcon, TankerIcon } from './Icons'

// The tanker's hexagon print, put to work as the services overview.
// Seven flat-top hexes in honeycomb columns: mid · up/down · centre · up/down · mid.
// x is in hex widths, y in hex heights; `side` is where the label sits.
type Side = 'left' | 'right' | 'top' | 'bottom'
const slots: { x: number; y: number; side: Side }[] = [
  { x: 0, y: 0.5, side: 'left' },
  { x: 0.75, y: 0, side: 'top' },
  { x: 0.75, y: 1, side: 'bottom' },
  { x: 2.25, y: 0, side: 'top' },
  { x: 2.25, y: 1, side: 'bottom' },
]

const icons: Record<string, ComponentType<{ className?: string }>> = {
  emergency: AlarmIcon,
  bulk: TankerIcon,
  'door-to-door': HomeIcon,
  generator: BoltIcon,
  plant: ExcavatorIcon,
}

// Reveal order radiates out from the logo at the centre.
const ring = (x: number) => Math.abs(x - 1.5) / 0.75

export function ServiceHive() {
  const ref = useReveal<HTMLUListElement>()
  return (
    <ul className="hive reveal-group" ref={ref} aria-label="Our services at a glance">
      {services.map((s, i) => {
        const { x, y, side } = slots[i]
        const Icon = icons[s.id]
        return (
          <li
            key={s.id}
            className={`hive__item hive__item--${side}`}
            style={{ '--x': x, '--y': y, '--ring': ring(x), '--n': i + 1 } as React.CSSProperties}
          >
            <a className="hex" href={`#service-${s.id}`} aria-label={`${s.title} — see details`}>
              <span className="hex__inner">
                <Icon className="hex__icon" />
              </span>
            </a>
            <div className="hive__label">
              <p className="hive__title">{s.title}</p>
              <p className="hive__summary">{s.summary}</p>
            </div>
          </li>
        )
      })}

      <li className="hive__item hive__item--centre" style={{ '--x': 1.5, '--y': 0.5, '--ring': 0 } as React.CSSProperties} aria-hidden="true">
        <span className="hex hex--brand">
          <span className="hex__inner">
            <Logo className="hex__logo" />
          </span>
        </span>
      </li>

      <li className="hive__item hive__item--right" style={{ '--x': 3, '--y': 0.5, '--ring': 2, '--n': 6 } as React.CSSProperties}>
        <a className="hex hex--call" href={telHref(primaryPhone)} aria-label={`Call us 24/7 on ${primaryPhone}`}>
          <span className="hex__inner">
            <PhoneIcon className="hex__icon" />
            <span className="hex__tag">24/7</span>
          </span>
        </a>
        <div className="hive__label">
          <p className="hive__title">One call, any hour</p>
          <p className="hive__summary hive__phone">{primaryPhone}</p>
        </div>
      </li>
    </ul>
  )
}
