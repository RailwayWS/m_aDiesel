import type { ReactNode } from "react";
import { contacts, telHref } from "../data";
import { useReveal } from "../hooks";

// Only facts visible in our own photos, the brief or supplied by the client. No invented figures.
const facts: { figure: string; label: string; note: ReactNode }[] = [
    {
        figure: "24/7",
        label: "Emergency filling contact numbers",
        note: (
            <ul className="proof__phones">
                {contacts.map((c) => (
                    <li key={c.name}>
                        <a href={telHref(c.phone)}>
                            {c.phone} - {c.name}
                        </a>
                    </li>
                ))}
            </ul>
        ),
    },
    {
        figure: "80 000 L",
        label: "Depot holding capacity",
        note: "Parow Depot",
    },
    {
        figure: "5",
        label: "Ways we refuel you",
        note: "From generators to Bulk deliveries",
    },
];

export function Proof() {
    const ref = useReveal<HTMLDivElement>();
    return (
        <section className="proof" aria-label="M&A Diesel at a glance">
            <div className="container proof__grid reveal-group" ref={ref}>
                {facts.map((f, i) => (
                    <div
                        className="proof__item reveal"
                        key={f.label}
                        style={{ "--i": i } as React.CSSProperties}
                    >
                        <p className="proof__figure">{f.figure}</p>
                        <p className="proof__label">{f.label}</p>
                        <div className="proof__note">{f.note}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
