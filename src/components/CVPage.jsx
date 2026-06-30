import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import profileImg from '../assets/me_CV.jpeg'

const RH_ID = '230-060-261'

const blue = '#1d4ed8'
const darkBlue = '#0f172a'
const gray = '#475569'
const lightGray = '#94a3b8'
const red = '#dc2626'

const s = StyleSheet.create({
  page: { fontFamily: 'Helvetica', fontSize: 9, color: darkBlue, padding: '14mm 14mm 14mm 14mm', backgroundColor: '#ffffff' },

  // Header
  header: { flexDirection: 'row', alignItems: 'center', gap: 16, borderBottom: `2pt solid ${blue}`, paddingBottom: 12, marginBottom: 14 },
  photo: { width: 64, height: 64, borderRadius: 32, objectFit: 'cover' },
  headerText: { flex: 1 },
  name: { fontSize: 17, fontFamily: 'Helvetica-Bold', color: darkBlue, marginBottom: 3 },
  title: { fontSize: 9, color: blue, marginBottom: 3 },
  contact: { fontSize: 8, color: gray },

  // Columns
  cols: { flexDirection: 'row', gap: 20 },
  left: { flex: 1 },
  right: { width: 155 },

  // Section
  sectionTitle: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: blue, textTransform: 'uppercase', letterSpacing: 1.2, borderBottom: `0.5pt solid #bfdbfe`, paddingBottom: 2, marginBottom: 8 },
  section: { marginBottom: 14 },

  // Entry
  entryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1 },
  entryRole: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: darkBlue, flex: 1, paddingRight: 8 },
  entryPeriod: { fontSize: 8, color: gray },
  entryCompany: { fontSize: 8.5, color: blue, marginBottom: 2 },
  entryNote: { fontSize: 7.5, color: '#ca8a04', marginBottom: 3 },
  bullet: { fontSize: 8, color: '#374151', marginBottom: 2, paddingLeft: 8 },
  entryGap: { marginBottom: 10 },

  // Skills
  skillsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 3 },
  skill: { fontSize: 7.5, color: blue, backgroundColor: '#eff6ff', border: `0.5pt solid #bfdbfe`, borderRadius: 2, paddingHorizontal: 4, paddingVertical: 1.5 },

  // Certs
  certBlock: { marginBottom: 5 },
  certLabel: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: '#1e3a8a' },
  certSub: { fontSize: 7.5, color: gray },
  rhHeader: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: red, marginBottom: 3, marginTop: 6 },
  rhLine: { fontSize: 7.5, color: '#374151', marginBottom: 1.5 },

  // Languages
  langLine: { fontSize: 8.5, color: '#374151', marginBottom: 2 },
})

