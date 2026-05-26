---
name: Industrial Precision System
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2f2'
  surface-container: '#f1edec'
  surface-container-high: '#ece7e7'
  surface-container-highest: '#e6e1e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#414750'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#717781'
  outline-variant: '#c1c7d2'
  surface-tint: '#0361a3'
  primary: '#004b80'
  on-primary: '#ffffff'
  primary-container: '#0963a5'
  on-primary-container: '#c5ddff'
  inverse-primary: '#9ecaff'
  secondary: '#0061a5'
  on-secondary: '#ffffff'
  secondary-container: '#4ba4fd'
  on-secondary-container: '#003965'
  tertiary: '#723900'
  on-tertiary: '#ffffff'
  tertiary-container: '#954d00'
  on-tertiary-container: '#ffd3b4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9ecaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497d'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#a0caff'
  on-secondary-fixed: '#001c37'
  on-secondary-fixed-variant: '#00497e'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb781'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e6e1e1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  section-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for a B2B industrial context, prioritizing mechanical precision, reliability, and premium manufacturing aesthetics. The visual language balances the ruggedness of heavy-duty printing machinery with the high-fidelity accuracy of modern software.

The style is **Corporate / Modern** with a **Minimalist** foundation. It leverages whitespace to signify clarity and uses technical, monospaced accents to evoke the feel of blueprints and specification sheets. Every element is designed to feel "machined"—stable, intentional, and high-performance. The emotional response should be one of absolute confidence: this is a tool built for professionals who value uptime and exactness.

## Colors

The palette is rooted in industrial "Cool Greys" and "Technical Blues." 

- **Primary Brand Blue** serves as the anchor for action and reliability.
- **Primary Glow Blue** is used sparingly for interactive highlights and status-ready states.
- **Neutrals** follow a strict hierarchy: the background is a surgical off-white to reduce eye strain, while surfaces are pure white to define active work areas.
- **Semantic Accents** should be applied to the "Action Glow" gradient to draw attention to primary conversion points or critical machinery status updates.

## Typography

This design system utilizes a dual-font strategy to separate UI narrative from technical data.

- **Inter** handles all primary communication, providing a neutral, highly readable sans-serif foundation that scales across marketing and complex dashboard interfaces.
- **JetBrains Mono** is reserved for metadata, technical specifications, serial numbers, and the `.section-label` class. This monospaced font reinforces the mechanical nature of the printing industry.
- **Hierarchy:** Use `section-label` for small headers above groups of content to create a "tabbed folder" or "technical manual" appearance.

## Layout & Spacing

The layout is built on a **Fixed Grid** system for desktop (12 columns) to maintain the structural integrity required for data-heavy printing interfaces. 

- **Grid:** Use a 12-column layout with 24px gutters. Content should be contained within a 1280px max-width wrapper.
- **Rhythm:** An 8px linear scale (using the 4px base unit) governs all padding and margins.
- **Adaptability:** On tablet, the margin reduces to 24px with an 8-column grid. On mobile, the grid shifts to 4 columns with 16px margins, and `headline-lg` transitions to `headline-lg-mobile`.
- **Alignment:** All technical labels (JetBrains Mono) should align strictly to the left edge of their associated content blocks to maintain a "blueprint" vertical axis.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and two specific shadow profiles that define the physical presence of UI elements.

- **Float Shadow:** Applied to cards, dropdowns, and navigation bars. It uses a soft, low-opacity (#1c1b1b at 8%) to lift surfaces off the #f9fafb background without creating visual noise.
- **Action Glow Shadow:** Reserved exclusively for primary buttons and active indicators. This utilizes the brand's blue spectrum to create a "backlit" effect, simulating a high-tech illuminated control panel.
- **Borders:** Use #e2e2e6 for all structural containment. In this design system, borders are the primary way to define space, with shadows used only to indicate interactivity or temporary layering (like modals).

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding prevents the UI from feeling aggressive or "brutalist," while maintaining the discipline of industrial design.

- **Standard Elements:** Buttons, input fields, and small cards use the base 0.25rem (4px) radius.
- **Containers:** Larger sections or feature cards use `rounded-lg` (8px) to provide a clearer visual distinction.
- **Circular elements:** Only used for status indicators or notification badges. Avoid pill-shaped buttons to keep the "mechanical" aesthetic consistent.

## Components

### Buttons
- **Primary:** Background uses the Brand Gradient (0963a5 to 4da6ff). Apply the **Action Glow Shadow**. Text is white, Inter SemiBold.
- **Secondary:** Bordered (1px #e2e2e6), background white. Text is #1c1b1b. 

### Input Fields
- **Default:** White surface, 1px #e2e2e6 border. Text in #1c1b1b.
- **Focus:** Border changes to #0963a5 with a 2px outer ring of #4da6ff at 20% opacity.
- **Labels:** Use `body-md` for standard labels and `.section-label` for group headings.

### Cards & Surfaces
- **Data Card:** Pure white surface with the **Float Shadow**. 
- **Technical Header:** A top-bar on cards using a subtle #f9fafb fill and a `.section-label` to identify the data type.

### Lists & Tables
- **Table Headers:** Use `section-label` typography with a #f9fafb background.
- **Rows:** 1px solid bottom border (#e2e2e6). Use `technical-data` (JetBrains Mono) for numerical values and status codes to ensure character alignment.

### Chips & Status
- **Status Indicators:** Small, 8px circles. Use #4da6ff for "Ready/Active" states, paired with a subtle glow.