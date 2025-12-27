# ShellStackDev - Full-Stack Solutions

A modern, high-performance landing page for **ShellStackDev**, a full-stack software development agency. This project features a custom Tailwind CSS v4 design, a serverless Firestore backend for lead generation, and Firebase Hosting.

## 🚀 Tech Stack

* **Frontend:** HTML5, Tailwind CSS v4 (Standalone CLI)
* **Backend/Database:** Firebase Firestore (NoSQL)
* **Hosting:** Firebase Hosting
* **Design:** Dark mode optimized, Space Grotesk & Noto Sans typography

## 🛠 Development Setup

### Prerequisites
* The Tailwind CSS standalone binary (`tailwind`) located in the root directory.
* Firebase CLI installed (`npm install -g firebase-tools`).

### Local Development
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/shellstackdev.git](https://github.com/YOUR_USERNAME/shellstackdev.git)
    cd shellstackdev
    ```

2.  **Start the Tailwind Watcher:**
    This command watches `input.css` and updates `output.css` in real-time.
    ```bash
    ./tailwind -i ./public/input.css -o ./public/output.css --watch
    ```

3.  **Run with Live Server:**
    Open `public/index.html` in your browser (or use WebStorm's built-in preview).

## 📦 Deployment

Before deploying, always run a minified build to optimize the CSS:

```bash
# Minify CSS
./tailwind -i ./public/input.css -o ./public/output.css --minify

# Deploy to Firebase
firebase deploy