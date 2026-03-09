# CareLens — Home Care Co-Pilot

CareLens is an independent transparency tool that turns confusing Home Care Package statements into clear, actionable insight — in seconds.

Built for Australian families navigating the aged care system, CareLens sits entirely on the consumer's side. It is not provider-owned, not affiliated with any care organisation, and has no incentive other than helping families understand what they're paying for.

---

## The Problem

Over 180,000 Australians receive Home Care Package (HCP) funding — yet 67% of families report being confused by their monthly statements. More than $650M in package funds goes unspent every year, largely because families don't know what they have, what they're being charged, or whether those charges are fair.

---

## The Solution — Four Tools, One Mission

### 🔍 Statement Translator
Upload a monthly HCP invoice (PNG, JPG, or PDF). The AI decodes every line into plain English — flagging unusual charges, explaining jargon, and colour-coding fee categories. What used to take families 40+ minutes takes 8 seconds.

### 💰 Care Wallet
A budgeting dashboard built specifically for Home Care Packages. See your package balance, monthly burn rate, and projected run-out date at a glance. Get alerts before funds run low — not after.

### 🛡️ Fair Price Watchdog
Anonymised, community-sourced data from thousands of families across Australia shows whether your provider's fees are above or below average for your region and care level. Like a price comparison site — but for your parent's care fees.

### 🎯 Pre-Call Coach
Before you call your provider, CareLens analyses your statement and generates a personalised call script — the exact questions to ask, the rights you hold under the Aged Care Act 1997, and the outcomes to push for. Turns an anxious call into a confident conversation.

---

## Built With

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite 5](https://vitejs.dev) | Build tool and dev server |
| [Google Fonts](https://fonts.google.com) | Playfair Display + DM Sans |

No external UI libraries or component frameworks — the entire UI is built with inline styles and vanilla CSS animations.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd carelens-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

The app will be available at **http://localhost:5173**

### Building for Production

```bash
npm run build
```

Output is placed in the `dist/` folder. To preview the production build locally:
```bash
npm run preview
```

---

## Project Structure

```
carelens-website/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx              # Entry point
    ├── App.tsx               # Root component, handles screen routing
    ├── index.css             # Global styles and animations
    ├── types.ts              # TypeScript types
    ├── data.ts               # Static data (statements, budget, watchdog, coach steps)
    └── components/
        ├── Header.tsx
        ├── HomeScreen.tsx
        ├── TranslateScreen.tsx
        ├── WalletScreen.tsx
        ├── WatchdogScreen.tsx
        └── CoachScreen.tsx
```

---

## Legal Context

CareLens references rights under the **Aged Care Act 1997**, including the right to itemised fee statements, notice of fee changes, independent review of decisions, and lodging complaints without retribution.

This tool is designed for informational purposes. It is not a substitute for professional financial or legal advice.
