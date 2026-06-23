import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '0 24px',
      borderBottom: '1px solid #0e2040',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p style={{
          fontFamily: 'monospace',
          color: '#3b82f6',
          letterSpacing: '0.2em',
          fontSize: '12px',
          marginBottom: '20px',
          textTransform: 'uppercase',
        }}>
          38°43'N · 9°08'W · Lisboa, Portugal
        </p>

        <h1 style={{
          fontSize: 'clamp(40px, 6vw, 76px)',
          fontWeight: '800',
          margin: '0 0 20px',
          lineHeight: 1.05,
          color: '#e2eaf4',
          letterSpacing: '-1px',
        }}>
          Miguel Tomás
        </h1>

        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {['DevOps', 'MLOps', 'Platform Engineer'].map((t) => (
            <span key={t} style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#60a5fa',
              border: '1px solid #1e3a5f',
              borderRadius: '4px',
              padding: '4px 12px',
              background: 'rgba(59,130,246,0.08)',
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: '#1d4ed8',
            color: '#fff',
            padding: '11px 28px',
            borderRadius: '4px',
            fontWeight: '700',
            textDecoration: 'none',
            fontSize: '14px',
            letterSpacing: '0.02em',
          }}>
            Work with me
          </a>
          <a href="https://github.com/mikeebraga" target="_blank" rel="noreferrer" style={{
            border: '1px solid #1e3a5f',
            color: '#93c5fd',
            padding: '11px 28px',
            borderRadius: '4px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '14px',
          }}>
            GitHub →
          </a>
        </div>
      </motion.div>
    </section>
  )
}
