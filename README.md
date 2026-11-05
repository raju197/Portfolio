# Raju Mandal — Personal Portfolio

A clean, responsive portfolio website built with **HTML, CSS, and JavaScript** — hosted freely on **GitHub Pages**.

## 🌐 Live Site

> **https://your-github-username.github.io**

---

## ✨ Features

- 📱 Fully **mobile-responsive** — works great on phones, tablets, and desktops
- 📊 **Google Analytics 4** integration to track recruiter visits
- 📄 **CV Download** button with analytics event tracking
- 🎨 Professional blue theme with **Google Fonts** (Inter + Lora)
- 🔄 Smooth scroll-reveal animations and section transitions
- 🔢 Animated statistics counter
- 📬 Contact form with mailto fallback
- ⚡ Zero build step — pure HTML/CSS/JS, works offline too

---

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main portfolio page
├── style.css           # All styles (CSS variables, responsive)
├── main.js             # Interactivity (nav, animations, form)
├── assets/
│   └── Raju_Mandal_CV.pdf  ← Place your CV PDF here!
└── README.md
```

---

## 🚀 Deploying to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it **exactly**: `your-github-username.github.io`
   - e.g. if your username is `rajumandal`, the repo must be `rajumandal.github.io`
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Push your portfolio

```bash
cd /home/raj/Raj/Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
3. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io` within ~1 minute. ✅

---

## 📊 Setting Up Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a **GA4 property** for your portfolio
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Open `index.html` and replace **both** occurrences of `G-XXXXXXXXXX` with your real ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_REAL_ID"></script>
   <script>
     gtag('config', 'G-YOUR_REAL_ID');
   ```

That's it — GA4 will now track:
- 👥 Total visitors & unique users
- 🌍 Country & city of visitors
- 📱 Mobile vs desktop
- 📄 CV download events (already tracked!)

---

## 📄 Adding Your CV

1. Export your CV as a PDF
2. Rename it to: `Raju_Mandal_CV.pdf`
3. Place it in the `assets/` folder:
   ```
   Portfolio/assets/Raju_Mandal_CV.pdf
   ```

---

## ✏️ Personalising the Content

All content is in `index.html`. Things to update:

| What | Where in index.html |
|---|---|
| Email address | Search for `your.email@example.com` (3 places) |
| GitHub link | Search for `heroGithubLink`, `footerGithub` |
| LinkedIn link | Search for `heroLinkedinLink`, `footerLinkedIn` |
| Project details | `#project-1` through `#project-4` |
| Experience | `#exp-1` through `#exp-3` |
| Certifications | `#cert-1` through `#cert-5` |
| Stats (years, projects) | `data-target="X"` attributes in About section |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS3 + CSS Variables |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Inter + Lora |
| Analytics | Google Analytics 4 (GA4) |
| Hosting | GitHub Pages (free) |

---

*Built by Raju Mandal.*
