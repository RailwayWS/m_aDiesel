---
version: alpha
name: M&A Diesel — Fleet Livery
description: >-
  Single-page marketing site for M&A Diesel, a 24/7 bulk diesel delivery
  business in Parow Valley, Cape Town. The site is dressed like the fleet:
  gloss-white surfaces, the oval-logo navy, one swoosh blue, and signwriting
  red reserved for the 24/7 emergency call.
colors:
  primary: "#03326A"
  primary-deep: "#022452"
  secondary: "#1A5DA3"
  secondary-container: "#DCE8F4"
  tertiary: "#C21D2D"
  tertiary-deep: "#9E1624"
  neutral: "#EEF2F6"
  surface: "#FFFFFF"
  on-surface: "#121C28"
  on-surface-muted: "#525E6B"
  outline: "#C9D1DA"
  on-primary: "#FFFFFF"
  on-primary-muted: "#BFD5EB"
  error: "#9E1624"
  error-container: "#FBEDEE"
  success: "#1C6B47"
  warning: "#E8822A"
typography:
  headline-display:
    fontFamily: Barlow Condensed
    fontSize: 80px
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.005em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.1
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Barlow
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Barlow
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Barlow
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Barlow Condensed
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.06em
  label-md:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.1em
  phone:
    fontFamily: Barlow
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
    fontFeature: '"tnum" 1'
rounded:
  none: 0px
  sm: 4px
  md: 8px
  xl: 24px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1200px
  columns: 12
components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 68px
  nav-link-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
  nav-menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-md}"
    rounded: "{rounded.xl}"
  quote-panel:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 36px
  quote-field:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    height: 60px
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 60px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 52px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.primary}"
  button-emergency:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.phone}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 56px
  button-emergency-hover:
    backgroundColor: "{colors.tertiary-deep}"
    textColor: "{colors.on-primary}"
  badge-24-7:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
  hero:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-display}"
  hero-subline:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary-muted}"
    typography: "{typography.body-lg}"
  swoosh-divider:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.secondary}"
    height: 48px
  section-heading:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-lg}"
  section-eyebrow:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
  service-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 32px
  service-row-title:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-md}"
  service-row-index:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.headline-sm}"
  team-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.none}"
  team-card-role:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
  team-photo-placeholder:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-display}"
    rounded: "{rounded.none}"
  section-tinted:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  contact-phone:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.phone}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  input-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
  input-border:
    backgroundColor: "{colors.outline}"
    textColor: "{colors.on-surface}"
    height: 1px
  input-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  notice-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
  notice-hazard:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 8px
  footer:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary-muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

# M&A Diesel — Design System

## Overview

**Direction: Fleet Livery.** The website should look like an M&A Diesel vehicle parked in front of you: a gloss-white body, the navy oval logo, a blue swoosh along the side, condensed capitals reading BULK DIESEL DELIVERED, and a red **24/7** that you notice before anything else. Customers already know these trucks from site gates, harbours and depots across the Cape. The site borrows that recognition instead of inventing a new brand.

**Who uses it, and how.** The visitor is a site foreman, farm manager, fleet owner, or someone with a dead generator. Most arrive on a phone, often outdoors, often in a hurry. Within one second they should feel *"these people show up — and I can call them right now."* The adjectives are **dependable, fast, local**. The site does not need to be beautiful. It needs to be *unmistakably the company on the truck.*

**What we give up.** We give up subtlety and an upmarket polish. The type is loud and the photos are real, unretouched depot shots. We also give up decorative illustration, icon grids and stock imagery entirely, because every image on the site is one of our own vehicles or tanks.

**Structure.** One long page with a floating pill nav and anchor links, in this order: **Hero → proof strip → Services → Our Team → About → Contact → Footer**. A tap-to-call button is visible on every screen: inside the pill on every viewport, and also as a fixed bottom call bar on mobile.

**Real content to use.** Do not invent business details.
- Address: 49 Beacon Way, Beaconvale Industrial, Parow Valley, Cape Town.
- Phones (from vehicle livery): Micheal 079 525 9116 · Joseph 065 741 6172 · Henko 066 227 5515.
- Services (exact list): 24/7 emergency fuel fillings · Bulk diesel deliveries · Door-to-door filling services · Generator refilling · Plant and machinery refilling.
- Team profile format: photo, full name, role, e.g. *Joseph Higgins — Depot Manager and Transport Co-ordinator.*

