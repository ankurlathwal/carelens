import { features } from '../data'
import type { Screen } from '../types'

interface Props {
  navigate: (screen: Screen) => void
}

const stats = [
  { stat: '180,000+', label: 'Australians on Home Care Packages' },
  { stat: '67%', label: 'Families confused by their monthly statement' },
  { stat: '$650M+', label: 'In unspent package funds annually' },
]

const valueProps = [
  'Independent — not provider-owned',
  'AI-powered translation in seconds',
  'Anonymous benchmarking data',
  'Family-synced — share with siblings',
  'Your rights, always one tap away',
]

export default function HomeScreen({ navigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '72px 0 56px' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(232,121,58,0.1)',
          color: '#E8793A',
          fontSize: 12,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          padding: '6px 16px',
          borderRadius: 20,
          marginBottom: 24,
        }}>Australia's Home Care Problem, Solved</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          color: '#1A1208',
          maxWidth: 700,
          margin: '0 auto 24px',
        }}>
          Never feel confused<br />
          <span style={{ color: '#E8793A' }}>about your parent's care</span><br />
          again.
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 18,
          color: '#6B4F35',
          maxWidth: 520,
          margin: '0 auto 40px',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          CareLens is an independent transparency tool that turns confusing Home Care Package statements into clear, actionable insight — in seconds.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('translate')} className="pill-btn" style={{
            background: 'linear-gradient(135deg, #E8793A, #D4581C)',
            color: '#fff',
            padding: '16px 36px',
            borderRadius: 50,
            fontSize: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            boxShadow: '0 8px 32px rgba(232,121,58,0.35)',
          }}>Try the Statement Translator →</button>

          <button onClick={() => navigate('wallet')} className="pill-btn" style={{
            background: 'transparent',
            color: '#1A1208',
            padding: '16px 36px',
            borderRadius: 50,
            fontSize: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            border: '1.5px solid rgba(26,18,8,0.2)',
          }}>See the Care Wallet</button>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        background: 'rgba(139,110,78,0.1)',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 64,
      }}>
        {stats.map(({ stat, label }) => (
          <div key={stat} style={{ background: '#FDF6ED', padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, color: '#E8793A', marginBottom: 6 }}>{stat}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8B6E4E', lineHeight: 1.5 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>Four tools. One mission.</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#8B6E4E', textAlign: 'center', marginBottom: 36 }}>Everything families need to feel confident about aged care funding.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 64 }}>
        {features.map((f) => (
          <div
            key={f.id}
            className="card-hover"
            onClick={() => navigate(f.id as Screen)}
            style={{
              background: '#fff',
              borderRadius: 20,
              padding: '32px 28px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(232,121,58,0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: -20, right: -20,
              width: 100, height: 100, borderRadius: '50%',
              background: f.color + '10',
            }} />
            <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: f.color, fontWeight: 600, marginBottom: 12 }}>{f.tagline}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#6B4F35', lineHeight: 1.7 }}>{f.description}</p>
            <div style={{
              marginTop: 20, padding: '12px 16px',
              background: f.color + '10',
              borderRadius: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: f.color,
              fontWeight: 500,
            }}>💡 {f.wow}</div>
          </div>
        ))}
      </div>

      {/* Why This Wins */}
      <div style={{
        background: 'linear-gradient(135deg, #1A1208 0%, #2D1F0A 100%)',
        borderRadius: 24,
        padding: '52px 48px',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#E8793A', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Why CareLens wins</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, marginBottom: 20, lineHeight: 1.2 }}>
          It's not just about invoices.<br />
          <span style={{ color: '#E8793A' }}>It's about confidence.</span>
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#C4A882', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.8 }}>
          Every other tool talks to providers. We talk to families. We're the only independent, consumer-first clarity layer in Australian aged care.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {valueProps.map(v => (
            <div key={v} style={{
              background: 'rgba(232,121,58,0.15)',
              border: '1px solid rgba(232,121,58,0.3)',
              color: '#F5C89A',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: 50,
            }}>✓ {v}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
