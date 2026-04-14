# МаркетХөл Design Specifications

## Overview
Mongolian prediction market platform with dark theme, inspired by Polymarket/Kalshi. Modern, compact, data-dense design using shadcn/ui components.

---

## 🎨 Color System

### Primary Colors
```
Primary (Green):     #10b981 (rgb(16, 185, 129))
Primary Foreground:  #000000 (Black text on green)
Destructive (Red):   #ef4444 (rgb(239, 68, 68))
Destructive FG:      #ffffff (White text on red)
```

### Background Colors
```
Background:          #0a0a0a (Darkest - page background)
Card:                #111111 (Dark gray - card backgrounds)
Secondary:           #1a1a1a (Slightly lighter)
Muted:               #1f1f1f (Medium gray)
```

### Text Colors
```
Foreground:          #e5e5e5 (Primary white text)
Muted Foreground:    #888888 (Secondary gray text)
```

### Border & Effects
```
Border:              rgba(255, 255, 255, 0.1) (10% white)
Ring/Focus:          rgba(16, 185, 129, 0.5) (50% primary green)
```

### Chart Colors
```
Chart 1:             #10b981 (Green)
Chart 2:             #3b82f6 (Blue)
Chart 3:             #f59e0b (Amber)
Chart 4:             #8b5cf6 (Purple)
Chart 5:             #ec4899 (Pink)
```

### Gradient Backgrounds (Icon Boxes)
```
Yellow-Orange:       from-yellow-500 to-orange-500
Orange-Red:          from-orange-500 to-red-500
Blue-Cyan:           from-blue-500 to-cyan-500
Red-Pink:            from-red-500 to-pink-500
Green-Emerald:       from-green-500 to-emerald-500
```

---

## 📝 Typography

