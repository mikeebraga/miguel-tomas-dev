import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" style={{
      padding: '100px 24px',
      borderTop: '1px solid #0e2040',
      borderBottom: '1px solid #0e2040',
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'left',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.7 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          About
        </p>
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', margin: '0 0 24px', letterSpacing: '-0.5px' }}>
          Building infra that doesn't wake you up at 3am.
        </h2>
        <p style={{ color: '#7a9bbf', lineHeight: 1.8, fontSize: '15px' }}>
          Platform & MLOps engineer based in Lisboa. I design and operate Kubernetes-native infrastructure for teams shipping AI and data products — from GitOps pipelines to GPU workload scheduling. Available for B2B remote contracts with DACH teams.
        </p>
      </motion.div>
    </section>
  )
}
