import { budgetData, TOTAL_BUDGET, SPENT, REMAINING } from '../data'
import type { Screen } from '../types'

interface Props {
  navigate: (screen: Screen) => void
}

export default function WalletScreen({ navigate }: Props) {
  const pct = Math.round((SPENT / TOTAL_BUDGET) * 100)

  const summaryCards = [
    { label: 'Monthly Budget', value: `$${TOTAL_BUDGET.toLocaleString()}`, sub: 'Level 3 Package', color: '#3A7BE8' },
    { label: 'Spent This Month', value: `$${SPENT.toLocaleString()}`, sub: `${pct}% used`, color: '#E8793A' },
    { label: 'Remaining', value: `$${REMAINING.toLocaleString()}`, sub: 'Available to spend', color: '#3AB87B' },
  ]

  return (
    <div style={{ paddingTop: 48 }}>
      <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", color: '#8B6E4E', fontSize: 14, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 6 }}>← Back</button>

      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#3A7BE8', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Tool 2</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, lineHeight: 1.1, marginBottom: 8 }}>Care Wallet</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#6B4F35', marginBottom: 40 }}>Mum's Level 3 Home Care Package — January 2025</p>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 32 }}>
        {summaryCards.map(({ label, value, sub, color }) => (
          <div key={label} style={{ background: '#fff', borderRadius: 16, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: `3px solid ${color}` }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#8B6E4E', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{label}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color }}>{value}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8B6E4E', marginTop: 4 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Budget Bar */}
      <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>Monthly Budget Usage</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#E8793A', fontWeight: 600 }}>{pct}%</span>
        </div>
        <div style={{ height: 12, background: '#F0E8D8', borderRadius: 6, overflow: 'hidden' }}>
          <div className="bar-fill" style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #3A7BE8, #E8793A)', borderRadius: 6 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#8B6E4E' }}>$0</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#8B6E4E' }}>${TOTAL_BUDGET.toLocaleString()}</span>
        </div>
      </div>

      {/* Spend History */}
      <div style={{ background: '#fff', borderRadius: 16, padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>6-Month Spend History</div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 120 }}>
          {budgetData.map(({ month, spent }) => {
            const h = Math.round((spent / 2200) * 100)
            const isLatest = month === 'Jan'
            return (
              <div key={month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#8B6E4E' }}>${spent}</div>
                <div style={{
                  width: '100%',
                  height: `${h}px`,
                  background: isLatest ? 'linear-gradient(180deg, #E8793A, #D4581C)' : 'linear-gradient(180deg, #C4A882, #B09070)',
                  borderRadius: '6px 6px 0 0',
                  transition: 'height 1s ease',
                }} />
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: isLatest ? '#E8793A' : '#8B6E4E', fontWeight: isLatest ? 700 : 400 }}>{month}</div>
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 20, padding: '14px 18px', background: 'rgba(232,121,58,0.08)', borderRadius: 10 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#E8793A', fontWeight: 600, marginBottom: 4 }}>⚠️ Burn Rate Alert</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#6B4F35' }}>At current spending, Mum's package will reach its limit in <strong>17 days</strong>. Consider deferring non-essential services to next month.</div>
        </div>
      </div>
    </div>
  )
}
