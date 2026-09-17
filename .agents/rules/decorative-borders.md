# Decorative Flower Borders Rule

When implementing decorative flower borders (using `flower-border.svg`) around text or headers on any page for this project, always adhere to this specific orientation:
1. **Top Border**: Render the image in its default orientation (no rotation).
2. **Bottom Border**: Apply a 180-degree rotation (e.g., using Tailwind's `rotate-180` class) to correctly mirror the top border.

**Example implementation in a component:**
```tsx
<div className={styles.topDecorative}>
  <Image src="/assets/flower-border.svg" alt="border" width={150} height={12} className={styles.topBorder} />
  <span className={styles.topTitle}>YOUR TITLE</span>
  <Image src="/assets/flower-border.svg" alt="border" width={150} height={12} className={styles.bottomBorder} />
</div>
```

**Example CSS module:**
```css
.topBorder {
  @apply w-[120px] md:w-[150px] h-[12px] opacity-70 object-contain mb-1 md:mb-2;
}
.bottomBorder {
  @apply w-[120px] md:w-[150px] h-[12px] opacity-70 object-contain mt-1 md:mt-2 rotate-180;
}
```
