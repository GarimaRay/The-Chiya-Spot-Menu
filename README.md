# The Chiya Spot QR Menu

Static mobile-first QR menu website built from the provided branch menu PDFs.

## Branch QR URLs

- `index.html?branch=golfutar`
- `index.html?branch=bhaktapur`
- `index.html?branch=putlisadak`
- `index.html?branch=boudha`

The fifth branch slot is present in `app.js` as `branch-5` and intentionally disabled until its PDF/menu content is provided.

## Files

- `index.html` - page structure
- `styles.css` - responsive mobile-first styling
- `app.js` - branch and menu data
- `assets/` - visual assets extracted from the provided PDFs
- `tools/PdfMenuExtractor/` - local helper used to render/OCR the source PDFs
- `tmp/menu-text/` - extracted OCR text and rendered page images used for verification
