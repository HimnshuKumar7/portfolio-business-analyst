import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function About() {
  return (
    <section className="section">
      <SectionHeading eyebrow="01 · About" title="About Me" />
      <div className="card" style={{ maxWidth: 880 }}>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--ink-soft)', margin: 0 }}>
          {profile.about}
        </p>
        <a
          href={profile.resumeUrl}
          download
          className="btn btn-primary"
          style={{ marginTop: 20 }}
        >
          ↓ Download Resume
        </a>
      </div>
    </section>
  )
}