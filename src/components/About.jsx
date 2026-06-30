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
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', margin: '0 0 32px', letterSpacing: '-0.5px', lineHeight: 1.3 }}>
          I used to pilot physical container ships.<br />Now I orchestrate virtual ones.
        </h2>
        <p style={{ color: '#7a9bbf', lineHeight: 1.85, fontSize: '15px', marginBottom: '20px' }}>
          Hello! My name is Miguel — a Lisbon-based Platform & MLOps Engineer specializing in securing, supporting, and automating cloud-native workloads.
        </p>
        <p style={{ color: '#7a9bbf', lineHeight: 1.85, fontSize: '15px', marginBottom: '20px' }}>
          My career path has a bit of an ironic twist: I hold a degree in Marine Sciences and spent three tough months onboard physical container ships during the COVID-19 pandemic. While I decided the ocean life wasn't for me, I couldn't quite escape containers. Today, I've traded physical cargo for Docker containers, and ocean navigation for Kubernetes and OpenShift orchestration.
        </p>
        <p style={{ color: '#7a9bbf', lineHeight: 1.85, fontSize: '15px' }}>
          With a Master's in Big Data Analytics, over 3.5 years of DevOps experience, and almost Redhat Certified Architect, I know how to keep enterprise infrastructure stable and secure under heavy workloads. I guess you could say I'm still a pilot at heart — just steering cloud clusters instead of cargo ships.
        </p>
      </motion.div>
    </section>
  )
}
