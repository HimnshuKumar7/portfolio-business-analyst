import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Education() {
  return (
    <section className="section">
      <SectionHeading eyebrow="02 · Education" title="Education" />
      <div style={{ display: 'grid', gap: 16 }}>
        {profile.education.map((edu, i) => (
          <div className="card" key={i}>
            <h3 style={{ fontSize: '1.1rem' }}>{edu.degree}</h3>
            <p style={{ color: 'var(--ink-soft)', margin: '4px 0' }}>{edu.institute}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>
              {edu.duration} {edu.score ? `· ${edu.score}` : ''}
            </p>
            {edu.details && <p style={{ marginTop: 8, fontSize: '0.9rem' }}>{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}