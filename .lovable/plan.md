

## Add Nipun Setu as First Project in Building & Learning

### What
Add "Nipun Setu" as the first project card in the Experimental Projects section on the Innovation page, with a link to the live app and a rich description derived from the persona document.

### Changes

**File: `src/components/innovation/ExperimentalProjects.tsx`**

1. Add a new `link` optional field to the project type and add an `ExternalLink` icon import from lucide-react
2. Insert Nipun Setu as the first item in the `projects` array:
   - **Title**: Nipun Setu
   - **Description**: An AI-powered career navigation platform that builds personalised learning roadmaps for 8 distinct user personas — from fresh graduates to career pivoters to founders — solving the universal "navigation problem" where 500M+ people need to upskill but 96% drop out of generic courses.
   - **Status**: Live
   - **Tech tags**: React, AI/LLM, EdTech, Career Navigation
   - **Link**: `https://nipun-setu.lovable.app/`
   - **Key Learning**: The world doesn't have a learning problem — it has a navigation problem. Generic courses fail because they ignore context: a BBA graduate pivoting to analytics needs a fundamentally different path than a CS graduate.
   - **Accent color**: `border-l-blue-500` (to distinguish from others)

3. Update the card rendering to show a "View Live →" link button when `project.link` exists, rendered inside the expanded content area. Clicking the link opens in a new tab and stops event propagation (so it doesn't toggle the accordion).

### Files to modify
- `src/components/innovation/ExperimentalProjects.tsx` — add Nipun Setu project entry + link support

