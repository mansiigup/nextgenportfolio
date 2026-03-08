

## Integrate Product Development Template Download

### What
Add a download button for the uploaded DOCX file beneath the Development Cycle card, allowing visitors to download and use the "Product Development Template."

### Steps

1. **Copy the uploaded file** to `public/documents/product_development_template.docx` (public folder so it's directly downloadable via URL)

2. **Add a download CTA** below the Development Cycle visualization (both mobile and desktop views) — a styled button with a `Download` icon from lucide-react, linking to the file with `download` attribute

3. **Styling**: Use a gradient button matching the Development Cycle's theme, with a `Download` icon and text "Download Product Development Template"

### Technical Details

- Import `Download` from `lucide-react` in `AboutHero.tsx`
- Add an `<a href="/documents/product_development_template.docx" download>` wrapped button below each Development Cycle card instance (mobile + desktop)
- Style consistently with the existing "Continuous Integration" connecting element