**Photography (from `images/`).** Use only our own photos. Rename them to semantic names before building (e.g. `hero-tanker-dusk.jpg`). Suggested mapping:

| Slot | File | Why |
|---|---|---|
| Hero | `WhatsApp Image … 15.56.38 (1).jpeg` | New livery tanker at sunset, "BULK DIESEL DELIVERED" legible |
| 24/7 emergency | `… 15.56.38.jpeg` | Tanker at dusk with the depot tanks behind it, reading as "after hours" |
| Bulk deliveries | `… 15.56.33 (3).jpeg` | Mercedes tanker with the mountains behind, unmistakably the Cape |
| Door-to-door | `… 15.56.32.jpeg` | Bakkie and trailer on a residential lane |
| Generator refilling | `… 15.56.33 (1).jpeg` | Bakkie beside a containerised generator |
| Plant & machinery | `… 15.56.39.jpeg` | Bakkie with a JCB, showing the services list on the door |
| About / depot | `… 15.56.36.jpeg` | Bunded tanks labelled TANK 1 · DIESEL · 23 000 LITERS |

Crop photos and never tint them, and don't overlay gradients on them, except for one navy scrim on the hero for text legibility. Export WebP at 1600px long edge, about 200 KB each. The originals are 1–2 MB WhatsApp JPEGs.

## Colors

Every colour below is sampled from or derived from the fleet livery, not chosen from a library.

