# NambiLearn — TNPSC Unit V Visual Classroom

An interactive visual classroom for TNPSC Unit V, covering Indian Economy and Development Administration in Tamil Nadu.

## ✨ Project overview

NambiLearn aims to make exam preparation more visual, organized, and engaging through an interactive learning experience.

## 🧩 Highlights

- A focused learning experience for TNPSC Unit V
- Tamil-friendly typography and learning presentation
- Modern React + TypeScript frontend
- Vite development and production build workflow
- Gemini API integration support (configure credentials locally)

## 🛠️ Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Google Gemini API integration

## 🚀 Getting started

### Prerequisites

Install a current Node.js release and npm, or use Bun if you prefer.

### Install dependencies

```bash
npm install
```

### Configure environment

Review `.env.example` and create a local `.env` file with the values needed for your environment. Never commit API keys or other secrets.

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## 📁 Repository structure

```text
src/
  components/   Reusable UI components
  data/         Learning content and structured data
  types/        Shared TypeScript types
  App.tsx       Main application
  main.tsx      Frontend entry point
  index.css     Global styles
```

## 🔐 Security notes

- Keep API keys and private environment values out of source control.
- Use server-side handling for private AI credentials in production.
- Use `.env.example` as documentation only; put real values in your local environment.

## 🗺️ Roadmap ideas

- Add a clear learning progress and revision flow.
- Document supported modules and content coverage.
- Add screenshots or a short demo GIF to show the experience.
- Add automated lint/build checks before releases.

## 👤 Maintainer

**Arjun SK** · [GitHub profile](https://github.com/arjunsk-maker)

---

*NambiLearn is an independent learning project. Verify the syllabus and exam information against official TNPSC sources before relying on it for exam planning.*
