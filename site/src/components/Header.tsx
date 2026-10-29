import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { PhoneIcon } from './Icons'
import { openCallPopup } from '../callPopup'
import { menuContacts, navHref, navLinks, primaryPhone, telHref, type Page } from '../data'
import { useActiveSection, useScrolled } from '../hooks'

const sectionIds = navLinks.map((l) => l.id)

export function Header({ page = 'home' }: { page?: Page }) {
  const scrolled = useScrolled()
  const section = useActiveSection(sectionIds)
  // Off the home page the pill marks the page itself rather than a scrolled-to section.
  const active = page === 'home' ? section : page
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
    const place = () => {
      const left = link.offsetLeft
      const right = list.offsetWidth - left - link.offsetWidth
      overlay.style.opacity = '1'
      overlay.style.clipPath = `inset(0 ${right}px 0 ${left}px round 9999px)`
    }
    if (page === 'home') return place()
    // On other pages the pill marks the page you're on: it's already there, so it doesn't slide in.
    // Measured again once the webfonts land, since they change the link widths.
    const snap = () => {
      overlay.style.transition = 'none'
      place()
      void overlay.offsetWidth
      overlay.style.transition = ''
    }
    snap()
    document.fonts.ready.then(snap)
  }, [active, page])

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
        <a href={page === 'home' ? '#top' : '/'} className="pill__logo" aria-label={page === 'home' ? 'M&A Diesel — back to top' : 'M&A Diesel — home'}>
          <Logo />
        </a>

        <div className="pill__links">
          <ul ref={linksRef}>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={navHref(l, page)} data-id={l.id} aria-current={active === l.id ? (l.href ? 'page' : 'true') : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="pill__active" ref={activeRef} aria-hidden="true">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={navHref(l, page)} tabIndex={-1}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a className="btn btn--emergency pill__call" href={telHref(primaryPhone)} onClick={openCallPopup}>
          <PhoneIcon className="btn__icon" />
          <span className="pill__call-label">24/7</span> Call now
        </a>

        <a className="pill__callicon" href={telHref(primaryPhone)} onClick={openCallPopup} aria-label="Call now">
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
              <a href={navHref(l, page)} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mmenu__phones">
          {menuContacts.map((c) => (
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
