import { coachSteps } from '../data'
import type { Screen } from '../types'

interface Props {
  navigate: (screen: Screen) => void
}

export default function CoachScreen({ navigate }: Props) {
  return (
    <div style={{ paddingTop: 48 }}>
      <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", color: '#8B6E4E', fontSize: 14, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 6 }}>← Back</button>

      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#9B3AE8', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Tool 4</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Pre-Call Coach</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#6B4F35', marginBottom: 40 }}>Based on your January statement, here's your personalised call guide.</p>

      <div style={{ background: 'linear-gradient(135deg, #9B3AE8, #7B1AE0)', borderRadius: 20, padding: '28px 32px', marginBottom: 28, color: '#fff' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, opacity: 0.8, marginBottom: 8 }}>YOUR MISSION FOR THIS CALL</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, lineHeight: 1.3 }}>
          Question the $45 fee increase and request a written breakdown of administration charges.
        </div>
      </div>

      {coachSteps.map(({ step, title, script, why }) => (
        <div key={step} style={{ background: '#fff', borderRadius: 16, padding: '24px 28px', marginBottom: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: '4px solid #9B3AE8' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              minWidth: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #9B3AE8, #7B1AE0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 16,
            }}>{step}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ background: '#F8F2FF', borderRadius: 10, padding: '14px 16px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#3D2B1A', lineHeight: 1.7, marginBottom: 10 }}>
                💬 {script}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#9B3AE8', fontStyle: 'italic' }}>Why: {why}</div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ background: 'rgba(58,184,123,0.08)', border: '1px solid rgba(58,184,123,0.3)', borderRadius: 16, padding: '20px 24px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: '#3AB87B', marginBottom: 8 }}>🧾 Your Rights — Always in Your Pocket</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#3D2B1A', lineHeight: 1.8 }}>
          Under the <strong>Aged Care Act 1997</strong>, you have the right to: itemised fee statements · notice of any fee change · independent review of decisions · lodge a complaint without retribution.
        </div>
      </div>
    </div>
  )
}
