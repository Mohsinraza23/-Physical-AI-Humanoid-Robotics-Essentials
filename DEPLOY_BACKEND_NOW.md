# Deploy Backend to Railway RIGHT NOW (5 Minutes)

## 🚀 Quick Backend Deployment Steps

Your backend code is ready and pushed to GitHub. Now let's get it running on Railway!

---

## Step 1: Go to Railway

**Open this URL:** https://railway.app/new

---

## Step 2: Sign Up / Log In

- If you don't have an account, click "Login with GitHub"
- Authorize Railway to access your GitHub repositories

---

## Step 3: Deploy from GitHub Repository

1. Click **"Deploy from GitHub repo"**

2. Select your repository:
   ```
   Mohsinraza23/-Physical-AI-Humanoid-Robotics-Essentials
   ```

3. Click **"Deploy Now"**

---

## Step 4: Configure the Service

After Railway imports your repo, you need to configure it:

### 4a. Set Root Directory
1. In the Railway dashboard, click on your service
2. Go to **Settings** tab
3. Find **"Root Directory"** setting
4. Set it to: `backend`
5. Click **"Save"**

### 4b. Set Start Command
1. Still in **Settings** tab
2. Find **"Start Command"** or **"Custom Start Command"**
3. Enter: `uvicorn simple_server:app --host 0.0.0.0 --port $PORT`
4. Click **"Save"**

### 4c. Set Python Version (Optional but Recommended)
1. In **Settings** tab
2. Find **"Build Command"** or create a `runtime.txt` file
3. Or Railway will auto-detect Python from requirements-simple.txt

---

## Step 5: Deploy

1. Railway will automatically trigger a deployment
2. Wait 2-3 minutes for the build to complete
3. You'll see build logs in the **"Deployments"** tab

---

## Step 6: Get Your Backend URL

Once deployment succeeds:

1. Go to **Settings** tab
2. Find **"Domains"** section
3. Click **"Generate Domain"**
4. Railway will give you a URL like:
   ```
   https://physical-ai-textbook-production.up.railway.app
   ```
5. **Copy this URL** - you'll need it next!

---

## Step 7: Test Your Backend

Open your browser and visit:
```
https://your-railway-url.railway.app/
```

You should see:
```json
{
  "name": "Physical AI Textbook API (Mock Mode)",
  "version": "1.0.0",
  "status": "running",
  "mode": "mock"
}
```

✅ **Backend is working!**

---

## Step 8: Update Frontend to Use Railway Backend

Now we need to tell your Vercel frontend about the Railway backend.

### Option A: Update Root.tsx and Redeploy

1. Open `website/src/theme/Root.tsx`
2. Find line 33:
   ```typescript
   const response = await fetch('http://localhost:8000/api/query', {
   ```
3. Change to your Railway URL:
   ```typescript
   const response = await fetch('https://your-railway-url.railway.app/api/query', {
   ```
4. Save, commit, and push to GitHub
5. Vercel will auto-deploy the update

### Option B: Use Environment Variable (Better)

I'll help you set this up in the next step!

---

## Next Steps

**After you complete Steps 1-7 above:**

1. Tell me your Railway URL
2. I'll update the frontend code to use it
3. Push to GitHub
4. Vercel auto-deploys
5. Your chatbot works! 🎉

---

## Expected Timeline

- **Railway deployment**: 3-5 minutes
- **Frontend update**: 2 minutes
- **Vercel auto-deploy**: 2-3 minutes
- **Total**: ~10 minutes

---

## Troubleshooting

### Build fails on Railway

**Error**: `Could not find requirements.txt`

**Solution**:
1. Go to Settings
2. Set Root Directory to `backend`
3. Railway should find `requirements-simple.txt`

### Railway asks for requirements.txt specifically

**Solution**:
1. We have `requirements-simple.txt` with just FastAPI and Uvicorn
2. Railway should auto-detect it
3. If not, rename it to `requirements.txt` in the backend folder

### Backend deployed but returns 404

**Check**:
1. Start command is: `uvicorn simple_server:app --host 0.0.0.0 --port $PORT`
2. Root directory is set to `backend`
3. Check deployment logs for errors

---

## 🎯 Current Status

✅ Backend code ready on GitHub
✅ CORS configured to allow all origins
✅ Procfile and requirements ready
⏳ Waiting for you to deploy on Railway

**Start here**: https://railway.app/new

---

**Once you get the Railway URL, tell me and I'll update the frontend immediately!**
