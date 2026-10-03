import { team, telHref, type TeamMember } from '../data'
import { useReveal } from '../hooks'
import { CameraIcon, PhoneIcon } from './Icons'

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

function Member({ m, i }: { m: TeamMember; i: number }) {
  return (
    <li className="member reveal" style={{ '--i': i } as React.CSSProperties}>
      <div className="member__photo">
        {m.photo ? (
          <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" decoding="async" />
        ) : (
          <>
            <span className="member__initials" aria-hidden="true">
              {initials(m.name)}
            </span>
            <span className="member__pending" aria-hidden="true">
              <CameraIcon />
            </span>
          </>
        )}
      </div>
      <div className="member__body">
        <h3 className="member__name">{m.name}</h3>
        <p className="member__role">{m.role}</p>
        {m.phone && (
          <a className="member__phone" href={telHref(m.phone)}>
            <PhoneIcon />
            {m.phone}
          </a>
        )}
      </div>
    </li>
  )
}

export function Team() {
  const head = useReveal<HTMLDivElement>()
  const grid = useReveal<HTMLUListElement>()
  return (
    <section className="section" id="team" aria-labelledby="team-title">
      <div className="container">
        <div className="section__head reveal-group" ref={head}>
          <p className="eyebrow reveal">The people behind M&amp;A Diesel</p>
          <h2 id="team-title" className="section__title reveal" style={{ '--i': 1 } as React.CSSProperties}>
            Our team.
          </h2>
          <p className="section__intro reveal" style={{ '--i': 2 } as React.CSSProperties}>
            A dedicated crew keeping your business moving — from the depot and the workshop to the driver at your gate.
          </p>
        </div>
        <ul className="team reveal-group" ref={grid}>
          {team.map((m, i) => (
            <Member key={m.name} m={m} i={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
