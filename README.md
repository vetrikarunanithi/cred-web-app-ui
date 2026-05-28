# CRED Website Clone — Premium UI

A premium, fully responsive, and cinematic CRED landing page clone built in a tight **3-hour timeline**. It replicates the signature dark theme, glassmorphic card grids, custom 3D NeoPOP UI, and premium micro-interactions.

## ⚡ The 3-Hour Challenge

This project was built to test speed and precision under a strict 3-hour deadline. To pull this off while keeping the design pixel-perfect, I split the work:
1. **HTML/CSS Credit Cards**: Instead of spending time downloading, hosting, or linking static images that could look blurry, I coded the premium **PRIME holographic card**, the **SELECT black-and-gold metal card**, and the **rotating 3D gold club coin** entirely using inline SVGs, Tailwind gradients, and Framer Motion logic. They are crisp, scalable, and fully interactive.
2. **AI-Assisted Mock Data**: Sourced features, testimonials, security guidelines, and statistical metrics from the original CRED application, and used AI to format and structure the mock dataset within minutes to hit the deadline.

---

## 🛠️ Built With

* **React.js + Vite** – Fast local development, lightning HMR, and ultra-small build bundles.
* **Tailwind CSS v4** – Built using the new CSS-first styling engine, custom `@theme` variables, and utility declarations inside `index.css`.
* **Framer Motion** – Handles the cinematic text slide-ups, custom trailing cursor, top scroll-progress tracking, 3D stacked card hover shifts, and entrance loader.
* **Swiper.js** – Powers the reviews carousel with custom creative-effect slide animations.
* **React Icons** – Modern outline and filled Remix/Font-Awesome icons.

---

## 🏗️ Folder Structure

```text
src/
 ├── assets/          # Base brand icons and vectors
 ├── components/      # UI components (Navbar, Hero, Features, NeoPop, etc.)
 ├── data/            # Local mockData.js (Sourced from original app)
 ├── App.jsx          # App wrapper and entry logic
 ├── index.css        # Tailwind imports, custom fonts, keyframes, utilities
 └── main.jsx         # React root mounter
```

---

## 💻 Getting Started

Follow these steps to run the application locally:

### 1. Clone the repository
```bash
git clone https://github.com/vetrikarunanithi/cred-web-app-ui.git
cd cred-web-app-ui
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The compiled, optimized site assets will be generated in the `dist` directory.

---

## 🌐 Deployment

This project is fully configured for deployment on **Vercel**. Since Git is connected, importing the repository directly on Vercel's dashboard will automatically configure the build settings and trigger deployments on every `git push`.
