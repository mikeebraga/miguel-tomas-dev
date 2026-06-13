import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Kubernetes MLOps Platform',
    description: 'End-to-end MLOps platform on OpenShift with Kubeflow, MLflow, and GPU scheduling for model training pipelines.',
    tags: ['OpenShift', 'Kubeflow', 'MLflow', 'Terraform'],
    tagColors: { OpenShift: '#EE0000', Kubeflow: '#326CE5', MLflow: '#0194E2', Terraform: '#7B42BC' },
    metric: 'Deploy time 45min → 8min',
  },
  {
    title: 'GitOps Security Pipeline',
    description: 'Automated security scanning pipeline with Trivy, Falco runtime detection, and Kubescape policy enforcement via ArgoCD.',
    tags: ['ArgoCD', 'Falco', 'Trivy', 'GitLab CI'],
    tagColors: { ArgoCD: '#EF7B4D', Falco: '#00C8FF', Trivy: '#00AEF3', 'GitLab CI': '#FC6D26' },
    metric: 'Zero critical CVEs in prod',
  },
  {
    title: 'Observability Stack',
    description: 'Full observability stack with Prometheus, Grafana dashboards, and Loki log aggregation for multi-cluster environments.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Ansible'],
    tagColors: { Prometheus: '#E6522C', Grafana: '#F05A28', Loki: '#F05A28', Ansible: '#EE0000' },
    metric: 'MTTR reduced by 60%',
  },
]

function ProjectCard({ title, description, tags, tagColors, metric, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 24 }}
      transition={{ duration: 0.5, delay }}
      style={{
        border: '1px solid #0e2040',
        borderRadius: '8px',
        padding: '28px',
        background: 'rgba(13,25,50,0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <h3 style={{ margin: 0, color: '#e2eaf4', fontSize: '15px', fontWeight: '700' }}>{title}</h3>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#4ade80',
          border: '1px solid #166534',
          borderRadius: '4px',
          padding: '2px 8px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          background: 'rgba(74,222,128,0.06)',
        }}>{metric}</span>
      </div>
      <p style={{ margin: 0, color: '#7a9bbf', fontSize: '13px', lineHeight: 1.7 }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            color: tagColors[t] ?? '#3b82f6',
            border: `1px solid ${(tagColors[t] ?? '#3b82f6') + '44'}`,
            borderRadius: '3px',
            padding: '2px 8px',
            background: `${(tagColors[t] ?? '#3b82f6')}10`,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="projects" style={{ padding: '100px 24px', maxWidth: '960px', margin: '0 auto', borderTop: '1px solid #0e2040' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Projects
        </p>
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', margin: '0 0 48px', letterSpacing: '-0.5px' }}>
          Selected Work
        </h2>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {projects.map((p, i) => <ProjectCard key={p.title} {...p} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
