import { contacts, telHref } from '../data'
import { callPopupId } from '../callPopup'

// Let the exit animation finish before the dialog leaves the top layer.
async function close(dialog: HTMLDialogElement) {
  if (dialog.dataset.closing) return
  dialog.dataset.closing = 'true'
  await Promise.allSettled(dialog.getAnimations().map((a) => a.finished))
  dialog.close()
  delete dialog.dataset.closing
}

export function CallPopup() {
  return (
    <dialog
      id={callPopupId}
      className="callpop"
      aria-labelledby="callpop-title"
      onClick={(e) => e.target === e.currentTarget && close(e.currentTarget)}
      onCancel={(e) => {
        e.preventDefault()
        close(e.currentTarget)
      }}
    >
      <div className="callpop__inner">
        <button className="callpop__close" aria-label="Close" onClick={(e) => close(e.currentTarget.closest('dialog')!)}>
          <span aria-hidden="true">×</span>
        </button>
        <h2 id="callpop-title" className="callpop__title">
          24/7 Emergency filling contact numbers
        </h2>
        <ul className="callpop__list">
          {contacts.map((c) => (
            <li key={c.name}>
              <a href={telHref(c.phone)}>
                {c.phone} - {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  )
}
