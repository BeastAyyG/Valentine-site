# 💖 Valentine's Day Proposal Website

A beautiful, interactive, and playful website designed to ask that special someone: *"Will you be my Valentine?"*

This project combines modern web design aesthetics with fun interactive elements to create a memorable digital proposal.

![Valentine Site Preview](https://via.placeholder.com/800x400?text=Valentine+Site+Preview)
*(Note: Replace with actual screenshot after deployment)*

## ✨ Features

### 🎨 Visual Design
-   **Glassmorphism UI**: The main card features a trendy frosted-glass effect (`backdrop-filter: blur`), giving it a premium, modern look.
-   **Soft Aesthetics**: A carefully curated color palette featuring soft pinks (`#ffe6e6`), vibrant hot pinks (`#ff4d6d`), and deep romantic reds.
-   **Typography**: Uses 'Pacifico' for a handwritten, personal feel in headers, paired with 'Quicksand' for clean, readable body text.

### 🎬 Animations
-   **Floating Hearts**: A background animation system that spawns hearts of various sizes and colors, floating upwards infinitely to set a romantic mood.
-   **Pulse Effects**: The main title gently pulses to draw attention.
-   **Smooth Transitions**: All buttons and interactive elements feature smooth CSS transitions for hover states.

### 🎮 Interactivity
-   **The "Impossible No"**: The "No" button is programmed to be elusive! 
    -   **Desktop**: It runs away from the cursor whenever the user tries to hover over it.
    -   **Mobile**: It changes position on touch/tap.
    -   **Dynamic Text**: The button text changes to playful pleas like "Really?", "Are you sure?", and "Think again!" as the user persists.
-   **Celebratory "Yes"**: 
    -   Triggers a **Canvas Confetti** explosion.
    -   Intensifies the falling hearts animation.
    -   Displays a loving success message.

## 🛠️ Tech Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: 
    -   CSS Variables for consistent theming.
    -   Flexbox & Grid for layout.
    -   Keyframe animations for movement.
    -   Media queries for mobile responsiveness.
-   **JavaScript (Vanilla)**: 
    -   DOM manipulation for button logic.
    -   `requestAnimationFrame` for high-performance canvas rendering (confetti).
    -   Event listeners for mouse and touch interactions.

## 🚀 How to Run Locally

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/BeastAyyG/Valentine-site.git
    ```
2.  **Navigate to the folder**:
    ```bash
    cd Valentine-site
    ```
3.  **Open `index.html`**:
    -   Simply double-click the file to open it in your default browser.
    -   OR run a local server (recommended):
        ```bash
        python3 -m http.server 8080
        ```
        Then visit `http://localhost:8080`.

## 🌐 Deployment

This site is optimized for deployment on **Vercel** or **GitHub Pages**.

### Vercel (Recommended)
1.  Push your code to GitHub.
2.  Import the repository on Vercel.
3.  The included `vercel.json` handles the static file configuration automatically.
4.  Click **Deploy**!

## 📝 Customization

-   **Change Text**: Edit `index.html` to change the question or success message.
-   **Change Colors**: Modify the `:root` variables in `style.css` to swap the pink theme for any other color (e.g., Purple, Blue).
-   **Adjust Speed**: Change animation durations in `script.js` to make hearts float faster or slower.

---
Made with ❤️ by [Your Name]
