import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" style={{ padding: '100px 24px', textAlign: 'center', borderTop: '1px solid #0e2040' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.7 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Contact
        </p>
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '700', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
          Let's work together
        </h2>
        <p style={{ color: '#7a9bbf', marginBottom: '36px', fontSize: '15px' }}>
          Open to B2B remote contracts · DevOps · MLOps · Platform
        </p>
        <a href="mailto:miguel@example.com" style={{
          display: 'inline-block',
          background: '#1d4ed8',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '4px',
          fontWeight: '700',
          textDecoration: 'none',
          fontSize: '14px',
          letterSpacing: '0.02em',
        }}>
          Send a message
        </a>
      </motion.div>
    </section>
  )
}