function CVDocument() {
  return (
    <Document title="Miguel Tomás — CV">
      <Page size="A4" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <Image src={profileImg} style={s.photo} />
          <View style={s.headerText}>
            <Text style={s.name}>Miguel Tomás Beirão Antunes Moreira Braga</Text>
            <Text style={s.title}>Platform Engineer · MLOps · DevOps</Text>
            <Text style={s.contact}>Lisboa, Portugal  ·  miguel_braga_inv@outlook.pt  ·  github.com/mikeebraga</Text>
          </View>
        </View>

        <View style={s.cols}>

          {/* LEFT */}
          <View style={s.left}>

            {/* Experience */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Experience</Text>

              <View style={s.entryGap}>
                <View style={s.entryHeader}>
                  <Text style={s.entryRole}>Platform Engineer — Associate Consultant</Text>
                  <Text style={s.entryPeriod}>Jan 2023 – Present</Text>
                </View>
                <Text style={s.entryCompany}>Timestamp · SPMS (National Health Service IT)</Text>
                <Text style={s.entryNote}>↑ Promoted from DevOps Engineer</Text>
                {[
                  'Managed Kubernetes & OpenShift clusters for national healthcare infrastructure.',
                  'Implemented CI/CD pipelines with GitLab CI across multiple environments.',
                  'Developed Ansible playbooks for configuration management at scale.',
                  'Built observability stack with Prometheus, Grafana, and Loki.',
                  'Client — Navigator: Kafka, Redis, Kasten, FluxCD on OpenShift; GitOps migration; Quay image pipelines.',
                  'Client — NAV: OpenShift support, Artemis, TLS certificates, troubleshooting.',
                ].map((b, i) => <Text key={i} style={s.bullet}>· {b}</Text>)}
              </View>

              <View style={s.entryGap}>
                <View style={s.entryHeader}>
                  <Text style={s.entryRole}>Customer Service & Digital Transformation</Text>
                  <Text style={s.entryPeriod}>Oct 2021 – Jan 2023</Text>
                </View>
                <Text style={s.entryCompany}>Chemetall · BASF Group</Text>
                {[
                  'Managed sales workflows in a global chemical company.',
                  'Participated in AI/ML/Data Science digital transformation initiatives.',
                  'Trained in Python, R, SQL, Tableau, and Microsoft Azure.',
                ].map((b, i) => <Text key={i} style={s.bullet}>· {b}</Text>)}
              </View>
            </View>

            {/* Education */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Education</Text>

              <View style={s.entryGap}>
                <View style={s.entryHeader}>
                  <Text style={s.entryRole}>MSc in Analysis and Engineering of Big Data — 18/20</Text>
                  <Text style={s.entryPeriod}>2022</Text>
                </View>
                <Text style={s.entryCompany}>FCT Nova de Lisboa</Text>
                <Text style={s.bullet}>· Thesis: "Random Forests Robustness in Genomic Prediction and Selection" — 17/20</Text>
              </View>

              <View>
                <View style={s.entryHeader}>
                  <Text style={s.entryRole}>BSc in Marine Sciences</Text>
                  <Text style={s.entryPeriod}>2020</Text>
                </View>
                <Text style={s.entryCompany}>Escola Náutica Infante D. Henrique</Text>
              </View>
            </View>

          </View>

          {/* RIGHT */}
          <View style={s.right}>

            {/* Skills */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Core Skills</Text>
              <View style={s.skillsWrap}>
                {['Kubernetes','OpenShift','Docker','Helm','GitLab CI','Ansible','Terraform','Prometheus','Grafana','Loki','MLflow','Kubeflow','OpenShift AI','Falco','Trivy','Kubescape','Python','Shell / Bash','AWS','Azure'].map(sk => (
                  <Text key={sk} style={s.skill}>{sk}</Text>
                ))}
              </View>
            </View>

            {/* Certifications */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Certifications</Text>
              {[
                { label: 'CKS', sub: 'Jul 2024 · LF-icftssyk18' },
                { label: 'CKAD', sub: 'Jan 2024 · LF-j51wzuddqr' },
                { label: 'CKA', sub: 'Nov 2023 · LF-47ftkstuv5' },
              ].map(c => (
                <View key={c.label} style={s.certBlock}>
                  <Text style={s.certLabel}>{c.label}</Text>
                  <Text style={s.certSub}>{c.sub}</Text>
                </View>
              ))}

              <Text style={s.rhHeader}>Red Hat · {RH_ID}</Text>
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
              ].map(c => <Text key={c} style={s.rhLine}>· {c}</Text>)}
            </View>

            {/* Languages */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Languages</Text>
              <Text style={s.langLine}>Portuguese — Native</Text>
              <Text style={s.langLine}>English — Fluent (C1)</Text>
              <Text style={s.langLine}>Spanish — Basic</Text>
            </View>

          </View>
        </View>

      </Page>
    </Document>
  )
}

export default function CVPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '40px 24px' }}>
      <div style={{ background: '#fff', borderRadius: '12px', padding: '48px 40px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 4px 32px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
        <h1 style={{ margin: '0 0 8px', fontSize: '22px', color: '#0f172a', fontWeight: '700' }}>Miguel Tomás — CV</h1>
        <p style={{ margin: '0 0 32px', color: '#64748b', fontSize: '14px', lineHeight: 1.6 }}>
          Platform Engineer · MLOps · DevOps<br />
          Lisboa, Portugal
        </p>
        <PDFDownloadLink
          document={<CVDocument />}
          fileName="MiguelTomas_CV.pdf"
          style={{ textDecoration: 'none' }}
        >
          {({ loading }) => (
            <button style={{
              background: loading ? '#93c5fd' : '#1d4ed8',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 36px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: loading ? 'wait' : 'pointer',
              width: '100%',
              marginBottom: '12px',
            }}>
              {loading ? 'A gerar PDF...' : '⬇ Download CV (PDF)'}
            </button>
          )}
        </PDFDownloadLink>
        <a href="/" style={{ display: 'block', color: '#64748b', fontSize: '13px', textDecoration: 'none', marginTop: '8px' }}>
          ← Voltar ao site
        </a>
      </div>
    </div>
  )
}
