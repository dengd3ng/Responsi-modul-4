# Responsi Modul 4 - Clean React + Vite 

Ini adalah versi proyek yang dibuat ulang dari awal menggunakan React + Vite dan dilengkapi PWA support.

Langkah singkat untuk menjalankan:

1. Install dependensi:

```powershell
cd "c:\Users\UsEr\OneDrive\Desktop\denzi sem4\Responsi4"
npm install
```

2. Jalankan development server:

```powershell
npm run dev
# buka http://localhost:5173
```

3. Build produksi dan preview:

```powershell
npm run build
npm run preview
# buka http://localhost:5000
```

Deploy ke Vercel:

1. Push repo ke GitHub/GitLab.
2. Import project di Vercel. Vercel akan menjalankan `npm run build` secara otomatis (sesuai `vercel.json`).

Catatan:

- Aplikasi memiliki minimal 3 halaman (Beranda, About, Profil) dengan data profil statis.
- PWA di-handle oleh `vite-plugin-pwa` dan service worker akan di-generate saat build.
