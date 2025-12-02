# Vercel Deployment Guide

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended - 5 minutes)

1. **Go to your Vercel dashboard**
   - Visit: https://vercel.com/mohsins-projects-2431842a
   - Make sure you're logged in

2. **Import your GitHub repository**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - If prompted, authorize Vercel to access your GitHub account
   - Find and select: `Mohsinraza23/-Physical-AI-Humanoid-Robotics-Essentials`
   - Click "Import"

3. **Configure the project**
   - Vercel will automatically detect Docusaurus from your `vercel.json`
   - **Framework Preset**: Should show "Docusaurus" (auto-detected)
   - **Root Directory**: Keep as default (or set to `website` if needed)
   - **Build Command**: `cd website && npm install && npm run build`
   - **Output Directory**: `website/build`

4. **Environment Variables** (Optional - for production API)
   - Click "Environment Variables"
   - Add:
     - Key: `DOCUSAURUS_API_URL`
     - Value: `https://your-backend-url.railway.app` (when backend is deployed)
   - For now, skip this - your mock backend will work locally

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://physical-ai-humanoid-robotics-essentials.vercel.app`

---

### Option 2: Deploy via Vercel CLI (Advanced)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   - Follow the authentication prompts in your browser

3. **Deploy from project root**
   ```bash
   cd C:\Users\DELL\Desktop\my-book
   vercel
   ```
   - Vercel will detect your `vercel.json` configuration
   - Answer the prompts:
     - Set up and deploy? **Y**
     - Which scope? Select your account
     - Link to existing project? **N** (first time)
     - Project name: `physical-ai-humanoid-robotics-essentials`
     - Directory: `.` (current directory)

4. **Production deployment**
   ```bash
   vercel --prod
   ```

---

## Troubleshooting

### Issue: "Build failed - Cannot find module 'react'"

**Solution**: Ensure `vercel.json` has correct paths:
```json
{
  "buildCommand": "cd website && npm install && npm run build",
  "outputDirectory": "website/build"
}
```

### Issue: "404 - Page not found" on deployed site

**Problem**: `baseUrl` in `docusaurus.config.ts` is set to `/`

**Solution**:
1. Open `website/docusaurus.config.ts`
2. Find:
   ```typescript
   baseUrl: '/',
   ```
3. Change to:
   ```typescript
   baseUrl: '/',  // Keep as '/' for Vercel custom domain
   ```
   - **Note**: Only change to `/repo-name/` if deploying to GitHub Pages
   - Vercel uses root domain, so keep `/`

### Issue: "Chatbot not working on deployed site"

**Temporary**: The mock backend (`simple_server.py`) only runs on localhost:8000

**Solution Options**:
1. **Quick fix for testing**: Chatbot will show "API Error" - this is expected without backend
2. **Production fix**: Deploy backend to Railway/Render first, then update `DOCUSAURUS_API_URL` in Vercel environment variables

---

## Post-Deployment Checklist

After successful deployment:

- [ ] Visit your Vercel URL: `https://your-project.vercel.app`
- [ ] Verify homepage loads with beautiful purple gradient
- [ ] Check all 6 chapter pages load correctly
- [ ] Test navigation and sidebar
- [ ] Verify mobile responsiveness
- [ ] Test chatbot UI (will show error without backend - expected)
- [ ] Check browser console for errors (ignore API errors for now)

---

## Next Steps After Frontend Deployment

1. **Set up custom domain** (Optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain (e.g., `physical-ai.com`)
   - Update DNS records as instructed

2. **Deploy backend to Railway/Render**
   - Follow `DEPLOYMENT.md` section on backend deployment
   - Set up Qdrant and Neon PostgreSQL
   - Deploy `backend/` to Railway or Render

3. **Connect frontend to production backend**
   - In Vercel dashboard → Settings → Environment Variables
   - Add/Update `DOCUSAURUS_API_URL` to your backend URL
   - Redeploy frontend (Vercel → Deployments → three dots → Redeploy)

4. **Enable automatic deployments**
   - Already configured! Every push to `main` branch will auto-deploy
   - Vercel automatically watches your GitHub repo

---

## Security: GitHub Token Best Practices

⚠️ **IMPORTANT**: Always keep your GitHub personal access tokens secure.

**Token Security Checklist**:
1. Never commit tokens to repositories
2. Store tokens in secure password managers
3. Use fine-grained tokens with minimal permissions
4. Set expiration dates on tokens
5. Rotate tokens regularly (every 90 days)
6. Revoke tokens immediately if exposed

**If you suspect a token was exposed**:
1. Go to: https://github.com/settings/tokens
2. Find the token in the list
3. Click "Delete" or "Revoke"
4. Generate a new token with appropriate permissions

---

## Current Status

✅ **Completed**:
- Code pushed to GitHub: https://github.com/Mohsinraza23/-Physical-AI-Humanoid-Robotics-Essentials
- `vercel.json` configuration created and pushed
- Beautiful UI with purple gradient design
- Chatbot UI implemented and tested locally
- Mock backend server (`simple_server.py`) working on localhost:8000

⏳ **Awaiting**:
- Manual Vercel deployment via dashboard or CLI (follow Option 1 above)
- Backend deployment to Railway/Render (when ready for production)

---

## Support

If you encounter issues:
1. Check Vercel build logs (Dashboard → Deployments → Click on deployment → View Logs)
2. Refer to `DEPLOYMENT.md` for detailed troubleshooting
3. Check `PRODUCTION_CHECKLIST.md` for validation steps

---

**Estimated Time**: 5 minutes to deploy via Vercel dashboard

**Cost**: FREE (Vercel Hobby plan supports personal projects)
