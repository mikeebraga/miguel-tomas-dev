import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    role: 'Platform Engineer',
    company: 'Timestamp · SPMS',
    period: 'Jan 2023 – Present',
    location: 'Lisbon, Portugal',
    type: 'Full-time · Associate Consultant',
    current: true,
    promotion: 'Promoted from DevOps Engineer',
    bullets: [
      'Managed and maintained Kubernetes & OpenShift clusters for national healthcare infrastructure.',
      'Implemented CI/CD pipelines with GitLab CI for automated delivery across multiple environments.',
      'Developed and maintained Ansible playbooks for configuration management at scale.',
      'Implemented observability stack with Prometheus, Grafana, and Loki for production environments.',
      'Collaborated with Operations and product teams on scalable backend deployments and cluster monitoring.',
    ],
    clients: [
      {
        name: 'Navigator',
        bullets: [
          'Deployed and configured Kafka, Redis, Kasten, and FluxCD on OpenShift.',
          'Configured GitOps operator and migrated legacy GitLab repos into a unified multi-branch structure.',
          'Built container image pipelines with push to Quay and full CI/CD automation to OpenShift.',
        ],
        tags: ['OpenShift', 'FluxCD', 'Kafka', 'GitLab CI'],
      },
      {
        name: 'NAV',
        bullets: [
          'Supported development team with OpenShift deployments, Artemis setup, TLS certificate management, and cluster troubleshooting.',
        ],
        tags: ['OpenShift'],
      },
    ],
    tags: ['Kubernetes', 'OpenShift', 'GitLab CI', 'Ansible', 'Prometheus', 'Grafana', 'Loki'],
    tagColors: {
      Kubernetes: '#326CE5', OpenShift: '#EE0000', 'GitLab CI': '#FC6D26',
      Ansible: '#EE0000', Prometheus: '#E6522C', Grafana: '#F05A28', Loki: '#F05A28',
    },
  },
  {
    role: 'Customer Service & Digital Transformation',
    company: 'Chemetall · BASF Group',
    period: 'Oct 2021 – Jan 2023',
    location: 'Prior Velho, Lisbon',
    type: 'Full-time · 1 yr 5 mos',
    current: false,
    bullets: [
      'Managed sales order workflows and customer communication in a global chemical company.',
      'Participated in company-wide Digital Transformation initiatives covering AI, Data Science, and ML.',
      'Trained in Python, R, SQL, Tableau, and Microsoft Azure as part of internal upskilling programs.',
    ],
    tags: ['Python', 'Azure', 'SQL', 'Tableau'],
    tagColors: {
      Python: '#3776AB', Azure: '#0078D4',
    },
    note: 'Transition role — where the pivot to data and DevOps engineering began.',
  },
]

function ExpCard({ role, company, period, location, type, current, promotion, bullets, clients, tags, tagColors, note, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 24 }}
      transition={{ duration: 0.55, delay }}
      style={{
        border: '1px solid #0e2040',
        borderLeft: `3px solid ${current ? '#3b82f6' : '#1e3a5f'}`,
        borderRadius: '8px',
        padding: '28px',
        background: current ? 'rgba(59,130,246,0.04)' : 'rgba(13,25,50,0.3)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <h3 style={{ margin: 0, color: '#e2eaf4', fontSize: '15px', fontWeight: '700' }}>{role}</h3>
            {current && (
              <span style={{
                fontFamily: 'monospace', fontSize: '10px', color: '#4ade80',
                border: '1px solid #166534', borderRadius: '4px',
                padding: '1px 7px', background: 'rgba(74,222,128,0.08)',
              }}>Current</span>
            )}
          </div>
          <p style={{ margin: '0 0 2px', color: '#3b82f6', fontSize: '13px', fontWeight: '600' }}>{company}</p>
          {promotion && (
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '10px', color: '#facc15' }}>↑ {promotion}</p>
          )}
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <p style={{ margin: '0 0 2px', fontFamily: 'monospace', fontSize: '12px', color: '#60a5fa' }}>{period}</p>
          <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '11px', color: '#7a9bbf' }}>{location}</p>
        </div>
      </div>

      {/* Bullets */}
      <ul style={{ margin: '0 0 16px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ color: '#7a9bbf', fontSize: '13px', lineHeight: 1.7 }}>{b}</li>
        ))}
      </ul>

      {/* Client engagements */}
      {clients?.length > 0 && (
        <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ margin: '0 0 8px', fontFamily: 'monospace', fontSize: '11px', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Client Engagements
          </p>
          {clients.map(c => (
            <div key={c.name} style={{
              borderLeft: '2px solid #1e3a5f',
              paddingLeft: '14px',
            }}>
              <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#60a5fa', fontWeight: '700', fontFamily: 'monospace' }}>
                {c.name}
              </p>
              <ul style={{ margin: '0 0 8px', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {c.bullets.map((b, i) => (
                  <li key={i} style={{ color: '#7a9bbf', fontSize: '12px', lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {c.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'monospace', fontSize: '10px',
                    color: tagColors[t] ?? '#3b82f6',
                    border: `1px solid ${(tagColors[t] ?? '#3b82f6')}44`,
                    borderRadius: '3px', padding: '1px 6px',
                    background: `${(tagColors[t] ?? '#3b82f6')}10`,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {note && (
        <p style={{
          margin: '0 0 14px', fontFamily: 'monospace', fontSize: '11px',
          color: '#facc15', fontStyle: 'italic',
          borderLeft: '2px solid #facc1544', paddingLeft: '10px',
        }}>// {note}</p>
      )}

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily: 'monospace', fontSize: '10px',
            color: tagColors[t] ?? '#3b82f6',
            border: `1px solid ${(tagColors[t] ?? '#3b82f6')}44`,
            borderRadius: '3px', padding: '2px 7px',
            background: `${(tagColors[t] ?? '#3b82f6')}10`,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" style={{
      padding: '100px 24px', maxWidth: '860px',
      margin: '0 auto', borderTop: '1px solid #0e2040',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Experience
        </p>
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', margin: '0 0 48px', letterSpacing: '-0.5px' }}>
          Work History
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {experiences.map((e, i) => <ExpCard key={e.company} {...e} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
