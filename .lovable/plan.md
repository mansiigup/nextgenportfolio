

## Fix Favicon on Vercel Deployment

**Problem**: The old `favicon.ico` file still exists in the `public/` directory. Many browsers and platforms (including Vercel) automatically look for `/favicon.ico` first, ignoring the `favicon.png` reference in your HTML. This causes the wrong icon to appear.

**Solution**:

1. **Delete `public/favicon.ico`** — remove the old default favicon so browsers stop finding it automatically.

2. **Update `index.html`** — add more comprehensive favicon tags for maximum browser compatibility:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   <link rel="shortcut icon" type="image/png" href="/favicon.png" />
   <link rel="apple-touch-icon" href="/favicon.png" />
   ```

This ensures all browsers and platforms use your MG logo instead of falling back to the old default `.ico` file.

