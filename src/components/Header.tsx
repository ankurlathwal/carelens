import type { Screen } from '../types'

interface Props {
  activeScreen: Screen
  navigate: (screen: Screen) => void
}

const navItems: { label: string; screen: Screen }[] = [
  { label: 'Translate', screen: 'translate' },
  { label: 'Wallet', screen: 'wallet' },
  { label: 'Watchdog', screen: 'watchdog' },
  { label: 'Coach', screen: 'coach' },
]

export default function Header({ activeScreen, navigate }: Props) {
  return (
    <div style={{
      background: 'rgba(253,246,237,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(232,121,58,0.15)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div onClick={() => navigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #E8793A, #D4581C)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18,
        }}>🧭</div>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 900, letterSpacing: '-0.5px', color: '#1A1208' }}>CareLens</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#8B6E4E', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: -2 }}>Home Care Co-Pilot</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {navItems.map(({ label, screen }) => (
          <button
            key={label}
            onClick={() => navigate(screen)}
            className="pill-btn"
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              background: activeScreen === screen ? '#E8793A' : 'transparent',
              color: activeScreen === screen ? '#fff' : '#8B6E4E',
              border: activeScreen === screen ? 'none' : '1px solid rgba(139,110,78,0.2)',
            }}
          >{label}</button>
        ))}
      </div>
    </div>
  )
}
