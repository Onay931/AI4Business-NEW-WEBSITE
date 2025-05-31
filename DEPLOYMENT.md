# Deployment Guide for AI4Business Website

## GitHub Repository Setup

1. **Create GitHub Repository**
   ```bash
   # Go to github.com and create a new repository named 'ai4business-website'
   # Make it public for GitHub Pages deployment
   ```

2. **Initialize and Push Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI4Business website"
   git remote add origin https://github.com/YOUR_USERNAME/ai4business-website.git
   git push -u origin main
   ```

## Environment Setup

1. **Copy Environment Variables**
   ```bash
   cp .env.example .env
   ```

2. **Configure Required Variables**
   - `GEMINI_API_KEY` - Required for AI features
   - `DATABASE_URL` - Required for authentication and data storage
   - Other variables are optional but enhance functionality

## Deployment Options

### Option 1: GitHub Pages (Static Site)
Best for frontend-only deployment without backend features.

1. **Repository Settings**
   - Go to repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

2. **Build for Static**
   ```bash
   npm run build
   git add dist/
   git commit -m "Add build files"
   git push origin main
   ```

### Option 2: Vercel (Full-Stack)
Recommended for complete functionality including AI features.

1. **Connect Repository**
   - Go to vercel.com
   - Import your GitHub repository
   - Configure build settings

2. **Environment Variables**
   Add these in Vercel dashboard:
   - `GEMINI_API_KEY`
   - `DATABASE_URL`
   - `SESSION_SECRET`

### Option 3: Railway (Full-Stack)
Alternative deployment with database support.

1. **Connect Repository**
   - Go to railway.app
   - Deploy from GitHub

2. **Add PostgreSQL Database**
   - Add PostgreSQL service
   - Copy DATABASE_URL to environment

## Database Setup

### For Production Deployment

1. **PostgreSQL Database**
   - Neon (recommended): neon.tech
   - Railway: railway.app
   - Supabase: supabase.com

2. **Run Migrations**
   ```bash
   npm run db:push
   ```

## API Keys Required

### Essential (for core AI features)
- **GEMINI_API_KEY**: Get from Google AI Studio
  - Visit: aistudio.google.com
  - Create API key for Gemini

### Optional (for enhanced features)
- **ANTHROPIC_API_KEY**: For Claude integration
- **OPENAI_API_KEY**: For OpenAI features

## Custom Domain Setup

1. **Add CNAME File**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. **DNS Configuration**
   - Point your domain to GitHub Pages:
     - CNAME record: www → yourusername.github.io
     - A records: @ → GitHub Pages IPs

## Testing Deployment

1. **Local Testing**
   ```bash
   npm run build
   npm run start
   ```

2. **Feature Verification**
   - AI Demo tools functionality
   - Contact forms working
   - Chatbot responses
   - Mini PC banner display

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check TypeScript errors: `npm run check`
   - Verify all imports are correct

2. **AI Features Not Working**
   - Ensure GEMINI_API_KEY is set
   - Check API quota and billing

3. **Database Connection Issues**
   - Verify DATABASE_URL format
   - Check database permissions

### Support

Contact AI4Business support if you encounter deployment issues.