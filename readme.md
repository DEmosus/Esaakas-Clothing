<div align="center">

# ESAAKA CLOTHING

### Full-Stack E-Commerce PWA

_An editorial luxury shopping experience built with React, Redux Toolkit, Firebase & Stripe_

[![Live Demo](https://img.shields.io/badge/Live_Demo-esaaka--clothing.netlify.app-B8972A?style=for-the-badge&logo=netlify&logoColor=white)](https://esaaka-clothing.netlify.app)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.12.0-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org)
[![Firebase](https://img.shields.io/badge/Firebase-11.10.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Stripe](https://img.shields.io/badge/Stripe-Integrated-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)

</div>

---

## What Is This?

Esaaka Clothing is a production-grade clothing store built from scratch. It covers the full stack of a real e-commerce product: authentication, a live database, a persistent cart, real payment processing through Stripe, and a Progressive Web App that works offline and is installable on any device.

The design system is built around an **editorial luxury** aesthetic — Cormorant Garamond display typography, Jost body type, champagne gold accents, and a fully operational dark/light mode that respects the user's OS preference and persists across sessions.

---

## Technical Highlights

These are the decisions worth talking about — the parts that go beyond wiring components together.

### State Architecture

Global state is split across three Redux Toolkit slices — `user`, `categories`, and `cart`. Only `cart` and `categories` are persisted to `localStorage` via `redux-persist`. The `user` slice is deliberately **blacklisted** from persistence: Firebase's own `onAuthStateChanged` listener rehydrates auth state on every load, making persisted user data both unnecessary and a potential stale-data risk.

### Theme System Without Re-Renders

The entire colour system is driven by CSS custom properties on `:root` and `[data-theme="dark"]` in `global.styles.js`. Toggling dark mode writes a single `data-theme` attribute to `<html>` — no React re-renders are triggered for the colour change itself. Every styled-component references `var(--token)` so the full UI re-themes in a single attribute write, with smooth CSS transitions throughout.

### Stripe Security Model

The Stripe secret key never touches the client. The payment flow works like this:

```
Client → POST /.netlify/functions/create-payment-intent (amount only)
       ← { client_secret } (single-use token for this exact amount)
Client → stripe.confirmCardPayment(client_secret, { card: CardElement })
       ← { status: "succeeded" } or { error }
```

The `CardElement` is a Stripe-hosted iframe — raw card details are never accessible to the application's JavaScript. The server-side Netlify Function validates the amount before creating the PaymentIntent, so the client cannot manipulate the charge.

### Performance Budget

- Five route-level components loaded with `React.lazy` + `Suspense`
- Vite `manualChunks` produces six separate cacheable bundles: vendor, router, redux, firebase, stripe, styling
- `React.memo` on every list-rendered component (`CartItem`, `CheckoutItem`)
- All product images use `loading="lazy"`
- Google Fonts served with `preconnect` hints to eliminate render-blocking latency
- Workbox service worker pre-caches all JS/CSS/HTML; runtime caching covers fonts and product images

### SVG Icon Theming

The shopping bag and logo SVGs use `fill="currentColor"` on all paths. The parent container sets `color: var(--text)`, which flows through `currentColor` into the SVG fill. Hover states change `color` to `var(--gold)` — the icon recolours automatically. This works because `currentColor` is resolved by the browser's CSS engine, not by JavaScript, so it inherits correctly from CSS custom properties.

---

## Feature Overview

| Feature               | Details                                                                  |
| --------------------- | ------------------------------------------------------------------------ |
| **Product browsing**  | 5 categories, 35+ products sourced from Firestore                        |
| **Category previews** | Shop landing shows first 4 items per category with animated link arrows  |
| **Product cards**     | Hover reveals "Add to Cart", image zooms, card lifts                     |
| **Cart**              | Persistent across sessions, live count badge, quantity controls          |
| **Cart dropdown**     | Closes on outside click, Escape key, or any nav link                     |
| **Authentication**    | Google OAuth + email/password, Firestore user profile on first sign-in   |
| **Checkout**          | Full cart review with quantity editing and item removal                  |
| **Payments**          | Stripe Elements — PCI-compliant, server-side secret, real PaymentIntents |
| **Dark mode**         | OS-aware, persisted, zero-re-render CSS variable system                  |
| **PWA**               | Installable, offline-capable, Workbox service worker                     |
| **Responsive**        | Mobile-first at every breakpoint, tested down to 320px                   |

---

## Tech Stack

| Layer              | Technology                                  | Version         |
| ------------------ | ------------------------------------------- | --------------- |
| UI Framework       | React                                       | 18.3.1          |
| State Management   | Redux Toolkit                               | 2.12.0          |
| State Persistence  | redux-persist                               | 6.0.0           |
| React–Redux        | react-redux                                 | 9.3.0           |
| Memoised selectors | reselect                                    | 5.2.0           |
| Styling            | styled-components                           | 6.4.2           |
| Routing            | React Router DOM                            | 6.30.4          |
| Auth + Database    | Firebase                                    | 11.10.0         |
| Payments (client)  | @stripe/stripe-js + @stripe/react-stripe-js | 5.10.0 / 3.10.0 |
| Payments (server)  | stripe — Netlify Function                   | 17.7.0          |
| Build Tool         | Vite                                        | 6.4.2           |
| PWA                | vite-plugin-pwa (Workbox)                   | 0.21.2          |
| Linting            | ESLint v9 flat config                       | 9.39.4          |
| Deployment         | Netlify                                     | —               |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- A [Firebase project](https://console.firebase.google.com)
- A [Stripe account](https://dashboard.stripe.com)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) for local payment testing

### Installation

```bash
# Clone
git clone https://github.com/DEmosus/Esaakas-Clothing.git
cd Esaakas-Clothing

# Install
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Stripe and Firebase keys
```

### Running locally

```bash
# UI only (no payments)
npm run dev

# UI + Netlify Functions (payments work)
netlify dev
```

> **Note on payments:** The Netlify function server (`/.netlify/functions/`) is not started by `npm run dev` (Vite only). To test the full payment flow locally, run `netlify dev` — this starts both Vite and the function server together. The payment form shows a banner in dev mode reminding you of this.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values. This file is in `.gitignore` and must never be committed.

```env
# Stripe publishable key — safe to expose (starts with pk_test_ or pk_live_)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Stripe secret key — server-side only, used in netlify/functions/
STRIPE_SECRET_KEY=sk_test_...

# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

## Firebase Setup

### Authentication

Firebase console → Authentication → Sign-in method → enable **Google** and **Email/Password**.

### Firestore

Create a database in test mode locally. Apply these rules before going to production:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /categories/{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

### Seed product data

```js
import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";
import { SHOP_DATA } from "./shop-data";

// Run once, then remove
addCollectionAndDocuments("categories", SHOP_DATA);
```

---

## Payment Testing

The Stripe integration uses real PaymentIntents. Use these test card numbers:

| Card                  | Result                |
| --------------------- | --------------------- |
| `4242 4242 4242 4242` | ✅ Payment succeeds   |
| `4000 0025 0000 3155` | 🔐 Requires 3D Secure |
| `4000 0000 0000 9995` | ❌ Payment declined   |

Any future expiry date · Any 3-digit CVC · Any billing postcode

---

## Design System

### Typography

| Role               | Font               | Weights               |
| ------------------ | ------------------ | --------------------- |
| Display / Headings | Cormorant Garamond | 300 · 400 · 600 · 700 |
| Body / UI          | Jost               | 300 · 400 · 500 · 600 |

### Colour Tokens

| Token             | Light     | Dark      | Usage                              |
| ----------------- | --------- | --------- | ---------------------------------- |
| `--bg`            | `#F9F6F0` | `#131008` | Page background                    |
| `--bg-card`       | `#FFFFFF` | `#221E12` | Cards, dropdowns                   |
| `--text`          | `#1C1712` | `#F0EAE0` | Primary text                       |
| `--text-muted`    | `#8A7D6E` | `#7A6E5E` | Labels, placeholders               |
| `--gold`          | `#B8972A` | `#C9A84C` | Accent — prices, CTAs, focus rings |
| `--gold-light`    | `#D4AF55` | `#DFC070` | Hover states                       |
| `--border`        | `#E2D9CC` | `#2E2818` | Dividers, card edges               |
| `--border-strong` | `#C4B49A` | `#4A3E28` | Inputs, strong dividers            |

---

## Project Structure

```
esaaka-clothing/
├── netlify/functions/
│   └── create-payment-intent.cjs   # Stripe PaymentIntent — secret key stays server-side
├── public/icons/                   # PWA icons (192px, 512px, apple-touch, favicon)
├── src/
│   ├── contexts/
│   │   └── theme.context.jsx       # Dark/light mode — localStorage + OS preference
│   ├── components/
│   │   ├── button/                 # base / google / inverted variants + loading spinner
│   │   ├── cart-dropdown/          # Slide-out cart with outside-click + Escape to close
│   │   ├── cart-icon/              # Live count badge, stopPropagation on toggle
│   │   ├── category-preview/       # Shop landing — 4-product preview per category
│   │   ├── directory-item/         # Home category card — gradient overlay, image zoom
│   │   ├── payment-form/           # Stripe Elements — hardcoded hex colours for iframe
│   │   ├── product-card/           # Hover-reveal add-to-cart, card lift
│   │   ├── theme-toggle/           # Moon/sun with pop-rotate keyframe animation
│   │   └── ...
│   ├── routes/
│   │   ├── navigation/             # Sticky layout shell, outside-click cart close
│   │   ├── check-out/              # Cart review + Stripe payment
│   │   └── ...
│   ├── store/
│   │   ├── cart/                   # Persisted — add, remove, clear, quantity
│   │   ├── categories/             # Persisted — Firestore data
│   │   └── user/                   # NOT persisted — Firebase handles session
│   └── utils/
│       ├── firebase/               # Auth helpers + Firestore queries
│       └── stripe/                 # loadStripe singleton with undefined-key guard
├── global.styles.js                # All CSS tokens — :root (light) + [data-theme=dark]
└── vite.config.js                  # Chunk splitting, PWA, mode-aware glob patterns
```

---

## Deployment

Configured for Netlify out of the box. Push to GitHub and connect in the Netlify dashboard — `netlify.toml` handles everything else.

| Setting             | Value                                                          |
| ------------------- | -------------------------------------------------------------- |
| Build command       | `npm run build`                                                |
| Publish directory   | `dist`                                                         |
| Functions directory | `netlify/functions`                                            |
| Node version        | 20                                                             |
| SPA redirect        | `/* → /index.html`                                             |
| Asset caching       | `immutable, max-age=31536000`                                  |
| Security headers    | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` |

Add `VITE_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` under **Site configuration → Environment variables** in Netlify.

---

## Scripts

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Vite dev server — UI only, no function server                  |
| `netlify dev`     | Vite + Netlify Functions — full local stack including payments |
| `npm run build`   | Production build with chunk splitting to `/dist`               |
| `npm run preview` | Serve the production build locally                             |
| `npm run lint`    | ESLint v9 flat config — zero warnings policy                   |

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

_Esaakas Clothing — quality essentials, thoughtfully presented._

</div>
