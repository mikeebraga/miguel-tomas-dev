import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImg from '../assets/me_CV.jpeg'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      borderBottom: '1px solid #0e2040',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
          maxWidth: '700px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flexShrink: 0 }}
        >
          <img
            src={profileImg}
            alt="Miguel Tomás"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              border: '3px solid #1e3a5f',
              boxShadow: '0 0 32px rgba(59,130,246,0.15)',
            }}
          />
        </motion.div>

        {/* Text */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: '32px' }}>
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
          flexWrap: 'wrap',
          marginBottom: '40px',
          justifyContent: 'center',
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

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
          <Link to="/cv" style={{
            border: '1px solid #1e3a5f',
            color: '#93c5fd',
            padding: '11px 28px',
            borderRadius: '4px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '14px',
          }}>
            CV ↓
          </Link>
        </div>
        </div> {/* end text */}
      </motion.div>
    </section>
  )
}
