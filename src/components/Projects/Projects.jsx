import { useState } from 'react'
import { projects, allTags } from '../../data/projects.js'
import SectionHeading from '../shared/SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const [activeTag, setActiveTag] = useState(null)

  const filtered = activeTag
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects

  return (
    <main className="page">
      <div className="container">
        <SectionHeading eyebrow="Work" title="Projects" />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          <button
            onClick={() => setActiveTag(null)}
            className="tag"
            style={{
              cursor: 'pointer', border: 'none',
              background: activeTag === null ? 'var(--ink)' : 'var(--accent-soft)',
              color: activeTag === null ? 'var(--surface)' : 'var(--accent)'
            }}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="tag"
              style={{
                cursor: 'pointer', border: 'none',
                background: activeTag === tag ? 'var(--ink)' : 'var(--accent-soft)',
                color: activeTag === tag ? 'var(--surface)' : 'var(--accent)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}