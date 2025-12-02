# Deploy Backend to PythonAnywhere (FREE - No Card Required!)

## ✅ 100% Free - No Credit Card Needed

PythonAnywhere offers a free tier that's perfect for your chatbot backend!

---

## Step 1: Sign Up (No Card Required)

1. Go to: https://www.pythonanywhere.com/registration/register/beginner/
2. Fill in:
   - Username: (choose any username)
   - Email: (your email)
   - Password: (create a password)
3. Click **"Register"**
4. Verify your email

---

## Step 2: Create Web App

1. After login, click **"Web"** tab at the top
2. Click **"Add a new web app"**
3. Click **"Next"** (accept free domain)
4. Select **"Manual configuration"**
5. Select **"Python 3.10"**
6. Click **"Next"**

---

## Step 3: Upload Your Backend Code

### Option A: Via Git (Recommended)

1. Click **"Consoles"** tab
2. Click **"Bash"** to start a console
3. Run these commands:

```bash
cd ~
git clone https://github.com/Mohsinraza23/-Physical-AI-Humanoid-Robotics-Essentials.git
cd -Physical-AI-Humanoid-Robotics-Essentials/backend
pip3 install --user fastapi uvicorn pydantic
```

### Option B: Upload Files Manually

1. Click **"Files"** tab
2. Create folder: `/home/yourusername/backend`
3. Upload `simple_server.py`

---

## Step 4: Configure WSGI

1. Go back to **"Web"** tab
2. Find **"Code"** section
3. Click on **WSGI configuration file** link
4. Replace ALL content with this:

```python
import sys
import os

# Add your project directory to the sys.path
project_home = '/home/yourusername/-Physical-AI-Humanoid-Robotics-Essentials/backend'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

# Import the FastAPI app
from simple_server import app

# For ASGI (required for FastAPI)
application = app
```

5. Replace `yourusername` with your actual PythonAnywhere username
6. Click **"Save"**

---

## Step 5: Enable ASGI

PythonAnywhere free tier doesn't support ASGI (required for FastAPI).

**Alternative Solution: Use Glitch Instead!**

---

# 🎯 BETTER SOLUTION: Use Glitch (Easiest & Free!)

## Glitch is Perfect Because:
- ✅ 100% Free
- ✅ No credit card required
- ✅ Works with FastAPI
- ✅ Instant deployment
- ✅ No configuration needed

---

## Deploy to Glitch RIGHT NOW

### Step 1: Go to Glitch
https://glitch.com/

### Step 2: Sign In
- Click **"Sign in"**
- Choose **"Sign in with GitHub"**

### Step 3: Import from GitHub
1. Click **"New Project"**
2. Click **"Import from GitHub"**
3. Paste your repo URL:
```
https://github.com/Mohsinraza23/-Physical-AI-Humanoid-Robotics-Essentials
```
4. Click **"OK"**

### Step 4: Configure Project
Once imported:
1. Click **"Terminal"** at bottom
2. Run:
```bash
cd backend
pip install fastapi uvicorn pydantic
```

3. Create `glitch.json` in root (I'll do this for you)

### Step 5: Get Your URL
Your app will be at:
```
https://your-project-name.glitch.me
```

---

