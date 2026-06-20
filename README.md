# 💎 SK Jewelry Handmade — Premium React Frontend

A modern, fully responsive e-commerce website for SK Jewelry Handmade featuring premium animations, smooth transitions, and elegant luxury design.

## ✨ Features

- **Premium Design**: Teal & gold color scheme with elegant typography
- **Smooth Animations**: GSAP + Framer Motion for sophisticated interactions
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Fast Performance**: Built with Vite for instant HMR
- **SEO-Friendly**: Clean semantic HTML structure
- **WhatsApp Integration**: Direct shopping links to WhatsApp
- **Multiple Pages**: Home, Products, About, Contact with smooth transitions

## 📦 Tech Stack

- **React 18** — UI framework
- **React Router v6** — Page routing
- **Tailwind CSS** — Utility-first styling
- **GSAP** — Advanced animations
- **Framer Motion** — Scroll & gesture animations
- **Vite** — Build tool

## 🚀 Quick Start

1. **Install dependencies**
```bash
npm install
```

2. **Configure WhatsApp Number**
   - Open `src/config.js`
   - Update `WHATSAPP_NUMBER` with the business number

3. **Start dev server**
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroCarousel.jsx
│   ├── ProductCard.jsx
│   ├── ReviewCard.jsx
│   └── MarketCard.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/               # Static data
│   └── products.js
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
├── index.css           # Global styles + Tailwind
└── config.js           # Configuration
```

## 🎨 Customization

### Update Colors
Edit `tailwind.config.cjs` to change the color palette.

### Add Products
Edit `src/data/products.js` to add your jewelry products with images, prices, and ratings.

### Change WhatsApp Number
Update `src/config.js` with your business WhatsApp number.

### Replace Images
Update image URLs in components to use your own product photos instead of Unsplash placeholders.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

## 📝 Pages Overview

- **Home**: Hero carousel, featured products, hot selling items, market presence, custom jewelry, customer reviews
- **Products**: Searchable & sortable product grid with filtering
- **About**: Company story, gallery, vision/mission, stats
- **Contact**: Contact form, business info, WhatsApp link, social links

## 🎯 Premium Features

- Auto-rotating hero carousel with smooth fade animations
- Hover-lift effects on product cards with image zoom
- Scroll-reveal animations for sections
- Animated counter statistics
- Smooth page transitions
- Mobile-responsive hamburger menu with GSAP animations
- Premium glass-morphism effects
- Gradient backgrounds and text effects

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📞 Support

For questions or issues, reach out via WhatsApp or Instagram @sk_jewelry_handmade

---

**Made with ❤️ for SK Jewelry Handmade**

