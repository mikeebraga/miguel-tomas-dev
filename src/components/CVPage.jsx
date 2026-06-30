import profileImg from '../assets/me_CV.jpeg'

const RH_ID = '230-060-261'

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          .cv-page { box-shadow: none !important; margin: 0 !important; border-radius: 0 !important; }
        }
        @page { size: A4; margin: 16mm 16mm 16mm 16mm; }
        body { background: #f4f6f8; }
      `}</style>

      {/* Print button */}
      <div className="no-print" style={{
        position: 'fixed', top: '20px', right: '20px', zIndex: 100,
        display: 'flex', gap: '10px',
      }}>
        <a href="/" style={{
          background: '#e2e8f0', color: '#1e293b', padding: '10px 20px',
          borderRadius: '6px', fontWeight: '600', fontSize: '14px',
          textDecoration: 'none', fontFamily: 'sans-serif',
        }}>← Back</a>
        <button onClick={() => window.print()} style={{
          background: '#1d4ed8', color: '#fff', padding: '10px 24px',
          borderRadius: '6px', fontWeight: '700', fontSize: '14px',
          border: 'none', cursor: 'pointer', fontFamily: 'sans-serif',
        }}>
          Download PDF
        </button>
      </div>

      {/* A4 CV */}
      <div className="cv-page" style={{
        maxWidth: '794px',
        margin: '40px auto',
        background: '#fff',
        padding: '48px 52px',
        fontFamily: 'Georgia, serif',
        color: '#1a1a2e',
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
        borderRadius: '4px',
        lineHeight: 1.5,
      }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '28px', borderBottom: '2px solid #1d4ed8', paddingBottom: '24px' }}>
          <img src={profileImg} alt="Miguel Tomás" style={{
            width: '90px', height: '90px', borderRadius: '50%',
            objectFit: 'cover', objectPosition: 'center 25%',
            border: '2px solid #1d4ed8', flexShrink: 0,
          }} />
          <div>
            <h1 style={{ margin: '0 0 4px', fontSize: '26px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.5px' }}>
              Miguel Tomás Beirão Antunes Moreira Braga
            </h1>
            <p style={{ margin: '0 0 6px', fontSize: '13px', color: '#1d4ed8', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
              Platform Engineer · MLOps · DevOps
            </p>
            <p style={{ margin: 0, fontSize: '12px', color: '#475569', fontFamily: 'monospace' }}>
              Lisboa, Portugal &nbsp;·&nbsp; miguel_braga_inv@outlook.pt &nbsp;·&nbsp; github.com/mikeebraga
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '36px' }}>

          {/* LEFT */}
          <div>

            {/* Experience */}
            <Section title="Experience">
              <ExpEntry
                role="Platform Engineer — Associate Consultant"
                company="Timestamp · SPMS (National Health Service IT)"
                period="Jan 2023 – Present"
                note="↑ Promoted from DevOps Engineer"
                bullets={[
                  'Managed Kubernetes & OpenShift clusters for national healthcare infrastructure.',
                  'Implemented CI/CD pipelines with GitLab CI across multiple environments.',
                  'Developed Ansible playbooks for configuration management at scale.',
                  'Built observability stack with Prometheus, Grafana, and Loki.',
                  'Client — Navigator: Kafka, Redis, Kasten, FluxCD on OpenShift; GitOps migration; Quay image pipelines.',
                  'Client — NAV: OpenShift support, Artemis, TLS certificates, troubleshooting.',
                ]}
              />
              <ExpEntry
                role="Customer Service & Digital Transformation"
                company="Chemetall · BASF Group"
                period="Oct 2021 – Jan 2023"
                bullets={[
                  'Managed sales workflows in a global chemical company.',
                  'Participated in AI/ML/Data Science digital transformation initiatives.',
                  'Trained in Python, R, SQL, Tableau, and Microsoft Azure.',
                ]}
              />
            </Section>

            {/* Education */}
            <Section title="Education">
              <ExpEntry
                role="MSc in Analysis and Engineering of Big Data — 18/20"
                company="FCT Nova de Lisboa"
                period="2022"
                bullets={['Thesis: "Random Forests Robustness in Genomic Prediction and Selection" — 17/20']}
              />
              <ExpEntry
                role="BSc in Marine Sciences"
                company="Escola Náutica Infante D. Henrique"
                period="2020"
                bullets={[]}
              />
            </Section>

          </div>

          {/* RIGHT */}
          <div>

            {/* Skills */}
            <SideSection title="Core Skills">
              {[
                'Kubernetes', 'OpenShift', 'Docker', 'Helm',
                'GitLab CI', 'Ansible', 'Terraform',
                'Prometheus', 'Grafana', 'Loki',
                'MLflow', 'Kubeflow', 'OpenShift AI',
                'Falco', 'Trivy', 'Kubescape',
                'Python', 'Shell / Bash',
                'AWS', 'Azure',
              ].map(s => (
                <span key={s} style={{
                  display: 'inline-block', fontSize: '10px', fontFamily: 'monospace',
                  background: '#eff6ff', color: '#1d4ed8',
                  border: '1px solid #bfdbfe', borderRadius: '3px',
                  padding: '2px 6px', margin: '2px 2px 2px 0',
                }}>{s}</span>
              ))}
            </SideSection>

            {/* Certifications */}
            <SideSection title="Certifications">
              <CertLine label="CKS" sub="Jul 2024 · LF-icftssyk18" />
              <CertLine label="CKAD" sub="Jan 2024 · LF-j51wzuddqr" />
              <CertLine label="CKA" sub="Nov 2023 · LF-47ftkstuv5" />
              <div style={{ borderTop: '1px solid #fee2e2', margin: '8px 0' }} />
              <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#dc2626', fontFamily: 'monospace', fontWeight: '700' }}>Red Hat · {RH_ID}</p>
              {[
                'RHCE in OpenShift · May 2026',
                'RH Dev in AI · Jul 2025',
                'RHCA Cloud-native · Apr 2024',
                'RHCA Sys Admin OpenShift · May 2026',
                'RHCE Ansible · Mar 2024',
                'RHCA Sys Admin Ansible · Mar 2024',
                'RHCE Enterprise Linux · Mar 2024',
                'RHCSA OpenShift · Jul 2023',
                'RHCSA · Apr 2023',
              ].map(c => (
                <p key={c} style={{ margin: '2px 0', fontSize: '10px', color: '#374151', fontFamily: 'monospace' }}>· {c}</p>
              ))}
            </SideSection>

            {/* Languages */}
            <SideSection title="Languages">
              <p style={{ margin: '2px 0', fontSize: '11px' }}>Portuguese — Native</p>
              <p style={{ margin: '2px 0', fontSize: '11px' }}>English — Fluent (C1)</p>
              <p style={{ margin: '2px 0', fontSize: '11px' }}>Spanish — Basic</p>
            </SideSection>

          </div>
        </div>
      </div>
    </>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h2 style={{
        margin: '0 0 12px', fontSize: '12px', fontWeight: '700',
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color: '#1d4ed8', fontFamily: 'monospace',
        borderBottom: '1px solid #dbeafe', paddingBottom: '4px',
      }}>{title}</h2>
      {children}
    </div>
  )
}

function SideSection({ title, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{
        margin: '0 0 8px', fontSize: '11px', fontWeight: '700',
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color: '#1d4ed8', fontFamily: 'monospace',
        borderBottom: '1px solid #dbeafe', paddingBottom: '4px',
      }}>{title}</h2>
      {children}
    </div>
  )
}

function ExpEntry({ role, company, period, note, bullets }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <p style={{ margin: 0, fontWeight: '700', fontSize: '13px', color: '#0f172a' }}>{role}</p>
        <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontFamily: 'monospace', whiteSpace: 'nowrap', flexShrink: 0 }}>{period}</p>
      </div>
      <p style={{ margin: '1px 0 2px', fontSize: '12px', color: '#1d4ed8' }}>{company}</p>
      {note && <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#ca8a04', fontFamily: 'monospace' }}>{note}</p>}
      {bullets.length > 0 && (
        <ul style={{ margin: '4px 0 0', paddingLeft: '16px' }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ fontSize: '12px', color: '#374151', marginBottom: '2px', lineHeight: 1.5 }}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function CertLine({ label, sub }) {
  return (
    <div style={{ marginBottom: '5px' }}>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: '700', color: '#1e3a8a' }}>{label}</p>
      <p style={{ margin: 0, fontSize: '10px', color: '#64748b', fontFamily: 'monospace' }}>{sub}</p>
    </div>
  )
}