- **Logo Navy (`primary`, #03326A):** sampled from the oval on the bakkie door. Use it for headings, the nav wordmark, primary buttons and the service titles. It is the brand's voice.
- **Night Navy (`primary-deep`, #022452):** the same navy pushed darker. Use it for the hero, the Contact section, the footer and button hover. These are the only dark surfaces on the site.
- **Swoosh Blue (`secondary`, #1A5DA3):** the mid-blue stripe that runs along every vehicle. Use it for section eyebrows, service index numerals (01–05) and the swoosh divider stroke. Never use it for buttons, because navy owns action.
- **Swoosh Pale (`secondary-container`, #DCE8F4):** the pale outer band of the swoosh. Use it as the divider fill and for secondary-button hover.
- **Signwriting Red (`tertiary`, #C21D2D):** the red of "24/7" and "BULK DIESEL DELIVERED" on the livery. **It has exactly one job: the emergency call.** It appears on the 24/7 badge, the call button and the mobile call bar, and nowhere else. If red appears in more than about 3% of a viewport, something is wrong.
- **Galvanised (`neutral`, #EEF2F6):** the cool, slightly blue grey of the depot tanks under Cape sky. Use it for alternating section backgrounds and team photo placeholders.
- **Gloss White (`surface`, #FFFFFF):** pure white is a deliberate choice here, because the trucks are gloss white. It is the default page background.
- **Ink (`on-surface`, #121C28)** and **Steel (`on-surface-muted`, #525E6B):** neutrals tinted toward the navy. Ink is body text. Steel is for roles, captions and helper text. There are no neutral greys.
- **Outline (#C9D1DA):** hairlines, input borders and service-row dividers.
- **Semantic:** `error` (#9E1624) is a darker red than signwriting red, so an error never reads as an emergency CTA. `success` (#1C6B47) is used only for the form-sent notice. `warning` (#E8822A) is the hazchem-placard orange, used only for genuine safety notices and always with ink text.

Every text/background pair in the Components section meets WCAG AA. White on Logo Navy is 12.6:1, white on Signwriting Red is 6.0:1, and Steel on Galvanised is 5.9:1.

## Typography

There are two families, used like the signwriter used them on the trucks. **Barlow Condensed** is the painted lettering: heavy, narrow capitals that fit a lot of words across a tanker barrel. **Barlow** at normal width is the contact panel: plain, legible text you can read from a distance. Barlow was drawn from Californian highway and licence-plate lettering, so it is road-signage DNA and fits a transport company. We break the "pair two classifications" rule on purpose here. Width is the contrast, exactly as on the livery. Both are free on Google Fonts.

- **Display & headlines** (`headline-display` 80px, `headline-lg` 52px, `headline-md` 32px, `headline-sm` 24px): Barlow Condensed 700 in **uppercase**. Display is tightly leaded (0.92) and slightly negative-tracked so a hero like "BULK DIESEL DELIVERED." stacks as one solid block. On mobile, scale the display to 48px and headline-lg to 36px.
- **Body** (`body-lg` 20px, `body-md` 17px, `body-sm` 15px): Barlow 400 in sentence case. Body is 17px, not 16px, because the audience reads outdoors on phones.
- **Labels** (`label-lg` 18px, `label-md` 14px): Barlow Condensed 700 in uppercase, tracked positively (+0.06em / +0.1em). Use them for nav, buttons, eyebrows and badges.
- **Phone** (`phone` 22px): Barlow 700 with **tabular figures**. Phone numbers are the most important content on the site, so they get their own style and are always written with the spaces grouped as on the vans (`065 741 6172`) and wrapped in `tel:` links.
- **Only two weights: 400 and 700.** There is no 500 or 600. Emphasis in body text is 700, never italic and never a colour.

## Layout

- **Grid:** 12 columns, max width 1200px, 24px gutters. Page margins are 16px on mobile and 48px on desktop. Everything sits on the **8px base** (4px is allowed only for optical nudges).
- **Rhythm:** 120px between major sections on desktop and 64px on mobile. Internal blocks step down through 64 / 32 / 16.
- **Section rhythm:** Hero (Night Navy) → proof strip (white) → Services (Galvanised) → Team (white) → About (Galvanised) → Contact + footer (Night Navy, separated by a hairline). Apart from that deliberate dark close, no two adjacent sections share a background.
- **Hero:** on desktop the left 40% is a solid Night Navy panel carrying the copy, and the photo fills the right 60%, fading into the panel. **Copy never sits on top of the livery lettering in the photo.** On mobile the photo becomes a 4:3 block above the copy, cropped to the tank and the logo, and the copy sits on solid Night Navy below it. The 24/7 badge sits above the headline. Two actions follow: the red **Call** button and the white-outline **Get a quote**. A swoosh divider closes the hero. The pill nav floats over the top of the hero, so desktop copy is padded clear of it.
- **Proof strip:** three hard facts directly under the hero: 24/7, 23 000 L per depot tank, 5 services. Figures are navy display type. Use only facts visible in our photos or confirmed by the business.
- **Services overview, the hive:** directly under the Services heading. The tanker's hexagon print is turned into an infographic of seven flat-top hexagons in honeycomb columns (mid · up/down · centre · up/down · mid). The five service hexes (white inside, a 3px Logo Navy edge, a navy line icon) carry a short label (title + one-line summary) placed above, below or beside them. The **centre** hex is solid navy with the logo. The **last** hex is solid signwriting red with a phone icon and "24/7", and it is a tap-to-call link, so red stays on the call path. Each service hex links down to its detail block. On tablets and phones the hive becomes a vertical zig-zag chain with each label to the right of its hex, and the centre logo hex is hidden.
- **Services detail:** a **numbered** layout, not an icon grid. **01 (24/7 emergency) is a full-width feature row**: a large photo (7 columns) beside the 24/7 badge, title, a larger body and the red call button. **02–05 sit in a 2×2 grid** (1 column on mobile). Each has a 3:2 photo above a 3px navy rule, the index numeral in swoosh blue inline with the title, and one or two sentences.
- **Our Team:** heading block on top, then a card grid: **3 columns on desktop and 2 on phones**. Each card is 0-radius with a 1px outline, a **square photo frame**, a 3px navy rule, and then the name, role and phone. Until a portrait exists the frame is plain Swoosh Pale with large navy initials and a small camera mark. A portrait, cropped square at head-and-shoulders and shot at the depot, simply replaces all three. The **name** is the strongest text element. Show a direct phone number only for the people on the livery, with a small red phone glyph. Order is fixed by the business: Joseph Higgins, Micheal Erasmus, Alet Erasmus, Henko Steenkamp, Zuhardt Erasmus, Leighton Diedricks, Jessica Neethling, Renier Kachelhoffer, Suzette Venter.
- **About:** a two-column layout with **one** large depot photo on one side and a short story on the other. There is no thumbnail gallery. The hard numbers live once, in the proof strip under the hero, and are not repeated here. Use only numbers the business confirms.
- **Contact (client reference):** a dark Night Navy section with the dusk-tanker photo as a backdrop. The backdrop sits at 45% opacity and fades out downward. On the left (5 of 12): eyebrow "Get in touch", a big headline "REQUEST A **FREE QUOTE**" (second line in Swoosh Pale), an intro, then the three phone numbers as hairline rows with outlined white phone icons, then the address with a "Get directions" link. On the right (7 of 12): the **quote panel**, which is Logo Navy, 8px radius and a pale hairline. Every field is a 60px box with a leading icon cell, and an uppercase label above the input inside the same box. Fields: Company/Name*, Phone*, Email (optional), Delivery address, What is the diesel for? (select), Total litres, Preferred date (optional). One full-width white **Get pricing** button follows. The form composes a WhatsApp message to the depot line until a backend exists. Under both columns runs a **trust row** of four outlined icons with labels: Reliable supply · 24/7 delivery · Competitive pricing · Quality fuel. On phones the call numbers come before the form.
- **Mobile call path:** the pill always carries a 44px red round call button next to the menu toggle. A fixed bottom bar, 56px tall, red, reading "CALL 24/7", slides up once the hero's call button has scrolled away, and steps aside while the Contact section is in view.

## Elevation & Depth

The trucks are flat-painted panels, and so is the site. Hierarchy comes from:
1. **Tonal bands:** sections alternate between Gloss White and Galvanised.
2. **Hairlines:** 1px outline rules between rows, around cards and inputs, and between Contact's trust row and the footer.
3. **The dark surfaces:** Night Navy appears only in the hero and in the Contact + footer close. They bracket the page like the cab and tail of a tanker.
4. **The one shadow:** the floating pill nav, and the mobile menu card that drops from it, are the only elements that float above the page, so they are the only ones with a shadow. It is navy-tinted and lit from above (`0 12px 32px -16px` Night Navy at 45%), and deepens slightly once the page scrolls. Nothing else gets a shadow.

**Decoration is taken from the livery, and nothing else:**
- The **swoosh divider** (Swoosh Pale wave, Swoosh Blue stroke) appears **once**, closing the hero.
- The **hexagon** (from the tanker's honeycomb print) appears **only as the services hive**, as a structural infographic. It is **never a background texture or pattern**: not in the hero, not in Contact, not inside photo frames.

**Motion** is confident on first impression and quiet everywhere else. Use three curves only: `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)` for entering, `--ease-in-out` `cubic-bezier(0.77, 0, 0.175, 1)` for moving on screen, and `--ease-drawer` `cubic-bezier(0.32, 0.72, 0, 1)` for the menu and call bar.
- **Hero (once per visit):** the photo settles from `scale(1.08)` over 1600ms. Headline lines rise out of their own masks (900ms, 90ms stagger), like lettering sliding into frame. The badge, subline and CTAs fade up 16px. The swoosh stroke draws itself once.
- **Scroll reveals (once per element, never on the way back up):** text blocks fade up 20px over 600ms with a 60ms stagger (45ms in the team grid). Photos open like a **roller door**: `clip-path` from the bottom over 1000ms, with a slight scale settle, and only after the image has decoded.
- **Interaction:** every pressable element scales to 0.97 on `:active` (160ms). Hover is a colour change only (150ms `ease`), gated behind `(hover: hover) and (pointer: fine)`. The active nav link is a navy pill that slides between links: a navy copy of the link list, clipped to the active link with `clip-path: inset(… round 9999px)` over 320ms ease-in-out, so the colour change and the movement stay in sync. The mobile menu card scales in from `0.97` from the pill's top edge (240ms) with a 35ms item stagger, and exits faster (160ms). The services hive settles in once, from the centre outward: each hex goes from `scale(0.9)` and transparent to settled over 700ms ease-out, with a 110ms delay per ring and labels fading in 250ms after their hex. Service hexes lift their icon 3px on hover and press to 0.97. The call bar slides from the bottom edge and leaves the same way.
- **Never:** animated counters, parallax, hover zoom on non-clickable photos, or motion on the stat figures. Under `prefers-reduced-motion`, movement is dropped and opacity fades remain.

## Shapes

Shapes are hierarchical:
- **0px (`none`):** photos, service blocks, team cards and photo frames. Photos are panels on a truck, not app tiles.
- **4px (`sm`):** buttons and inputs inside the page, the slight radius of a vinyl decal edge.
- **8px (`md`):** the quote panel only.
- **24px (`xl`):** the mobile menu card that drops from the pill.
- **Full pill (`full`):** echoes the logo oval. It is used for the **nav pill**, everything inside it (the active-link pill and the call button), and the **24/7 badge**. Nothing else is pill-shaped.

The logo is always shown in its navy oval with white serif lettering. The site uses an SVG redraw of the vehicle decal, with each word's width pinned (`textLength`) so the lettering stays centred inside the inner ring. Never recolour or flatten it. Replace it with the official vector when the business supplies one.

## Components

- **Nav pill:** fixed, floating 20px from the top (12px on phones), and as wide as the content column. It is white with a faint navy hairline and the one allowed shadow, 68px tall (60px on phones). The logo is on the left. Anchor links (SERVICES · OUR TEAM · ABOUT · CONTACT) sit centred in label-lg navy, with Swoosh Pale pill hover and the navy active pill. On the right is a red pill call button reading "24/7 065 741 6172". On phones the links collapse to a round red call button plus a round pale menu toggle, which opens a 24px-radius white card listing the links and all three numbers.
- **Buttons:**
  - `button-emergency` is red with a white phone number in the phone style. It is the **only** red button and means "call now."
  - `button-primary` is navy with white label text, used for "Get a quote" or "Send."
  - `button-secondary` is white with navy text and a 2px navy border, used for tertiary paths like "View services." Hover fills it with Swoosh Pale.
  - Minimum tap height is 52px (56px for emergency).
- **24/7 badge:** a red pill in label-md: "● 24/7 EMERGENCY." It is used in the hero and in service row 01.
- **Service row:** an index numeral, title in headline-md navy, body-md ink text, a 0-radius photo and a hairline divider.
- **Team card:** a square photo frame (portrait, or Swoosh Pale with initials and a camera mark), a 3px navy rule, the name in headline-sm uppercase navy, the role in body-sm steel and an optional phone link.
- **Quote panel and fields:** see Layout → Contact. Field boxes are Night Navy with a pale 22% hairline that brightens on focus, white labels and pale placeholders. The submit is `button-light` (white with navy text), the one light button on a dark surface.
- **Inputs:** white fill, 1px outline border that turns navy on focus with a 2px focus ring, label-md steel label above, 48px tall. In the error state the border is error red, the error-container fill sits under the helper text and the message is plain language.
- **Notices:** a success banner in green after sending. A hazard notice in placard orange is used only for real safety copy (e.g. "Flammable — no smoking within 15 m").
- **Footer:** Night Navy with Swoosh Pale text, continuing from Contact behind a pale hairline. There is no swoosh. It holds the logo, address, all three phone numbers, a repeat of the anchor links and the copyright.

## Do's and Don'ts

- **Do** keep a tap-to-call phone number visible on every viewport. If a screen has no way to call, it's broken.
- **Do** use signwriting red only for the emergency-call path (badge, call button, call bar). Use weight, size or navy for everything else that needs emphasis.
- **Do** write headlines in condensed uppercase like the livery ("BULK DIESEL DELIVERED.") and body copy in plain sentence case.
- **Do** use our own fleet and depot photos for every image slot. A missing photo becomes a Galvanised placeholder, never stock.
- **Do** keep the five services worded exactly as the brief lists them, with 24/7 emergency fuel fillings first.
- **Don't** add drop shadows, glassmorphism, gradients on UI elements, or rounded corners above 4px (except the 24/7 pill).
- **Don't** build the services as an icon card grid. 01 is the emergency feature and 02–05 are numbered photo blocks.
- **Don't** put headline copy over the lettering painted on the vehicles in a photo. Crop or reposition the photo instead.
- **Don't** introduce a third font family, or use weights 500/600.
- **Don't** use swoosh blue for buttons or links, because navy owns action. Don't use the swoosh divider more than once per page.
- **Don't** add shadows to anything except the floating nav pill and its menu card.
- **Do** keep hexagons to the services hive. If a hexagon starts showing up as decoration elsewhere, remove it.
- **Don't** invent business facts, testimonials, years in operation or litre figures. Use placeholders marked `TODO` until the business confirms them.
- **Don't** tint, duotone or heavily filter the photos. Real, slightly imperfect depot shots are the credibility.
