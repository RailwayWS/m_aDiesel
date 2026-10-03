type P = { className?: string }

export const PhoneIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)

export const PinIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ArrowIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const CameraIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

const Svg = ({ className, children }: P & { children: React.ReactNode }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

export const BuildingIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4" />
  </Svg>
)

export const MailIcon = ({ className }: P) => (
  <Svg className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </Svg>
)

export const FuelIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M2 22h14M7 7h4M15 11h2a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V8l-3-3" />
  </Svg>
)

export const DropIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 2.7s7 7.3 7 12.3a7 7 0 0 1-14 0c0-5 7-12.3 7-12.3z" />
  </Svg>
)

export const CalendarIcon = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Svg>
)

export const ShieldIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
)

export const TruckIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M1 4h14v12H1zM15 9h4l4 4v3h-8" />
    <circle cx="6" cy="18.5" r="2" />
    <circle cx="18" cy="18.5" r="2" />
  </Svg>
)

export const TagIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" />
    <circle cx="7" cy="7" r="1.5" />
  </Svg>
)

export const ChevronIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
)

// Service glyphs for the honeycomb infographic
export const AlarmIcon = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2.5 2.5M5 3 2 6M19 3l3 3" />
  </Svg>
)

export const TankerIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M2 15V9a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v6M15 10h3.5l3.5 3.5V17h-2M2 17h1M9 17h8" />
    <circle cx="6" cy="17.5" r="2" />
    <circle cx="19" cy="17.5" r="2" />
  </Svg>
)

export const HomeIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="m3 10.5 9-7.5 9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  </Svg>
)

export const BoltIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  </Svg>
)

export const ExcavatorIcon = ({ className }: P) => (
  <Svg className={className}>
    <path d="M3 17h11a2.5 2.5 0 0 1 0 5H3a2.5 2.5 0 0 1 0-5zM4 17v-5h6l2 5M10 12V8l6-4 5 5-2 3M19 12l-2 3h3" />
  </Svg>
)
