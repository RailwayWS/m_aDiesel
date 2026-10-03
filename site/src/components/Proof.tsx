import { useReveal } from '../hooks'

// Only facts visible in our own photos or the brief. No invented figures.
const facts = [
  { figure: '24/7', label: 'Emergency call-outs', note: 'Nights, weekends and public holidays' },
  { figure: '23 000 L', label: 'Per depot storage tank', note: 'Bunded bulk storage at our Parow Valley depot' },
  { figure: '5', label: 'Ways we refuel you', note: 'From one generator to a full bulk load' },
]

export function Proof() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="proof" aria-label="M&A Diesel at a glance">
      <div className="container proof__grid reveal-group" ref={ref}>
        {facts.map((f, i) => (
          <div className="proof__item reveal" key={f.label} style={{ '--i': i } as React.CSSProperties}>
            <p className="proof__figure">{f.figure}</p>
            <p className="proof__label">{f.label}</p>
            <p className="proof__note">{f.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
