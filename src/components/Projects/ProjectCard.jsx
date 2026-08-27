export default function ProjectCard({ project }) {
  const primaryUrl = project.type === 'deck' ? project.deckUrl : project.liveUrl

  const handleCardClick = () => {
    if (primaryUrl) window.open(primaryUrl, '_blank', 'noreferrer')
  }

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{ cursor: primaryUrl ? 'pointer' : 'default', display: 'flex', flexDirection: 'column' }}
    >
      <div
        style={{
          height: 140, borderRadius: 8, background: '#0B1120',
          marginBottom: 16, overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>{project.title}</h3>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', flexGrow: 1 }}>
        {project.description || 'Description coming soon.'}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '12px 0' }}>
        {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>

      <div style={{ display: 'flex', gap: 10 }} onClick={(e) => e.stopPropagation()}>
        {project.type === 'deck' ? (
          project.deckUrl && (
            <a href={project.deckUrl} target="_blank" rel="noreferrer" className="btn btn-outline">View Deck</a>
          )
        ) : (
          <>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            )}
          </>
        )}
      </div>
    </div>
  )
}