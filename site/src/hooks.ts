import { useEffect, useRef, useState } from 'react'

// Flips data-revealed="true" once, when the element first scrolls into view.
// The CSS owns the motion; this only reports visibility.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Wait for the block's photos to decode so the roller-door reveal never uncovers an empty frame.
    const imagesReady = () =>
      Promise.all([...el.querySelectorAll('img')].map((img) => img.decode().catch(() => undefined)))
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        el.querySelectorAll('img[loading="lazy"]').forEach((img) => ((img as HTMLImageElement).loading = 'eager'))
        imagesReady().then(() => (el.dataset.revealed = 'true'))
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

// Which section id currently sits under the sticky nav.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])
  return active
}

export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function useInView(id: string) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [id])
  return inView
}
