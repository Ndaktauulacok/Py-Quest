# Hidupkan akaun (Sign Up / Log In) — PyQuest Update 4

Akaun guna **Firebase** yang sama dengan Statistik langsung (projek `pyquest-38d86` dalam `firebase-config-update-3.js`). Masa: ~3 minit.

## Langkah (sekali sahaja)
1. Firebase Console → projek anda → **Build → Authentication → Get started**.
2. Tab **Sign-in method** → pilih **Email/Password** → hidupkan **Enable** (jangan hidupkan "Email link") → **Save**.
   - Pengguna tidak perlu emel. Nama pengguna ditukar kepada `nama@pyquest.app` di belakang tabir; tiada emel dihantar.
3. **Build → Realtime Database → Rules** → padam semua, tampal isi `database.rules.json` yang baharu → **Publish**.
4. Muat naik semua fail ke GitHub (lihat senarai di bawah) dan tunggu deploy.

## Cara ia berfungsi
- **Get Started** → pilihan **Sign Up / Log In / Guest**. Butang atas "Login / Sign Up" (ganti "Change Name") membuka skrin pilihan yang sama. Selepas log masuk, butang itu jadi **Log Out**.
- **Sign Up**: nama pengguna (3–20 huruf/nombor/_) + kata laluan **sekurang-kurangnya 12 aksara**. XP, level, streak dan pencapaian disimpan dalam akaun dan dipulihkan bila log masuk di mana-mana peranti.
- **Log In**: sama, untuk akaun sedia ada.
- **Guest**: boleh cuba semua; kemajuan hanya dalam memori. Bila tutup/refresh, atau tekan "Login / Sign Up", semuanya hilang.
- **Admin → tab "Pengguna berdaftar"**: senarai semua akaun (nama, tarikh daftar, XP, aktif terakhir), kemas kini secara langsung.

## Perkara yang perlu anda tahu
- Kata laluan **tidak** disimpan oleh PyQuest; Firebase menyimpannya (hash). Admin tidak boleh melihat kata laluan, dan tiada fungsi "lupa kata laluan" (kerana tiada emel). Pengguna yang lupa perlu daftar akaun baharu, atau anda padam akaun mereka di Firebase → Authentication.
- Syarat 12 aksara disemak dalam pelayar. Firebase sendiri hanya memaksa minimum 6, jadi orang yang memanggil API terus boleh cipta akaun dengan kata laluan lebih pendek. Untuk laman kelas ini memadai.
- Senarai pendaftar (`signups`: nama pengguna, tarikh, XP) boleh dibaca oleh sesiapa yang tahu URL pangkalan data, kerana log masuk Admin anda berjalan dalam pelayar, bukan Firebase. Tiada kata laluan di situ. Jika mahu lebih ketat, beritahu saya dan saya tukar Admin kepada akaun Firebase sebenar.
- XP disimpan ke Firebase kira-kira 1.5 saat selepas setiap perubahan. Progres lama yang disimpan dalam pelayar (sebelum akaun wujud) tidak dipindahkan ke akaun.

## Fail baharu / berubah (akhiran `-update-4`)
`index.html`, `database.rules.json`, `SETUP-AKAUN-update-4.md`,
`assets/js/app-update-4.js`, `auth-update-4.js`, `engine-update-4.js`, `analytics-update-4.js`,
`assets/css/auth-update-4.css`.
Boleh dipadam selepas muat naik: `app-update-3.js`, `engine-update-2.js`, `analytics-update-3.js`.
