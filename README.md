# Agent RPG

RimWorld-style top-down game view for managing an AI agent squad.

🎮 **Live**: [agent-rpg.vercel.app](https://agent-rpg.vercel.app)

## What it is

A 2D canvas-based game where your AI agents live in rooms aboard a spaceship. Click an agent to see their RPG character sheet (stats, skills, cyberware). Click a room to see details like token spend, memory banks, or assigned agents. The simulation runs live — agents walk between rooms, complete tasks, and post events to an activity log.

## Features

- **24×18 ship grid** with 15 pre-built rooms: Bridge, Briefing, Workshop, Armory, Commons, Medbay, Training, Engineering, Storage, Financial Center, Memory Vault, and 4 agent Quarters
- **8 animated agent sprites** (ATLAS, CIPHER, FORGE, ECHO, MIRROR, MUSE, SENTINEL, NOVA) — each with unique 8-bit pixel art
- **Live simulation**: agents move between rooms, tasks rotate, events stream to the activity log
- **Pan & zoom** canvas with mouse drag and scroll wheel
- **Agent profile panel** — full RPG character sheet with stats, skills (EPIC/RARE tiers), memory banks, connectors
- **Room detail panel** — room-specific content (token spend for Financial Center, memory banks for Memory Vault, global metrics for Bridge)
- **Minimap** with live agent dots
- **Resource HUD** — credits, power, agents, active ops with play/pause and 1x/2x/4x sim speed

## Stack

- Next.js 16 App Router · React 19 · TypeScript
- HTML5 Canvas rendering with layered tilemap, camera, sprite animation
- Tailwind CSS v4 for UI overlays
- Zustand state management
- 39 pixel art assets generated via Gemini nano-banana
- Deployed on Vercel (auto-deploys on push to `main`)

## Related

- 📊 [AgentCommandHQ](https://github.com/weeeha/AgentCommandHQ) — the business dashboard variant at [agent-command-hq.vercel.app](https://agent-command-hq.vercel.app)

## Develop

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.
