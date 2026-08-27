import Hero from './Hero.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}