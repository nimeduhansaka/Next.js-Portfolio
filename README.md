# Next.js Portfolio

A modern, responsive developer portfolio built with **Next.js**, designed to showcase projects, skills, experience, and contact information in a clean and performant interface. This repository can serve as both your personal website and a template for others who want to quickly spin up a professional portfolio.

## ✨ Features

- **Next.js + React** front-end
- **Responsive design** for desktop, tablet, and mobile
- **SEO-friendly** with meta tags and social sharing previews
- **Reusable components** for sections like:
  - Hero / Introduction
  - About
  - Skills / Tech Stack
  - Projects / Case Studies
  - Experience / Timeline
  - Contact / Call-to-Action
- **Optimized images** using Next.js `Image` component 
- **Fast performance** with static generation / server-side rendering 
- Easily customizable **theme, colors, and content**

---

## 🏗️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** JavaScript 
- **UI / Styling:** Tailwind CSS, CSS Modules, Styled Components
- **Deployment:** Cloudflare

---

## 📁 Project Structure

A typical Next.js portfolio might look like this (adjust to match your repo):

```bash
.
├── public/             # Static assets (images, icons, etc.)
├── src/ or pages/      # Application pages and routes
│   ├── index.tsx       # Home / main portfolio page
│   ├── about.tsx       # About page (if separate)
│   ├── projects.tsx    # Projects listing (if separate)
│   └── api/            # API routes (if any)
├── components/         # Reusable React components
├── styles/             # Global and component styles
├── package.json
├── next.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/nimeduhansaka/Next.js-Portfolio.git
cd Next.js-Portfolio
```

### 2. Install dependencies

Using **npm**:

```bash
npm install
```

Or with **yarn**:

```bash
yarn
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

---


---

## 🧩 Customization

You can customize this portfolio by editing:

- **Profile information** – name, title, summary, social links
- **Sections** – enable/disable or reorder components like About, Projects, Skills, etc.
- **Content data** – project details, skills list, experience timeline
- **Theme** – colors, fonts, light/dark mode (if implemented)


Common places to change content include:

- A config file like `config/site.ts` or `data/*.ts`
- Section components in `components/`
- Page files in `pages/` or `app/`


---

## 📦 Scripts

Document the most important `package.json` scripts :

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

- `npm run dev` – Start development server
- `npm run build` – Build the production application
- `npm run start` – Run the production build
- `npm run lint` – Run lint checks

---

## 📸 Screenshots

Add one or more screenshots or GIFs of your portfolio:

```markdown
![Homepage screenshot](./public/screenshots/home.png)
```

---

## 🌐 Deployment

You can deploy this Next.js portfolio easily using platforms like:

- [Vercel](https://vercel.com/) – first-class Next.js support
- [Netlify](https://www.netlify.com/)
- [Cloudflare](https://www.cloudflare.com/)


Typical Vercel deployment steps:

1. Push your code to GitHub.
2. Go to Vercel, import the repository.
3. Configure the project (build command usually `next build`, output `.next`).
4. Set any required environment variables.
5. Deploy and connect your custom domain if desired.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create your feature branch:  
   `git checkout -b feature/awesome-feature`
3. Commit your changes:  
   `git commit -m "Add awesome feature"`
4. Push to the branch:  
   `git push origin feature/awesome-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Nimedu Hansaka**

- GitHub: [nimeduhansaka](https://github.com/nimeduhansaka)
- LinkedIn: [Nimedu]([https://github.com/nimeduhansaka](https://www.linkedin.com/in/nimedu-hansaka-9721b4383))

If you use this template or find it helpful, consider giving the repository a ⭐ on GitHub!
