import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Skills() {
  return (
    <section className="section">
      <SectionHeading eyebrow="03 · Skills" title="Skills" />
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {Object.entries(profile.skills).map(([category, items]) => (
          <div className="card" key={category}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: 12 }}>{category}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {items.map(skill => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}