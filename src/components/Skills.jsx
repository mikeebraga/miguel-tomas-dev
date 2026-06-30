import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const BRAND = {
  'Kubernetes':       { bar: '#326CE5' },
  'OpenShift':        { bar: '#EE0000' },
  'Docker':           { bar: '#2496ED' },
  'Helm':             { bar: '#0F1689' },
  'AWS':              { bar: '#FF9900' },
  'Azure':            { bar: '#0078D4' },
  'Terraform':        { bar: '#7B42BC' },
  'Ansible':          { bar: '#EE0000' },
  'MLflow':           { bar: '#0194E2' },
  'Kubeflow':         { bar: '#326CE5' },
  'OpenShift AI':     { bar: '#EE0000' },
  'GPU Scheduling':   { bar: '#76B900' },
  'Prometheus':       { bar: '#E6522C' },
  'Grafana':          { bar: '#F05A28' },
  'Loki':             { bar: '#F05A28' },
  'ArgoCD':           { bar: '#EF7B4D' },
  'GitLab CI':        { bar: '#FC6D26' },
  'Tekton':           { bar: '#FD495C' },
  'Python':           { bar: '#3776AB' },
  'Shell / Bash':     { bar: '#4EAA25' },
  'Falco':            { bar: '#00C8FF' },
  'Trivy':            { bar: '#00AEF3' },
  'Kubescape':        { bar: '#5C6BC0' },
}

const categories = [
  {
    label: 'Container & Orchestration',
    tools: [
      { name: 'Kubernetes', level: 95 },
      { name: 'OpenShift', level: 90 },
      { name: 'Docker', level: 95 },
      { name: 'Helm', level: 85 },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    tools: [
      { name: 'AWS', level: 65 },
      { name: 'Azure', level: 65 },
      { name: 'Terraform', level: 65 },
      { name: 'Ansible', level: 80 },
    ],
  },
  {
    label: 'MLOps & AI Infra',
    tools: [
      { name: 'MLflow', level: 80 },
      { name: 'Kubeflow', level: 75 },
      { name: 'OpenShift AI', level: 85 },
      { name: 'GPU Scheduling', level: 65 },
    ],
  },
  {
    label: 'Observability & CI/CD',
    tools: [
      { name: 'Prometheus', level: 88 },
      { name: 'Grafana', level: 88 },
      { name: 'Loki', level: 80 },
      { name: 'ArgoCD', level: 85 },
      { name: 'GitLab CI', level: 88 },
      { name: 'Tekton', level: 75 },
    ],
  },
  {
    label: 'Security',
    tools: [
      { name: 'Falco', level: 80 },
      { name: 'Trivy', level: 85 },
      { name: 'Kubescape', level: 75 },
    ],
  },
  {
    label: 'Languages & Scripting',
    tools: [
      { name: 'Python', level: 85 },
      { name: 'Shell / Bash', level: 90 },
    ],
  },
]

function Bar({ name, level }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const brand = BRAND[name] ?? { bar: '#3b82f6' }

  return (
    <div ref={ref} style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            display: 'inline-block',
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: brand.bar,
            flexShrink: 0,
          }} />
          <span style={{ fontSize: '13px', color: '#c9d4e0', fontFamily: 'monospace' }}>{name}</span>
        </span>
        <span style={{ fontSize: '12px', color: brand.bar, fontFamily: 'monospace', fontWeight: '700' }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: '#0e2040', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: brand.bar,
            borderRadius: '3px',
            boxShadow: `0 0 6px ${brand.bar}55`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
        Tooling
      </p>
      <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', margin: '0 0 60px', letterSpacing: '-0.5px' }}>
        Confidence in Tools
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '48px 56px',
      }}>
        {categories.map((cat) => (
          <div key={cat.label}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#3b82f6',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              borderBottom: '1px solid #0e2040',
              paddingBottom: '8px',
            }}>
              {cat.label}
            </p>
            {cat.tools.map((t) => <Bar key={t.name} {...t} />)}
          </div>
        ))}
      </div>
    </section>
  )
}
