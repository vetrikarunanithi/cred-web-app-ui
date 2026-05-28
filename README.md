# CRED Web App UI

A frontend clone inspired by the CRED landing page and its overall premium fintech experience.  
The main goal of this project was to recreate the dark UI style, smooth interactions, NeoPOP-inspired buttons, glassmorphism cards, and animated sections using React.

I had around 3 hours to complete the task, so instead of trying to perfectly replicate every single asset from the original website, I focused more on:
- overall UI feel
- responsiveness
- smooth animations
- component structure
- frontend polish

---

## Project Notes

Since the time limit was short, I tried to keep the workflow practical.

### Assets & Visuals
- Most of the cards and visuals were recreated using **CSS gradients** and **SVG shapes** instead of downloading or hosting large image assets.
- The premium cards, glowing effects, and the floating coin were built manually using CSS and SVGs.
- Some canvas-style illustrations and references were inspired by visuals from the official CRED app and website.

This helped keep the project lightweight and responsive without depending too much on external assets.

---

## Mock Data

The content and feature structure were modeled after the actual CRED platform experience.

To save time during the 3-hour development window:
- I used AI assistance to quickly generate and structure mock JSON data arrays for sections like:
  - features
  - testimonials
  - stats
  - footer links

This helped me spend more time building components, animations, and responsive layouts instead of manually typing repetitive data.

All component logic, styling, layouts, responsiveness, and animation integration were implemented manually.

---

## Animations

Animations were built using **Framer Motion**.

Included interactions:
- fade-up scroll reveals
- floating motion effects
- hover animations
- custom cursor follower
- loading screen animation
- progress indicator
- card tilt interactions

The testimonial section uses **Swiper.js** for sliding transitions.

---

## Tech Stack

- React.js
- Vite
- Tailwind CSS v4
- Framer Motion
- Swiper.js
- React Icons

---

## Features

- Responsive layout
- Dark fintech-inspired UI
- NeoPOP-style buttons
- Glassmorphism cards
- Animated sections
- Custom cursor
- Smooth hover interactions
- Mobile responsive navigation
- Reusable React components

---

## Local Setup

```bash
# install dependencies
npm install

# start development server
npm run dev
```

---

## Deployment

The project uses the standard Vite setup, so deployment is straightforward.

Deployed using:
- Vercel

Build output:
```bash
npm run build
```

---

## Live Demo

https://cred-web-app-ui.vercel.app/

---

## Author

**Vetriselvan Karunanithi**

GitHub:  
https://github.com/vetrikarunanithi

LinkedIn:  
https://www.linkedin.com/in/vetriselvank

Portfolio:  
https://vetri-software-developer.vercel.app/

---