### Font Family
```
Primary: System font stack (Inter-like)
- Default system UI fonts
- -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

### Font Sizes (Tailwind Scale)
```
text-[9px]:   9px   (Smallest labels)
text-[10px]:  10px  (Tiny labels, volume text)
text-xs:      12px  (Small text, card titles)
text-sm:      14px  (Regular body, links)
text-base:    16px  (Default body text)
text-lg:      18px  (Large text, emphasis)
text-xl:      20px  (Section headings)
text-2xl:     24px  (Page titles)
text-3xl:     30px  (Hero percentages)
text-5xl:     48px  (Large display percentages)
```

### Font Weights
```
font-medium:     500 (Headings, labels)
font-semibold:   600 (Emphasis, numbers)
font-bold:       700 (Strong emphasis, percentages)
font-normal:     400 (Body text)
```

### Line Heights
```
leading-tight:   1.25 (Compact headings)
leading-relaxed: 1.625 (Comfortable body)
Default:         1.5 (Standard)
```

---

## 📏 Spacing System

### Padding (Internal Spacing)
```
p-1:      4px
p-1.5:    6px
p-2:      8px
p-3:      12px   (Compact cards)
p-4:      16px   (Standard cards)
p-5:      20px   (Sidebar cards)
p-6:      24px   (Large sections)
p-8:      32px   (Major sections)
p-12:     48px   (Footer sections)
```

### Gaps (Between Elements)
```
gap-1:    4px
gap-1.5:  6px
gap-2:    8px
gap-3:    12px
gap-4:    16px
gap-6:    24px
gap-8:    32px
```

### Margins
```
mb-1:     4px
mb-2:     8px
mb-3:     12px
mb-4:     16px
mb-6:     24px
mb-8:     32px
mb-12:    48px
```

---

## 🔲 Border Radius

### Standard Radii
```
--radius:       12px (0.75rem) - Default
rounded-sm:     8px  (0.5rem)
rounded:        12px (0.75rem)
rounded-md:     10px (calc(12px - 2px))
rounded-lg:     12px (Default)
rounded-xl:     16px (calc(12px + 4px))
rounded-full:   9999px (Circles)
```

---

## 📦 Component Specifications

### Header
```
Height: 64px (h-16)
Background: #0a0a0a (bg-background)
Border Bottom: 1px solid rgba(255, 255, 255, 0.1)
Padding: px-4 (16px horizontal)
Logo Size: 32px × 32px (w-8 h-8)
Logo Gradient: from-primary to-primary/50
```

### Buttons

**Primary Button**
```
Background: #10b981
Text: #000000
Height: 40px (h-10)
Padding: px-4 (16px)
Border Radius: 12px
Font: 14px (text-sm) medium
Hover: opacity-90
```

**Secondary Button**
```
Background: #1a1a1a
Text: #e5e5e5
Height: 40px (h-10)
```

**Destructive Button**
```
Background: #ef4444
Text: #ffffff
Height: 40px (h-10)
```

**Ghost Button**
```
Background: transparent
Hover: bg-muted/50
```

**Button Sizes**
```
size-sm:  h-9 (36px)
size-default: h-10 (40px)
size-lg:  h-11 (44px)
size-icon: h-8 w-8 (32px × 32px)
```

### Cards

**Standard Card**
```
Background: #111111
Border: 1px solid rgba(255, 255, 255, 0.1)
Border Radius: 12px
Padding: 16px (p-4)
Hover Border: rgba(16, 185, 129, 0.5)
```

**Compact Card (Market Cards)**
```
Background: #111111
Padding: 12px (p-3)
Icon Size: 32px × 32px (w-8 h-8)
Title: text-xs (12px)
Gap between elements: 8-12px (gap-2, gap-3)
```

**Sidebar Cards**
```
Padding: 20px (p-5)
Title: text-sm (14px) font-bold
Content spacing: gap-3 (12px)
```

### Badges
```
Background: #1a1a1a (secondary)
Text: #e5e5e5
Padding: px-2 py-0.5 (8px × 2px)
Border Radius: 4px
Font Size: 10px (text-[10px])
```

### Input Fields
```
Background: #1a1a1a (bg-muted/50)
Border: 1px solid rgba(255, 255, 255, 0.1)
Height: 40px (h-10)
Padding: px-3 (12px)
Border Radius: 12px
Focus Ring: rgba(16, 185, 129, 0.5)
```

---

## 📐 Layout Structure

### Container
```
Max Width: 1280px (container mx-auto)
Padding: 16px (px-4)
```

### Grid Layouts

**Hero Section (3-column)**
```
Desktop: lg:grid-cols-3
Tablet: Single column
Gap: 24px (gap-6)
Main Content: lg:col-span-2 (66.6%)
Sidebar: lg:col-span-1 (33.3%)
```

**Top 5 Events Gallery**
```
Base: grid-cols-2
Gap: 12px (gap-3)
Featured Card: col-span-2 (full width)
Regular Cards: col-span-1 each (4 cards in 2×2)
```

**Market Grid**
```
Mobile: grid-cols-1
Medium: md:grid-cols-2
Large: lg:grid-cols-3
XLarge: xl:grid-cols-4
Gap: 12px (gap-3)
```

### Section Spacing
```
Between Sections: py-6 or py-8 (24-32px vertical)
Container Padding: px-4 (16px horizontal)
```

---

## 🎯 Specific Components

### Market Card (All Markets Section)
```
Width: Full container width / grid columns
Padding: 12px (p-3)
Icon Box: 32px × 32px, rounded-lg
Title Height: ~2 lines max (line-clamp-2)
Yes/No Boxes: 
  - Grid: grid-cols-2 gap-1.5
  - Padding: 6px (p-1.5)
  - Label: text-[9px]
  - Percentage: text-xs font-bold
Volume Text: text-[10px]
```

### Top Event Card (Featured)
```
Large Card:
  - Padding: 16px (p-4)
  - Icon: 64px × 64px (w-16 h-16)
  - Title: text-base
  - Percentage: text-3xl (30px)

Small Cards:
  - Padding: 12px (p-3)
  - Icon: 40px × 40px (w-10 h-10)
  - Title: text-xs
  - Percentage: text-xl (20px)
```

### Sidebar Items

**Breaking News Item**
```
Rank Number: text-xs, 16px wide (w-4)
Title: text-xs leading-tight
Percentage: text-base (16px) font-bold
Change Indicator: text-xs with icon (h-2.5 w-2.5)
```

**Hot Topics Item**
```
Rank: text-xs
Icon Box: 28px × 28px (w-7 h-7)
Title: text-xs font-medium
Volume: text-[10px] muted
Padding: 6px (p-1.5)
Hover: bg-muted/30
```

### Footer
```
Padding: py-12 (48px vertical)
Grid: 6 columns on desktop
  - md:grid-cols-3
  - lg:grid-cols-6
