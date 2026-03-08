# Bl-Digital-Web 🌐

A modern, responsive **Business & Agency website** built with **React + Vite**, deployed on Render.

🔗 **Live Site:** [https://bl-digital-web.onrender.com](https://bl-digital-web.onrender.com)

---

## 📸 Overview

Bl-Digital-Web is a professional agency website designed to showcase the business's services and platform, highlight what makes them unique, and provide visitors with an easy way to get in touch. The site is fully responsive and optimized for all screen sizes.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **React Icons** | Icon library |
| **CSS** | Styling |

---

## 📄 Sections

| Section | Description |
|---|---|
| **Header** | Navigation bar with logo and links |
| **Hero** | Eye-catching landing section with call to action |
| **About** | Company background and mission |
| **Services** | Services offered by the agency |
| **Platform** | Platform features and highlights |
| **Contact** | Get in touch form and contact details |
| **Footer** | Links, socials, and copyright info |

---

## 📁 Project Structure

```
bl-project/
├── public/
│   ├── _redirects          # SPA routing fix for Render
│   ├── hero-bg.jfif        # Hero background image
│   └── vite.svg
├── src/
│   ├── assets/             # Static assets (logo, icons)
│   ├── components/
│   │   ├── Header/         # Navigation bar
│   │   ├── Hero/           # Landing hero section
│   │   ├── About/          # About section
│   │   ├── Services/       # Services offered
│   │   ├── Platform/       # Platform features
│   │   ├── Process/        # How it works / process steps
│   │   ├── Contact/        # Contact details
│   │   └── Footer/         # Footer 
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js v20.19+ or v22.12+
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Disha-arch/Bl-Digital-Web.git

# 2. Navigate into the project
cd Bl-Digital-Web

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will run at `http://localhost:5173`

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🌍 Deployment

This project is deployed as a **Static Site on Render**.

### Render Configuration

| Setting | Value |
|---|---|
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |

### Auto-Deploy

Every push to the `main` branch triggers an automatic redeployment on Render.

```bash
git add .
git commit -m "your message"
git push origin main
# Render auto-deploys ✅
```

---

## 🔗 Links

- **Live Website:** [https://bl-digital-web.onrender.com](https://bl-digital-web.onrender.com)
- **GitHub Repo:** [https://github.com/Disha-arch/Bl-Digital-Web](https://github.com/Disha-arch/Bl-Digital-Web)

---

## 👩‍💻 Author

**Disha** — [@Disha-arch](https://github.com/Disha-arch)
