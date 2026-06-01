# Copilot Agent KIT — Landing Page Design System

> **Register**: Brand — Design IS the product. A developer-tool landing page for a portable multi-stack AI agent system.
>
> **Status**: Active · **Last updated**: 2026-06-01 · **Framework target**: Nuxt 4 + Vue 3 / React 19 + Next.js 15
>
> **Implementation note**: This document serves as the single source of truth for all visual decisions on the landing page. Frontend agents (`@frontend-nuxt`, `@frontend-react`) consume these specs directly. No implementation code should deviate from this spec without consultation.

---

## 1. Design Concept & Direction

### The Scene

> A senior full-stack developer or engineering lead lands on this page during a focused coding session. Dark mode IDE, clean workspace, ambient glow from the monitor. They are evaluating whether this toolkit can unify their fragmented AI agent workflow. This page needs to feel like a natural extension of the GitHub Copilot ecosystem — modern, intelligent, and capable. Not a generic SaaS landing page.

**This scene forces:** dark, cool-toned background (dark navy, not warm). Clean, sophisticated UI with purple/violet accents that echo GitHub Copilot's brand identity. Precise, technical, and modern.

### Theme Name: "Neural Nexus"

The aesthetic of a **neural network visualization** crossed with a **mission control dashboard**. Nodes pulse with intelligence. Connections form between specialized agents, all routing through a central orchestrator. The visual language communicates an AI system that is both powerful and organized.

### Brand Keywords (physical-object, 3 words)

1. **Networked** — interconnected agents, each node communicates through the hub
2. **Precise** — clean lines, deliberate spacing, technical confidence
3. **Intelligent** — glowing neural nodes, pulsing data flows, AI-native aesthetic

### Visual References (what we channel, not copy)

- **GitHub Copilot branding** — dark navy background, purple-violet accents, clean typography
- **Neural network visualizations** — connected nodes, flowing data paths, glowing synapses
- **Modern AI dashboards** — clean layouts, status indicators, data-rich but uncluttered
- **High-end financial trading platforms** — dense information, purposeful typography, dark backgrounds
- **Spacecraft mission control** — organized panels, hierarchical data display, cool ambient lighting

### Anti-References (what we explicitly do NOT channel)

- No warm/copper/amber tones (wrong for Copilot brand)
- No vintage or retro aesthetics (Switchboard is out)
- No editorial-magazine layouts
- No neon-on-black cyberpunk (tasteful glow, not gaming aesthetic)

---

## 2. Color Palette

### Color Strategy: Committed (hero) tapering to Full Palette

The **hero section uses Committed strategy** with deep navy background and purple-violet as the dominant accent color (~30-40% of visual energy). As the user scrolls, the page transitions to a **Full Palette** approach where distinct color roles (purple primary, blue secondary, green success) emerge across different sections.

All neutrals are tinted toward blue (hue 250-260°, chroma 0.008-0.015). Nothing is pure gray or pure black/white. This matches the GitHub Copilot brand identity derived from the OG banner asset.

### Seed Color

```
oklch(0.55 0.18 280)  — Vibrant purple/violet, the anchor (from OG image analysis)
```

### Dark Mode Palette (Primary — this is a dark-mode first brand)

| Token | OKLCH Value | Usage |
|-------|-------------|-------|
| `--color-bg` | `oklch(0.04 0.015 260)` | Page background (very dark navy) |
| `--color-bg-alt` | `oklch(0.06 0.02 260)` | Hero/featured section background |
| `--color-surface` | `oklch(0.08 0.015 260)` | Card, container surfaces |
| `--color-raised` | `oklch(0.10 0.015 260)` | Elevated surfaces |
| `--color-primary` | `oklch(0.55 0.18 280)` | Primary accent, CTAs (purple/violet) |
| `--color-primary-hover` | `oklch(0.60 0.20 280)` | CTA hover (brighter violet) |
| `--color-primary-dim` | `oklch(0.55 0.18 280 / 0.12)` | Accent wash |
| `--color-primary-glow` | `oklch(0.55 0.18 280 / 0.25)` | Ambient glow |
| `--color-secondary` | `oklch(0.50 0.10 250)` | Blue secondary accent |
| `--color-secondary-dim` | `oklch(0.50 0.10 250 / 0.1)` | Secondary wash |
| `--color-tertiary` | `oklch(0.65 0.12 190)` | Cyan accent (for variety) |
| `--color-text` | `oklch(0.85 0.008 260)` | Body text |
| `--color-text-heading` | `oklch(0.95 0.005 260)` | Heading text |
| `--color-text-muted` | `oklch(0.50 0.01 260)` | Secondary labels |
| `--color-border` | `oklch(1 0 0 / 0.06)` | Card borders |
| `--color-border-hover` | `oklch(1 0 0 / 0.12)` | Hovered card borders |
| `--color-success` | `oklch(0.60 0.15 145)` | Green status |
| `--color-warning` | `oklch(0.68 0.14 85)` | Amber status |
| `--color-error` | `oklch(0.58 0.18 30)` | Red status |

---

