

## Add 10 AI Product Ideas in Carousel/Slide Format

### What
Replace the current 3-card grid in ProductIdeas with a carousel (slide format) showcasing 13 product ideas total (3 existing + 10 new AI-focused ones). Each slide shows one idea with its emoji, domain, problem, AI opportunities, and product concept.

### Changes

**1. Update `src/components/innovation/ProductIdeas.tsx`**
- Replace the static 3-column grid with an Embla carousel using the existing `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` components from `src/components/ui/carousel.tsx`
- Remove the 3 old ideas (Teacher Copilot, Learning Analytics, Skill Gap Identifier) since the new 10 cover education and HR more comprehensively
- Add 10 new product idea objects with fields: `emoji`, `domain`, `title`, `problem`, `opportunities` (string array), `productIdea` (name + one-liner)
- Each carousel slide renders as a card showing: emoji + domain header, problem statement, bullet list of AI opportunities, and a highlighted product idea at the bottom
- Add dot indicators below the carousel for current slide position
- Add left/right navigation arrows
- Cards keep the existing glassmorphism style (`bg-background/80 backdrop-blur-sm border border-border rounded-xl`)
- On mobile, show 1 card per slide; on desktop, show 1 card per slide (full-width slide format for readability)
- The last card (HR & People Intelligence) will note its connection to CompatIQ from the Building & Learning section

### Data (10 ideas)
1. Healthcare — DiagnoFirst
2. Enterprise Workflow — FlowAgent
3. Manufacturing — FactoryIQ
4. Drug Discovery — MoleculeOS
5. Cybersecurity — ShieldNet
6. Education — LearnPath AI
7. Finance — TrustScore
8. Climate — GreenLens
9. Retail — ShopMind
10. HR & People Intelligence — CompatIQ connection

### UX
- Slide format with smooth horizontal scrolling
- Each slide is a full-width card with structured layout: emoji/domain, problem, opportunities list, product idea callout
- Navigation: prev/next arrows + dot indicators
- Scroll animation on section entry (existing pattern)
- Auto-play disabled to let users browse at their own pace

