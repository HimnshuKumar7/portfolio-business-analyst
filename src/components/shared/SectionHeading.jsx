export default function SectionHeading({ eyebrow, title }) {
    return (
      <div style={{ marginBottom: 32 }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
    )
  }