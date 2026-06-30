import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="education" style={{
      padding: '100px 24px',
      maxWidth: '760px',
      margin: '0 auto',
      borderTop: '1px solid #0e2040',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontFamily: 'monospace', color: '#3b82f6', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Education
        </p>
        <h2 style={{ color: '#e2eaf4', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', margin: '0 0 40px', letterSpacing: '-0.5px' }}>
          Academic Background
        </h2>

        {/* Masters */}
        <div style={{
          border: '1px solid #1e3a5f',
          borderLeft: '3px solid #3b82f6',
          borderRadius: '6px',
          padding: '28px',
          background: 'rgba(59,130,246,0.05)',
          marginBottom: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <p style={{ margin: '0 0 4px', color: '#e2eaf4', fontWeight: '700', fontSize: '15px' }}>
                MSc in Analysis and Engineering of Big Data
              </p>
              <p style={{ margin: 0, color: '#7a9bbf', fontSize: '12px', fontFamily: 'monospace' }}>
                Faculdade de Ciências e Tecnologias da Universidade Nova de Lisboa · Lisboa
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#3b82f6',
                border: '1px solid #1e3a5f',
                borderRadius: '4px',
                padding: '2px 8px',
                display: 'block',
                marginBottom: '6px',
              }}>2022</span>
              <span style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#60a5fa',
                fontWeight: '700',
              }}>15 / 20</span>
            </div>
          </div>

          {/* Thesis */}
          <div style={{
            background: 'rgba(14,32,64,0.6)',
            borderRadius: '4px',
            padding: '16px 18px',
            borderLeft: '2px solid #1d4ed8',
          }}>
            <p style={{ margin: '0 0 4px', color: '#93c5fd', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Thesis
            </p>
            <p style={{ margin: '0 0 6px', color: '#e2eaf4', fontSize: '14px', fontWeight: '600', lineHeight: 1.5 }}>
              "Random Forests Robustness in Genomic Prediction and Selection"
            </p>
            <p style={{ margin: 0, color: '#7a9bbf', fontSize: '12px', fontFamily: 'monospace' }}>
              Score: <span style={{ color: '#60a5fa', fontWeight: '700' }}>17 / 20</span>
            </p>
          </div>
        </div>

        {/* Bachelor */}
        <div style={{
          border: '1px solid #0e2040',
          borderLeft: '3px solid #1d4ed8',
          borderRadius: '6px',
          padding: '20px 24px',
          background: 'rgba(29,78,216,0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div>
            <p style={{ margin: '0 0 4px', color: '#e2eaf4', fontWeight: '600', fontSize: '14px' }}>
              BSc in Marine Sciences
            </p>
            <p style={{ margin: 0, color: '#7a9bbf', fontSize: '12px', fontFamily: 'monospace' }}>
              Escola Náutica Infante D.Henrique · Lisboa
            </p>
          </div>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            color: '#3b82f6',
            border: '1px solid #1e3a5f',
            borderRadius: '4px',
            padding: '2px 8px',
          }}>2020</span>
        </div>
      </motion.div>
    </section>
  )
}
