# Hidupkan Multiplayer (5 minit, percuma)

Multiplayer menggunakan Firebase yang **sama** dengan akaun PyQuest. Hanya **2 langkah** di Firebase Console:

## Langkah 1 — Hidupkan log masuk "Anonymous"
1. Buka https://console.firebase.google.com dan pilih projek **pyquest-38d86**.
2. Pergi ke **Build → Authentication → Sign-in method**.
3. Tekan **Add new provider → Anonymous → Enable → Save**.

> Ini membolehkan pemain Tetamu masuk bilik tanpa akaun. Akaun pengguna sedia ada tidak terjejas.

## Langkah 2 — Terbitkan peraturan pangkalan data yang baharu
1. Pergi ke **Build → Realtime Database → Rules**.
2. Padam semua teks di situ, kemudian tampal **seluruh** isi fail `database.rules.json` (dalam folder ini).
3. Tekan **Publish**.

> Peraturan baharu menambah bahagian `rooms`: hanya hos boleh mengawal bilik, dan setiap pemain hanya boleh mengubah markah sendiri.

## Cara guna
- **Cipta bilik**: Multiplayer → Cipta bilik → pilih mod, tahap, *Hos mengawal* (mod guru) atau *Ikut kadar sendiri* → Cipta.
- **Masuk bilik**: pemain buka Multiplayer → taip kod 6 aksara + nama panggilan → Masuk bilik.
- **Mod guru**: semua nampak soalan sama. Jawapan didedahkan automatik bila masa tamat atau semua sudah menjawab, kemudian guru tekan *Soalan seterusnya*. Jawapan betul yang lebih pantas dapat lebih mata.
- **Ikut kadar sendiri**: setiap pemain menjawab mengikut kelajuan sendiri. Permainan tamat automatik bila semua selesai (atau hos tekan *Tamatkan permainan*).
- Selepas tamat, XP pemain ditambah ke profil mereka. Hos boleh tekan *Main lagi* (soalan baharu) atau *Tutup bilik*.

## Jika ada mesej ralat
- "Multiplayer belum dihidupkan…" → ulang Langkah 1.
- "Kebenaran ditolak…" → ulang Langkah 2 (pastikan tekan Publish).
