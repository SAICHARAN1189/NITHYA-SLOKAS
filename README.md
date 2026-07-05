# 🕉️ నిత్య శ్లోకాలు (Nithya Slokas) — Daily Devotional Prayers

A modern, fast, and responsive Progressive Web App (PWA) designed for reading and listening to daily devotional prayers (slokas and stotrams) in Telugu. It features an interactive media reader, search, favorites management, custom themes, and full offline accessibility.

## 🚀 Features

- **📚 Curated Sloka Library:** 35 popular slokas/stotrams organized into categories (Shiva, Vishnu, Hanuman, Sai Baba, Subramanya, Saraswati, Surya/Navagraha, and Durga/Devi).
- **🎵 Integrated Audio Player:** Listen to high-quality audio recordings for each sloka directly within the app.
- **📖 Multi-page Interactive Reader:** Full-screen sloka viewer displaying high-quality scans of book pages. Supports page navigation for longer slokas (e.g., Hanuman Chalisa, Sri Sai Baba Chalisa) and zoom controls.
- **🔍 Instant Search:** Find slokas instantly by typing in Telugu or English.
- **❤️ Favorites Management:** Bookmark your favorite slokas for quick access in a dedicated favorites panel.
- **🌓 Dark Mode:** Responsive light and dark themes optimized for reading at any time of day.
- **📶 PWA & Offline Support:** Powered by a Service Worker (`sw.js`) to cache application assets, allowing you to access slokas and play audio even when offline. Installable on both mobile and desktop.

## 🛠️ Technology Stack

- **Frontend:** Semantic HTML5, Vanilla CSS3 (Custom Variables, Flexbox, Grid), and Vanilla JavaScript (ES6+).
- **State Management:** LocalStorage for persisting user preferences (theme state, favorites).
- **Service Worker:** Custom caching strategy in `sw.js` for offline functionality.
- **Data:** Structured JSON-like format in [slokas.js](slokas.js) containing metadata, categories, icons, and asset mappings.
- **Scripts:** Auxiliary Python utilities (`generate_audio.py`, `fix_audio.py`, `rename_audio.py`) for managing audio assets.

## 📂 Project Structure

```
├── audio/                   # MP3 audio files for all slokas
├── slokas/
│   ├── pages/               # Scanned images of the sloka pages (page_01.jpg, etc.)
│   └── slokas.pdf           # Combined PDF version of the slokas
├── index.html               # Main application layout and PWA shell
├── style.css                # Themes, variables, and responsive layout
├── app.js                   # Application state, UI actions, search, and audio logic
├── slokas.js                # Database/metadata of all slokas
├── sw.js                    # Service worker for offline caching
├── manifest.json            # PWA manifest metadata
├── icon-192.png             # PWA app icon (192x192)
├── icon-512.png             # PWA app icon (512x512)
├── generate_audio.py        # Script for downloading or generating TTS audio
├── rename_audio.py          # Script for batch renaming audio assets
└── fix_audio.py             # Script for fixing audio metadata/quality
```

## 💻 How to Run Locally

Since this is a Progressive Web App, it requires a local web server to function correctly (especially for registering the Service Worker).

### Method 1: Using Python (Simple)
If you have Python installed, run this command in your terminal inside the project directory:
```bash
python -m http.server 8000
```
Then open your browser and navigate to `http://localhost:8000`.

### Method 2: Using Node.js (`serve` or `live-server`)
If you have Node.js installed, you can use:
```bash
npx serve .
```
Or run the workspace directly via the VS Code "Live Server" extension.

---
🕉️ *లోకాః సమస్తాః సుఖినో భవన్తు* 🕉️
