import { useEffect, useState } from 'react'
import { profile } from '../../data/profile.js'
import './Hero.css'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const fullText = `Hi, I'm ${profile.name}`

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setTyped(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <img
        src={profile.heroImage}
        alt={profile.name}
        className="hero-image"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <span className="eyebrow">// whoami</span>
      <h1 className="hero-title">
        {typed}
        <span className="hero-cursor">|</span>
      </h1>
      <p className="hero-roles">
        {profile.roles.join('  ·  ')}
      </p>
    </section>
  )
}