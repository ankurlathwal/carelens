import { useState } from 'react'
import type { Screen } from './types'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import TranslateScreen from './components/TranslateScreen'
import WalletScreen from './components/WalletScreen'
import WatchdogScreen from './components/WatchdogScreen'
import CoachScreen from './components/CoachScreen'

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home')
  const [animateIn, setAnimateIn] = useState(true)

  const navigate = (screen: Screen) => {
    setAnimateIn(false)
    setTimeout(() => {
      setActiveScreen(screen)
      setAnimateIn(true)
    }, 200)
  }

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: 'linear-gradient(135deg, #FDF6ED 0%, #F5EEE3 100%)',
      minHeight: '100vh',
      color: '#1A1208',
    }}>
      <Header activeScreen={activeScreen} navigate={navigate} />

      <div className={animateIn ? 'fade-in' : ''} style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px 60px' }}>
        {activeScreen === 'home' && <HomeScreen navigate={navigate} />}
        {activeScreen === 'translate' && <TranslateScreen navigate={navigate} />}
        {activeScreen === 'wallet' && <WalletScreen navigate={navigate} />}
        {activeScreen === 'watchdog' && <WatchdogScreen navigate={navigate} />}
        {activeScreen === 'coach' && <CoachScreen navigate={navigate} />}
      </div>
    </div>
  )
}
