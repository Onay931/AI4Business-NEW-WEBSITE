# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `ai4business-website`
5. Description: `Professional AI4Business website with custom AI integration services`
6. Make it **Public** (required for free GitHub Pages)
7. **Do NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## Step 2: Initialize Git and Push Code

Run these commands in your Replit terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AI4Business website with AI features"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ai4business-website.git

# Push to GitHub
git push -u origin main
```

## Step 3: Set Up GitHub Pages (Optional)

For free hosting on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Leave folder as "/ (root)"
7. Click "Save"

Your site will be available at: `https://yourusername.github.io/ai4business-website`

## Step 4: Environment Variables for Production

For full functionality, you'll need these API keys:

### Required:
- `GEMINI_API_KEY` - Get from [Google AI Studio](https://aistudio.google.com)

### Optional (for enhanced features):
- `DATABASE_URL` - PostgreSQL database for authentication
- `SESSION_SECRET` - Random secure string for sessions

## Files Ready for GitHub:

✅ **README.md** - Complete project documentation
✅ **LICENSE** - MIT license file
✅ **.gitignore** - Excludes sensitive files and dependencies
✅ **.env.example** - Template for environment variables
✅ **DEPLOYMENT.md** - Detailed deployment instructions
✅ **Build tested** - Project builds successfully

## Next Steps:

1. Replace `YOUR_USERNAME` in the git remote command above
2. Run the git commands to push your code
3. Configure any needed API keys for full functionality
4. Your professional AI4Business website will be live on GitHub!

The website includes all features: AI Mini PC showcase, interactive demos, chatbot, and contact integration.