

## Open Persona Document in New Tab

### What
Add the persona HTML file to the public directory and link it from the Nipun Setu project card so it opens in a new browser tab (not downloaded).

### Changes

1. **Save `nipunsetu_personas.html` to `public/documents/`** — HTML files served from `public/` open directly in the browser.

2. **Update `src/components/innovation/ExperimentalProjects.tsx`**:
   - Add a `personaLink` optional field to the `Project` interface
   - Set `personaLink: '/documents/nipunsetu_personas.html'` on the Nipun Setu project
   - Render a second link button ("View Personas") next to "View Live" in the expanded content, opening in a new tab

