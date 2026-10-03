import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { PhoneIcon } from './Icons'
import { contacts, navLinks, primaryPhone, telHref } from '../data'
import { useActiveSection, useScrolled } from '../hooks'

const sectionIds = navLinks.map((l) => l.id)

export function Header() {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)
  const activeRef = useRef<HTMLUListElement>(null)

  // Active-link pill: a navy copy of the link list, clipped down to the active link.
  // Animating the clip (not a moving background) keeps the text colour change perfectly in sync.
  useLayoutEffect(() => {
    const list = linksRef.current
    const overlay = activeRef.current
    if (!list || !overlay) return
    const link = active ? list.querySelector<HTMLElement>(`[data-id="${active}"]`) : null
    if (!link) {
      overlay.style.opacity = '0'
      return
    }
    const left = link.offsetLeft
    const right = list.offsetWidth - left - link.offsetWidth
    overlay.style.opacity = '1'
    overlay.style.clipPath = `inset(0 ${right}px 0 ${left}px round 9999px)`
  }, [active])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header className="header" data-scrolled={scrolled} ref={headerRef}>
      <nav className="pill" aria-label="Main">
        <a href="#top" className="pill__logo" aria-label="M&A Diesel — back to top">
          <Logo />
        </a>

        <div className="pill__links">
          <ul ref={linksRef}>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} data-id={l.id} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="pill__active" ref={activeRef} aria-hidden="true">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} tabIndex={-1}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a className="btn btn--emergency pill__call" href={telHref(primaryPhone)}>
          <PhoneIcon className="btn__icon" />
          <span className="pill__call-label">24/7</span> {primaryPhone}
        </a>

        <a className="pill__callicon" href={telHref(primaryPhone)} aria-label={`Call ${primaryPhone}`}>
          <PhoneIcon />
        </a>

        <button
          className="pill__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className="mmenu" data-open={open} inert={!open}>
        <ul>
          {navLinks.map((l, i) => (
            <li key={l.id} style={{ '--i': i } as React.CSSProperties}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mmenu__phones">
          {contacts.map((c) => (
            <a key={c.name} href={telHref(c.phone)} className="mmenu__phone">
              <span>{c.name}</span>
              {c.phone}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