Gap: 32px (gap-8)
Link Font Size: text-sm (14px)
Section Titles: text-sm font-semibold
Disclaimer: text-xs text-center
```

---

## 🎭 States & Interactions

### Hover States
```
Cards: border-primary/50
Buttons: opacity-90 or bg change
Links: text-primary
Background: bg-muted/30
```

### Active States
```
Active Tab/Button: bg-primary, text-primary-foreground
```

### Transitions
```
Default: transition-colors
All Properties: transition-all
Duration: 150ms (default)
```

### Focus States
```
Ring: 2px solid rgba(16, 185, 129, 0.5)
Outline Offset: 2px
```

---

## 📱 Responsive Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (Extra large)
```

### Responsive Adjustments
```
Mobile: 
  - Single column layouts
  - Full-width cards
  - Stacked navigation

Tablet (md):
  - 2-column grids
  - Horizontal nav
  
Desktop (lg):
  - 3-4 column grids
  - Sidebar layouts
  - Full feature visibility
```

---

## 🔢 Data Format

### Currency
```
Format: ₮ (Mongolian Tugrik symbol)
Examples: ₮524K, ₮1.2M, ₮842,573
Abbreviations: K (thousand), M (million)
```

### Percentages
```
Format: XX%
Always whole numbers
Examples: 67%, 41%, 73%
```

### Change Indicators
```
Positive: +X% (green, #10b981)
Negative: -X% (red, #ef4444)
With Icon: TrendingUp/TrendingDown (Lucide icons)
Icon Size: h-3 w-3 to h-5 w-5
```

---

## 🖼️ Icons

### Icon Library
```
Lucide React
Common sizes: h-4 w-4, h-5 w-5
```

### Emoji Icons
```
Used for market categories
Size: text-base to text-3xl
Examples: 🏆 ⚽ ₿ 🌡️ ⛏️ 📈
```

### Icon Boxes
```
Size: 32px-64px (w-8 h-8 to w-16 h-16)
Background: Gradient or muted
Border Radius: rounded-lg (12px)
Centered: flex items-center justify-center
```

---

## ✨ Special Effects

### Gradients
```
Primary Button: bg-primary (solid)
Icon Backgrounds: bg-gradient-to-br from-{color}-500 to-{color}-500
Hover: opacity changes
```

### Shadows
```
Minimal shadows (dark theme)
Focus rings instead of drop shadows
Border emphasis over shadows
```

### Opacity Scales
```
/10:  10%  (Subtle backgrounds)
/20:  20%  (Interactive backgrounds)
/50:  50%  (Muted elements)
/80:  80%  (Hover states)
/90:  90%  (Active states)
```

---

## 📋 Component Hierarchy

### Z-Index Layers
```
Base:        0
Sticky Nav:  10
Dropdown:    50
Modal:       100
Toast:       1000
```

---

## 🌐 Localization

### Language
```
Primary: Mongolian (Cyrillic)
Secondary: English (toggle available)
Font support: Unicode Cyrillic
```

### Text Examples
```
"Тийм" = Yes
"Үгүй" = No
"Эргэлт" = Volume
"Зах зээл" = Market
"Магадлал" = Probability
```

---

## 🎨 Design Principles

1. **Compact & Dense**: Maximize information per screen (Polymarket-style)
2. **Dark Theme First**: Optimized for dark mode trading
3. **Data Hierarchy**: Percentages largest, supporting info smaller
4. **Scannable**: Clear visual separation between markets
5. **Interactive**: Hover states on all clickable elements
6. **Mongolian-First**: All content in Mongolian with localization
7. **Financial Focus**: Numbers, trends, volume prominent
8. **Mobile-Responsive**: Works on all device sizes

---

## 📦 Component Library

Using **shadcn/ui** components:
- Button
- Card
- Badge
- Input
- Separator
- All styled with custom theme variables

---

## 🔧 Implementation Notes

- Built with React + Tailwind CSS v4
- Dark theme default
- No custom shadows (border-based design)
- System font stack (no custom fonts loaded)
- Lucide React for icons
- Responsive-first approach
- Semantic HTML structure

---

## 📸 Key Screens

1. **Homepage**: Top 5 events gallery + sidebar + all markets grid
2. **Header**: Logo + navigation + wallet/auth
3. **Footer**: 6-column links + newsletter + disclaimer

---

## 🎯 Accessibility

- Focus states visible (ring)
- Sufficient color contrast
- Semantic HTML
- Keyboard navigable
- Clear interactive states
- Text readable at all sizes

---

*Last Updated: April 7, 2026*
*Platform: МаркетХөл (Mongolian Prediction Market)*
