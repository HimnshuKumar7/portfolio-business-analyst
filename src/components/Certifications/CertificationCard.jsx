export default function CertificationCard({ cert }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          height: 180,
          borderRadius: 8,
          background: '#0B1120',
          marginBottom: 16,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8
        }}
      >
        {cert.image && (
          <img
            src={cert.image}
            alt={cert.title}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        )}
      </div>
      <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>{cert.title}</h3>
      <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
        {cert.issuer} · {cert.date}
      </p>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: '10px 0', flexGrow: 1 }}>{cert.description}</p>
      {cert.credentialUrl && (
        <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>Verify</a>
      )}
    </div>
  )
}