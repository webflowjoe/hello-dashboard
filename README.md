# Hello Dashboard — Webflow Cloud Deploy Test

Minimal Next.js 15 app to verify Webflow Cloud deployment works.

## Local test (optional but recommended)

```bash
cd hello-dashboard
npm install
npm run dev
# visit http://localhost:3000 — should show "Hello from the dashboard."
```

## Deploy to Webflow Cloud

1. **Create a new private GitHub repo** named `hello-dashboard` (or whatever you want)
2. **Push this folder to it:**
   ```bash
   cd ~/dashboard/hello-dashboard
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hello-dashboard.git
   git push -u origin main
   ```
3. **In Webflow:**
   - Open your Webflow site dashboard
   - Go to **Site Settings → Webflow Cloud**
   - Click **Create new app**
   - Connect your GitHub account if prompted
   - Select the `hello-dashboard` repo
   - Choose a mount path (e.g. `/dashboard-test`)
   - Click **Deploy**

4. **Wait ~2-3 minutes** for the first deploy. Then visit `yoursite.com/dashboard-test`.

If you see "Hello from the dashboard." → we're good to proceed.
If something errors → check the build log in Webflow Cloud dashboard and paste it back to Claude.
