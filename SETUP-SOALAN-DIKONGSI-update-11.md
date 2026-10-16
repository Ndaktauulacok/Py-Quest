# Soalan dikongsi untuk semua akaun — Update 11

Mulai Update 11, bila admin **tambah, edit, padam** atau **pulihkan** soalan Kuiz / Puzzle, perubahan itu
disimpan dalam Firebase dan **terus dilihat oleh semua pemain** (tak perlu muat naik fail ke GitHub lagi).

Supaya hanya admin sebenar boleh mengubah soalan, Firebase perlu tahu akaun mana ialah admin.

## Langkah (sekali sahaja)
1. **Terbitkan peraturan baharu:** Firebase → Realtime Database → **Rules** → padam semua → tampal seluruh isi
   `database.rules.json` (versi Update 11) → **Publish**.
2. **Log masuk di PyQuest dengan akaun anda** (contoh: reelcoi) — bukan Tetamu.
3. Buka **Admin → Urus Kuiz**. Kotak kuning akan tunjuk **ID akaun** anda. Tekan **Salin ID**.
4. Firebase → Realtime Database → **Data**:
   - Di sebelah item paling atas (nama projek / root) tekan **+**
   - *Name*: `admins` → kemudian tekan **+** di dalam `admins`
   - *Name*: tampal ID tadi → *Value*: `true` → tekan **Add**
5. Kembali ke PyQuest → tekan **Semak semula**. Kotak bertukar hijau ✅ "Langsung untuk semua".

Untuk tambah cikgu lain sebagai admin: cikgu itu log masuk dengan akaunnya, buka Admin → Urus Kuiz,
salin ID dia, dan ulang langkah 4 (tambah satu lagi baris di bawah `admins`).

## Nota
- Soalan asal (332 kuiz, 200 puzzle) kekal dalam fail data. Firebase hanya menyimpan **perubahan**.
- **Pulihkan asal** membuang semua perubahan untuk semua orang.
- Jika pelajar sedang bermain, soalan baharu digunakan selepas pusingan itu tamat (pusingan tidak terganggu).
- Butang **Muat turun fail data** masih ada sebagai sandaran (backup).
