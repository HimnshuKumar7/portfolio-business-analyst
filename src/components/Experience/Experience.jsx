import { experiences } from '../../data/experience.js'
import SectionHeading from '../shared/SectionHeading.jsx'
import ExperienceCard from './ExperienceCard.jsx'

export default function Experience() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div style={{ display: 'grid', gap: 20 }}>
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </main>
  )
}