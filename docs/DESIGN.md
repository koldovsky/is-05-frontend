# Figmaland Design System

Source: https://www.figma.com/design/ccQ412S8bV6FenLPWOZYGW/Figmaland--Business-Landing-page--Community---Community-

This document captures the reusable design system extracted from the Figma file for the Figmaland responsive landing page. Use it as the source of truth for typography, colors, spacing, and base components when implementing the page.

## Design Principles

- Keep the interface spacious, centered, and marketing-oriented.
- Use large, high-contrast hero typography with compact supporting text.
- Prefer rounded, pill-shaped controls for calls to action and form inputs.
- Keep section copy concise and readable with consistent letter spacing.
- Use the primary blue only for key actions and visual emphasis.

## Color Tokens

| Token | Hex | Usage |
| --- | --- | --- |
| `color.primary` | `#2091F9` | Primary buttons, call-to-action highlights |
| `color.text.default` | `#252B42` | Headings, navigation links, button text on light backgrounds |
| `color.text.secondary` | `#374754` | Paragraphs, descriptions, muted body copy |
| `color.text.inverse` | `#FFFFFF` | Text on primary or dark backgrounds |
| `color.background.dark` | `#18171D` | Dark logo/input text reference, dark surfaces |
| `color.border.default` | `#E8E8E8` | Input borders and subtle dividers |
| `color.canvas.neutral` | `#B7B7B7` | Figma component preview background only |
| `color.background.default` | `#FFFFFF` | Default page background |

## Typography

Primary font family: `Graphik`.

Fallback: use the project font stack if Graphik is unavailable, but preserve the size, weight, line-height, and letter-spacing values below.

| Style | Font | Weight | Size | Line Height | Letter Spacing | Color |
| --- | --- | --- | --- | --- | --- | --- |
| `type.h1` | Graphik | 700 | `74px` | `84px` | `0.2px` | `#252B42` |
| `type.h2` | Graphik | 400 | `48px` | `55px` | `0.2px` | `#252B42` |
| `type.h3` | Graphik | 700 | `20px` | `28px` | `0.1px` | `#252B42` |
| `type.h4` | Graphik | 400 | `28px` | `40px` | `0.2px` | `#374754` |
| `type.button` | Graphik | 400 | `20px` | `20px` | `0.2px` | Contextual |
| `type.h6` | Graphik | 400 | `16px` | `23px` | `0.1px` | `#374754` |
| `type.paragraph` | Graphik | 400 | `18px` | `25px` | `0.2px` | `#374754` |
| `type.link` | Graphik | 400 | `15px` | `28px` | `0.2px` | `#252B42` |
| `type.mobileMenu` | Roboto | 400 | `30px` | `45px` | `0.2px` | `#000000` |
| `type.input` | Roboto | 400 | `19px` | `16px` | `0.1px` | `#18171D` |

### Typography Usage

- Use `type.h1` for the main hero headline only.
- Use `type.h2` for major section headings.
- Use `type.h3` for compact feature labels or eyebrow-style headings.
- Use `type.h4` for large supporting marketing copy.
- Use `type.paragraph` for body copy blocks and longer descriptions.
- Use `type.link` for navigation and footer links.
- Use `type.mobileMenu` for mobile navigation menu labels.

## Spacing And Radius

| Token | Value | Usage |
| --- | --- | --- |
| `space.control.x` | `38px` | Horizontal padding for primary buttons |
| `space.control.y` | `18px` | Vertical padding for primary buttons |
| `space.input.x` | `35px` | Horizontal padding for email inputs |
| `space.input.y` | `19px` | Vertical padding for email inputs |
| `space.textInset` | `10px` | Inner padding used by text symbols in Figma |
| `radius.button` | `35px` | Primary button pill radius |
| `radius.input` | `39px` | Email input pill radius |

## Components

### Primary Button

Use for primary calls to action.

- Background: `color.primary`
- Text: `color.text.inverse`
- Typography: `type.button`
- Padding: `38px 18px`
- Border radius: `35px`
- Minimum visual height: about `56px`
- Content alignment: centered

### Email Input

Use for newsletter or lead-capture email fields.

- Background: `color.background.default`
- Border: `1px solid #E8E8E8`
- Text color: `color.background.dark`
- Typography: `type.input`
- Width in the component reference: `300px`
- Padding: `35px 19px`
- Border radius: `39px`
- Placeholder/example copy: `Your Email`

### Logo

The Figma file contains light and dark logo variants:

- Default logo: use on light or neutral backgrounds.
- Dark logo: use on dark or image-heavy backgrounds.
- Reference rendered size: `186px x 58px`.
- Add `10px` safe padding around the logo mark when matching the Figma component.

## Responsive Guidance

- Preserve the desktop hierarchy: large hero headline, large supporting text, then compact supporting copy.
- On smaller screens, scale `type.h1` and `type.h2` down while keeping line height generous enough to avoid cramped wrapping.
- Keep primary controls pill-shaped at every breakpoint.
- Keep text blocks centered in hero and marketing sections unless a section layout explicitly requires columns.
- Use the mobile menu typography only for expanded mobile navigation states.

## Implementation Notes

- Convert these values into project-local CSS variables or theme tokens before building page sections.
- Do not use the Figma-generated Tailwind classes directly unless the project already uses Tailwind for production styling.
- Keep the Figma node names as semantic implementation references, not as final component names.
- Remote Figma asset URLs generated by the plugin are temporary; import final logo assets into the project before production use.