## 3. Typography

### Font Selection

**Step 1 — Brand voice words**: Patched, illuminated, racked.

**Step 2 — Three reflex-instinct fonts (all rejected)**:
- Inter (reflex-reject list — too common)
- Space Grotesk (reflex-reject list — too common)
- Fraunces (reflex-reject list — wrong register entirely)

**Step 3 — Catalog search with physical-object framing:**

| Role | Font | Why | Weights |
|------|------|-----|---------|
| **Display** | Manrope | Clean, geometric sans with distinct personality. Technical but warm. The font of a well-designed instrument panel label. Not overused. | 400, 500, 600, 700, 800 |
| **Body** | Rubik | Humanist sans with warmth. Pairs naturally with Manrope — Rubik is rounder, more approachable. Good for reading. | 300, 400, 500, 600 |
| **Code / Mono** | Fira Code | Developer-trusted mono with ligatures. Not on any reject list. The font you see in a clean terminal. | 400, 500 |

**Cross-check**: None of these are in the reflex-reject list (Fraunces, Newsreader, Lora, Crimson, Crimson Pro, Crimson Text, Playfair Display, Cormorant, Cormorant Garamond, Syne, IBM Plex Mono, IBM Plex Sans, IBM Plex Serif, Space Mono, Space Grotesk, Inter, DM Sans, DM Serif Display, DM Serif Text, Outfit, Plus Jakarta Sans, Instrument Sans, Instrument Serif). None are editorial-magazine defaults. Manrope + Rubik is not a reflex pairing. ✓

### Type Scale (Fluid with clamp)

| Level | Size (clamp) | Weight | Line Height | Letter Spacing | Font Family |
|-------|-------------|--------|-------------|----------------|-------------|
| Hero display | `clamp(2.5rem, 6vw + 0.5rem, 5.5rem)` | 800 | 1.05 | `-0.03em` | Manrope |
| Section heading | `clamp(1.75rem, 3.5vw + 0.5rem, 3rem)` | 700 | 1.15 | `-0.02em` | Manrope |
| Subheading | `clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)` | 500 | 1.3 | `-0.01em` | Manrope |
| Body large | `1.125rem` | 400 | 1.55 | `normal` | Rubik |
| Body | `1rem` | 400 | 1.6 | `normal` | Rubik |
| Body small | `0.875rem` | 400 | 1.6 | `normal` | Rubik |
| Label (uppercase) | `0.75rem` | 600 | 1.2 | `0.08em` | Fira Code |
| Code/inline | `0.875rem` | 400 | 1.5 | `normal` | Fira Code |
| Badge/pill | `0.7rem` | 500 | 1 | `0.02em` | Fira Code |
| Stat number | `clamp(2rem, 4vw + 0.5rem, 3.5rem)` | 800 | 1 | `-0.02em` | Manrope |

### Body Measure

- All body text containers: `max-width: 68ch`
- On dark background: line-height bumped by 0.05, letter-spacing: `0.01em`

### OpenType Features

```css
body { font-kerning: normal; }
h1, h2, h3 { text-wrap: balance; }
code { font-variant-ligatures: contextual; }   /* Fira Code ligatures */
.data { font-variant-numeric: tabular-nums; }
```

---

## 4. Spacing & Layout

### Grid System

```
Max width: clamp(90vw, 1200px, 96vw) centered
Content max: 72rem (standard section container)
Full bleed: hero background, ambient glow layers

Columns: 12-column implicit grid
  --grid-gap: clamp(1rem, 2vw, 2rem)
```

### Spacing Scale (base 4px)

| Token | Rem | Px | Usage |
|-------|-----|----|-------|
| `--space-1` | 0.25rem | 4px | Tight inline gaps |
| `--space-2` | 0.5rem | 8px | Button padding, icon gaps |
| `--space-3` | 0.75rem | 12px | Card inner gaps |
| `--space-4` | 1rem | 16px | Section padding (mobile) |
| `--space-6` | 1.5rem | 24px | Card padding |
| `--space-8` | 2rem | 32px | Section padding (desktop) |
| `--space-10` | 2.5rem | 40px | Large gaps |
| `--space-12` | 3rem | 48px | Sub-section spacing |
| `--space-16` | 4rem | 64px | Section separation |
| `--space-20` | 5rem | 80px | Hero bottom margin |
| `--space-24` | 6rem | 96px | Major section break |
| `--space-32` | 8rem | 128px | Page-section gap (desktop) |

### Layout Approach

**Asymmetry with purpose.** Not every section is centered. The hero is left-aligned with asymmetric visual weight (text on left, ambient glow on right). Agent cards form an intentionally irregular grid (different heights based on content). Spacing varies between sections for rhythm — identical padding everywhere creates monotony.

**Containers are selective.** The hero background bleeds full-width. The ambient glow layers are positioned absolute/relative to sections. Most content lives in a centered container, but decorative elements (status lights, glow orbs, connecting lines) break out.

---

## 5. Component Specs

### 5.1 Navigation Bar

