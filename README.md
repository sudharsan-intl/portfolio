# Sudharsan's Portfolio

A modern, responsive personal portfolio built with React, TypeScript, and Vite.

## 🚀 Live Demo

Deploy your portfolio to Vercel: [See DEPLOYMENT.md](./DEPLOYMENT.md)

## ✨ Features

- ✅ Fully responsive design
- ✅ Modern React 19 with TypeScript
- ✅ Portfolio projects with live links
- ✅ Contact form (EmailJS integration)
- ✅ Smooth animations and transitions
- ✅ Particle effects background
- ✅ Dark theme optimized
- ✅ SEO optimized

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: SASS/SCSS
- **Routing**: React Router v7
- **Animations**: GSAP
- **Email**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Project Structure

```
virtuo/
├── public/
│   └── assets/         # Images, fonts, styles
├── src/
│   ├── components/     # React components
│   │   ├── about/
│   │   ├── contact/
│   │   ├── footers/
│   │   ├── headers/
│   │   ├── portfolios/
│   │   └── ...
│   ├── contexts/       # React contexts
│   ├── data/          # Data files (portfolio items, etc.)
│   ├── pages/         # Page components
│   └── main.jsx       # Entry point
├── index.html
├── vite.config.ts
└── package.json
```

## ⚙️ Configuration

### Portfolio Projects

Edit `src/data/portfolio.ts` to add your projects:

```typescript
{
  id: 23,
  title: "Your Project Name",
  category: "React Website",
  liveUrl: "https://your-project.vercel.app/",
  // ...
}
```

### Contact Form

Update EmailJS credentials in `src/components/contact/Contact5.tsx`:

```typescript
emailjs.sendForm(
  "your_service_id",
  "your_template_id",
  form.current,
  { publicKey: "your_public_key" }
)
```

### Personal Information

Update your details in relevant component files:
- About section: `src/components/about/About4.tsx`
- Profile: `src/components/profile/Profile2.tsx`
- Footer: `src/components/footers/Footer1.tsx`

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

Quick deploy:
```bash
npm install -g vercel
vercel
```

## 📝 License

This is a personal portfolio project.

## 👤 Author

**Sudharsan**

---

Built with ❤️ using React + Vite + TypeScript

