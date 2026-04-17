# Design System Strategy: High-Performance Editorial

## 1. Overview & Creative North Star: "The Kinetic Authority"
This design system is built to bridge the gap between high-performance athletic aesthetics and luxury editorial marketing. Our Creative North Star is **"The Kinetic Authority."** 

We are moving away from the "static template" look of traditional social media landing pages. Instead, we embrace **Intentional Asymmetry** and **Aggressive Contrast**. The goal is to make the user feel the energy of the influencer’s brand through visual tension: the "pull" of condensed, towering typography against the "push" of deep, atmospheric surfaces. We break the grid with overlapping elements and floating glass layers to ensure the experience feels custom-built and premium.

---

## 2. Colors & Surface Architecture
The palette is rooted in a deep, nocturnal base (`surface: #0f1512`), punctuated by high-energy reds and sophisticated sage neutrals.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through background color shifts or tonal transitions. To separate a CTA section from a bio, shift the background from `surface` to `surface-container-low`.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use **Tonal Layering** to create depth:
*   **Base Level:** `surface` (#0f1512) for the primary background.
*   **Secondary Level:** `surface-container-low` (#171d1a) for secondary content blocks.
*   **Featured Level:** `surface-container-high` (#252b28) for interactive cards or highlighted modules.
*   **The "Glass" Rule:** For floating navigation or modal overlays, use `surface-variant` at 60% opacity with a `24px` backdrop-blur. This creates a "frosted glass" effect that allows the brand colors to bleed through, softening the high-contrast edges.

### Signature Textures
Avoid flat backgrounds for hero sections. Utilize a **Subtle Linear Gradient** (135 degrees) from `primary_container` (#a22c29) to `on_primary_fixed_variant` (#8a1a1a) to provide a "lit from within" professional polish.

---

## 3. Typography: Impact & Utility
Typography is the voice of this system. We use a high-contrast pairing to balance raw energy with professional clarity.

*   **Display & Headlines (Epilogue - Bold/Condensed):** These are the "shout" moments. Use `display-lg` and `display-md` for high-impact statements. The condensed nature of Epilogue mimics the urgency of sports broadcasting and high-end marketing.
    *   *Styling Note:* Use tight letter-spacing (-0.02em) for headlines to increase visual density.
*   **Body & Labels (Manrope - Medium/Regular):** This is the functional "whisper." Manrope provides a clean, geometric counterpoint to the aggressive headlines.
    *   *Styling Note:* Ensure `body-lg` has generous line-height (1.6) to provide breathing room amidst the high-contrast color scheme.

---

## 4. Elevation & Depth
We reject standard drop shadows in favor of **Ambient Dimensionality**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift. This "inset" look feels more sophisticated than a standard shadow.
*   **Ambient Shadows:** If a component must float (e.g., a "Link in Bio" button), use a shadow with a 40px blur, 0px offset, and 6% opacity using the `on_surface` color. It should feel like a glow, not a shadow.
*   **The Ghost Border:** If a container requires a boundary (e.g., input fields), use the `outline_variant` token at **15% opacity**. This creates a "barely there" guide that doesn't clutter the visual field.

---

## 5. Components

### Buttons: The "Power Call"
*   **Primary:** Solid `primary_container` (#a22c29). Sharp `0.25rem` (sm) roundedness. Use `on_primary_container` for text.
*   **Secondary:** Ghost style. `outline_variant` at 20% opacity with `on_surface` text.
*   **Hover State:** Shift background from `primary_container` to `on_primary_fixed_variant`. Add a subtle `1px` inner glow.

### Cards & Feed Items
*   **Rule:** No dividers. Use `2rem` (32px) of vertical white space to separate content blocks. 
*   **Style:** Use `surface-container-low` backgrounds. Images within cards should have a subtle `0.5rem` (lg) corner radius to soften the aggressive typography.

### Input Fields
*   **Background:** `surface_container_lowest`.
*   **Border:** Ghost Border (15% `outline_variant`). 
*   **Focus:** Transition the border to 100% `primary` (#ffb3ac) with no "focus ring"—only a sharp tonal shift.

### Signature Component: The "Performance Stat" Chip
For an influencer, showcasing metrics is key. Use `secondary_container` (#464836) with `on_secondary_container` (#b6b7a0) text in `label-md`. This sage-on-dark-green combo provides a sophisticated "pro-grade" look for follower counts or engagement rates.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use extreme scale. Pair a massive `display-lg` headline with a tiny `label-sm` caption for a high-fashion editorial look.
*   **DO** use "Deep Red" (`primary_container`) for action-oriented elements only.
*   **DO** lean into asymmetry. Align a headline to the left and the sub-copy to the right to create visual movement.

### Don't:
*   **DON'T** use 100% black. Always use the specified `surface` (#0f1512) to keep the shadows "deep" rather than "dead."
*   **DON'T** use standard 1px grey lines. They make the design look like a generic dashboard.
*   **DON'T** use "Primary Red" (#ffb3ac) for large background areas; it is an accent/functional color for errors or high-attention prompts only.