```
Structure:
├── Fixed position, full-width
├── Height: 56px (3.5rem) mobile, 64px (4rem) desktop
├── Background: var(--color-bg) / 0.85 → backdrop-blur(12px)
├── Bottom border: var(--color-border) on scroll
├── Border-bottom: 1px solid transparent (no border at top of page)
│
├── Left: Product name / logo mark
│   ├── Font: Manrope 700
│   ├── Size: 1rem
│   ├── Color: var(--color-text-heading)
│   └── Icon: small square rack icon (16×16, accent color)
│
├── Center: Navigation links (desktop only)
│   ├── Spacing: 2rem between items
│   ├── Font: Rubik 400, 0.875rem
│   ├── Color: var(--color-text-muted)
│   ├── Hover: var(--color-text-heading), 150ms ease
│   └── Active/current: var(--color-primary)
│
└── Right: "Get Started" button
    ├── Background: var(--color-primary) → var(--color-primary-hover)
    ├── Color: oklch(0.95 0.005 70)
    ├── Padding: 0.5rem 1.25rem
    ├── Radius: 6px (--radius-sm)
    ├── Font: Fira Code 500, 0.8rem
    └── Hover: translateY(-1px), shadow
```

### 5.2 Hero Section

```
Structure (no container wrapper — full bleed):
├── Background: Drenched warm copper ambient
│   ├── Base: gradient from var(--color-primary-dim) at top to var(--color-bg) at bottom
│   ├── Decorative: 3 ambient glow orbs (positioned absolute)
│   │   ├── Orb 1: top-right, 700px, var(--color-primary-glow), blur(120px)
│   │   ├── Orb 2: bottom-left, 500px, var(--color-secondary-dim), blur(100px)
│   │   └── Orb 3: center-right, 400px, var(--color-primary-dim), blur(80px)
│   └── Noise texture: SVG filter, opacity 0.02
│
├── Inner content (max-width: 72rem, centered, px-6)
│   │
│   ├── Status Badge (optional, above heading)
│   │   ├── Shape: pill, 2rem height
│   │   ├── Background: var(--color-success) / 0.15
│   │   ├── Border: var(--color-success) / 0.3
│   │   ├── Dot: 6px circle, var(--color-success)
│   │   ├── Text: "v1.0.0" — Fira Code 500, 0.75rem, var(--color-success)
│   │   └── Animation: fade-up, 0.5s delay
│   │
│   ├── Headline
│   │   ├── Font: Manrope 800, hero size (fluid clamp)
│   │   ├── Color: var(--color-text-heading)
│   │   ├── Max-width: 18ch (about 5–6 words per line)
│   │   ├── Split into 3 lines, each line-revealed with stagger
│   │   │   ├── Line 1: "13 Specialized Agents."
│   │   │   ├── Line 2: "One Portable Toolkit."
│   │   │   └── Line 3: "Your Copilot."
│   │   └── No gradient text, no italic, no em dashes
│   │
│   ├── Subtext
│   │   ├── Font: Rubik 400, body-large size
│   │   ├── Color: var(--color-text)
│   │   ├── Max-width: 55ch
│   │   ├── Text: "A portable multi-stack AI agent system for GitHub Copilot. 13 specialized agents, 62 skills, 36 commands, 6 MCP servers — installed with one command."
│   │   └── Animation: fade-up, 0.7s delay
│   │
│   ├── CTA Row
│   │   ├── Primary Button ("npx copilot-agent-kit init")
│   │   │   ├── Background: var(--color-primary)
│   │   │   ├── Color: oklch(0.96 0.005 70)
│   │   │   ├── Padding: 0.75rem 1.5rem
│   │   │   ├── Radius: 8px (--radius-md)
│   │   │   ├── Font: Fira Code 500, 0.875rem (this is a code command)
│   │   │   ├── Border: none
│   │   │   ├── Shadow: 0 4px 20px var(--color-primary-glow)
│   │   │   ├── Hover: translateY(-2px), shadow intensifies, 200ms ease-out-quart
│   │   │   ├── Active: translateY(0), 100ms
│   │   │   └── Animation: fade-up, 0.9s delay
│   │   │
│   │   └── Secondary Button ("Read the docs")
│   │       ├── Background: transparent
│   │       ├── Color: var(--color-text-muted)
│   │       ├── Padding: 0.75rem 1.5rem
│   │       ├── Radius: 8px
│   │       ├── Font: Rubik 500, 0.875rem
│   │       ├── Border: 1px solid var(--color-border)
│   │       ├── Hover: border-color var(--color-primary), color var(--color-primary)
│   │       └── Animation: fade-up, 1s delay
│   │
│   └── Stats Row (4 stat cards)
│       ├── Layout: 4 cards in a row, gap: 1rem
│       ├── Responsive: 2×2 at < 768px, 4×1 at ≥ 768px
│       │
│       ├── Card 1 (featured — accent glow)
│       │   ├── Number: "13" — Manrope 800, stat size, var(--color-primary)
│       │   ├── Suffix: "" (none)
│       │   ├── Label: "Specialized Agents" — Fira Code 600, 0.7rem, uppercase, var(--color-text-muted)
│       │   └── Background: var(--color-primary-dim) / 0.05
│       │
│       ├── Card 2
│       │   ├── Number: "62" — var(--color-text-heading)
│       │   ├── Suffix: "+" — var(--color-primary), Fira Code
│       │   ├── Label: "Skill Playbooks" — uppercase
│       │   └── Border: var(--color-border), hover: var(--color-primary-dim)
│       │
│       ├── Card 3
│       │   ├── Number: "36" — var(--color-text-heading)
│       │   ├── Suffix: "" (none)
│       │   ├── Label: "Slash Commands" — uppercase
│       │   └── Border: var(--color-border)
│       │
│       └── Card 4
│           ├── Number: "6" — var(--color-text-heading)
│           ├── Suffix: "" (none)
│           ├── Label: "MCP Servers" — uppercase
│           └── Border: var(--color-border)
│
│   └── Bottom: subtle gradient fade to next section
```

