---
description: How to deploy the Xochiii website to Vercel
---

Follow these steps to get your website live on the cloud.

### 1. Push to GitHub
If you haven't already, push your code to a GitHub repository:
1. Open your terminal in the project root.
2. Initialize and push:
```bash
git init
git add .
git commit -m "feat: initial commit with Supabase integration"
git remote add origin https://github.com/YOUR_USERNAME/xochiii-website.git
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New"** > **"Project"**.
3. Import the `xochiii-website` repository.

### 3. Configure Environment Variables
In the Vercel "Configure Project" screen, add the following under **Environment Variables**:
- `NEXT_PUBLIC_SUPABASE_URL`: (Copy from your local `.env.local`)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Copy from your local `.env.local`)

### 4. Deploy
Click **"Deploy"**. Your site will be live at a `.vercel.app` URL in about a minute.

### 5. Connect `xochiii.in`
1. In Vercel, go to **Settings** > **Domains**.
2. Add `xochiii.in`.
3. Follow the DNS instructions provided by Vercel to update your records in your domain registrar (e.g., GoDaddy, Namecheap).
