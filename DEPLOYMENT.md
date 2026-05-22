# Deployment Guide for Vercel

## Files Already Cleaned Up ✅

Your project is now ready for Vercel deployment with:
- Updated `.gitignore` file
- Removed chat component (Chat.tsx → Chat.disabled.tsx)
- Portfolio links configured
- Proper meta tags and titles

## Before Deploying

### 1. Remove Unnecessary Parent Folders (IMPORTANT!)

Your project structure currently has extra template folders that are NOT needed:

```
E:\biggest-personal-portfolio-html-template-2025-08-11-09-45-39-utc (1)\
├── virtuo-personal-portfolio-html-template-1.0.2/  ❌ DELETE THIS
├── virtuo-personal-portfolio-nextjs-template-1.0.2/ ❌ DELETE THIS
└── virtuo-personalportfolio-reactjs-template/
    ├── documentation/  ❌ DELETE THIS
    └── virtuo/  ✅ THIS IS YOUR PROJECT FOLDER
```

**Only keep the `virtuo` folder for deployment!**

### 2. Environment Variables

If you need environment variables, create `.env.local` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update `src/components/contact/Contact5.tsx` to use:
```typescript
import.meta.env.VITE_EMAILJS_SERVICE_ID
```

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Navigate to your project folder:
```bash
cd "E:\biggest-personal-portfolio-html-template-2025-08-11-09-45-39-utc (1)\virtuo-personalportfolio-reactjs-template\virtuo"
```

4. Deploy:
```bash
vercel
```

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Using Git + Vercel Dashboard

1. **Initialize Git Repository** (in the `virtuo` folder):
```bash
cd "E:\biggest-personal-portfolio-html-template-2025-08-11-09-45-39-utc (1)\virtuo-personalportfolio-reactjs-template\virtuo"
git init
git add .
git commit -m "Initial commit"
```

2. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., "sudharsan-portfolio")
   - Don't initialize with README

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sudharsan-portfolio.git
git branch -M main
git push -u origin main
```

4. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it as a Vite project
   - Click "Deploy"

### Vercel Configuration

Your project already has `vercel.json`. The settings are:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Post-Deployment Checklist

- [ ] Test all portfolio project links (Medlad Tandoori, The Lost Yeti)
- [ ] Verify contact form works (EmailJS configured)
- [ ] Check responsive design on mobile
- [ ] Test page title shows "Sudharsan | Portfolio"
- [ ] Confirm no chat widget appears
- [ ] Set up custom domain (optional, in Vercel dashboard)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Run `npm install` and `npm run build` locally first
- Check Vercel build logs

### Environment Variables Not Working
- Add them in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables

### Images Not Loading
- Ensure images are in `public/` folder
- Use paths like `/assets/images/...` (not relative paths)

## Update Your Portfolio

After deployment, update your portfolio projects with live URLs in `src/data/portfolio.ts`:

```typescript
{
  id: 21,
  liveUrl: "https://your-ai-project.vercel.app/",
  // ... other fields
}
```

## Support

For issues with:
- **Vercel Deployment**: https://vercel.com/docs
- **Vite Build**: https://vitejs.dev/guide/
- **React**: https://react.dev/

---

**Your portfolio is ready to deploy! 🚀**