### 5.3 Stat Cards

```
Structure:
├── Background: var(--color-surface) or var(--color-primary-dim)/0.05 (featured)
├── Border: 1px solid var(--color-border) → var(--color-border-hover) on hover
├── Radius: 8px (--radius-md)
├── Padding: 1.25rem 1.5rem (--space-5 --space-6)
├── Transition: all 200ms ease-out-quart
│
├── Number row
│   ├── Font: Manrope 800, clamp(2rem, 4vw + 0.5rem, 3.5rem)
│   ├── Color: var(--color-text-heading) or var(--color-primary) (featured)
│   ├── Letter-spacing: -0.02em
│   └── Suffix: "+" in Fira Code, var(--color-primary), 0.5em size
│
├── Label
│   ├── Font: Fira Code 600, 0.7rem, uppercase
│   ├── Color: var(--color-text-muted)
│   ├── Letter-spacing: 0.08em
│   └── Margin-top: 0.25rem
│
└── Hover state
    ├── Border-color: var(--color-primary-dim)
    ├── transform: translateY(-2px)
    ├── Shadow: 0 8px 30px var(--color-primary-glow)/0.1 (featured only)
    └── Transition: 200ms ease-out-quart
```

### 5.4 Agent Cards (Agent Directory)

```
Structure:
├── Background: var(--color-surface)
├── Border: 1px solid var(--color-border)
├── Radius: 10px
├── Padding: 1.5rem (--space-6)
├── Layout: flex column, gap: 0.75rem
│
├── Header row
│   ├── Agent icon (left): colored dot (12px) + category accent color
│   ├── Agent handle (center): Fira Code 500, 0.875rem, var(--color-text-heading)
│   │   └── Example: "@frontend-nuxt"
│   └── Stack badge (right): pill, 4px padding horizontal
│       ├── Font: Fira Code 500, 0.65rem, uppercase
│       ├── Color: var(--color-text-muted)
│       ├── Background: var(--color-border)/0.5
│       └── Text: "Vue" / "React" / "Node" / etc.
│
├── Description
│   ├── Font: Rubik 400, 0.875rem
│   ├── Color: var(--color-text)
│   └── Max 2 lines, line-clamp
│
├── Skills tags (optional row)
│   ├── Inline flex, gap: 0.25rem
│   ├── Tag: Fira Code 500, 0.65rem, var(--color-text-muted)
│   ├── Tag background: var(--color-bg)
│   ├── Tag border: var(--color-border)
│   ├── Tag radius: 4px
│   └── Tag padding: 0.125rem 0.375rem
│
└── Hover state
    ├── Border-color: matches agent category accent (e.g., blue for Nuxt)
    ├── transform: translateY(-3px)
    ├── Shadow: 0 12px 40px rgba(0,0,0,0.3)
    └── Transition: 300ms ease-out-quart
```

