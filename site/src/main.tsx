import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/barlow/latin-400.css'
import '@fontsource/barlow/latin-700.css'
import '@fontsource/barlow-condensed/latin-700.css'
import '@fontsource/noto-serif/latin-700.css'
import './index.css'
import App from './App.tsx'

// Scroll-reveal styles only apply once JS is running, so no-JS visitors see everything.
// `?capture` renders the final, fully-revealed state (used for screenshot reviews).
if (!new URLSearchParams(location.search).has('capture')) document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
