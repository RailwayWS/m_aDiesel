import type { MouseEvent } from 'react'

// Every call button opens the list of 24/7 numbers (components/CallPopup) instead of dialling one line.
// If the dialog isn't on the page, the button's tel: link still works as normal.
export const callPopupId = 'call-popup'

export function openCallPopup(e: MouseEvent) {
  const dialog = document.getElementById(callPopupId) as HTMLDialogElement | null
  if (!dialog) return
  e.preventDefault()
  dialog.showModal()
}
