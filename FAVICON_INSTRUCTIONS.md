# Favicon Setup Instructions

The website currently uses `favicon.webp`. To improve browser compatibility, you should also create a `favicon.ico` file.

## Converting favicon.webp to favicon.ico

You can use one of these methods:

### Method 1: Online Converter
1. Go to https://convertio.co/webp-ico/ or https://www.favicon-generator.org/
2. Upload `public/favicon.webp`
3. Generate multiple sizes (16x16, 32x32, 48x48)
4. Download as `favicon.ico`
5. Place in `public/favicon.ico`

### Method 2: Using ImageMagick (if installed)
```bash
magick convert public/favicon.webp -define icon:auto-resize=16,32,48 public/favicon.ico
```

### Method 3: Using Sharp (Node.js)
```bash
npm install sharp
node -e "require('sharp')('public/favicon.webp').resize(32, 32).toFile('public/favicon.ico')"
```

## Apple Touch Icon
For better iOS support, create an apple-icon.png (180x180):
```bash
magick convert public/favicon.webp -resize 180x180 public/apple-icon.png
```

The metadata is already configured in `src/app/layout.tsx` to use these icons.
