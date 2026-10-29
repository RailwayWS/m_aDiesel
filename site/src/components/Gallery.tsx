import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { GalleryPhoto } from '../gallery'
import { useReveal } from '../hooks'

// Columns drift at different speeds as the page scrolls (CSS scroll-driven, see .gwall__col).
// Each value is how far a column travels each way, so neighbours never move in step.
const drift = { 2: [32, 96], 3: [48, 144, 88] } as const

const wideQuery = '(min-width: 800px)'
const subscribe = (cb: () => void) => {
  const mq = matchMedia(wideQuery)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const useColumnCount = () => (useSyncExternalStore(subscribe, () => matchMedia(wideQuery).matches) ? 3 : 2)

// Masonry: each photo goes to the currently shortest column, keeping its own aspect ratio.
function toColumns(photos: GalleryPhoto[], count: number) {
  const cols = Array.from({ length: count }, () => ({ height: 0, items: [] as number[] }))
  photos.forEach((p, i) => {
    const shortest = cols.reduce((a, b) => (b.height < a.height ? b : a))
    shortest.items.push(i)
    shortest.height += p.height / p.width
  })
  return cols.map((c) => c.items)
}

const pad = (n: number) => String(n).padStart(2, '0')

export function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const count = useColumnCount()
  const columns = toColumns(photos, count)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <div className="gwall">
        {columns.map((items, c) => (
          <ul key={c} className="gwall__col" style={{ '--drift': `${drift[count][c]}px` } as React.CSSProperties}>
            {items.map((i) => (
              <Tile key={photos[i].slug} photo={photos[i]} column={c} onOpen={() => open(i)} />
            ))}
          </ul>
        ))}
      </div>
      <Lightbox photos={photos} index={index} setIndex={setIndex} dialogRef={dialogRef} />
    </>
  )
}

function Tile({ photo, column, onOpen }: { photo: GalleryPhoto; column: number; onOpen: () => void }) {
  const ref = useReveal<HTMLLIElement>()
  return (
    <li className="tile" ref={ref} style={{ '--i': column } as React.CSSProperties}>
      <button type="button" className="tile__btn" onClick={onOpen} aria-haspopup="dialog">
        <span className="tile__frame" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
          <span className="tile__zoom">
            <img
              src={photo.src}
              srcSet={photo.srcSet}
              sizes="(min-width: 800px) 33vw, 50vw"
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
            />
          </span>
        </span>
      </button>
    </li>
  )
}

type LightboxProps = {
  photos: GalleryPhoto[]
  index: number
  setIndex: (i: number) => void
  dialogRef: React.RefObject<HTMLDialogElement | null>
}

function Lightbox({ photos, index, setIndex, dialogRef }: LightboxProps) {
  const photo = photos[index]
  const total = photos.length
  const step = (by: number) => setIndex((index + by + total) % total)
  const close = () => dialogRef.current?.close()
  const swipeX = useRef<number | null>(null)

  // Warm the neighbours so stepping through feels instant.
  useEffect(() => {
    for (const by of [1, -1]) new Image().src = photos[(index + by + total) % total].large
  }, [index, photos, total])

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Photo viewer"
      onClick={(e) => e.target === e.currentTarget && close()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1)
        else if (e.key === 'ArrowLeft') step(-1)
      }}
    >
      <div className="lightbox__bar">
        <p className="lightbox__count" aria-live="polite">
          {pad(index + 1)} <span>/ {pad(total)}</span>
        </p>
        <button type="button" className="lightbox__btn" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <figure
        className="lightbox__figure"
        onPointerDown={(e) => {
          if (e.pointerType !== 'mouse') swipeX.current = e.clientX
        }}
        onPointerUp={(e) => {
          if (swipeX.current === null) return
          const dx = e.clientX - swipeX.current
          swipeX.current = null
          if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1)
        }}
      >
        {/* Keyed so a new photo never shows the previous one while it loads */}
        <img
          key={photo.slug}
          src={photo.large}
          srcSet={photo.srcSet}
          sizes="100vw"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
        />
      </figure>

      <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous photo">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next photo">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </dialog>
  )
}
