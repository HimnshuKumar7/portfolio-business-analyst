import { profile } from '../../data/profile.js'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function Contact() {
  const { contact, social } = profile
  return (
    <section className="section" style={{ borderBottom: 'none' }}>
      <SectionHeading eyebrow="04 · Contact" title="Get in Touch" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        <a href={`mailto:${contact.email}`} className="tag" style={{ width: 'fit-content' }}>{contact.email}</a>
        <span style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>{contact.phone} · {contact.location}</span>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        {social.github && <a href={social.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>}
        {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>}
        {social.leetcode && <a href={social.leetcode} target="_blank" rel="noreferrer" className="btn btn-outline">LeetCode</a>}
        {social.twitter && <a href={social.twitter} target="_blank" rel="noreferrer" className="btn btn-outline">Twitter</a>}
      </div>
    </section>
  )
}