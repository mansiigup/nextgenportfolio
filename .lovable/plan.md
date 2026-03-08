

## Merged Strategy × Development Cycle Section

### What We're Building
A visually stunning "Strategy × Development Cycle" section placed **between** the two existing cycle cards on the About page. It will show how the 6 phases merge strategy and development into one unified product-building framework. No AI API calls — purely a showcase visualization.

### Design Concept
A horizontal/vertical timeline with 6 phases, each showing the strategy label and dev label merging together. Each phase is an interactive card that expands on click to reveal the merged description, strategy layer, dev layer, guiding questions, and expected deliverables. The whole section uses the phase-specific colors from the uploaded file for a vibrant, eye-catching look.

### Layout
- **Header**: "Strategy × Development" with a glowing gradient title and a circular loop SVG animation
- **Phase Cards**: 6 cards in a 3×2 grid (desktop) or stacked (mobile), each with:
  - Phase number with colored glow
  - Dual labels: "Discover × Scope" format
  - Merged description
  - Click to expand: strategy layer, dev layer, questions, deliverables
- **Connecting visual**: An animated SVG loop connecting all 6 phases with colored arcs
- **Placed between** the Strategy Cycle card and Development Cycle card, replacing the "Continuous Integration" connector

### Steps

1. **Create `src/components/about/MergedCycleShowcase.tsx`** — New component with:
   - PHASES data (6 phases with colors, descriptions, questions, outputs from the uploaded file)
   - Interactive cards with expand/collapse using Dialog or inline accordion
   - Animated SVG hexagonal/circular loop connecting phases
   - Phase-specific color theming (orange, gold, green, blue, purple, cyan)
   - Glassmorphism cards with colored glow effects on hover
   - Auto-rotating active phase highlight with manual override

2. **Update `src/components/about/AboutHero.tsx`** — Insert the MergedCycleShowcase between the two cycle cards:
   - Desktop: Strategy Cycle → **Merged Showcase** → Development Cycle (full-width below the two-column grid)
   - Mobile: Strategy Cycle → **Merged Showcase** → Development Cycle (stacked)

### Visual Details
- Each card: dark glassmorphism background with colored left border and subtle glow
- Phase numbers as large, semi-transparent watermark text behind each card
- Dual-lane pills showing "Strategy: Discover" and "Dev: Scope" side by side
- Deliverable tags as small colored chips
- The loop SVG uses the 6 phase colors as arc segments with an animated rotating highlight
- Smooth fade-up animations on scroll

### Technical Notes
- No external API calls — removed the Claude integration from the original
- Uses existing Tailwind theme colors + custom hex colors from the uploaded file
- Dialog component for expanded phase details (already available in the project)
- All responsive — grid collapses gracefully on mobile

