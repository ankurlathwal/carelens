import type { Feature, StatementRow, BudgetEntry, WatchdogEntry, CoachStep } from './types'

export const features: Feature[] = [
  {
    id: 'translate',
    icon: '🔍',
    title: 'Statement Translator',
    tagline: 'Photo your invoice. Understand it instantly.',
    description:
      'Snap your monthly statement. Our AI instantly translates every line into plain English — flagging unusual charges, explaining jargon, and colour-coding every fee category.',
    wow: 'Families report spending 40+ minutes trying to decode a statement. We do it in 8 seconds.',
    color: '#E8793A',
  },
  {
    id: 'wallet',
    icon: '💰',
    title: 'Care Wallet',
    tagline: 'Your funding, visualised like a health app.',
    description:
      'See your Package balance, burn rate, and projected run-out date in one glance. Get alerts before you run low — not after.',
    wow: 'The first budgeting tool built specifically for Home Care Packages.',
    color: '#3A7BE8',
  },
  {
    id: 'watchdog',
    icon: '🛡️',
    title: 'Fair Price Watchdog',
    tagline: 'Are you paying too much? Now you\'ll know.',
    description:
      'Anonymised community data from thousands of families tells you if your provider\'s fees are above or below average for your region and care level.',
    wow: 'Like a comparison site — but for your parent\'s care fees.',
    color: '#3AB87B',
  },
  {
    id: 'coach',
    icon: '🎯',
    title: 'Pre-Call Coach',
    tagline: 'Walk into every provider conversation prepared.',
    description:
      'Before you call your provider, we analyse your statement and give you a personalised script: the exact questions to ask, the rights you have, and the outcomes to push for.',
    wow: 'Turns an anxious call into a confident conversation.',
    color: '#9B3AE8',
  },
]

export const mockStatement: StatementRow[] = [
  { category: 'Care Management', charge: '$312.00', status: 'normal', note: 'Standard — within average range for your region.' },
  { category: 'Personal Care (8hrs)', charge: '$640.00', status: 'normal', note: '8 hours at $80/hr. Market rate: $75–$85/hr. ✓ Fair.' },
  { category: 'Case Coordination Fee', charge: '$180.00', status: 'warning', note: '⚠️ This fee increased by $45 from last month. No explanation provided.' },
  { category: 'Administration Fee', charge: '$220.00', status: 'high', note: '🚩 This is 14% of your total package. Benchmark is 8–10%. Consider asking for a breakdown.' },
  { category: 'Domestic Assistance (4hrs)', charge: '$280.00', status: 'normal', note: '4 hours at $70/hr. ✓ Within expected range.' },
]

export const budgetData: BudgetEntry[] = [
  { month: 'Aug', spent: 1420 },
  { month: 'Sep', spent: 1580 },
  { month: 'Oct', spent: 1632 },
  { month: 'Nov', spent: 1890 },
  { month: 'Dec', spent: 1632 },
  { month: 'Jan', spent: 1750 },
]

export const TOTAL_BUDGET = 3800
export const SPENT = 1750
export const REMAINING = TOTAL_BUDGET - SPENT

export const watchdogData: WatchdogEntry[] = [
  { label: 'Care Management', yours: 312, low: 220, avg: 290, high: 390, unit: '$/month' },
  { label: 'Personal Care', yours: 80, low: 65, avg: 78, high: 95, unit: '$/hr' },
  { label: 'Admin Fees', yours: 14, low: 6, avg: 9, high: 12, unit: '% of package' },
  { label: 'Case Coordination', yours: 180, low: 100, avg: 135, high: 175, unit: '$/month' },
]

export const coachSteps: CoachStep[] = [
  {
    step: '1',
    title: 'Open the call confidently',
    script: `"Hi, I'm calling about Mum's January statement. I have a couple of questions about specific charges and I'd like to understand them clearly before approving the statement."`,
    why: "Sets a clear, professional tone. Signals you've reviewed it carefully.",
  },
  {
    step: '2',
    title: 'Ask about the fee increase',
    script: `"I noticed the Case Coordination Fee increased by $45 this month to $180. I don't see any explanation in the statement — can you tell me what changed?"`,
    why: 'Under the Aged Care Act, providers must notify you of fee changes. This is your right.',
  },
  {
    step: '3',
    title: 'Challenge the admin fee',
    script: `"Your administration fee is currently 14% of our total package. I understand the benchmark is 8–10%. Can you provide a written breakdown of what's included in that fee?"`,
    why: 'You have the right to itemised fee explanations at any time.',
  },
  {
    step: '4',
    title: 'Close and follow up',
    script: `"Thank you — I'd like all of this confirmed in writing via email within 5 business days. Who should I address the follow-up to?"`,
    why: 'Creates accountability. Written responses are far harder to walk back.',
  },
]
