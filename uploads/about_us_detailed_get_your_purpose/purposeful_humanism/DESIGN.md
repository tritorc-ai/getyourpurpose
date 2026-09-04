---
name: Purposeful Humanism
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#534434'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#867461'
  outline-variant: '#d8c3ad'
  surface-tint: '#855300'
  primary: '#855300'
  on-primary: '#ffffff'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#ffb95f'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#00658b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1abdff'
  on-tertiary-container: '#004966'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7fd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
  max-width: 1200px
---

## Brand & Style

The design system is built on a foundation of "Purposeful Humanism." It seeks to create an environment that feels like a supportive mentor: warm, encouraging, and deeply reliable. The target audience consists of students seeking guidance, requiring a UI that reduces anxiety through clarity and soft visual metaphors.

The style is a blend of **Modern Minimalist** and **Tactile Softness**. It avoids the coldness of traditional corporate design by using high-quality whitespace and organic shapes. The emotional response should be one of "calm momentum"—a feeling that progress is possible and help is at hand. Visual elements should feel approachable, never industrial or imposing.

## Colors

The palette is anchored by a vibrant **Amber (#F59E0B)**, used strategically to draw attention to primary actions and progress indicators, symbolizing optimism. This is grounded by **Deep Navy (#1E3A8A)**, which provides the necessary weight and credibility for instructional text and headers.

Backgrounds should primarily use a soft **Warm White (#FDFCFB)** rather than a pure cold white to maintain the "human" feel. Success states and secondary highlights may use a muted teal to complement the amber without competing for attention. High contrast is maintained for accessibility, ensuring that the Navy text is easily readable against all light background variations.

## Typography

This design system utilizes **Public Sans** for its exceptional legibility and friendly, institutional-yet-accessible character. The type hierarchy is intentionally generous to prevent cognitive overload.

- **Headlines:** Use Navy (#1E3A8A) with tight letter-spacing for a confident, grounded feel.
- **Body Text:** Use a slightly softened black (Slate 800) to reduce eye strain. The `body-lg` size is the default for most student-facing content to ensure effortless reading.
- **Micro-copy:** Labels and captions use a medium weight to maintain clarity even at smaller sizes. 
- **Line Height:** Extra vertical space is allocated to body text to create an airy, unhurried reading experience.

## Layout & Spacing

The layout philosophy follows a **fixed-center grid** for desktop and a **fluid-margin grid** for mobile. 

- **Desktop:** A 12-column grid with a maximum content width of 1200px. Gutters are fixed at 24px to provide clear separation without breaking the flow.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Spacing Rhythm:** All spacing follows a base-4 scale. Use `lg` (40px) and `xl` (64px) for vertical section padding to emphasize the "generous white space" mandate of the brand. This creates a sense of calm and prevents the UI from feeling cluttered.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Soft Ambient Shadows**. 

Instead of heavy black shadows, this design system uses shadows tinted with the primary Navy or a warm neutral. Shadows should have a large blur radius (16px to 24px) and very low opacity (5-8%) to suggest that elements are gently floating above the surface. 

Backgrounds use very subtle shifts in color (e.g., a white card on a light amber-tinted background) to define regions without the need for harsh borders. This "soft-depth" approach keeps the interface feeling light and hopeful.

## Shapes

The shape language is defined by **pronounced roundness**. 

- **Standard Elements:** Buttons, input fields, and small cards use a 12px radius.
- **Large Containers:** Content cards and modal overlays use a 16px to 24px radius (`rounded-lg` or `rounded-xl`).
- **Pills:** Use for status indicators, chips, and tags to reinforce the friendly, non-industrial aesthetic.

Avoid sharp 90-degree corners entirely. Imagery should also feature rounded corners to match the UI containers.

## Components

### Buttons
Primary buttons use the Amber (#F59E0B) background with Navy (#1E3A8A) text for maximum visibility. Secondary buttons should be Navy with white text. Buttons have a minimum height of 48px to be "finger-friendly" and feature 12px rounded corners.

### Cards
Cards are the primary organizational unit. They should have a white background, a very soft shadow, and no border. Internal padding should be at least 24px (`md`) to maintain the "airy" feel.

### Input Fields
Inputs use a light gray border that thickens and turns Amber on focus. Labels always sit above the field in Navy `label-sm` typography. Help text is encouraged below the field in a supportive, plain-language tone.

### Chips & Tags
Used for categories or "Purpose" tags. These use semi-transparent fills of the primary colors (e.g., 10% Amber fill) with dark text to remain subtle but identifiable.

### Imagery & Avatars
Human-focused photography should have a warm, natural filter. When specific student photos are unavailable, use soft, silhouette-style placeholder illustrations in a warm neutral palette. Avoid "stiff" corporate stock photos; prefer candid, genuine expressions.