**Grid layout**: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`, gap: 1rem

### 5.5 IT Leader / Orchestrator Section

```
Structure:
├── Section heading: "The Switchboard" (Manrope 700, section-heading size)
├── Subtitle: "One orchestrator routes work to 12 specialized agents." (Rubik, body)
│
├── Visual centerpiece: Orbital diagram (desktop) / Stacked hierarchy (mobile)
│   │
│   ├── Desktop Orbital Diagram:
│   │   ├── Canvas or SVG: 3 concentric ellipses (subtle, dashed)
│   │   │   ├── Ring 1 (inner): 180px diameter, border: var(--color-primary-dim)/0.3
│   │   │   ├── Ring 2 (mid): 320px diameter, border: var(--color-secondary-dim)/0.2
│   │   │   └── Ring 3 (outer): 460px diameter, border: var(--color-border)
│   │   ├── Center node: "IT Leader" pill
│   │   │   ├── Size: 80×32px
│   │   │   ├── Background: var(--color-primary)
│   │   │   ├── Color: oklch(0.95 0.005 70)
│   │   │   ├── Font: Fira Code 600, 0.75rem
│   │   │   ├── Radius: 16px
│   │   │   └── Shadow: 0 0 30px var(--color-primary-glow)
│   │   ├── Orbital nodes: 12 agent pills positioned along rings
│   │   │   ├── Size: fits agent handle text + padding
│   │   │   ├── Background: var(--color-surface)
│   │   │   ├── Border: 1px solid category accent color
│   │   │   ├── Color: var(--color-text-heading)
│   │   │   ├── Font: Fira Code 500, 0.7rem
│   │   │   ├── Radius: 6px
│   │   │   ├── Padding: 0.25rem 0.5rem
│   │   │   └── Connecting lines: 1px dashed, var(--color-border), from node to ring
│   │   ├── Ambient glow: center radial gradient, var(--color-primary-glow), blur(60px)
│   │   └── Animation: rings rotate slowly (120s linear), nodes pulse gently
│   │
│   └── Mobile Stacked Hierarchy:
│       ├── Top: "IT Leader" card (full width, accent background)
│       ├── Connector line (vertical, dashed)
│       └── Bottom: 12 agent chips in wrap layout
│
├── Agent list (below diagram, or side-by-side on desktop)
│   ├── Grouped by category: Frontend, Backend, Mobile, Support
│   ├── Each group: header label (uppercase, Fira Code, 0.7rem, var(--color-text-muted))
│   └── Agent names: Fira Code, 0.8rem, var(--color-text-heading)
│
└── CTA line: "Browse all 12 agents →" link below the section
```

### 5.6 Install Section / Code Block

```
Structure:
├── Section background: var(--color-surface) or var(--color-bg) with subtle top border
├── Section heading: "Install in One Command" (Manrope 700)
├── Subtitle: "Portable. Zero dependencies. Works with any GitHub Copilot project."
│
├── Terminal/Code Block
│   ├── Outer container
│   │   ├── Background: var(--color-raised)
│   │   ├── Border: 1px solid var(--color-border)
│   │   ├── Radius: 12px
│   │   ├── Max-width: 32rem (centered)
│   │   └── Overflow: hidden
│   │
│   ├── Terminal title bar (top)
│   │   ├── Height: 2rem
│   │   ├── Background: var(--color-surface)
│   │   ├── Border-bottom: 1px solid var(--color-border)
│   │   ├── 3 colored dots (left): 8px circles
│   │   │   ├── Dot 1: var(--color-error) / 0.8
│   │   │   ├── Dot 2: var(--color-warning) / 0.8
│   │   │   └── Dot 3: var(--color-success) / 0.8
│   │   └── Right label: "bash" — Fira Code 500, 0.65rem, var(--color-text-muted)
│   │
│   ├── Code content
│   │   ├── Background: var(--color-bg) (slightly darker than container)
│   │   ├── Padding: 1.25rem 1.5rem
│   │   ├── Font: Fira Code 500, 0.875rem
│   │   ├── Color: var(--color-text-heading)
│   │   ├── Line-height: 1.7
│   │   ├── Contains: prompt symbol + command
│   │   │   ├── "$ " — var(--color-text-muted)
│   │   │   └── "npx copilot-agent-kit init" — var(--color-text-heading)
│   │   ├── Below: dim comment line
│   │   │   └── "# Copies 13 agents to your .github/ directory" — var(--color-text-muted), italic
│   │   └── Optional: copy button (top-right of code area)
│   │       ├── Background: transparent
│   │       ├── Border: 1px solid var(--color-border)
│   │       ├── Radius: 4px
│   │       ├── Padding: 0.25rem 0.5rem
│   │       ├── Icon: clipboard
│   │       └── Hover: border-color var(--color-primary)
│   │
│   └── Bottom: optional "Also available: npm install -g copilot-agent-kit" — smaller text
│
├── Alternatives row (optional, below code block)
│   ├── Text: "Or install globally:" — Fira Code, 0.75rem, var(--color-text-muted)
│   └── Small inline code: "npm install -g copilot-agent-kit"
│
└── Trust signal row (below)
    ├── 3 small indicators
    ├── "MIT License" — Fira Code 500, 0.7rem, var(--color-text-muted)
    ├── "Open Source" — same
    └── "v1.0.0" — same
