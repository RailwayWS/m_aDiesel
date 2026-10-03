import { primaryPhone, telHref } from '../data'
import { useInView, useScrolled } from '../hooks'
import { PhoneIcon } from './Icons'

// Mobile only. Arrives once the hero's own call button has scrolled away,
// and steps aside while the Contact section (full of phone numbers) is on screen.
export function CallBar() {
  const pastHero = useScrolled(420)
  const contactVisible = useInView('contact')
  const show = pastHero && !contactVisible
  return (
    <a className="callbar" href={telHref(primaryPhone)} data-show={show} aria-hidden={!show} tabIndex={show ? 0 : -1}>
      <PhoneIcon className="btn__icon" />
      Call 24/7 · {primaryPhone}
    </a>
  )
}
