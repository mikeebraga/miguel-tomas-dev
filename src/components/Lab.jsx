import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BRAND = {
  'Kubernetes':    '#326CE5',
  'Python':        '#3776AB',
  'Shell / Bash':  '#4EAA25',
  'Terraform':     '#7B42BC',
  'ArgoCD':        '#EF7B4D',
  'FluxCD':        '#5468FF',
  'Falco':         '#00C8FF',
  'Trivy':         '#00AEF3',
  'GitLab CI':     '#FC6D26',
  'OpenShift':     '#EE0000',
  'Ansible':       '#EE0000',
  'Grafana':       '#F05A28',
  'Prometheus':    '#E6522C',
  'Docker':        '#2496ED',
  'Helm':          '#0F1689',
  'GitOps':        '#F05A28',
}

const experiments = [
  {
    title: 'ArgoCD vs FluxCD',
    description: 'Hands-on GitOps comparison focused on image update automation and resource footprint. Flux uses ~2.4x less memory and handles image automation natively — no extra components needed.',
    tags: ['ArgoCD', 'FluxCD', 'Kubernetes', 'Helm', 'GitOps'],
    status: 'active',
    repo: 'https://github.com/mikeebraga/ArgoCD_Vs_FluxCD',
  },
  {
    title: 'k8s-hardening-lab',
    description: 'Automated CIS benchmark hardening for Kubernetes clusters. Runs Kubescape + Trivy scans as GitLab CI gates.',
    tags: ['Kubernetes', 'Trivy', 'GitLab CI', 'Shell / Bash'],
    status: 'active',
    repo: 'https://github.com/mikeebraga',
  },
  {
    title: 'mlops-pipeline-template',
    description: 'Reusable GitOps template for MLflow experiment tracking + model registry on OpenShift AI. Deploy with one Helm chart.',
    tags: ['OpenShift', 'Helm', 'Python', 'ArgoCD'],
    status: 'active',
    repo: 'https://github.com/mikeebraga',
  },
  {
    title: 'falco-rules-pack',
    description: 'Custom Falco rules for detecting anomalous behaviour in multi-tenant Kubernetes namespaces.',
    tags: ['Falco', 'Kubernetes', 'Shell / Bash'],
    status: 'wip',
    repo: 'https://github.com/mikeebraga',
  },
  {
    title: 'infra-as-code-starter',
    description: 'Opinionated Terraform + Ansible boilerplate for spinning up a production-ready OpenShift cluster on AWS.',
    tags: ['Terraform', 'Ansible', 'OpenShift', 'Python'],
    status: 'wip',
    repo: 'https://github.com/mikeebraga',
  },
]

const STATUS = {
  active: { label: 'Active', color: '#4ade80', bg: 'rgba(74,222,128,0.08)', border: '#166534' },
  wip:    { label: 'WIP',    color: '#facc15', bg: 'rgba(250,204,21,0.08)',  border: '#854d0e' },
  archived: { label: 'Archived', color: '#6b7280', bg: 'rgba(107,114,128,0.08)', border: '#374151' },
}

function LabCard({ title, description, tags, status, repo, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const s = STATUS[status] ?? STATUS.wip

  return (
    <motion.a
      href={repo}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.45, delay }}
      style={{
        display: 'block',
        textDecoration: 'none',
        border: '1px solid #0e2040',
        borderRadius: '8px',
        padding: '22px',
        background: 'rgba(13,25,50,0.4)',
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s',
      }}
      whileHover={{ borderColor: '#1e3a5f', backgroundColor: 'rgba(13,25,50,0.7)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '14px', color: '#60a5fa', fontWeight: '700' }}>
          {'>'} {title}
        </span>
        <span style={{
          fontFamily: 'monospace', fontSize: '10px',
          color: s.color, border: `1px solid ${s.border}`,
          borderRadius: '4px', padding: '2px 8px',
          background: s.bg, whiteSpace: 'nowrap', flexShrink: 0,
        }}>{s.label}</span>
      </div>

      <p style={{ margin: '0 0 14px', color: '#7a9bbf', fontSize: '13px', lineHeight: 1.7 }}>
        {description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily: 'monospace', fontSize: '10px',
            color: BRAND[t] ?? '#3b82f6',
            border: `1px solid ${(BRAND[t] ?? '#3b82f6')}44`,
            borderRadius: '3px', padding: '2px 7px',
            background: `${(BRAND[t] ?? '#3b82f6')}10`,
          }}>{t}</span>
        ))}
      </div>
    </motion.a>
  )
}

export default function Lab() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="lab" style={{ padding: '100px 24px', maxWidth: '960px', margin: '0 auto', borderTop: '1px solid #0e2040' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Lab
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
          <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', margin: 0, letterSpacing: '-0.5px' }}>
            Experiments & Side Projects
          </h2>
          <a href="https://github.com/mikeebraga" target="_blank" rel="noreferrer" style={{
            fontFamily: 'monospace', fontSize: '12px', color: '#3b82f6',
            textDecoration: 'none', border: '1px solid #1e3a5f',
            borderRadius: '4px', padding: '6px 14px',
            whiteSpace: 'nowrap',
          }}>
            github.com/mikeebraga →
          </a>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {experiments.map((e, i) => <LabCard key={e.title} {...e} delay={i * 0.08} />)}
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: '24px', justifyContent: 'flex-end' }}>
        {Object.entries(STATUS).map(([, s]) => (
          <span key={s.label} style={{ fontFamily: 'monospace', fontSize: '11px', color: s.color, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color, display: 'inline-block' }} />
            {s.label}
          </span>
        ))}
      </div>
    </section>
  )
}
