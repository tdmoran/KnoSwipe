# Medical Images Folder

Place your medical images here for use in image-quiz cards.

## Folder Structure

- `laryngology/` - Laryngeal images (laryngoscopy, pathology)
- `rhinology/` - Nasal/sinus images (endoscopy, CT scans)
- `otology/` - Ear images (otoscopy, audiograms, CT)
- `head-neck/` - Head & neck images (pathology, imaging, clinical photos)

## Usage

Reference images in cards.ts as:
```typescript
imageUrl: '/images/laryngology/vocal-polyp.jpg'
```

## Image Guidelines

- Format: JPG (best for photos), PNG (for diagrams), WebP (best compression)
- Max size: 500KB recommended
- Dimensions: 1200x800px or similar 3:2 ratio
- Optimize before uploading (use TinyPNG, Squoosh, etc.)

## De-identification

Ensure all clinical images are properly de-identified:
- Remove patient names, MRN, dates
- Crop identifying features if needed
- Follow HIPAA/local privacy regulations
