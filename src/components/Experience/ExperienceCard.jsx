export default function ExperienceCard({ exp }) {
    return (
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 2 }}>{exp.role}</h3>
            <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              {exp.company} · {exp.location}
            </p>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
            {exp.duration}
          </span>
        </div>
  
        <ul style={{ marginTop: 16, paddingLeft: 20, color: 'var(--ink-soft)' }}>
          {exp.points.map((point, i) => <li key={i} style={{ marginBottom: 6 }}>{point}</li>)}
        </ul>
  
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {exp.techStack.map(tech => <span className="tag" key={tech}>{tech}</span>)}
        </div>
      </div>
    )
  }