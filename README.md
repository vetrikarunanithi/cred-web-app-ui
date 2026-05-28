# CRED Web App UI

A clean clone of the CRED landing page focusing on the dark theme, custom 3D NeoPOP buttons, and glassmorphic cards. 

Had a strict 3-hour limit to build this, so I focused on getting the styling, typography, and scroll animations right without wasting time on asset collection or manual data entry.

## Sourcing & Assets
* **CSS & SVGs instead of images:** I didn't want to deal with hosting images or risk broken asset URLs, so the cards (the holographic PRIME card and the gold/black SELECT card) and the 3D gold coin are coded entirely in SVGs and CSS gradients. They look sharp at any resolution and load instantly.
* **Mock Data:** The text copy and values are modeled after the real CRED app. To stay within the 3-hour window, I used AI to generate and format the structured data arrays in `src/data/mockData.js` so I could focus on components.
* **Animations:** Set up with Framer Motion (fade reveals, cursor follower, scroll progress bar, 3D tilts, and the cinematic loading screen). The testimonial slider uses Swiper.js.

## Stack
* React + Vite (running on Tailwind v4)
* Framer Motion
* Swiper.js
* React Icons

## Local Development
```bash
# install dependencies
npm i

# run local dev server
npm run dev
```

## Deployment
Standard Vite config, so you can just drop the GitHub repository link into Vercel and it will handle the build (`npm run build` -> `dist`) automatically on push.

[Live Demo](https://cred-web-app-ui.vercel.app/)
