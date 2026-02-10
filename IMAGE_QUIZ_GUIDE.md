# Image Quiz Cards Guide

## Overview
Image-based quiz cards let you display clinical photos, imaging (CT, MRI), pathology slides, or anatomical diagrams alongside MCQ questions.

## How to Add Image Quiz Cards

### 1. Basic Structure

Add cards to `/src/data/cards.ts` using this format:

```typescript
{
  id: 'unique-id-here',
  type: 'image-quiz',
  category: 'laryngology', // or 'rhinology', 'otology', 'head-neck'
  difficulty: 'medium',    // 'easy', 'medium', or 'hard'
  imageUrl: '/images/larynx-polyp.jpg', // see options below
  imageCaption: 'Flexible laryngoscopy - left vocal fold',
  stem: 'What pathology is shown?',
  options: [
    { label: 'A', text: 'Vocal cord polyp' },
    { label: 'B', text: 'Reinke\'s edema' },
    { label: 'C', text: 'Vocal cord nodules' },
    { label: 'D', text: 'Laryngeal papilloma' },
  ],
  correctIndex: 0, // Index of correct answer (0 = A, 1 = B, etc.)
  explanation: 'Detailed explanation of the correct answer and why other options are incorrect.',
}
```

## Image Options

### Option 1: Local Images (Recommended for Production)
1. Create folder: `/public/images/`
2. Add your images there
3. Reference as: `imageUrl: '/images/filename.jpg'`

```typescript
imageUrl: '/images/larynx-vocal-polyp.jpg'
```

### Option 2: External URLs
Use direct URLs from medical databases or image hosting:

```typescript
imageUrl: 'https://example.com/medical-images/case-123.jpg'
```

### Option 3: Base64 Encoding (Small Images)
For small images you want to embed directly:

```typescript
imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Optimize to under 500KB for best performance
- **Aspect Ratio**: 3:2 recommended (1200x800px, 900x600px, etc.)
- **Quality**: High enough for clinical detail, but compressed for web

## Example Cards

See the example cards at the end of `cards.ts`:
- `example-image-quiz-larynx` - Basic image quiz
- `example-image-quiz-ct` - CT scan example

## Tips

1. **Image Caption**: Use `imageCaption` to describe the modality or view:
   - "Flexible laryngoscopy - left vocal fold"
   - "CT scan - Coronal view through maxillary sinuses"
   - "H&E stain - 40x magnification"

2. **Stem Questions**: Keep questions specific to what's visible:
   - ✅ "What structure is indicated by the arrow?"
   - ✅ "What is the most likely diagnosis based on this appearance?"
   - ❌ "What is the patient's presenting symptom?" (not visible)

3. **Explanations**: Reference specific features in the image:
   - "Note the unilateral mass on the membranous vocal fold..."
   - "The complete opacification of the maxillary sinus with..."

4. **Copyright**: Ensure you have rights to use clinical images. Options:
   - Your own de-identified cases
   - Open medical image databases
   - Licensed educational images
   - Illustrations/diagrams you create

## Folder Structure

```
/public/images/
  ├── laryngology/
  │   ├── vocal-polyp-01.jpg
  │   └── laryngeal-ca-02.jpg
  ├── rhinology/
  │   ├── polyp-ct-01.jpg
  │   └── septal-perforation-01.jpg
  └── otology/
      └── cholesteatoma-01.jpg
```

## Testing

After adding cards:
1. Run `npm run dev`
2. Navigate to your new cards
3. Check image loads properly
4. Verify image quality on mobile
5. Test quiz functionality

## Next Steps

- Replace the example cards with your actual medical images
- Delete or comment out the placeholder examples
- Add more image-quiz cards for different pathologies
- Consider creating themed collections (e.g., "Laryngeal Pathology Series")
