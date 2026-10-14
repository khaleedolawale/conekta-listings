# Conekta Property Listing Page

A responsive, mobile-first property listing page built for the Conekta Practical Experience Programme front-end assessment.

**Live site:** https://khaleedolawale.github.io/conekta-listings/

## What it does

- Search bar at the top that filters listings as you type
- Filter chips for location, price range and bedrooms (they combine)
- Grid of 12 property cards, each with an image placeholder, price per year in Naira, area, a verified badge and a View details button
- Result count, an empty state and a Clear all filters action
- Layout: one column on small screens, two columns from 768px, three columns from 1200px

## Tech

Plain HTML, CSS and JavaScript. No frameworks, no build step, no paid tools or assets.

## How to run

1. Clone the repository:
   ```
   git clone https://github.com/khaleedolawale/conekta-listings.git
   cd conekta-listings
   ```
2. Open `index.html` in any modern browser.

Or serve it locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```
index.html        Page structure and the 12 sample cards
style.css         Design tokens, components and responsive layout
script.js         Search and filter behaviour
notes/guide.html  My study notes explaining every part of the code
```

## Decisions

- **Mobile-first CSS.** The base styles are the phone layout. Breakpoints only add columns and spacing.
- **Cards written in HTML.** Each card holds its facts in `data-*` attributes. JavaScript only toggles the `hidden` attribute, so content still shows without JavaScript.
- **Real buttons for chips** with `aria-pressed`, so keyboard and screen reader users get the same experience as mouse users.
- **Filters are combined with AND.** A card must match the search text, location, price band and bedroom count.

## Accessibility

- Semantic landmarks: header, main, footer, labelled sections, search form
- Visible label for the search input (visually hidden), labelled filter groups
- Skip link, native buttons, visible `:focus-visible` outline, logical tab order
- Result count announced through a status region
- Buttons at least 44px tall, text not reliant on colour alone
- Respects `prefers-reduced-motion`

## What I would improve with more time

- Real photos with lazy loading
- Sort by price
- Filters stored in the URL so results can be shared
- Debounced search
- A details page for each property
- Automated accessibility and unit tests

## AI and tools disclosure

I used Claude (Anthropic) to help draft the HTML, CSS and JavaScript and to write the study guide in `notes/guide.html`. I reviewed and tested the output, and I can explain every part of it. All property data is invented sample content.
