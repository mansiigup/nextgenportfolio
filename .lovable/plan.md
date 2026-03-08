

## Innovation Page UI Overhaul

### Current State
The Innovation page has 4 sections (Hero, Experimental Projects, Product Ideas, Learnings) with basic card layouts, minimal interactivity, and static content. The design is functional but flat compared to the brand's vibrant Slack-inspired palette.

### Plan

**1. InnovationHero.tsx -- Animated, immersive hero**
- Add CSS keyframe animations for floating decorative orbs (pulse + drift)
- Animate the 3 feature cards with staggered fade-in-up on mount using CSS transitions and intersection observer or simple delay-based approach
- Add a gradient border glow effect on hover for the 3 cards
- Add animated counting numbers or a subtle particle/sparkle effect behind the heading

**2. ExperimentalProjects.tsx -- Interactive expandable cards**
- Convert to expandable accordion-style cards using React state (click to expand/collapse details)
- Add a left colored accent bar per card (different color per status)
- Add hover glassmorphism effect (backdrop-blur, semi-transparent bg)
- Animate the "Key Learning" section to reveal on expand with smooth height transition
- Add numbered step indicators (01, 02, 03) for visual hierarchy

**3. ProductIdeas.tsx -- Flip cards or interactive reveal**
- Add a hover flip effect: front shows title + icon, back shows problem/solution
- Or alternatively, use a "reveal" animation where problem/solution slide in on hover
- Add gradient icon backgrounds instead of flat accent bg
- Add a subtle connecting line or flow between cards to suggest progression

**4. LearningsSection.tsx -- Quote carousel or masonry**
- Add hover lift + glow border effect on quote cards
- Add a rotating gradient accent on the quote icon
- Add category color coding (different border-left colors per category)
- Staggered entrance animation

**5. Global enhancements across all sections**
- Add smooth scroll-triggered fade-in animations using Intersection Observer (a shared hook `useScrollAnimation`)
- Add consistent glassmorphism card style with `backdrop-blur-sm bg-card/80`
- Add subtle gradient dividers between sections

### Technical Approach
- Create a `useScrollAnimation` custom hook for reusable intersection observer animations
- Add CSS keyframe animations in `index.css` for float, fade-in-up, and glow effects
- Use React `useState` for expandable cards in ExperimentalProjects
- All animations pure CSS + Intersection Observer (no new dependencies needed)

### Files to modify
- `src/index.css` -- add keyframe animations
- `src/hooks/useScrollAnimation.ts` -- new shared hook
- `src/components/innovation/InnovationHero.tsx` -- animated hero
- `src/components/innovation/ExperimentalProjects.tsx` -- expandable interactive cards
- `src/components/innovation/ProductIdeas.tsx` -- hover reveal effects
- `src/components/innovation/LearningsSection.tsx` -- enhanced quote cards

