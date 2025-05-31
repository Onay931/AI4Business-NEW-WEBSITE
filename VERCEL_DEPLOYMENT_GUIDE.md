# AI4Business Vercel Deployment Guide

## Quick Start (5 Minutes to Live Website)

### Step 1: Create GitHub Repository
1. Go to **github.com** and sign in
2. Click **"New repository"**
3. Name: `ai4business-website`
4. Set to **Public**
5. Click **"Create repository"**

### Step 2: Upload Project Files
**Important files to upload:**
- `api/` folder (AI endpoints)
- `client/` folder (website)
- `server/` folder (backend logic)
- `shared/` folder (database schema)
- `vercel.json` (deployment config)
- `package.json` (dependencies)
- `package-lock.json`
- `README.md`

**Upload Method:**
1. In GitHub, click **"uploading an existing file"**
2. Drag all project folders/files
3. Commit message: "AI4Business website deployment"
4. Click **"Commit changes"**

## Step 2: Database Setup

### Option A: Vercel Postgres (Recommended)
1. Go to Vercel Dashboard → Storage → Create Database
2. Select PostgreSQL
3. Copy the connection string

### Option B: External Database
Use services like:
- Neon (neon.tech) - Free PostgreSQL
- Supabase (supabase.com) - Free tier available
- PlanetScale (planetscale.com) - MySQL alternative

## Step 3: Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables, add:

```
DATABASE_URL=postgresql://username:password@host:port/database
GEMINI_API_KEY=your_gemini_api_key_here
SESSION_SECRET=your_secure_session_secret_here
NODE_ENV=production
```

## Step 4: Deploy to Vercel

### Method 1: GitHub Integration (Recommended)
1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your AI4Business repository
5. Configure build settings:
   - Framework Preset: Vite
   - Build Command: `cd client && vite build`
   - Output Directory: `client/dist`
6. Add environment variables
7. Deploy

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Step 5: Database Migration

After deployment, run database migration:
```bash
# Install Vercel CLI if not done
npm i -g vercel

# Link your project
vercel link

# Run database push
vercel env pull .env.local
npm run db:push
```

## Step 6: Custom Domain (Optional)

1. Vercel Dashboard → Domains
2. Add your domain
3. Update DNS records as instructed
4. SSL certificates are automatic

## Step 7: Authentication Update

**Important**: Your current Replit authentication won't work on Vercel. Choose one:

### Option A: Remove Authentication (Simplest)
Make the site completely public by removing auth checks.

### Option B: Implement NextAuth.js
```bash
npm install next-auth
```

### Option C: Use Vercel Authentication
Implement Vercel's auth solutions.

## Step 8: Testing Deployment

1. Test all pages load correctly
2. Verify API endpoints work:
   - `/api/ai/generate`
   - `/api/ai/text-analysis`
   - `/api/ai/business-ideas`
3. Check database connections
4. Test contact forms and chatbot

## Step 9: Performance Optimization

1. Enable Vercel Analytics
2. Configure caching headers
3. Optimize images for web
4. Enable compression

## Troubleshooting

### Common Issues:
1. **Build Fails**: Check build command in vercel.json
2. **API Routes Don't Work**: Verify function paths in `/api/`
3. **Database Connection**: Double-check DATABASE_URL format
4. **Environment Variables**: Ensure all required vars are set

### Build Commands for Different Scenarios:
```json
// For Vite-based builds
"buildCommand": "cd client && vite build"

// For complex builds
"buildCommand": "npm install && cd client && npm run build"
```

## Cost Considerations

### Vercel Free Tier:
- 100GB bandwidth per month
- 1,000 serverless function invocations
- 6,000 build minutes

### Upgrade Triggers:
- High traffic (>100GB/month)
- Many API calls (>1,000/month)
- Custom domains with advanced features

## Monitoring & Maintenance

1. Set up Vercel Analytics
2. Monitor function execution times
3. Track database usage
4. Set up uptime monitoring
5. Regular backups of database

## Next Steps After Deployment

1. Update DNS records if using custom domain
2. Set up monitoring and analytics
3. Configure email notifications for deployments
4. Test all functionality thoroughly
5. Update any hardcoded URLs to use environment variables

Your AI4Business website is now ready for professional deployment on Vercel with enterprise-grade hosting, automatic SSL, and global CDN distribution.