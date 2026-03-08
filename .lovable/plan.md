

## Add DineIQ to Building & Learning Section

### What
Add **DineIQ** as a new project card in the `ExperimentalProjects` component with status "Evaluation" — an AI dining companion that solves 6 core pain points (menu confusion, language barriers, fine dining comprehension, waiting anxiety, expectation vs reality, and silent dining disconnect).

### Changes

**`src/components/innovation/ExperimentalProjects.tsx`**
- Append a new project object to the `projects` array:
  - **Title**: DineIQ
  - **Description**: Condensed version of the pitch — "The world's first AI dining companion that eliminates confusion, anxiety, and disappointment from dining out. From smart menu translation and AI dish previews to live order tracking and silent concierge communication — DineIQ transforms every restaurant visit into a confident, immersive experience for travelers, families, business diners, and anyone with dietary needs."
  - **Status**: "Evaluation"
  - **Tech tags**: AI/LLM, FoodTech, Computer Vision, Real-time Tracking
  - **Key Learning**: "Dining doesn't have a food problem — it has a communication problem. Six distinct pain points (menu confusion, language barriers, waiting anxiety, expectation mismatch, fine dining comprehension, silent disconnect) all trace back to one root cause: broken information flow between kitchen and table."
  - **Accent color**: A distinct color from existing projects (e.g., `border-l-primary`)
  - **No link** (evaluation stage)

This follows the exact same pattern as existing projects — no structural changes needed.

