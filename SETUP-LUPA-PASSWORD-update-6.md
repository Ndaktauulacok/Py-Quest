# Lupa kata laluan (pautan emel) — PyQuest Update 6

Percuma, kekal pelan Spark. Pengguna boleh letak **emel pemulihan** (pilihan) semasa Sign Up. Bila lupa kata laluan, mereka tekan "Lupa kata laluan?", Firebase hantar **pautan** ke emel itu, dan pautan membuka halaman `reset.html` untuk tetapkan kata laluan baharu (minimum 6 aksara).
Ini pautan, bukan kod 6 digit, dan tiada pilihan nombor telefon (SMS perlukan pelan Blaze).

## Langkah (sekali sahaja)
1. **Rules**: Realtime Database → Rules → tampal `database.rules.json` yang baharu → Publish. (Tambah bahagian `usernames`.)
2. **(Pilihan) Halaman reset sendiri**: Authentication → **Templates** → **Password reset** → ikon pensil → **Customize action URL** → isi `https://pyquest.lol/reset.html` → Save.
   Tanpa langkah ini pautan guna halaman Firebase biasa, yang juga berfungsi (minimum 6 aksara). `reset.html` hanya memberi paparan BM/EN dan rupa PyQuest.
3. (Pilihan) Dalam templat yang sama, tukar nama penghantar dan mesej. Bahasa emel ikut EN/BM yang dipilih pengguna.
4. Muat naik semua fail baharu ke GitHub: `index.html`, `reset.html`, `database.rules.json`, `assets/js/app-update-6.js`, `assets/js/auth-update-6.js`, `assets/css/auth-update-6.css`.
   Boleh dipadam: `app-update-4.js`, `app-update-5.js`, `auth-update-4.js`.

## Perkara yang perlu anda tahu
- **Akaun lama (tanpa emel) tidak boleh ditetapkan semula.** Mereka perlu daftar semula, atau anda padam akaun mereka dalam Firebase → Authentication.
- Emel pemulihan jadi alamat log masuk akaun itu, jadi pengguna boleh log masuk dengan **nama pengguna atau emel**.
- Untuk benarkan log masuk guna nama pengguna, pemetaan nama → emel disimpan dalam `usernames` dan **boleh dibaca oleh sesiapa yang tahu nama pengguna itu**. Ia tidak boleh disenaraikan keseluruhannya, tetapi emel boleh dilihat jika nama pengguna diteka. Untuk laman kelas ini memadai; kalau tidak mahu, jangan letak emel.
- Jika pengguna tersilap eja emel, orang lain boleh terima pautan reset itu. Borang sudah beri peringatan "semak ejaan".
- Minimum 6 aksara ialah had Firebase sendiri, jadi dikuatkuasakan di pelayan juga.
- Admin tidak nampak emel atau kata laluan pengguna.
