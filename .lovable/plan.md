

## Make Entire Website Mobile & Tablet Friendly

After reviewing all components across every page, here are the specific responsive issues and fixes needed:

### Key Issues Found

1. **ImpactSlider** — Slider items use `w-1/4` (shows 4 cards), which is too small on mobile/tablet. Needs responsive sizing (1 card on mobile, 2 on tablet, 4 on desktop).

2. **Hero flip cards** (InnovationHero, AIHubHero) — 3D card flip on hover doesn't work on touch devices. Need tap-to-flip on mobile and fixed card heights to prevent layout collapse.

3. **Case study results grid** (FirstrootCaseStudies) — `grid-cols-2 md:grid-cols-4` works but result values can overflow on small screens.

4. **ExperienceTimeline** — Timeline center line and alternating layout works on desktop but the dot positioning is hidden on mobile without a left-side line replacement.

5. **AI Toolkit** — Horizontal scroll row with `w-40` fixed cards works but the "Scroll" hint is easy to miss. Could use better touch scrolling indicators.

6. **Navigation mobile menu** — Already has a hamburger menu. Works fine.

7. **Footer** — Already responsive with `md:grid-cols-3`.

8. **FreadomCaseStudies cards** — Large card layout with expandable sections. The `ml-14` left margin on expanded content pushes text too far right on mobile.

9. **Company selector** (ProfessionalProducts) — `min-w-[280px]` cards work but can overflow on very small screens.

10. **AboutHero cycle visualization** — Already has mobile/desktop split (`lg:hidden` / `hidden lg:grid`). The 280px circle works but is tight on very small screens.

### Implementation Plan

**File: `src/components/home/ImpactSlider.tsx`**
- Change slider items from `w-1/4` to `w-full sm:w-1/2 lg:w-1/4`
- Update `translateX` calculation to be responsive based on viewport
- Reduce `min-h-[220px]` to `min-h-[180px]` on mobile

**File: `src/components/innovation/InnovationHero.tsx`**
- Add `onClick` tap-to-flip for mobile (toggle `flippedIndex` on click)
- Add min-height to card containers to prevent layout shift during flip
- Change "Hover to reveal" text to "Tap to reveal" on mobile

**File: `src/components/ai-hub/AIHubHero.tsx`**
- Same tap-to-flip fix as InnovationHero
- Add min-height to card containers
- Change "Hover to reveal" text conditionally

**File: `src/components/case-studies/FirstrootCaseStudies.tsx`**
- Reduce padding on mobile: `p-4 md:p-8`
- Make results grid `grid-cols-2` consistently with smaller text on mobile

**File: `src/components/case-studies/FreadomCaseStudies.tsx`**
- Reduce `ml-14` to `ml-0 sm:ml-14` for expanded content on mobile
- Adjust card padding for mobile

**File: `src/components/innovation/ExperimentalProjects.tsx`**
- Change `ml-14` to `ml-0 sm:ml-14` in expanded content
- Adjust project header layout for small screens

**File: `src/components/ai-hub/AIProducts.tsx`**
- Change `ml-14` to `ml-0 sm:ml-14` in expanded content

**File: `src/components/ai-hub/AIExperiments.tsx`**
- Change `ml-14` to `ml-0 sm:ml-14` in expanded content

**File: `src/components/about/ExperienceTimeline.tsx`**
- Add a left-side timeline line for mobile view
- Adjust the mobile dot positioning
- Interests grid: change `grid-cols-2 md:grid-cols-4` to include proper spacing on mobile

**File: `src/components/case-studies/ProfessionalProducts.tsx`**
- Change company selector `min-w-[280px]` to `min-w-0 w-full sm:min-w-[280px]` so cards stack on mobile

**File: `src/components/home/HomeHero.tsx`**
- The hero description text is quite long — add `text-base md:text-lg` for mobile
- Reduce background blob sizes on mobile

**File: `src/components/contact/SocialLinks.tsx`**
- Already responsive. Minor padding adjustments.

**File: `src/components/about/HonorsSection.tsx`**
- Change grid from `md:grid-cols-3` to `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` for tablet

**File: `src/components/case-studies/Certifications.tsx`**
- Change grid from `md:grid-cols-3` to `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

This plan touches ~15 files with focused, targeted responsive fixes. The biggest wins are the ImpactSlider responsive sizing, tap-to-flip on hero cards, and reducing left margins on expandable card content for mobile.

