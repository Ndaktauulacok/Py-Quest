# Hidupkan statistik lawatan langsung (Admin → Statistik langsung)

Laman GitHub Pages tidak mempunyai pelayan, jadi kiraan pelawat disimpan di **Firebase Realtime Database** (percuma, pelan Spark). Masa: kira-kira 5 minit. Selagi langkah ini belum dibuat, laman berfungsi seperti biasa dan tab Statistik langsung hanya menunjukkan panduan.

## Langkah
1. Buka https://console.firebase.google.com, log masuk dengan akaun Google, tekan **Add project** dan beri nama (contoh: `pyquest`). Google Analytics boleh dimatikan.
2. Dalam projek: **Build → Realtime Database → Create database**. Pilih lokasi **Singapore (asia-southeast1)** jika ada, kemudian pilih **Start in locked mode**.
3. Buka tab **Rules**, padam semua isi, tampal kandungan fail `database.rules.json` dalam projek ini, dan tekan **Publish**.
4. Pergi ke **Project settings (ikon gear) → General → Your apps → ikon Web `</>`**. Beri nama aplikasi, tekan Register. Anda akan nampak blok `firebaseConfig`.
5. Salin nilai `apiKey`, `authDomain`, `databaseURL`, `projectId` dan `appId` ke dalam `assets/js/firebase-config-update-3.js`.
   - `databaseURL` ada di tab Realtime Database (contoh: `https://pyquest-default-rtdb.asia-southeast1.firebasedatabase.app`). Jika tidak muncul dalam blok config, salin dari situ.
6. Muat naik fail itu ke GitHub, tunggu deploy, kemudian log masuk Admin → tab **Statistik langsung**.

## Apa yang direkodkan
- Berapa pelawat sedang aktif (dan di halaman mana): Home, Puzzle, Quiz, Info.
- Lawatan dan pelawat hari ini, jumlah keseluruhan, graf 7 hari.
- Halaman paling banyak dibuka, bahasa digunakan, bilangan pusingan Kuiz dan set Puzzle yang selesai.
- **Tidak** direkodkan: nama, markah, atau sebarang data peribadi. ID pelawat ialah nombor rawak dalam pelayar.

## Perkara yang perlu anda tahu
- "Sedang aktif" bermaksud tab terbuka dan kelihatan dalam 90 saat lepas. Tab yang disembunyikan akan hilang selepas itu.
- Seorang "pelawat" ialah satu pelayar. Orang yang menggunakan dua peranti dikira dua.
- Peraturan dalam `database.rules.json` hanya membenarkan angka bertambah 1 pada satu masa, supaya orang tidak boleh menulis nombor sesuka hati. Orang yang tahu URL pangkalan data masih boleh **membaca** kiraan ini (ia tidak sensitif), dan secara teori boleh menambah kiraan dengan skrip. Untuk laman kelas, ini memadai.
- Jika mahu berhenti, kosongkan semula nilai dalam `firebase-config-update-3.js`.
