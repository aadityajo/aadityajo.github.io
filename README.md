# Aaditya Joshi - Personal Portfolio

This is the personal portfolio website of **Aaditya Joshi**, a Lead Software Engineer and MS CS student at Georgia Tech.

Built with:
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aadityajo/aadityajo.github.io.git
    cd aadityajo.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Project Structure

- `src/app`: Main application pages and layout.
- `src/components`: Reusable UI components (Navbar, Hero, Projects, etc.).
- `src/data`: Structured data for easy updates (resume content).
- `public`: Static assets (images, PDFs).

## 📦 Deployment

This project is configured to automatically deploy to **GitHub Pages** using GitHub Actions.

Any push to the `main` branch triggers the `.github/workflows/deploy.yml` workflow, which builds the project using `npm run build` (static export) and deploys it.