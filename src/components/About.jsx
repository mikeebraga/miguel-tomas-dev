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
          Bridging the gap between heavy data models and stable infrastructure.
        </h2>
        <p style={{ color: '#7a9bbf', lineHeight: 1.8, fontSize: '15px' }}>
          Hello! My name is Miguel.
I am a Lisbon-based Platform & MLOps Engineer specialized in supporting, securing, and automating cloud-native applications across Kubernetes and OpenShift environments.
With a Master's degree in Big Data Analytics and over 3.5 years of hands-on DevOps experience, I understand how to bridge the gap between heavy data workloads and enterprise infrastructure. My engineering philosophy centers on Infrastructure-as-code (IaC), GitOps, and cluster security best practices—backed by advanced certifications including the Certified Kubernetes Security Specialist (CKS) and other specialized Red Hat certifications.
Whether designing end-to-end MLOps pipelines or hardening container orchestration platforms, I focus on building highly reliable systems that empower teams to scale.
        </p>
      </motion.div>
    </section>
  )
}
