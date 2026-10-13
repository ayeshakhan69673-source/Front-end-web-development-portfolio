# Front-End Web Development Portfolio

A responsive, single-page personal portfolio built with plain **HTML, CSS and JavaScript** (no frameworks, no build step). The design follows a **blueprint / technical-drawing** theme: a navy grid backdrop, paper-style "sheet" cards, monospace typography and amber accents.

## Features

- Blueprint-style layout with a fixed CSS grid backdrop
- Sections: Hero / Title Block, About, Projects, Skills, Contact
- Fully responsive (desktop, tablet and mobile breakpoints)
- Smooth scrolling and a sticky, blurred navigation bar
- Reveal-on-scroll animations using the `IntersectionObserver` API, with a fallback for unsupported browsers
- Staggered hero entrance animation on page load
- Active navigation link highlighting while scrolling
- Respects `prefers-reduced-motion` for accessibility
- Accessible details: semantic HTML, `:focus-visible` outlines, `aria-hidden` on decorative elements

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries) |
| Behaviour | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Space Mono, IBM Plex Sans, IBM Plex Mono |

## Project Structure

```
Front-end-web-development-portfolio/
├── code/
│   ├── index.html    # Page structure and content
│   ├── style.css     # Design tokens, layout and styling
│   └── script.js     # Scroll reveal, hero entrance, nav highlight
└── README.md
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayeshakhan69673-source/Front-end-web-development-portfolio.git
   ```
2. **Open the project folder**
   ```bash
   cd Front-end-web-development-portfolio/code
   ```
3. **Run it** — open `index.html` in any modern browser, or use a local server such as the VS Code *Live Server* extension.

No installation or dependencies required (an internet connection is only needed to load the Google Fonts).

## Customisation

Colours, fonts and the content width are controlled by CSS variables at the top of `style.css`:

```css
:root {
  --navy: #0F2942;
  --paper: #F3EFE4;
  --amber: #E0A64A;
  --max-width: 1080px;
}
```



