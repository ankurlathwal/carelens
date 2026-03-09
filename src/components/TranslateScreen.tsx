import { useState } from 'react'
import { mockStatement } from '../data'
import type { Screen } from '../types'

interface Props {
  navigate: (screen: Screen) => void
}

export default function TranslateScreen({ navigate }: Props) {
  const [translating, setTranslating] = useState(false)
  const [translated, setTranslated] = useState(false)
  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  const handleTranslate = () => {
    setTranslating(true)
    setTimeout(() => {
      setTranslating(false)
      setTranslated(true)
    }, 2200)
  }

  return (
    <div className="screen-inner">
      <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", color: '#8B6E4E', fontSize: 14, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 6 }}>← Back</button>

      <div className="split-2">
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#E8793A', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Tool 1</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Statement<br />Translator</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#6B4F35', lineHeight: 1.8, marginBottom: 32 }}>
            Upload your monthly Home Care Package invoice and our AI will decode every single line — explaining what each charge means, whether it's fair, and what to do if something looks off.
          </p>

          {!translated ? (
            <div
              onClick={!translating ? handleTranslate : undefined}
              style={{
                border: '2px dashed rgba(232,121,58,0.4)',
                borderRadius: 16,
                padding: '40px 24px',
                textAlign: 'center',
                cursor: translating ? 'default' : 'pointer',
                background: 'rgba(232,121,58,0.03)',
                transition: 'all 0.2s',
              }}
            >
              {translating ? (
                <>
                  <div className="spin" style={{ fontSize: 36, marginBottom: 12, display: 'inline-block' }}>⚙️</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#8B6E4E' }} className="pulse">Analysing your statement...</div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📄</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: '#1A1208', marginBottom: 6 }}>Click to simulate uploading a statement</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8B6E4E' }}>PNG, JPG, or PDF — we handle them all</div>
                </>
              )}
            </div>
          ) : (
            <div style={{ background: 'rgba(58,184,123,0.08)', border: '1px solid rgba(58,184,123,0.3)', borderRadius: 16, padding: '20px 24px' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#3AB87B', fontWeight: 600, marginBottom: 4 }}>✓ Statement translated successfully</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#6B4F35' }}>5 line items decoded · 1 warning · 1 flag</div>
            </div>
          )}
        </div>

        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8B6E4E', marginBottom: 12, fontWeight: 500 }}>
            {translated ? 'Your translated statement:' : 'Example output:'}
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
            {mockStatement.map((row, i) => (
              <div
                key={i}
                className="row-hover"
                onClick={() => setSelectedRow(selectedRow === i ? null : i)}
                style={{
                  padding: '16px 20px',
                  background: i % 2 === 0 ? '#fff' : '#FDF6ED',
                  borderBottom: i < mockStatement.length - 1 ? '1px solid rgba(139,110,78,0.08)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: row.status === 'normal' ? '#3AB87B' : row.status === 'warning' ? '#E8B03A' : '#E83A3A',
                    }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500 }}>{row.category}</span>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>{row.charge}</span>
                </div>
                {selectedRow === i && (
                  <div style={{
                    marginTop: 10, padding: '10px 14px',
                    background: row.status === 'normal' ? 'rgba(58,184,123,0.08)' : row.status === 'warning' ? 'rgba(232,176,58,0.1)' : 'rgba(232,58,58,0.08)',
                    borderRadius: 8,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: '#3D2B1A',
                    lineHeight: 1.6,
                  }}>{row.note}</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#8B6E4E', marginTop: 10, textAlign: 'center' }}>
            👆 Tap any row to see our analysis
          </div>
        </div>
      </div>
    </div>
  )
}
