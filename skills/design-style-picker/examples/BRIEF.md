# The shared demo brief: Kettlefern Coffee Roasters

Every style demo builds **this same one-page site**, with the same sections and copy, so the only thing that changes between demos is the style. That makes the demos directly comparable and lets the gallery show "one business, ten styles".

Kettlefern is **fictional**. It was checked against web search on 2026-11-16 and no real business uses the name. Don't add a real address, phone number, logo or product photos.

## The business

A small-batch coffee roaster with one café and a subscription service. Friendly but serious about coffee. Roasts twice a week and sells online.

## Sections, in order

Every demo has all of these, in this order. The style decides how each looks: a style that would never use a component (e.g. brutalism and a modal) still includes it, built the way that style would.

| # | Section | Required content |
|---|---|---|
| 1 | **Nav** | Wordmark "Kettlefern" · links: Coffee, Subscriptions, Café, About · CTA button "Shop beans" |
| 2 | **Hero** | Headline, subline, primary CTA, secondary CTA, one visual (CSS/SVG only) |
| 3 | **Three features** | Roasted twice a week · Traceable farms · Brew support |
| 4 | **Products** | Three coffees with name, origin, tasting notes, price, "Add to cart" |
| 5 | **Subscription plans** | Three plans; the middle one is featured |
| 6 | **Testimonial** | One quote with a name and role |
| 7 | **Newsletter signup** | Email field with label, button, small privacy line |
| 8 | **Modal** | Opened from the hero's secondary CTA: "How we roast" |
| 9 | **Footer** | Café hours, links, © line marking it fictional |

## Copy (use verbatim)

**Hero**
- Headline: **Coffee roasted on Tuesday, in your cup by Friday.**
- Subline: Small-batch beans from farms we know by name, roasted twice a week and shipped the same day.
- Primary CTA: **Shop beans** · Secondary CTA: **How we roast**

**Features**
1. **Roasted twice a week.** Every bag ships within 24 hours of roasting, so it peaks in your kitchen, not in a warehouse.
2. **Traceable farms.** Each bag names the farm, the altitude and the harvest. We pay well above Fairtrade minimums.
3. **Brew support.** Stuck on a recipe? Send us your setup and a roaster replies with a recipe that fits.

**Products**

| Name | Origin | Notes | Price |
|---|---|---|---|
| Morning Fern | Huila, Colombia | Red apple, caramel, cocoa | $18 / 340 g |
| Ash & Ember | Sidama, Ethiopia | Blueberry, jasmine, black tea | $21 / 340 g |
| Low Tide Decaf | Cajamarca, Peru (sugarcane process) | Brown sugar, almond, orange | $19 / 340 g |

**Subscription plans**

| Plan | Price | Includes |
|---|---|---|
| Sampler | $16 / month | One 250 g bag · Rotating single origin |
| **Regular** *(featured: "Most popular")* | $32 / month | Two 340 g bags · Roaster's choice · Free shipping |
| Office | $85 / month | 1 kg bags × 3 · Brew guide for your machine · Free shipping |

**Testimonial**
> "The only subscription I've never paused. The Ethiopian tastes like blueberry jam, and it's actually fresh."
> **Priya N.**, home espresso nerd

**Newsletter**
- Label: Email address · Placeholder: you@example.com · Button: **Get roast-day emails**
- Small print: One email on roast days. No spam, unsubscribe anytime.

**Modal: How we roast**
- Title: **How we roast**
- Body: We roast in 12 kg batches on Tuesdays and Thursdays, cup every batch the next morning, and ship the same day. Light roasts for filter, medium for espresso, nothing burnt.
- Button: **Got it**

**Footer**
- Café hours: Mon–Fri 7:00–16:00 · Sat 8:00–15:00 · Sun closed
- © 2026 Kettlefern Coffee Roasters. A fictional business for the design-style-picker demos.

## Assets

- **No external images.** Draw visuals with CSS, inline SVG or `data:` URIs: a bag, beans, a cup, steam, a gradient, a pattern.
- Fonts from Google Fonts only, with a fallback stack.
- Icons: inline SVG.
