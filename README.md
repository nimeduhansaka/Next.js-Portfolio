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
- **Images** using Next.js `Image`, served directly as static assets
- **Fast performance** with static export and client-side interactions
- Easily customizable **theme, colors, and content**

---

## 🏗️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** JavaScript 
- **UI / Styling:** Tailwind CSS, CSS Modules, Styled Components
- **Deployment:** Cloudflare

---

## 📁 Project Structure

```bash
.
├── public/             # Static assets (images, icons, etc.)
├── src/ or pages/      # Application pages and routes
│   ├── index.tsx       # Home / main portfolio page
│   ├── about.tsx       # About page 
│   ├── projects.tsx    # Projects listing 
│   └── api/            # API routes 
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
- **Theme** – colors, fonts, light/dark mode


Common places to change content include:

- A config file like `config/site.ts` or `data/*.ts`
- Section components in `components/`
- Page files in `pages/` or `app/`


---

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Export the production site to `out/`
- `npm start` – Preview the exported `out/` directory locally after building
- `npm run deploy` – Publish `out/` to GitHub Pages (legacy optional command, not used by Cloudflare)

---

## 📸 Screenshots


![Homepage screenshot](./public/home.png)


---

## 🌐 Deployment

### Cloudflare Pages (static export)

This portfolio exports HTML, CSS, JavaScript, and images to `out/`. Its animations,
mouse interactions, and navigation run in the browser. It does not need a Worker
or the deprecated `@cloudflare/next-on-pages` adapter.

In the Cloudflare dashboard, open **Workers & Pages → your Pages project →
Settings → Build configuration** and use:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Repository root (leave blank) |

Replace the old `npx @cloudflare/next-on-pages@1` build command for both production
and preview builds if they have separate overrides. The tracked `wrangler.toml`
declares the project name (`next-js-portfolio`), output directory, and runtime
compatibility date required by Pages; the build command must still be changed in the
dashboard. Git-integrated Pages deploys the build output automatically, so no
separate `wrangler deploy` or `npm run deploy` command is needed.

Push these changes to the connected production branch, then create a new
deployment of the latest commit. Retrying an older deployment can rebuild its
old revision. If the log still runs `next-on-pages`, check the saved build command,
branch, and root directory before retrying.

To verify the exported site locally:

```bash
npm ci
npm run build
npm start
```

Images use `unoptimized: true` because static Pages hosting does not provide the
Next.js image-optimization endpoint. Local images are included in the export;
external images are loaded directly from their original URLs. Server-only features
such as API routes, Server Actions, and runtime image optimization would require
a different deployment setup if added later.

See the [Cloudflare static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
and [Next.js static export documentation](https://nextjs.org/docs/14/app/building-your-application/deploying/static-exports).

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
- LinkedIn: [Nimedu](https://www.linkedin.com/in/nimedu-hansaka-9721b4383)

If you use this template or find it helpful, consider giving the repository a ⭐ on GitHub!