```

### 5.7 Tech Stacks Grid

```
Structure:
├── Section heading: "Seven Stacks. One Kit." (Manrope 700)
├── Subtitle: "Every major frontend, backend, and mobile framework covered."
│
├── Grid: 7 items, auto-fill, minmax(180px, 1fr), gap: 1rem
│   └── Each stack card:
│       ├── Background: var(--color-surface)
│       ├── Border: 1px solid var(--color-border)
│       ├── Radius: 10px
│       ├── Padding: 1.5rem
│       ├── Layout: centered column, gap: 0.75rem
│       ├── Stack icon/logo (48×48, monochrome with accent tint)
│       ├── Stack name: Manrope 600, 1rem, var(--color-text-heading)
│       ├── Framework detail: Rubik 400, 0.8rem, var(--color-text-muted)
│       │   └── Examples: "Nuxt 4 + Vue 3" / "React 19 + Next.js 15" / "Node.js + Express"
│       └── Hover: border-color var(--color-primary-dim), translateY(-2px)
│
│   Order: Nuxt/Vue · React/Next · Node.js · Laravel · CI3 · Android · Flutter
│
└── Decorative: subtle rack/panel lines connecting cards
```

### 5.8 Capabilities Section (MCP, Skills, Commands)

```
Structure:
├── Section heading: "What's Inside" (Manrope 700)
├── Subtitle: "62 skills, 36 commands, 6 MCP servers — every agent comes loaded."
│
├── Three-column layout (desktop), stacked (mobile), gap: 1.5rem
│   │
│   ├── Column 1: "MCP Servers" (6 total)
│   │   ├── Icon: plug/patch cable icon
│   │   ├── Number: "6" — Manrope 800, stat size, var(--color-primary)
│   │   ├── List of MCP servers (compact)
│   │   │   ├── Each: dot + name — Fira Code 500, 0.8rem
│   │   │   ├── Colors: Postman (orange), Playwright (green), etc.
│   │   │   └── Brief one-line description
│   │   └── Background: var(--color-surface), radius 10px, border: var(--color-border)
│   │
│   ├── Column 2: "Skills" (62 total)
│   │   ├── Icon: book/manual icon
│   │   ├── Number: "62" — stat size, var(--color-primary)
│   │   ├── Visual: progress bar or segmented bar
│   │   │   ├── Background: var(--color-border)
│   │   │   ├── Fill: linear-gradient(90deg, var(--color-primary), var(--color-secondary))
│   │   │   └── Height: 6px, radius: 3px
│   │   ├── Category breakdown (inline tags): "7 mobile, 12 frontend, 8 backend..."
│   │   └── Background: var(--color-surface), radius 10px, border: var(--color-border)
│   │
│   └── Column 3: "Commands" (36 total)
│       ├── Icon: terminal/chevron icon
│       ├── Number: "36" — stat size, var(--color-primary)
│       ├── Sample commands: inline code tags
│       │   ├── "/build", "/test", "/deploy", "/review"
│       │   └── Each: Fira Code, 0.7rem, var(--color-primary), bg var(--color-primary-dim)/0.1, radius 4px
│       └── Background: var(--color-surface), radius 10px, border: var(--color-border)
│
└── CTA: "See full capability list on GitHub →"
```

### 5.9 Marquee / Tech Stack Ticker

```
Structure:
├── Full-width, overflow hidden
├── Two rows of marquees (one scrolling left, one right)
├── Each row: infinite scroll animation, 40s duration
│
├── Chips per row (rounded-full pills)
│   ├── Height: 2rem
│   ├── Background: var(--color-surface)
│   ├── Border: 1px solid var(--color-border)
│   ├── Padding: 0.25rem 0.75rem
│   ├── Gap between chips: 0.75rem
│   │
│   ├── Icon dot (6px, category accent color)
│   ├── Text: Fira Code 500, 0.75rem, var(--color-text-muted)
│   └── Examples: "Nuxt 4" "React 19" "Kotlin" "Dart" "PostgreSQL" "Prisma"
│
└── Animation: paused on hover
```

### 5.10 Footer

```
Structure:
├── Background: var(--color-bg) (same as page bg)
├── Border-top: 1px solid var(--color-border)
├── Padding: 3rem 0 (mobile), 4rem 0 (desktop)
│
├── Grid: 3 columns (desktop), stacked (mobile)
│   ├── Column 1: Brand
│   │   ├── "Copilot Agent KIT" — Manrope 700, 1rem
│   │   ├── "Portable multi-stack AI agent toolkit" — Rubik, 0.8rem, var(--color-text-muted)
│   │   └── GitHub + npm badges
│   ├── Column 2: Product
│   │   ├── Heading: "Product" — Fira Code 600, 0.7rem, uppercase, var(--color-text-muted)
│   │   ├── Links: Documentation, GitHub, npm, Changelog
│   │   └── Font: Rubik 400, 0.875rem, hover: var(--color-primary)
│   └── Column 3: Community
│       ├── Heading: "Connect" — same as above
│       ├── Links: GitHub Issues, Discord / Discussions
│       └── Same font as column 2
│
└── Bottom bar
    ├── Border-top: 1px solid var(--color-border)
    ├── Padding: 1rem 0
    ├── Layout: flex, space-between
    ├── "© 2026 Copilot Agent KIT. MIT License."
    └── Font: Rubik 400, 0.75rem, var(--color-text-muted)
