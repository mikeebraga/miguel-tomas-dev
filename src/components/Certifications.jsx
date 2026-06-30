import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CNCF = 'CNCF / Linux Foundation'
const RH = 'Red Hat'
const RH_ID = '230-060-261'
const RH_VALID = 'Valid until May 2029'
const RH_COLOR = '#EE0000'

const certGroups = [
  {
    group: 'CNCF / Kubernetes',
    color: '#326CE5',
    items: [
      {
        title: 'Certified Kubernetes Security Specialist (CKS)',
        issuer: CNCF,
        year: 'Jul 2024',
        valid: 'Valid until Jul 2026',
        tags: ['Kubernetes Security', 'Runtime Security', 'Supply Chain'],
        color: '#1D4ED8',
        certId: 'LF-icftssyk18',
      },
      {
        title: 'Certified Kubernetes Application Developer (CKAD)',
        issuer: CNCF,
        year: 'Jan 2024',
        valid: 'Valid until Jan 2027',
        tags: ['Kubernetes', 'Application Design', 'Workloads'],
        color: '#2563EB',
        certId: 'LF-j51wzuddqr',
      },
      {
        title: 'Certified Kubernetes Administrator (CKA)',
        issuer: CNCF,
        year: 'Nov 2023',
        valid: 'Valid until Nov 2026',
        tags: ['Kubernetes', 'Cluster Administration', 'Networking'],
        color: '#326CE5',
        certId: 'LF-47ftkstuv5',
      },
    ],
  },
  {
    group: 'Red Hat',
    color: RH_COLOR,
    items: [
      {
        title: 'Red Hat Certified Engineer in OpenShift',
        issuer: RH, year: 'May 2026', valid: RH_VALID,
        tags: ['OpenShift Container Platform 4.14'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified Developer in AI',
        issuer: RH, year: 'Jul 2025', valid: RH_VALID,
        tags: ['OpenShift AI 2.8', 'OpenShift 4.14'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified Advanced Developer in Cloud-native Applications',
        issuer: RH, year: 'Apr 2024', valid: RH_VALID,
        tags: ['OpenShift Container Platform 4.10'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified Advanced System Administrator in OpenShift',
        issuer: RH, year: 'May 2026', valid: RH_VALID,
        tags: ['OpenShift Container Platform 4.14'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified Engineer in Ansible',
        issuer: RH, year: 'Mar 2024', valid: RH_VALID,
        tags: ['Ansible Automation Platform 2.2', 'RHEL 9'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified Advanced System Administrator in Ansible',
        issuer: RH, year: 'Mar 2024', valid: RH_VALID,
        tags: ['Ansible Automation Platform 2.2', 'RHEL 9'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified Engineer in Enterprise Linux',
        issuer: RH, year: 'Mar 2024', valid: RH_VALID,
        tags: ['RHEL 9'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified System Administrator in OpenShift',
        issuer: RH, year: 'Jul 2023', valid: RH_VALID,
        tags: ['OpenShift Container Platform 4.6'],
        color: RH_COLOR, certId: RH_ID,
      },
      {
        title: 'Red Hat Certified System Administrator (RHCSA)',
        issuer: RH, year: 'Apr 2023', valid: RH_VALID,
        tags: ['RHEL 9'],
        color: RH_COLOR, certId: RH_ID,
      },
    ],
  },
]

function CertCard({ title, issuer, year, valid, tags, color, certId, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
      transition={{ duration: 0.45, delay }}
      style={{
        border: `1px solid ${color}33`,
        borderLeft: `3px solid ${color}`,
        borderRadius: '6px',
        padding: '16px 20px',
        background: `${color}08`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: tags?.length ? '10px' : 0 }}>
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0 0 4px', color: '#e2eaf4', fontWeight: '600', fontSize: '13px', lineHeight: 1.4 }}>{title}</p>
          <p style={{ margin: 0, color: '#7a9bbf', fontSize: '11px', fontFamily: 'monospace' }}>
            {issuer}
            {certId && <span style={{ color: '#3b82f6', marginLeft: '10px' }}>ID: {certId}</span>}
          </p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'monospace', fontSize: '11px', color,
            border: `1px solid ${color}44`, borderRadius: '4px',
            padding: '2px 8px', display: 'block', marginBottom: '3px',
          }}>{year}</span>
          {valid && <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#4ade80' }}>{valid}</span>}
        </div>
      </div>
      {tags?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'monospace', fontSize: '10px', color: '#7a9bbf',
              border: '1px solid #0e2040', borderRadius: '3px',
              padding: '2px 7px', background: 'rgba(14,32,64,0.5)',
            }}>{t}</span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

function GroupHeader({ group, color }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
    }}>
      <span style={{
        display: 'inline-block', width: '10px', height: '10px',
        borderRadius: '50%', background: color, flexShrink: 0,
      }} />
      <span style={{
        fontFamily: 'monospace', fontSize: '11px', color,
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>{group}</span>
      <div style={{ flex: 1, height: '1px', background: `${color}33` }} />
    </div>
  )
}

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" style={{
      padding: '100px 24px', maxWidth: '760px',
      margin: '0 auto', borderTop: '1px solid #0e2040',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Certifications
        </p>
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', margin: '0 0 48px', letterSpacing: '-0.5px' }}>
          Industry Credentials
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {certGroups.map((grp) => (
          <div key={grp.group}>
            <GroupHeader group={grp.group} color={grp.color} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {grp.items.map((c, i) => (
                <CertCard key={c.title} {...c} delay={i * 0.07} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
