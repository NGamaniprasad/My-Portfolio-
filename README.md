# Developer Portfolio Website — Recruiter-Focused Full Stack Engineer

A modern, fast, responsive, and recruiter-optimized portfolio website built for a **2024 B.Tech Computer Science and Engineering Graduate & Software Engineer Fresher** specializing in **Java (Spring Boot)** and **Python (Django)** Full-Stack Development.

---

## 🚀 Key Features

- **Recruiter-First Conversion**: Instant visibility into core stack (Java, Spring Boot, Python, Django, React, SQL), 2024 graduation, target roles, and immediate CTA buttons for **Resume Download** and **GitHub Profile**.
- **Dark & Light Mode**: Built-in theme switcher with smooth CSS transitions and `localStorage` persistence.
- **Deep-Dive Project Architecture Modals**: Interactive modals breaking down system architecture, API endpoints, relational database design, and key engineering solutions for:
  - **FINTRACK** (Java 21, Spring Boot 3, PostgreSQL, JPA, JWT, React)
  - **IPL / Cricket Tournament Platform** (Python, Django, DRF, React, PostgreSQL)
  - **Employee Management System (EMS)** (Django, DRF, React, PostgreSQL/MySQL)
- **Categorized Skills Matrix**: Clean badges & cards for Languages, Backend, Frontend, Databases, and Tools (no fake percentages).
- **Practical Software Engineering Experience**: Transparently positions full-stack project development as real engineering experience without fabricating fake corporate employment.
- **Accessible & Responsive Design**: Seamlessly adapted for Desktop (1440px), Laptop (1024px), Tablet (768px), and Mobile (375px/425px) with a mobile drawer navigation.
- **Single Source of Truth**: All personal information, social URLs, and project links are cleanly organized in `src/data/portfolioData.js`.

---

## 📁 Project Structure

```
f:/ASS/DS/
├── public/
│   ├── favicon.svg             # Modern developer SVG favicon
│   ├── resume.pdf              # Placeholder resume PDF
│   ├── robots.txt              # SEO crawler instructions
│   └── sitemap.xml             # Sitemap for search engines
├── src/
│   ├── assets/                 # Static assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx       # Reusable status & tech badge
│   │   │   ├── Button.jsx      # Reusable button & link component
│   │   │   ├── Card.jsx        # Glassmorphic card container
│   │   │   ├── Modal.jsx       # Accessible modal dialog
│   │   │   ├── SectionHeading.jsx
│   │   │   └── Toast.jsx       # Notification feedback toast
│   │   ├── layout/
│   │   │   ├── Footer.jsx      # Clean footer with quick links & social icons
│   │   │   ├── Navbar.jsx      # Sticky navbar with mobile drawer
│   │   │   └── ThemeToggle.jsx # Dark / Light mode toggle button
│   │   └── projects/
│   │       ├── ProjectCard.jsx # Project showcase card
│   │       └── ProjectModal.jsx # Deep-dive architecture modal
│   ├── data/
│   │   └── portfolioData.js    # Centralized personal & project data config
│   ├── hooks/
│   │   ├── useScrollSpy.js     # Active section tracking on scroll
│   │   └── useTheme.js         # Dark/Light mode hook with localStorage
│   ├── sections/
│   │   ├── AboutSection.jsx    # Professional summary & engineering pillars
│   │   ├── ContactSection.jsx  # Contact cards, form, & final opportunity CTA
│   │   ├── EducationSection.jsx# 2024 B.Tech CSE details & coursework
│   │   ├── ExperienceSection.jsx# Practical software engineering experience
│   │   ├── GitHubSection.jsx   # Featured repositories & profile links
│   │   ├── HeroSection.jsx     # High-conversion hero & interactive code terminal
│   │   └── SkillsSection.jsx   # Categorized skills matrix
│   ├── styles/
│   │   ├── global.css          # CSS variables, typography, reset, utility classes
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── experience.css
│   │   ├── education.css
│   │   ├── github.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── modal.css
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # React DOM entry point
│   └── index.html              # HTML shell with meta tags & Google fonts
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customization & Replacing Placeholders

All your personal details, GitHub links, and project repositories are located in **`src/data/portfolioData.js`**.

| Field | Placeholder in `src/data/portfolioData.js` | What to Replace With |
| :--- | :--- | :--- |
| **Name** | `name: "[YOUR NAME]"` | Your full name |
| **Profile Photo** | `profileImage: "/profile.jpg"` | Save your image as `public/profile.jpg` (or paste any image URL) |
| **Email** | `email: "your.email@example.com"` | Your email address |
| **GitHub Profile** | `github: "https://github.com/your-username"` | Your actual GitHub URL |
| **LinkedIn Profile** | `linkedin: "https://linkedin.com/in/your-profile"` | Your actual LinkedIn URL |
| **College / University** | `institution: "[YOUR COLLEGE / UNIVERSITY NAME]"` | Your actual university / college name |
| **FINTRACK Repo** | `githubUrl: "https://github.com/.../fintrack-finance-manager"` | Your actual FINTRACK repository link |
| **Cricket Project Repo** | `githubUrl: "https://github.com/.../cricket-tournament-management"` | Your actual Cricket project repo link |
| **EMS Project Repo** | `githubUrl: "https://github.com/.../employee-management-system"` | Your actual EMS project repo link |
| **Resume PDF** | `public/resume.pdf` | Replace `public/resume.pdf` with your real resume PDF file |

---

## 🌐 Deploying Your Portfolio

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel will automatically detect **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com).
2. Set Build command: `npm run build`.
3. Set Publish directory: `dist`.
4. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Run `npm run build` and push the `dist/` directory or use the GitHub Pages Action.