```

---

## 6. Section-by-Section Layout

### 6.1 Hero

- **Layout**: Single-column, left-aligned content inside a centered container. The ambient glow occupies the right half as an asymmetric visual counterweight.
- **Headline**: 3 lines staggered, first line appears at 300ms, second at 500ms, third at 700ms.
- **Subtext**: 55ch max-width, centered-left alignment.
- **CTA row**: Two buttons side by side, primary on left, secondary on right. 1rem gap.
- **Stats row**: 4 cards below the CTA. A 4-column grid on desktop, 2×2 on tablet, stacked on mobile. The first card (13 agents) is "featured" with a subtle copper accent background.

### 6.2 IT Leader / Orchestrator

- **Layout**: Two-column on desktop (left: text + orbital diagram, right: agent list). Single column on mobile.
- **Top**: Heading + subtitle.
- **Center**: The orbital visualization — 3 concentric ellipses with the IT Leader at center and 12 agent nodes orbiting. This is the most visually ambitious element.
- **Below**: Grouped agent list showing which agents belong to which category.
- **Bottom**: Soft CTA to browse agents section.

### 6.3 Agents Directory

- **Layout**: Full-width grid. `repeat(auto-fill, minmax(280px, 1fr))`.
- **12 cards** total, each representing one agent.
- Cards are NOT identical — some have skill tags, some show stack version numbers, some have longer descriptions. The grid is intentionally varied.
- **Category grouping**: Cards are organized by category but rendered in a single grid — category headers appear as row-spanning labels or via dot color coding.

### 6.4 Tech Stacks

- **Layout**: 7 cards in a responsive grid. `repeat(auto-fill, minmax(180px, 1fr))`.
- Each shows: stack icon, name, framework detail. Minimal, clean.
- The grid surrounds a subtle decorative element — thin connecting lines suggesting a patch panel.

### 6.5 Capabilities

- **Layout**: 3-column grid on desktop, stacked on mobile.
- Each column is a bento-style card with: category name, big number, detail list or visual element.
- MCP column shows a list; Skills column shows a progress bar with breakdown; Commands column shows sample command tags.

### 6.6 Install

- **Layout**: Centered single-column. The terminal code block is the hero of this section.
- Background transitions to a slightly warmer tone (a hint of the Drenched hero background returning).
- Below the code block: trust signals (license, open source, version).

### 6.7 Footer

- **Layout**: 3-column grid with brand identity in column 1, product links in column 2, community links in column 3.
- Bottom bar with copyright and license.

---

## 7. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 640px | Single column layout throughout. Stat cards stack. Agent cards go full-width. Orbital diagram collapses to stacked hierarchy. Nav links hidden (hamburger menu appears). Hero text: full-size clamp reduces naturally. |
| Tablet | 640–1024px | Stats: 2×2 grid. Agent cards: 2 columns. Tech stacks: 3–4 columns. Nav links: abbreviated (show first 3). Orbital diagram: smaller scale. |
| Desktop | ≥ 1024px | Full layout as specified. Orbital diagram at full scale. Nav links all visible. 3-column capability grid. 4-column stats. |
| Wide | ≥ 1440px | Max-width content containers stop growing (72rem). Ambient glow orbs scale up. Extra padding on sides. |

### Mobile-Specific Adjustments

- **Hero**: Headline font-size clamp ensures it reads at `2.5rem` on small screens. Stats stack to 2 rows of 2.
- **Agent cards**: Full-width (`minmax(100%, 1fr)` effectively).
- **IT Leader section**: Orbital diagram hidden on mobile. Replaced by stacked hierarchy (vertical list with connecting line).
- **Capabilities**: 3 cards stack vertically.
- **Install terminal**: Full-width code block with smaller padding.
- **Touch targets**: All interactive elements minimum 44×44px tap target.

---

## 8. Motion & Interaction

### Philosophy

This is a **brand surface** — motion is part of the voice. The page should feel like instruments powering on, one after another. Not frantic, but deliberate. Warm, not cold. Every animation uses `ease-out-quart` or `ease-out-expo` curves. No bounce, no elastic.

### Page Load Sequence (total: ~1.2s)

```
Entry 1 (0–300ms): Background ambient orbs fade in (opacity 0 → 0.6)
Entry 2 (300ms):   Status badge fades up (opacity 0 → 1, translateY 10px → 0)
Entry 3 (500ms):   Headline line 1 (width 0 → 100%, clip reveal)
Entry 4 (650ms):   Headline line 2
Entry 5 (800ms):   Headline line 3
Entry 6 (900ms):   Subtext fades up (opacity 0 → 1, translateY 20px → 0)
Entry 7 (1050ms):  CTA buttons fade up
Entry 8 (1200ms):  Stats row fades up (staggered, each card 80ms apart)
```

### Micro-Interactions

| Element | Action | Effect | Duration | Easing |
|---------|--------|--------|----------|--------|
| CTA button | Hover | translateY(-2px), shadow deepens | 200ms | ease-out-quart |
| CTA button | Active | translateY(0) | 100ms | ease-out |
| Nav link | Hover | color transition | 150ms | ease-out |
| Agent card | Hover | translateY(-3px), border color, shadow | 300ms | ease-out-quart |
| Stat card | Hover | translateY(-2px), border color | 200ms | ease-out-quart |
| Stack card | Hover | translateY(-2px), border color | 200ms | ease-out-quart |
| Code copy | Click | "Copied!" feedback, 1.5s revert | 200ms | ease-out |
| Navigation | Scroll | Border appears, background opacity | 300ms | ease-out |

### Scroll-Triggered Reveals

Each section below the hero uses Intersection Observer:

```
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms ease-out-quart, transform 600ms ease-out-quart;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

