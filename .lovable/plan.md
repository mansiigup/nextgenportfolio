

## Update Browser Favicon

Copy the uploaded MG logo image to the public directory and update `index.html` to reference it as the favicon.

### Steps

1. **Copy the uploaded image** (`user-uploads://MG_logo-removebg-preview.png`) to `public/favicon.png`
2. **Update `index.html`** to add a `<link rel="icon">` tag pointing to `/favicon.png`

### Technical Details

In `index.html`, add inside the `<head>` tag:
```html
<link rel="icon" href="/favicon.png" type="image/png">
```

This will replace the default `favicon.ico` with the purple MG logo in the browser tab.

