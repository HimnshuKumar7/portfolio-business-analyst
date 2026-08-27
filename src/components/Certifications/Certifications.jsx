import { certifications } from '../../data/certifications.js'
import SectionHeading from '../shared/SectionHeading.jsx'
import CertificationCard from './CertificationCard.jsx'

export default function Certifications() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading eyebrow="Recognition" title="Certifications" />
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {certifications.map(cert => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </main>
  )
}