# Tauri + Rust + React + TypeScript + shadcn/ui = ❤

<div align="center">
  <div>
    <a href="#indonesia">
      <img src="https://img.shields.io/badge/Bahasa_Indonesia-flag.svg?style=for-the-badge&color=FF0000&labelColor=FFFFFF" alt="Bahasa Indonesia" height="20">
    </a>
    <a href="#english">
      <img src="https://img.shields.io/badge/English-flag.svg?style=for-the-badge&color=00247D&labelColor=FFFFFF" alt="English" height="20">
    </a>
  </div>
  
  <br>
  
  [![License](https://img.shields.io/github/license/MRifqiAmirP/starter-template-tauri)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/MRifqiAmirP/starter-template-tauri?style=social)](https://github.com/MRifqiAmirP/starter-template-tauri/stargazers)
  [![Issues](https://img.shields.io/github/issues/MRifqiAmirP/starter-template-tauri)](https://github.com/MRifqiAmirP/starter-template-tauri/issues)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
  
  <br>
  
  <div>
    <a href="https://saweria.co/yourusername" target="_blank">
      <img src="https://img.shields.io/badge/Support-Saweria-FF6B35?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Support on Saweria" height="40">
    </a>
    <a href="https://buymeacoffee.com/yourusername" target="_blank">
      <img src="https://img.shields.io/badge/Support-Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Buy Me A Coffee" height="40">
    </a>
  </div>
</div>

---

<div id="indonesia">

## Bahasa Indonesia

Sebuah template starter untuk membangun **aplikasi desktop modern dan ringan** menggunakan **Tauri**, **React**, **TypeScript**, dan **shadcn/ui**, didukung oleh **Vite**.

Dirancang untuk menjadi:
- ⚡ Cepat untuk memulai
- 🧼 Struktur yang bersih
- 🧩 Mudah diperluas
- 🤝 Ramah untuk kolaborasi open-source

---

### ✨ Fitur

- 🦀 **Tauri** untuk aplikasi desktop native, aman, dan ringan
- ⚛️ **React + TypeScript** untuk pengembangan UI yang scalable
- 🎨 **shadcn/ui + Tailwind CSS** untuk komponen modern dan aksesibel
- ⚡ **Vite** untuk feedback development instan
- 🌙 **Mode gelap siap pakai** (ramah tema sistem)
- 🧠 Absolute imports dengan `@/`
- 📦 **Ukuran bundle kecil** berkat Tauri

---

### 📦 Tech Stack

- **Tauri** - Framework desktop yang aman dan ringan
- **React 18** - Library UI modern
- **TypeScript** - Type safety
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Komponen UI yang dapat dikustomisasi
- **Radix UI** - Komponen primitif tanpa styling

---

### 📁 Struktur Proyek

```
.
├── src/
│   ├── components/
│   │   ├── ui/              # Komponen shadcn (auto-generated)
│   │   └── layout/          # Komponen layout khusus aplikasi
│   ├── lib/
│   │   ├── utils.ts         # Utility helpers (cn, dll.)
│   │   └── theme.ts         # Sinkronisasi mode gelap
│   ├── pages/               # Halaman aplikasi
│   ├── App.tsx              # Komponen utama aplikasi
│   └── main.tsx             # Entry point React
│
├── src-tauri/               # Backend Tauri (Rust)
├── components.json          # Konfigurasi shadcn
├── tailwind.config.ts       # Konfigurasi Tailwind
├── tsconfig.json            # Konfigurasi TypeScript
├── tsconfig.node.json       # Konfigurasi TypeScript untuk Node
├── vite.config.ts           # Konfigurasi Vite
└── package.json             # Dependensi dan skrip
```

### 🛠️ Prasyarat
Pastikan sudah menginstal:

- Microsoft C++ Build Tools ([tauri.dev](https://v2.tauri.app/start/prerequisites/#microsoft-c-build-tools))
- Node.js ≥ 18 ([nodejs.org](https://nodejs.org/en/download))
- Rust ([rust-lang.org](https://www.rust-lang.org/tools/install))

### ▶️ Memulai

Instal dependensi:
```bash
npm install
```

Jalankan aplikasi dalam mode development:
```bash
npm run tauri dev
```

### 🧩 Menggunakan shadcn/ui

Tambahkan komponen baru:
```bash
npx shadcn@latest add button dialog input
```

### 🌙 Mode Gelap
- Menggunakan kelas dark Tailwind
- Sinkron otomatis dengan tema OS
- Mudah diperluas dengan toggle manual jika diperlukan

### 🧠 Rekomendasi Setup IDE
- VS Code
- Tauri Extension
- rust-analyzer

Tambahan yang disarankan:
- ESLint
- Tailwind CSS IntelliSense
- Prettier

### 🤝 Berkontribusi
Kontribusi sangat diterima dan dihargai 💙

Jika ingin membantu:

- Fork repository ini
- Buat branch baru
- Buat perubahan Anda
- Buka Pull Request

### ☕ Dukungan
Jika template ini bermanfaat untuk Anda:

- Berikan ⭐ pada repository
- Bagikan ke teman-teman

Atau kontribusikan perbaikan

**Dukung pengembangan:**
- [Saweria](https://saweria.co/yourusername)
- [Buy Me A Coffee](https://buymeacoffee.com/yourusername)

Selamat membangun 🚀
Bangun sekali, kirim ke semua platform.

</div>

---

<div id="english">

## English

A starter template for building **modern, lightweight desktop applications** using **Tauri**, **React**, **TypeScript**, and **shadcn/ui**, powered by **Vite**.

Designed to be:
- ⚡ Fast to start
- 🧼 Cleanly structured
- 🧩 Easy to extend
- 🤝 Friendly for open-source collaboration

---

### ✨ Features

- 🦀 **Tauri** for native, secure, lightweight desktop apps
- ⚛️ **React + TypeScript** for scalable UI development
- 🎨 **shadcn/ui + Tailwind CSS** for modern, accessible components
- ⚡ **Vite** for instant dev feedback
- 🌙 **Dark mode ready** (system theme friendly)
- 🧠 Absolute imports with `@/`
- 📦 **Small bundle size** thanks to Tauri

---

### 📦 Tech Stack

- **Tauri** - Secure, lightweight desktop framework
- **React 18** - Modern UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Customizable UI components
- **Radix UI** - Unstyled UI primitives

---

### 📁 Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components (auto-generated)
│   │   └── layout/          # app-specific layout components
│   ├── lib/
│   │   ├── utils.ts         # utility helpers (cn, etc.)
│   │   └── theme.ts         # dark mode sync
│   ├── pages/               # application pages
│   ├── App.tsx              # main app component
│   └── main.tsx             # React entry point
│
├── src-tauri/               # Tauri (Rust) backend
├── components.json          # shadcn configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript configuration for Node
├── vite.config.ts           # Vite configuration
└── package.json             # dependencies and scripts
```

### 🛠️ Prerequisites
Make sure you have installed:

- Microsoft C++ Build Tools ([tauri.dev](https://v2.tauri.app/start/prerequisites/#microsoft-c-build-tools))
- Node.js ≥ 18 ([nodejs.org](https://nodejs.org/en/download))
- Rust ([rust-lang.org](https://www.rust-lang.org/tools/install))

### ▶️ Getting Started

Install dependencies:
```bash
npm install
```

Run the app in development mode:
```bash
npm run tauri dev
```

### 🧩 Using shadcn/ui

Add new components:
```bash
npx shadcn@latest add button dialog input
```

### 🌙 Dark Mode
- Uses Tailwind dark class
- Syncs automatically with OS theme
- Easy to extend with a manual toggle if needed

### 🧠 Recommended IDE Setup
- VS Code
- Tauri Extension
- rust-analyzer

Nice-to-have:
- ESLint
- Tailwind CSS IntelliSense
- Prettier

### 🤝 Contributing
Contributions are welcome and appreciated 💙

If you want to help:

- Fork this repository
- Create a new branch
- Make your changes
- Open a Pull Request

### ☕ Support
If you find this template useful:

- Give it a ⭐
- Share it with others

Or contribute improvements

**Support development:**
- [Saweria](https://saweria.co/yourusername)
- [Buy Me A Coffee](https://buymeacoffee.com/yourusername)

Happy building 🚀
Build once, ship everywhere.

</div>

---

<div align="center">
  <sub>Built with ❤️ by the Mahesvara AKA MRifqiAmirP</sub>
</div>