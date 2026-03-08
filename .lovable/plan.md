

## Improve Skills Section: Auto-rotating Tabs + Wider Continuous Carousel

### Changes to `src/components/about/SkillsExperience.tsx`

**1. Auto-rotate the category tabs (header buttons)**
- Add a `useEffect` that cycles `activeCategory` every 4 seconds automatically
- Pause auto-rotation when user manually clicks a tab (resume after 10s of inactivity)

**2. Restyle the category tab buttons to look distinct from the skill chips**
- Make them larger, more prominent — use a horizontal scrollable ribbon style with underline indicator instead of rounded pill buttons
- Active tab: bold text + colored bottom border + icon glow (no filled background like the chips)
- Inactive: subtle text, no border
- This clearly differentiates the header tabs from the carousel skill chips below

**3. Make the carousel continuous and wider**
- Expand the carousel container from `max-w-6xl` to full-width (`max-w-7xl` or remove max-width constraint, keep padding)
- Remove the `mx-8` margin on the embla container to use more horizontal space
- Reduce the auto-scroll interval from 2500ms to 1800ms for smoother continuous feel
- Duplicate the skills array so embla has enough slides to loop seamlessly without gaps

### Implementation
- Single file edit: `src/components/about/SkillsExperience.tsx`
- Add `autoRotateTimer` ref to manage tab auto-cycling
- Restyle the tab row with a border-bottom approach and larger typography
- Widen the carousel viewport and speed up auto-scroll

