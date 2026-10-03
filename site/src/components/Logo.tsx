// Redrawn from the oval decal on the fleet: navy oval, white keyline, white serif lettering.
// textLength pins each word's width so the lettering stays centred inside the inner ring
// whatever serif the browser ends up rendering.
export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 124" role="img" aria-label="M&A Diesel">
      <ellipse cx="100" cy="62" rx="98" ry="60" fill="#03326A" stroke="#fff" strokeWidth="2" />
      <ellipse cx="100" cy="62" rx="86" ry="50" fill="none" stroke="#fff" strokeWidth="3" />
      <g fill="#fff" fontFamily="'Noto Serif', Georgia, 'Times New Roman', serif" fontWeight="700" textAnchor="middle">
        <text x="100" y="56" fontSize="30" textLength="84" lengthAdjust="spacingAndGlyphs">
          M&amp;A
        </text>
        <text x="100" y="89" fontSize="27" textLength="118" lengthAdjust="spacingAndGlyphs">
          DIESEL
        </text>
      </g>
    </svg>
  )
}
