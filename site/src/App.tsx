import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Proof } from './components/Proof'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CallBar } from './components/CallBar'

export default function App() {
  return (
    <>
      <a className="skip" href="#services">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Proof />
        <Services />
        <Team />
        <About />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  )
}
