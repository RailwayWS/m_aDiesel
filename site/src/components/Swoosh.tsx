// The stripe that runs along every vehicle in the fleet. Used once per page, closing the hero.
export function Swoosh({ className = '' }: { className?: string }) {
  return (
    <div className={`swoosh ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
        <path className="swoosh__pale" d="M0 58 C 360 4, 760 4, 1440 40 L1440 96 L0 96 Z" />
        <path className="swoosh__stroke" d="M0 70 C 380 18, 780 20, 1440 52" />
        <path className="swoosh__fill" d="M0 84 C 400 34, 800 36, 1440 64 L1440 96 L0 96 Z" />
      </svg>
    </div>
  )
}
