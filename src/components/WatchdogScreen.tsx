import { watchdogData } from '../data'
import type { Screen } from '../types'

interface Props {
  navigate: (screen: Screen) => void
}

export default function WatchdogScreen({ navigate }: Props) {
  return (
    <div className="screen-inner">
      <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", color: '#8B6E4E', fontSize: 14, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 6 }}>← Back</button>

      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#3AB87B', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Tool 3</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Fair Price Watchdog</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#6B4F35', marginBottom: 40 }}>Based on anonymised data from 12,400 families across Australia</p>

      {watchdogData.map(({ label, yours, low, avg, high, unit }) => {
        const range = high - low
        const pos = Math.min(100, Math.max(0, ((yours - low) / range) * 100))
        const isHigh = yours > avg * 1.1
        return (
          <div key={label} style={{ background: '#fff', borderRadius: 16, padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#8B6E4E', marginTop: 2 }}>{unit}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: isHigh ? '#E83A3A' : '#3AB87B' }}>
                  {yours}{unit.includes('%') ? '%' : unit.includes('hr') ? '/hr' : ''}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: isHigh ? '#E83A3A' : '#3AB87B', fontWeight: 600 }}>
                  {isHigh ? '▲ Above average' : '✓ Fair'}
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', height: 8, background: 'linear-gradient(90deg, #3AB87B, #E8B03A, #E83A3A)', borderRadius: 4 }}>
              <div style={{
                position: 'absolute',
                left: `${pos}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 18, height: 18,
                background: '#1A1208',
                borderRadius: '50%',
                border: '3px solid #fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#8B6E4E' }}>Low: {low}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#8B6E4E' }}>Avg: {avg}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#8B6E4E' }}>High: {high}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
