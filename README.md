# Himanshu Kumar — Business Analyst Portfolio

A React + Vite single-page portfolio (Home / Experience / Projects / Certifications) built with `react-router-dom`.

## Tech Stack
- React 19 + Vite
- react-router-dom (client-side routing)
- Plain CSS (no framework)

## Project Structure
```
src/
  components/   # Navbar, Home, Experience, Projects, Certifications
  data/         # profile.js, projects.js, experience.js, certifications.js (edit these to update content)
```

To update your info, only edit the files inside `src/data/`. No component code needs to change for new projects, skills, education, or certifications.

---

## 1. Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## 2. Push to GitHub

```bash
# from inside the portfolio/ folder
git init
git add .
git commit -m "Initial commit: business analyst portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> If `git init` says "already a git repository", just run the `add` / `commit` / `remote` / `push` steps.

## 3. Deploy on Vercel

**Option A — Vercel Dashboard (recommended)**
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Framework Preset: Vite (auto-detected)
4. Build Command: `npm run build` (default)
5. Output Directory: `dist` (default)
6. Click **Deploy**

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel        # first deploy (preview)
vercel --prod # production deploy
```

The included `vercel.json` rewrites all routes to `index.html`, so refreshing on `/projects`, `/experience`, etc. won't 404.

## 4. After deploying
- Add your resume PDF at `public/resume.pdf` (linked from the About section's "Download Resume" button).
- Fill in any empty `liveUrl` / `githubUrl` / `deckUrl` fields in `src/data/projects.js`.
- Update `src/data/certifications.js` credential URLs as you get them verified.
