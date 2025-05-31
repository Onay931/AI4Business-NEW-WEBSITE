# Firebase Deployment Guide - AI4Business Website

## Quick Setup Instructions

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Project name: `ai4business-website`
4. Click "Create project"

### Step 2: Install Firebase CLI and Login
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to your Firebase account
firebase login
```

### Step 3: Initialize Firebase Hosting
```bash
# In your project directory, initialize Firebase
firebase init hosting

# Select: Use an existing project
# Choose: ai4business-website
# Public directory: dist/public
# Single-page app: Yes
# Automatic builds and deploys with GitHub: No
```

### Step 4: Build and Deploy
```bash
# Build your project for production
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

## Your Website Will Be Live At:
`https://ai4business-website.web.app`

## Static Site Deployment
This configuration deploys your AI4Business website as a static site. The AI features that require API keys will need to be configured separately if you want full functionality.

## Files Already Configured:
- `firebase.json` - Hosting configuration
- `.firebaserc` - Project settings  
- Build output ready in `dist/public`

## Custom Domain Setup (Optional)
1. In Firebase Console → Hosting
2. Click "Add custom domain" 
3. Enter your domain (e.g., `ai4business.co.za`)
4. Follow the DNS configuration steps

## Next Steps After Deployment:
1. Test the live website
2. Configure custom domain if desired
3. Set up analytics and monitoring

The website includes your AI Mini PC showcase, contact forms, and all sections. The AI demo features will display proper messages when API keys aren't configured.