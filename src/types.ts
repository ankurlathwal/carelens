export type Screen = 'home' | 'translate' | 'wallet' | 'watchdog' | 'coach'

export interface Feature {
  id: string
  icon: string
  title: string
  tagline: string
  description: string
  wow: string
  color: string
}

export interface StatementRow {
  category: string
  charge: string
  status: 'normal' | 'warning' | 'high'
  note: string
}

export interface BudgetEntry {
  month: string
  spent: number
}

export interface WatchdogEntry {
  label: string
  yours: number
  low: number
  avg: number
  high: number
  unit: string
}

export interface CoachStep {
  step: string
  title: string
  script: string
  why: string
}