Stagger children: nth-child delays of 100ms, 200ms, 300ms, 400ms
```

### Orbital Animation

```
Orbital rings: rotate continuously
  Ring 1 (inner): 120s, linear, infinite
  Ring 2 (mid):   180s, linear, infinite, reverse
  Ring 3 (outer): 240s, linear, infinite

Orbital nodes: position fixed relative to rings
  (positioned statically, rotation of parent moves them visually)

Center node: subtle pulse
  Animation: scale 1 → 1.03 → 1, 4s ease-in-out, infinite

Paused on hover or prefers-reduced-motion
```

### Marquee Animation

```
.marquee-row {
  animation: marquee-scroll 40s linear infinite;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

Row 1: scrolls left
Row 2: scrolls right (reverse direction)

Paused on hover
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  /* But keep these functional: */
  .orbital-ring { animation: none; }
  .marquee-row  { animation: none; }
  [class*="reveal"] {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 9. Must-Avoid (Impeccable Absolute Bans)

These are **non-negotiable**. Any implementation that includes these must be revised.

### Banned Design Patterns

| Pattern | Why | Replace With |
|---------|-----|-------------|
| Side-stripe borders (>1px left/right accent) | Lazy visual trick | Full borders, background tints, or nothing |
| Gradient text (`background-clip: text`) | Decorative, never meaningful | Single solid accent color |
| Glassmorphism (`backdrop-filter: blur()` on cards) | Default overused pattern | Solid surfaces with warm lighting |
| Hero-metric template (big number + small label + gradient accent + supporting stats) | SaaS cliché | Our stat cards have varied sizing, no gradients, featured accent treatment on first card only |
| Identical card grids (same-size, icon+heading+text) | Template default | Varied content lengths, some with tags, some without |
| Modal as first thought | Avoid overlays | Inline expansions, progressive reveal |
| Italic serif display heroes | Editorial register mismatch | Bold geometric sans (Manrope 800) |
| Hero eyebrow chips (uppercase label above h1) | Overused pattern | Status badge (optional) or go directly to headline |

### Banned Fonts

From the Impeccable reflex-reject list:

Fraunces · Newsreader · Lora · Crimson · Crimson Pro · Crimson Text · Playfair Display · Cormorant · Cormorant Garamond · Syne · IBM Plex Mono · IBM Plex Sans · IBM Plex Serif · Space Mono · Space Grotesk · Inter · DM Sans · DM Serif Display · DM Serif Text · Outfit · Plus Jakarta Sans · Instrument Sans · Instrument Serif

Also: JetBrains Mono, Sora (additional project-level bans).

### Banned Copy Patterns

- Em dashes (—) — use commas, colons, semicolons, or periods instead
- Restated headings — every headline earns its place
- All-caps body copy — reserve for short labels only
- Repeated tiny uppercase tracked labels above every section heading

### AI Slop Test

> If someone could look at this page and say "AI made that" without doubt, it has failed.

**First-order check**: A dark-themed dev-tools landing page with copper accents is not the obvious choice (dark blue is). The warm amber switchboard aesthetic avoids the "dark mode SaaS" reflex.

**Second-order check**: Within dev-tool dark themes, this is not the editorial-typographic lane (no serifs, no ruled separators), not the brutalist lane (deliberate visual hierarchy), not the Vercel/Linear lane (warm vs cold). The aesthetic family is "instrument panel" — specific, referenced, executed with purpose.

---

## 10. Accessibility Standards

| Requirement | Target | Implementation |
|-------------|--------|----------------|
| Body text contrast | WCAG AA 4.5:1 minimum | `var(--color-text)` vs `var(--color-bg)` verified > 7:1 |
| Large text contrast | WCAG AA 3:1 minimum | Hero headings > 4.5:1 |
| Focus indicators | 2px outline + 2px offset | `outline: 2px solid var(--color-primary)` with offset |
| Keyboard navigation | Full flow without mouse | Tab order follows visual order, skip-to-content link |
| Touch targets | Minimum 44×44px | All buttons, links, interactive cards |
| Reduced motion | `prefers-reduced-motion: reduce` | All animations disabled or replaced with crossfade |
| Screen reader | ARIA labels, semantic HTML | Proper heading hierarchy, aria-labels on icon-only elements |
| Zoom | Browser zoom up to 200% readable | Fluid type with clamp(), no viewport-scale restrictions |
| Color independence | Meaning not conveyed by color alone | Status dots accompanied by text labels |

---

## 11. File Reference

| File | Path | Purpose |
|------|------|---------|
| Design System | `DESIGN.md` | This document — single source of truth for all design decisions |
| Landing Page (Vue) | `app/pages/index.vue` | Nuxt implementation (delegated to `@frontend-nuxt`) |
| Landing Page (React) | `app/page.tsx` | Next.js implementation (delegated to `@frontend-react`) |

---

*Design system for Copilot Agent KIT landing page. Brand register. "Switchboard" concept — warm copper on dark, instrument-panel aesthetic.*

*Generated by UI/UX Designer agent using Impeccable design intelligence.*
